/* Lógica del Agile Coach Assessment. Las preguntas, dimensiones y parámetros viven en
   data/preguntas.js (window.ASSESSMENT_DATA); los estilos, en css/styles.css. */
(function () {
  'use strict';

  const LETTERS = 'ABCDEFGH';

  /* ---------- carga y validación del banco ---------- */
  // Convierte el formato legible de data/preguntas.js al formato compacto que usa la app
  // ({ id, d, t, q, o, a, e } con índices 0-based) y descarta lo inválido con un aviso.
  function loadData(raw) {
    const errors = [];
    if (!raw || !Array.isArray(raw.dimensiones) || !Array.isArray(raw.preguntas)) {
      return { cfg: {}, dims: [], bank: [], errors: ['No se encontró window.ASSESSMENT_DATA con "dimensiones" y "preguntas". Revisa data/preguntas.js.'] };
    }
    const dims = raw.dimensiones.filter(d => d && d.id && d.nombre).map(d => ({ id: String(d.id), name: d.nombre, short: d.corto || d.nombre, kind: d.tipo || 'Requerido' }));
    const dimIds = new Set(dims.map(d => d.id));
    const seen = new Set();
    const bank = [];
    raw.preguntas.forEach((p, i) => {
      const where = 'Pregunta ' + (p && p.id ? p.id : '#' + (i + 1));
      const fail = msg => errors.push(where + ': ' + msg);
      if (!p || !p.id) return fail('falta "id".');
      if (seen.has(p.id)) return fail('"id" repetido.');
      if (!dimIds.has(p.dimension)) return fail('dimensión "' + p.dimension + '" inexistente.');
      if (p.tipo !== 'unica' && p.tipo !== 'multiple') return fail('"tipo" debe ser "unica" o "multiple".');
      if (!p.pregunta) return fail('falta el texto de "pregunta".');
      if (!Array.isArray(p.opciones) || p.opciones.length < 2 || p.opciones.length > LETTERS.length) return fail('"opciones" debe tener entre 2 y ' + LETTERS.length + ' textos.');
      if (!Array.isArray(p.correctas) || !p.correctas.length) return fail('falta "correctas".');
      const a = p.correctas.map(l => LETTERS.indexOf(String(l).trim().toUpperCase()));
      if (a.some(x => x < 0 || x >= p.opciones.length)) return fail('"correctas" tiene letras fuera de las opciones.');
      if (new Set(a).size !== a.length) return fail('"correctas" tiene letras repetidas.');
      if (p.tipo === 'unica' && a.length !== 1) return fail('una pregunta "unica" debe tener exactamente 1 correcta.');
      if (p.tipo === 'multiple' && a.length < 2) return fail('una pregunta "multiple" debe tener al menos 2 correctas.');
      seen.add(p.id);
      bank.push({ id: p.id, d: p.dimension, t: p.tipo === 'multiple' ? 'm' : 's', q: p.pregunta, o: p.opciones, a, e: p.explicacion || '' });
    });
    return { cfg: raw.config || {}, dims, bank, errors };
  }

  const DATA = loadData(window.ASSESSMENT_DATA);
  const DIMS = DATA.dims;
  const BANK = DATA.bank;
  if (DATA.errors.length) console.warn('Banco de preguntas con errores:\n' + DATA.errors.join('\n'));
  const num = (v, d) => (Number.isFinite(+v) && +v > 0 ? +v : d);

  const SEC_PER_Q = num(DATA.cfg.segundosPorPregunta, 120);
  const PASS = num(DATA.cfg.aprobacion, 70);
  const MIN_Q = num(DATA.cfg.minPreguntas, 10);
  const MAX_Q = Math.max(MIN_Q, num(DATA.cfg.maxPreguntas, 60));
  const K = { hist: 'acx.v1.history', cur: 'acx.v1.current', theme: 'acx.v1.theme', last: 'acx.v1.lastCoach' };

  const BYID = Object.create(null);
  BANK.forEach(q => { BYID[q.id] = q; });
  const DIM = Object.create(null);
  DIMS.forEach(d => { DIM[d.id] = d; });

  // localStorage puede no estar disponible (modo privado, file:// restringido); todo va envuelto.
  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } },
    del(k) { try { localStorage.removeItem(k); } catch (e) {} }
  };

  const app = document.getElementById('app');
  const topbar = document.getElementById('topbar');
  let timerId = null;
  let exam = null;          // examen en curso
  let reviewFilter = { kind: 'all', dim: 'all' };

  /* ---------- utilidades ---------- */
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const coachKey = n => n.trim().replace(/\s+/g, ' ').toLocaleLowerCase('es');
  const cleanName = n => n.trim().replace(/\s+/g, ' ');
  const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
  const fmtClock = ms => { const s = Math.max(0, Math.ceil(ms / 1000)); const h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), ss = s % 60; return (h ? h + ':' + String(m).padStart(2, '0') : String(m).padStart(2, '0')) + ':' + String(ss).padStart(2, '0'); };
  const fmtDur = ms => { const m = Math.floor(ms / 60000), s = Math.round(ms % 60000 / 1000); return m + ' min ' + String(s).padStart(2, '0') + ' s'; };
  const fmtDate = ts => new Date(ts).toLocaleString('es', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  const level =p => p == null ? { t: 'Sin datos', c: 'var(--dim)' } : p >= 85 ? { t: 'Experto', c: 'var(--ok)' } : p >= 70 ? { t: 'Competente', c: 'color-mix(in oklab, var(--ok) 70%, var(--warn))' } : p >= 50 ? { t: 'En desarrollo', c: 'var(--warn)' } : { t: 'Inicial', c: 'var(--bad)' };
  const sameSet = (a, b) => a.length === b.length && a.slice().sort().join() === b.slice().sort().join();

  function history() { return store.get(K.hist, []); }
  function saveHistory(h) { return store.set(K.hist, h); }
  function coaches() {
    const map = new Map();
    history().forEach(a => {
      const k = coachKey(a.coach);
      if (!map.has(k)) map.set(k, { key: k, name: a.coach, attempts: [] });
      map.get(k).attempts.push(a);
    });
    map.forEach(c => { c.attempts.sort((x, y) => x.date - y.date); c.name = c.attempts[c.attempts.length - 1].coach; });
    return [...map.values()].sort((a, b) => b.attempts[b.attempts.length - 1].date - a.attempts[a.attempts.length - 1].date);
  }

  function modal(html, buttons) {
    return new Promise(res => {
      const bg = document.createElement('div');
      bg.className = 'modal-bg';
      bg.innerHTML = '<div class="modal" role="dialog" aria-modal="true">' + html + '<div class="row">' +
        buttons.map((b, i) => '<button class="btn ' + (b.cls || '') + '" data-i="' + i + '">' + esc(b.label) + '</button>').join('') + '</div></div>';
      document.body.appendChild(bg);
      const done = v => { bg.remove(); document.removeEventListener('keydown', onKey); res(v); };
      const onKey = e => { if (e.key === 'Escape') done(null); };
      document.addEventListener('keydown', onKey);
      bg.addEventListener('click', e => { if (e.target === bg) done(null); const i = e.target.dataset && e.target.dataset.i; if (i != null) done(buttons[+i].value); });
      const prim = bg.querySelector('.btn.primary'); if (prim) prim.focus();
    });
  }

  function setTop(html) { topbar.innerHTML = html || ''; }
  function stopTimer() { if (timerId) { clearInterval(timerId); timerId = null; } }

  /* ---------- selección de preguntas ---------- */
  // Reparte n parejo entre dimensiones (el resto va a dimensiones al azar) y, dentro de cada
  // dimensión, prefiere las preguntas que este coach vio menos veces.
  function buildExam(name, n) {
    const seen = Object.create(null);
    const ck = coachKey(name);
    history().filter(a => coachKey(a.coach) === ck).forEach(a => a.items.forEach(it => { seen[it.qid] = (seen[it.qid] || 0) + 1; }));

    const pools = {};
    DIMS.forEach(d => {
      pools[d.id] = shuffle(BANK.filter(q => q.d === d.id)).sort((a, b) => (seen[a.id] || 0) - (seen[b.id] || 0));
    });
    const quota = {}; DIMS.forEach(d => { quota[d.id] = 0; });
    let left = n;
    // Ronda por ronda, en orden aleatorio, una pregunta por dimensión mientras haya en el pool.
    while (left > 0) {
      let progressed = false;
      for (const d of shuffle(DIMS)) {
        if (left === 0) break;
        if (quota[d.id] < pools[d.id].length) { quota[d.id]++; left--; progressed = true; }
      }
      if (!progressed) break;
    }
    const picked = [];
    DIMS.forEach(d => picked.push(...pools[d.id].slice(0, quota[d.id])));
    const questions = shuffle(picked).map(q => ({ qid: q.id, order: shuffle(q.o.map((_, i) => i)) }));
    const now = Date.now();
    const durationMs = questions.length * SEC_PER_Q * 1000;
    return { id: uid(), coach: cleanName(name), startedAt: now, deadline: now + durationMs, durationMs, questions, answers: {}, flags: {}, pos: 0 };
  }

  /* ---------- HOME ---------- */
  function renderHome() {
    stopTimer();
    exam = null;
    setTop('<button class="btn ghost sm" id="goHist">Historial</button>');
    document.getElementById('goHist').onclick = () => renderHistory();

    const cur = store.get(K.cur, null);
    const list = coaches();
    const last = store.get(K.last, { name: '', n: 20 });
    const counts = {}; BANK.forEach(q => { counts[q.d] = (counts[q.d] || 0) + 1; });

    app.innerHTML = `
      ${DATA.errors.length ? `<div class="banner" style="border-color:var(--bad);background:var(--bad-wash)">
        <div><b>El banco de preguntas tiene ${DATA.errors.length} error${DATA.errors.length > 1 ? 'es' : ''}</b>; esas preguntas no se usarán. Revisa data/preguntas.js:
        <ul class="small" style="margin:6px 0 0;padding-left:18px">${DATA.errors.slice(0, 8).map(m => `<li>${esc(m)}</li>`).join('')}${DATA.errors.length > 8 ? `<li>… y ${DATA.errors.length - 8} más (ver la consola del navegador)</li>` : ''}</ul></div>
      </div>` : ''}
      ${cur ? `<div class="banner">
        <div><b>Examen en curso</b> de ${esc(cur.coach)} · ${cur.questions.length} preguntas ·
        ${cur.deadline > Date.now() ? 'quedan ' + fmtClock(cur.deadline - Date.now()) : '<span style="color:var(--bad)">tiempo agotado</span>'}</div>
        <div class="spacer"></div>
        <button class="btn primary sm" id="resume">${cur.deadline > Date.now() ? 'Continuar' : 'Ver resultado'}</button>
        <button class="btn sm danger" id="discard">Descartar</button>
      </div>` : ''}
      <div class="eyebrow">Evaluación de competencias</div>
      <h1>Agile Coach Assessment</h1>
      <p class="lead">Examen de opción múltiple sobre las competencias del perfil de Agile Coach, alineado al Agile Playbook del Plan Horizonte (modelo de tribus, squads, chapters y CoEs) y a la teoría oficial donde el playbook no profundiza. Las preguntas se eligen al azar de un banco de ${BANK.length}, repartidas parejo entre las ${DIMS.length} dimensiones. No hay corrección durante el examen: el resultado, por dimensión y con explicaciones, se muestra al finalizar.</p>
      <div class="grid2" style="margin-top:24px">
        <div class="card">
          <h2>Nuevo examen</h2>
          <label class="field"><span>Nombre del coach evaluado</span>
            <input type="text" id="name" list="coachList" autocomplete="off" maxlength="80" placeholder="Nombre y apellido" value="${esc(last.name || '')}">
            <datalist id="coachList">${list.map(c => `<option value="${esc(c.name)}">`).join('')}</datalist>
          </label>
          <label class="field"><span>Cantidad de preguntas</span>
            <div class="range-row"><span class="big mono" id="nOut">${last.n || 20}</span><span class="muted small" id="tOut"></span></div>
            <input type="range" id="n" min="${MIN_Q}" max="${MAX_Q}" step="1" value="${last.n || 20}">
            <div class="range-row small muted"><span>${MIN_Q}</span><span>${MAX_Q}</span></div>
          </label>
          <div class="small muted" style="margin-bottom:18px">2 minutos por pregunta, sobre el total del examen: el tiempo se administra libremente entre preguntas. Al agotarse, el examen se entrega automáticamente.</div>
          <button class="btn primary" id="start" style="width:100%">Comenzar examen</button>
          <div class="hint" id="startHint"></div>
        </div>
        <div class="card">
          <h2>Dimensiones evaluadas</h2>
          <ul class="dimlist">
            ${DIMS.map(d => `<li><span>${esc(d.name)}${d.kind === 'Recomendable' ? ' <span class="chip">recomendable</span>' : ''}</span><span class="mono muted small">${counts[d.id] || 0} preg.</span></li>`).join('')}
          </ul>
          <div class="small muted" style="margin-top:12px">Preguntas de respuesta única y múltiple. En las múltiples se indica cuántas opciones elegir y se puntúan completas: correcta sólo si se marcan exactamente las opciones correctas. Aprobación: ${PASS}%.</div>
        </div>
      </div>
      ${list.length ? `<div class="card" style="margin-top:16px"><div class="row"><h2 style="margin:0">Últimos coaches evaluados</h2><div class="spacer"></div><button class="btn sm ghost" id="allHist">Ver historial completo</button></div>
        <div class="coachgrid" style="margin-top:14px">${list.slice(0, 6).map(c => { const l = c.attempts[c.attempts.length - 1]; return `<button class="coachcard" data-k="${esc(c.key)}"><b>${esc(c.name)}</b><span class="small muted">${c.attempts.length} intento${c.attempts.length > 1 ? 's' : ''} · último ${l.pct}%</span></button>`; }).join('')}</div></div>` : ''}
    `;

    const nEl = document.getElementById('n'), nOut = document.getElementById('nOut'), tOut = document.getElementById('tOut');
    const upd = () => { nOut.textContent = nEl.value; tOut.textContent = 'Tiempo total: ' + (nEl.value * SEC_PER_Q / 60) + ' minutos'; };
    nEl.oninput = upd; upd();
    const nameEl = document.getElementById('name');
    if (!cur) nameEl.focus();
    nameEl.onkeydown = e => { if (e.key === 'Enter') document.getElementById('start').click(); };

    document.getElementById('start').onclick = async () => {
      const name = cleanName(nameEl.value);
      if (name.length < 2) { document.getElementById('startHint').textContent = 'Ingresa el nombre del coach para comenzar.'; nameEl.focus(); return; }
      if (cur) {
        const ok = await modal('<h2>Hay un examen en curso</h2><p class="muted">Si comienzas uno nuevo, el examen en curso de <b>' + esc(cur.coach) + '</b> se descartará sin guardarse.</p>',
          [{ label: 'Cancelar', value: false, cls: 'ghost' }, { label: 'Descartar y comenzar', value: true, cls: 'primary' }]);
        if (!ok) return;
      }
      const n = Math.min(MAX_Q, Math.max(MIN_Q, +nEl.value));
      store.set(K.last, { name, n });
      exam = buildExam(name, n);
      store.set(K.cur, exam);
      renderExam();
    };
    if (cur) {
      document.getElementById('resume').onclick = () => { exam = cur; if (exam.deadline <= Date.now()) finish(true); else renderExam(); };
      document.getElementById('discard').onclick = async () => {
        const ok = await modal('<h2>Descartar examen</h2><p class="muted">El examen en curso de <b>' + esc(cur.coach) + '</b> se eliminará y no quedará en el historial.</p>',
          [{ label: 'Cancelar', value: false, cls: 'ghost' }, { label: 'Descartar', value: true, cls: 'primary' }]);
        if (ok) { store.del(K.cur); renderHome(); }
      };
    }
    app.querySelectorAll('.coachcard').forEach(b => { b.onclick = () => renderHistory(b.dataset.k); });
    const ah = document.getElementById('allHist'); if (ah) ah.onclick = () => renderHistory();
  }

  /* ---------- EXAMEN ---------- */
  function persist() { if (exam) store.set(K.cur, exam); }

  function renderExam() {
    stopTimer();
    window.scrollTo(0, 0);
    setTop(`<span class="small muted coachname">${esc(exam.coach)}</span><span class="timer" id="timer">--:--</span><button class="btn sm primary" id="finishBtn">Finalizar</button>`);
    document.getElementById('finishBtn').onclick = confirmFinish;
    drawQuestion();
    tick();
    timerId = setInterval(tick, 1000);
  }

  function tick() {
    const el = document.getElementById('timer');
    if (!exam) return stopTimer();
    const left = exam.deadline - Date.now();
    if (el) {
      el.textContent = fmtClock(left);
      el.className = 'timer' + (left <= 60000 ? ' crit' : left <= 5 * 60000 ? ' warn' : '');
    }
    if (left <= 0) { stopTimer(); finish(true); }
  }

  function drawQuestion() {
    const i = exam.pos, item = exam.questions[i], q = BYID[item.qid];
    const total = exam.questions.length;
    const sel = exam.answers[i] || [];
    const multi = q.t === 'm', need = q.a.length;
    const answered = Object.keys(exam.answers).filter(k => (exam.answers[k] || []).length).length;

    app.innerHTML = `
      <div class="progress" style="margin-bottom:22px"><i style="width:${(answered / total * 100).toFixed(1)}%"></i></div>
      <div class="grid2" style="grid-template-columns: 1fr 260px; align-items:start" id="examGrid">
        <div class="card">
          <div class="qhead">
            <span class="eyebrow">Pregunta ${i + 1} de ${total}</span>
            <span class="spacer"></span>
            <span class="chip">${esc(DIM[q.d].short)}</span>
            <span class="chip acc">${multi ? 'Selecciona ' + need : 'Respuesta única'}</span>
          </div>
          <p class="qtext">${esc(q.q)}</p>
          <div class="opts" role="${multi ? 'group' : 'radiogroup'}">
            ${item.order.map((oi, k) => `<button class="opt ${multi ? 'multi' : 'single'} ${sel.includes(oi) ? 'sel' : ''}" data-oi="${oi}" role="${multi ? 'checkbox' : 'radio'}" aria-checked="${sel.includes(oi)}"><span class="key">${LETTERS[k]}</span><span>${esc(q.o[oi])}</span></button>`).join('')}
          </div>
          <div class="hint" id="hint">${multi ? `<span class="muted">${sel.length} de ${need} seleccionadas</span>` : ''}</div>
          <div class="navrow">
            <button class="btn" id="prev" ${i === 0 ? 'disabled' : ''}>← Anterior</button>
            <button class="btn ${exam.flags[i] ? 'on' : ''}" id="flag">${exam.flags[i] ? '★ Marcada' : '☆ Marcar para revisar'}</button>
            <span class="spacer"></span>
            ${i < total - 1 ? '<button class="btn primary" id="next">Siguiente →</button>' : '<button class="btn primary" id="end">Finalizar examen</button>'}
          </div>
        </div>
        <div class="card">
          <h3>Navegación</h3>
          <div class="small muted" style="margin-bottom:10px">${answered} de ${total} respondidas</div>
          <div class="qmap">${exam.questions.map((_, k) => `<button data-k="${k}" class="${(exam.answers[k] || []).length ? 'ans' : ''} ${k === i ? 'cur' : ''} ${exam.flags[k] ? 'flag' : ''}">${k + 1}</button>`).join('')}</div>
          <div class="legend"><span><i style="background:var(--panel2);border-color:var(--muted)"></i>Respondida</span><span><i style="background:var(--warn);border-color:var(--warn)"></i>Marcada</span></div>
          <div class="small muted" style="margin-top:14px">Atajos: A–${LETTERS[item.order.length - 1]} o 1–${item.order.length} para elegir, ← → para navegar.</div>
        </div>
      </div>`;
    if (window.matchMedia('(max-width: 760px)').matches) document.getElementById('examGrid').style.gridTemplateColumns = '1fr';

    app.querySelectorAll('.opt').forEach(b => { b.onclick = () => choose(+b.dataset.oi); });
    app.querySelectorAll('.qmap button').forEach(b => { b.onclick = () => go(+b.dataset.k); });
    document.getElementById('prev').onclick = () => go(i - 1);
    const nx = document.getElementById('next'); if (nx) nx.onclick = () => go(i + 1);
    const en = document.getElementById('end'); if (en) en.onclick = confirmFinish;
    document.getElementById('flag').onclick = () => { exam.flags[i] = !exam.flags[i]; if (!exam.flags[i]) delete exam.flags[i]; persist(); drawQuestion(); };
  }

  function choose(oi) {
    const i = exam.pos, q = BYID[exam.questions[i].qid];
    let sel = (exam.answers[i] || []).slice();
    if (q.t === 's') sel = [oi];
    else if (sel.includes(oi)) sel = sel.filter(x => x !== oi);
    else {
      if (sel.length >= q.a.length) {
        document.getElementById('hint').textContent = 'Ya seleccionaste ' + q.a.length + '. Quita una opción para elegir otra.';
        return;
      }
      sel.push(oi);
    }
    if (sel.length) exam.answers[i] = sel; else delete exam.answers[i];
    persist();
    drawQuestion();
  }

  function go(k) {
    if (k < 0 || k >= exam.questions.length) return;
    exam.pos = k; persist(); drawQuestion(); window.scrollTo(0, 0);
  }

  async function confirmFinish() {
    const total = exam.questions.length;
    const unanswered = exam.questions.filter((_, k) => !(exam.answers[k] || []).length).length;
    const partial = exam.questions.filter((it, k) => { const q = BYID[it.qid]; const s = exam.answers[k] || []; return q.t === 'm' && s.length && s.length < q.a.length; }).length;
    const flagged = Object.keys(exam.flags).length;
    const msgs = [];
    if (unanswered) msgs.push(`<b>${unanswered}</b> pregunta${unanswered > 1 ? 's' : ''} sin responder`);
    if (partial) msgs.push(`<b>${partial}</b> de selección múltiple incompleta${partial > 1 ? 's' : ''}`);
    if (flagged) msgs.push(`<b>${flagged}</b> marcada${flagged > 1 ? 's' : ''} para revisar`);
    const ok = await modal(`<h2>¿Finalizar el examen?</h2><p class="muted">${msgs.length ? 'Tienes ' + msgs.join(', ') + '. ' : 'Respondiste las ' + total + ' preguntas. '}Una vez entregado no podrás modificar las respuestas.</p>`,
      [{ label: 'Seguir respondiendo', value: false, cls: 'ghost' }, { label: 'Entregar', value: true, cls: 'primary' }]);
    if (ok) finish(false);
  }

  function finish(timedOut) {
    stopTimer();
    if (!exam) return;
    const byDim = {};
    DIMS.forEach(d => { byDim[d.id] = { c: 0, t: 0 }; });
    let correct = 0;
    const items = exam.questions.filter(it => BYID[it.qid]).map((it, k) => {
      const q = BYID[it.qid];
      const sel = exam.answers[exam.questions.indexOf(it)] || [];
      const ok = sameSet(sel, q.a);
      byDim[q.d].t++; if (ok) { byDim[q.d].c++; correct++; }
      return { qid: it.qid, order: it.order, sel, ok };
    });
    const now = Math.min(Date.now(), exam.deadline);
    const attempt = {
      id: exam.id, coach: exam.coach, date: Date.now(), startedAt: exam.startedAt,
      durationMs: exam.durationMs, usedMs: Math.max(0, now - exam.startedAt),
      total: items.length, correct, pct: items.length ? Math.round(correct / items.length * 100) : 0,
      byDim, items, timedOut: !!timedOut
    };
    const h = history();
    if (!h.some(a => a.id === attempt.id)) h.push(attempt);
    const saved = saveHistory(h);
    store.del(K.cur);
    exam = null;
    reviewFilter = { kind: 'all', dim: 'all' };
    renderResults(attempt, { fresh: true, saved });
  }

  /* ---------- GRÁFICOS ---------- */
  function radarSVG(byDim) {
    const dims = DIMS.filter(d => byDim[d.id] && byDim[d.id].t > 0);
    if (dims.length < 3) return '';
    const W = 540, H = 380, cx = W / 2, cy = H / 2 + 4, R = 128, n = dims.length;
    const ang = k => -Math.PI / 2 + k * 2 * Math.PI / n;
    const P = (k, r) => [cx + Math.cos(ang(k)) * r, cy + Math.sin(ang(k)) * r];
    let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Gráfico radar de resultados por dimensión">`;
    [25, 50, 75, 100].forEach(p => {
      s += `<polygon class="grid" points="${dims.map((_, k) => P(k, R * p / 100).join(',')).join(' ')}" ${p === 100 ? '' : 'stroke-dasharray="2 3"'}/>`;
    });
    // Línea de aprobación
    s += `<polygon points="${dims.map((_, k) => P(k, R * PASS / 100).join(',')).join(' ')}" fill="none" stroke="var(--muted)" stroke-width="1" stroke-dasharray="5 4" opacity=".8"/>`;
    dims.forEach((_, k) => { const [x, y] = P(k, R); s += `<line class="grid" x1="${cx}" y1="${cy}" x2="${x}" y2="${y}"/>`; });
    const pts = dims.map((d, k) => P(k, R * byDim[d.id].c / byDim[d.id].t));
    s += `<polygon class="area" points="${pts.map(p => p.join(',')).join(' ')}"/>`;
    pts.forEach(p => { s += `<circle class="pt" cx="${p[0]}" cy="${p[1]}" r="3.5"/>`; });
    dims.forEach((d, k) => {
      const [x, y] = P(k, R + 22);
      const c = Math.cos(ang(k));
      const anchor = Math.abs(c) < 0.2 ? 'middle' : c > 0 ? 'start' : 'end';
      const pct = Math.round(byDim[d.id].c / byDim[d.id].t * 100);
      s += `<text x="${x}" y="${y}" text-anchor="${anchor}" dominant-baseline="middle" style="font-size:11px;fill:var(--fg)">${esc(d.short)}</text>`;
      s += `<text x="${x}" y="${y + 13}" text-anchor="${anchor}" dominant-baseline="middle">${pct}%</text>`;
    });
    s += `<text x="${cx + 4}" y="${cy - R * PASS / 100 - 4}" style="font-size:9px">${PASS}%</text>`;
    return s + '</svg>';
  }

  function barsHTML(byDim) {
    return '<div class="bars">' + DIMS.map(d => {
      const v = byDim[d.id] || { c: 0, t: 0 };
      const pct = v.t ? Math.round(v.c / v.t * 100) : null;
      const lv = level(pct);
      return `<div class="bar"><div class="lbl"><span>${esc(d.name)}</span><span class="mono small"><span style="color:${lv.c}">${lv.t}</span> · ${v.t ? v.c + '/' + v.t + ' · ' + pct + '%' : '—'}</span></div>
        <div class="track"><i style="width:${pct || 0}%;background:${lv.c}"></i></div></div>`;
    }).join('') + `<div class="small muted">La línea vertical marca el ${PASS}% de aprobación. Niveles: Inicial &lt;50% · En desarrollo 50–69% · Competente 70–84% · Experto ≥85%.</div></div>`;
  }

  function lineSVG(attempts) {
    const W = 640, H = 220, L = 36, Rm = 16, T = 14, B = 30;
    const n = attempts.length;
    const x = k => n === 1 ? (L + (W - L - Rm) / 2) : L + k * (W - L - Rm) / (n - 1);
    const y = p => T + (100 - p) * (H - T - B) / 100;
    let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Evolución del puntaje">`;
    [0, 25, 50, 75, 100].forEach(p => { s += `<line class="grid" x1="${L}" x2="${W - Rm}" y1="${y(p)}" y2="${y(p)}" ${p ? 'stroke-dasharray="2 3"' : ''}/><text x="${L - 6}" y="${y(p)}" text-anchor="end" dominant-baseline="middle">${p}</text>`; });
    s += `<line x1="${L}" x2="${W - Rm}" y1="${y(PASS)}" y2="${y(PASS)}" stroke="var(--muted)" stroke-dasharray="5 4"/><text x="${W - Rm}" y="${y(PASS) - 5}" text-anchor="end" style="font-size:9px">aprobación ${PASS}%</text>`;
    if (n > 1) s += `<polyline fill="none" stroke="var(--accent)" stroke-width="2" points="${attempts.map((a, k) => x(k) + ',' + y(a.pct)).join(' ')}"/>`;
    attempts.forEach((a, k) => {
      s += `<circle cx="${x(k)}" cy="${y(a.pct)}" r="4" fill="${a.pct >= PASS ? 'var(--ok)' : 'var(--bad)'}"><title>${esc(fmtDate(a.date))}: ${a.pct}%</title></circle>`;
      if (n <= 12 || k % Math.ceil(n / 12) === 0) s += `<text x="${x(k)}" y="${H - 10}" text-anchor="middle">#${k + 1}</text>`;
    });
    return s + '</svg>';
  }

  /* ---------- RESULTADOS ---------- */
  function renderResults(a, opts) {
    opts = opts || {};
    stopTimer();
    window.scrollTo(0, 0);
    setTop(`<button class="btn ghost sm" id="tHome">Inicio</button><button class="btn ghost sm" id="tHist">Historial</button><button class="btn ghost sm" id="tPrint">Imprimir</button>`);
    document.getElementById('tHome').onclick = renderHome;
    document.getElementById('tHist').onclick = () => renderHistory(coachKey(a.coach));
    document.getElementById('tPrint').onclick = () => window.print();

    const pass = a.pct >= PASS;
    const dimsSorted = DIMS.filter(d => a.byDim[d.id] && a.byDim[d.id].t).map(d => ({ d, p: a.byDim[d.id].c / a.byDim[d.id].t })).sort((x, y) => y.p - x.p);
    const strong = dimsSorted.filter(x => x.p * 100 >= PASS).slice(0, 3);
    const weak = dimsSorted.filter(x => x.p * 100 < PASS).reverse().slice(0, 3);
    const radar = radarSVG(a.byDim);

    app.innerHTML = `
      ${opts.fresh && a.timedOut ? '<div class="banner"><b>Tiempo agotado.</b>&nbsp;El examen se entregó automáticamente con las respuestas registradas.</div>' : ''}
      ${opts.fresh && opts.saved === false ? '<div class="banner"><b>Atención:</b>&nbsp;no se pudo guardar en el almacenamiento local del navegador. Imprime o anota el resultado.</div>' : ''}
      <div class="eyebrow">Resultado · ${esc(fmtDate(a.date))}</div>
      <h1>${esc(a.coach)}</h1>
      <div class="card">
        <div class="score">
          <div><div class="pct mono">${a.pct}%</div></div>
          <div style="padding-bottom:8px"><span class="verdict ${pass ? 'pass' : 'fail'}">${pass ? 'Aprobado' : 'No aprobado'}</span>
          <div class="small muted" style="margin-top:8px">Nivel general: <b style="color:${level(a.pct).c}">${level(a.pct).t}</b></div></div>
        </div>
        <div class="kv">
          <div><span class="small muted">Correctas</span><b>${a.correct} / ${a.total}</b></div>
          <div><span class="small muted">Incorrectas</span><b>${a.total - a.correct}</b></div>
          <div><span class="small muted">Sin responder</span><b>${a.items.filter(i => !i.sel.length).length}</b></div>
          <div><span class="small muted">Tiempo usado</span><b>${fmtDur(a.usedMs)}</b></div>
          <div><span class="small muted">Tiempo disponible</span><b>${Math.round(a.durationMs / 60000)} min</b></div>
        </div>
        ${strong.length || weak.length ? `<div class="grid2" style="margin-top:18px;grid-template-columns:1fr 1fr">
          <div><div class="eyebrow" style="margin-bottom:6px">Fortalezas</div>${strong.length ? strong.map(x => `<div class="small">${esc(x.d.name)} · <span class="mono">${Math.round(x.p * 100)}%</span></div>`).join('') : '<div class="small muted">Ninguna dimensión alcanzó el ' + PASS + '%.</div>'}</div>
          <div><div class="eyebrow" style="margin-bottom:6px">A desarrollar</div>${weak.length ? weak.map(x => `<div class="small">${esc(x.d.name)} · <span class="mono">${Math.round(x.p * 100)}%</span></div>`).join('') : '<div class="small muted">Todas las dimensiones superan el ' + PASS + '%.</div>'}</div>
        </div>` : ''}
      </div>
      <div class="grid2" style="margin-top:16px">
        <div class="card"><h2>Resultado por dimensión</h2>${barsHTML(a.byDim)}</div>
        <div class="card"><h2>Perfil de competencias</h2>${radar ? `<div class="chart-wrap">${radar}</div>` : '<div class="empty">Se necesitan al menos 3 dimensiones evaluadas para el radar.</div>'}</div>
      </div>
      <div class="card" style="margin-top:16px">
        <h2>Revisión de respuestas</h2>
        <div class="filters" id="filters"></div>
        <div id="revList"></div>
      </div>
      <div class="row noprint" style="margin-top:20px"><button class="btn" id="bHome">Volver al inicio</button><button class="btn" id="bHist">Ver historial del coach</button></div>`;

    document.getElementById('bHome').onclick = renderHome;
    document.getElementById('bHist').onclick = () => renderHistory(coachKey(a.coach));
    drawReview(a);
  }

  function drawReview(a) {
    const f = reviewFilter;
    const nOk = a.items.filter(i => i.ok).length;
    const fEl = document.getElementById('filters');
    fEl.innerHTML = `
      <button class="btn sm ${f.kind === 'all' ? 'act' : ''}" data-kind="all">Todas (${a.items.length})</button>
      <button class="btn sm ${f.kind === 'bad' ? 'act' : ''}" data-kind="bad">Incorrectas (${a.items.length - nOk})</button>
      <button class="btn sm ${f.kind === 'ok' ? 'act' : ''}" data-kind="ok">Correctas (${nOk})</button>
      <span class="spacer"></span>
      <select id="dimSel" aria-label="Filtrar por dimensión"><option value="all">Todas las dimensiones</option>${DIMS.filter(d => a.byDim[d.id] && a.byDim[d.id].t).map(d => `<option value="${d.id}" ${f.dim === d.id ? 'selected' : ''}>${esc(d.name)}</option>`).join('')}</select>`;
    fEl.querySelectorAll('[data-kind]').forEach(b => { b.onclick = () => { reviewFilter.kind = b.dataset.kind; drawReview(a); }; });
    document.getElementById('dimSel').onchange = e => { reviewFilter.dim = e.target.value; drawReview(a); };

    const list = a.items.map((it, n) => ({ it, n, q: BYID[it.qid] }))
      .filter(x => x.q)
      .filter(x => f.kind === 'all' || (f.kind === 'ok') === x.it.ok)
      .filter(x => f.dim === 'all' || x.q.d === f.dim);

    document.getElementById('revList').innerHTML = list.length ? list.map(({ it, n, q }) => {
      const multi = q.t === 'm';
      const opts = it.order.map((oi, k) => {
        const isC = q.a.includes(oi), isS = it.sel.includes(oi);
        const cls = isC ? 'correct' : isS ? 'wrong' : '';
        const mark = isC ? '✓' : isS ? '✗' : '';
        const tag = isS && isC ? 'tu respuesta · correcta' : isS ? 'tu respuesta' : isC ? 'correcta' : '';
        return `<li class="${cls}"><span class="m">${mark}</span><span><b class="mono">${LETTERS[k]}.</b> ${esc(q.o[oi])}</span>${tag ? `<span class="tag">${tag}</span>` : ''}</li>`;
      }).join('');
      return `<div class="rev ${it.ok ? 'ok' : 'bad'}">
        <div class="row"><span class="mono small muted">#${n + 1}</span><span class="chip ${it.ok ? 'ok' : 'bad'}">${it.ok ? 'Correcta' : it.sel.length ? 'Incorrecta' : 'Sin responder'}</span><span class="chip">${esc(DIM[q.d].short)}</span>${multi ? `<span class="chip">Múltiple · ${q.a.length}</span>` : ''}</div>
        <div class="q">${esc(q.q)}</div>
        <ul>${opts}</ul>
        <div class="expl"><b>Explicación.</b> ${esc(q.e)}</div>
      </div>`;
    }).join('') : '<div class="empty">No hay preguntas con este filtro.</div>';
  }

  /* ---------- HISTORIAL ---------- */
  function renderHistory(selKey) {
    stopTimer();
    window.scrollTo(0, 0);
    setTop('<button class="btn ghost sm" id="tHome">Inicio</button>');
    document.getElementById('tHome').onclick = renderHome;
    const list = coaches();
    if (!selKey && list.length) selKey = list[0].key;
    const sel = list.find(c => c.key === selKey);

    let detail = '';
    if (sel) {
      const at = sel.attempts;
      const agg = {}; DIMS.forEach(d => { agg[d.id] = { c: 0, t: 0 }; });
      at.forEach(a => DIMS.forEach(d => { if (a.byDim[d.id]) { agg[d.id].c += a.byDim[d.id].c; agg[d.id].t += a.byDim[d.id].t; } }));
      const best = Math.max(...at.map(a => a.pct));
      const avg = Math.round(at.reduce((s, a) => s + a.pct, 0) / at.length);
      const radar = radarSVG(agg);
      detail = `
        <div class="card" style="margin-top:16px">
          <div class="row"><div><div class="eyebrow">Coach</div><h2 style="margin:4px 0 0">${esc(sel.name)}</h2></div><div class="spacer"></div>
            <button class="btn sm" id="newFor">Nuevo examen para ${esc(sel.name)}</button></div>
          <div class="kv">
            <div><span class="small muted">Intentos</span><b>${at.length}</b></div>
            <div><span class="small muted">Último</span><b>${at[at.length - 1].pct}%</b></div>
            <div><span class="small muted">Mejor</span><b>${best}%</b></div>
            <div><span class="small muted">Promedio</span><b>${avg}%</b></div>
            <div><span class="small muted">Aprobados</span><b>${at.filter(a => a.pct >= PASS).length}</b></div>
          </div>
        </div>
        <div class="card"><h2>Evolución del puntaje</h2><div class="chart-wrap">${lineSVG(at)}</div></div>
        <div class="grid2" style="margin-top:16px">
          <div class="card"><h2>Acumulado por dimensión</h2><div class="small muted" style="margin:-6px 0 12px">Suma de todas las preguntas respondidas en todos los intentos.</div>${barsHTML(agg)}</div>
          <div class="card"><h2>Perfil acumulado</h2>${radar ? `<div class="chart-wrap">${radar}</div>` : '<div class="empty">Datos insuficientes.</div>'}</div>
        </div>
        <div class="card"><h2>Intentos</h2><div class="tscroll"><table>
          <thead><tr><th>#</th><th>Fecha</th><th>Preguntas</th><th>Puntaje</th><th>Tiempo</th><th>Estado</th><th></th></tr></thead>
          <tbody>${at.map((a, k) => `<tr>
            <td class="mono">${k + 1}</td><td>${esc(fmtDate(a.date))}</td><td class="mono">${a.correct}/${a.total}</td>
            <td class="mono" style="color:${level(a.pct).c}"><b>${a.pct}%</b></td><td class="mono small">${fmtDur(a.usedMs)}${a.timedOut ? ' ⏱' : ''}</td>
            <td><span class="verdict ${a.pct >= PASS ? 'pass' : 'fail'}" style="font-size:10px;padding:3px 6px">${a.pct >= PASS ? 'Aprobado' : 'No aprobado'}</span></td>
            <td style="white-space:nowrap"><button class="btn sm" data-view="${esc(a.id)}">Ver detalle</button> <button class="btn sm danger ghost" data-del="${esc(a.id)}" title="Eliminar intento">✕</button></td></tr>`).join('')}</tbody>
        </table></div></div>`;
    }

    app.innerHTML = `
      <div class="eyebrow">Historial</div>
      <h1>Historial por coach</h1>
      <div class="row noprint" style="margin-bottom:16px">
        <button class="btn sm" id="exp" ${list.length ? '' : 'disabled'}>Exportar historial (JSON)</button>
        <label class="btn sm" style="cursor:pointer">Importar historial<input type="file" id="imp" accept="application/json,.json" class="hide"></label>
        <span class="small muted">El historial vive en el almacenamiento local de este navegador; exporta una copia para respaldarlo o pasarlo a otro equipo.</span>
      </div>
      ${list.length ? `<div class="coachgrid">${list.map(c => { const l = c.attempts[c.attempts.length - 1]; return `<button class="coachcard ${c.key === selKey ? 'act' : ''}" data-k="${esc(c.key)}"><b>${esc(c.name)}</b><span class="small muted">${c.attempts.length} intento${c.attempts.length > 1 ? 's' : ''} · último ${l.pct}% · ${esc(new Date(l.date).toLocaleDateString('es'))}</span></button>`; }).join('')}</div>` : '<div class="empty">Todavía no hay exámenes registrados.</div>'}
      ${detail}`;

    app.querySelectorAll('.coachcard').forEach(b => { b.onclick = () => renderHistory(b.dataset.k); });
    const nf = document.getElementById('newFor');
    if (nf) nf.onclick = () => { store.set(K.last, { name: sel.name, n: (store.get(K.last, {}).n) || 20 }); renderHome(); };
    app.querySelectorAll('[data-view]').forEach(b => { b.onclick = () => { const a = history().find(x => x.id === b.dataset.view); if (a) { reviewFilter = { kind: 'all', dim: 'all' }; renderResults(a); } }; });
    app.querySelectorAll('[data-del]').forEach(b => {
      b.onclick = async () => {
        const ok = await modal('<h2>Eliminar intento</h2><p class="muted">El intento se borrará del historial de forma permanente.</p>', [{ label: 'Cancelar', value: false, cls: 'ghost' }, { label: 'Eliminar', value: true, cls: 'primary' }]);
        if (!ok) return;
        saveHistory(history().filter(a => a.id !== b.dataset.del));
        renderHistory(coaches().some(c => c.key === selKey) ? selKey : undefined);
      };
    });
    document.getElementById('exp').onclick = () => {
      const blob = new Blob([JSON.stringify({ app: 'agile-coach-assessment', version: 1, exportedAt: new Date().toISOString(), history: history() }, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url; link.download = 'agile-coach-historial-' + new Date().toISOString().slice(0, 10) + '.json';
      document.body.appendChild(link); link.click(); link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    };
    document.getElementById('imp').onchange = e => {
      const file = e.target.files[0]; if (!file) return;
      const r = new FileReader();
      r.onload = async () => {
        let added = 0;
        try {
          const data = JSON.parse(r.result);
          const incoming = Array.isArray(data) ? data : data.history;
          if (!Array.isArray(incoming)) throw new Error('formato');
          const h = history(); const ids = new Set(h.map(a => a.id));
          incoming.forEach(a => {
            if (a && a.id && a.coach && Array.isArray(a.items) && a.byDim && !ids.has(a.id)) { h.push(a); ids.add(a.id); added++; }
          });
          saveHistory(h);
          await modal(`<h2>Importación completa</h2><p class="muted">Se agregaron ${added} intento${added === 1 ? '' : 's'} nuevo${added === 1 ? '' : 's'}.</p>`, [{ label: 'Aceptar', value: true, cls: 'primary' }]);
        } catch (err) {
          await modal('<h2>No se pudo importar</h2><p class="muted">El archivo no tiene el formato de historial esperado.</p>', [{ label: 'Aceptar', value: true, cls: 'primary' }]);
        }
        renderHistory(selKey);
      };
      r.readAsText(file);
    };
  }

  /* ---------- teclado ---------- */
  document.addEventListener('keydown', e => {
    if (!exam || document.querySelector('.modal-bg')) return;
    if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT')) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    const item = exam.questions[exam.pos];
    if (e.key === 'ArrowRight') { go(exam.pos + 1); e.preventDefault(); return; }
    if (e.key === 'ArrowLeft') { go(exam.pos - 1); e.preventDefault(); return; }
    let k = -1;
    if (/^[1-8]$/.test(e.key)) k = +e.key - 1;
    else if (/^[a-h]$/i.test(e.key)) k = LETTERS.indexOf(e.key.toUpperCase());
    if (k >= 0 && k < item.order.length) { choose(item.order[k]); e.preventDefault(); }
  });

  /* ---------- tema ---------- */
  function applyTheme(t) { if (t) document.documentElement.setAttribute('data-theme', t); else document.documentElement.removeAttribute('data-theme'); }
  let theme = store.get(K.theme, null) || (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  applyTheme(theme);
  document.getElementById('themeBtn').onclick = () => { theme = theme === 'light' ? 'dark' : 'light'; applyTheme(theme); store.set(K.theme, theme); };
  document.getElementById('brand').onclick = async () => {
    if (exam) {
      const ok = await modal('<h2>Salir del examen</h2><p class="muted">El examen queda guardado y el reloj sigue corriendo. Podrás continuarlo desde el inicio.</p>', [{ label: 'Quedarme', value: false, cls: 'ghost' }, { label: 'Ir al inicio', value: true, cls: 'primary' }]);
      if (!ok) return;
    }
    renderHome();
  };

  /* ---------- arranque ---------- */
  document.documentElement.style.setProperty('--pass', PASS + '%');
  if (!BANK.length) {
    app.innerHTML = `<div class="banner" style="border-color:var(--bad);background:var(--bad-wash)"><div><b>No hay preguntas válidas para armar un examen.</b><ul class="small" style="margin:6px 0 0;padding-left:18px">${DATA.errors.slice(0, 8).map(m => `<li>${esc(m)}</li>`).join('')}</ul></div></div>`;
    return;
  }
  const cur = store.get(K.cur, null);
  if (cur && cur.questions && cur.questions.every(it => BYID[it.qid])) {
    exam = cur;
    if (exam.deadline <= Date.now()) finish(true); else renderExam();
  } else {
    if (cur) store.del(K.cur);
    renderHome();
  }
})();
