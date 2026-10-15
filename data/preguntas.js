/*
 * Banco de preguntas del Agile Coach Assessment.
 *
 * El contenido después de "window.ASSESSMENT_DATA =" es JSON estricto: se edita como un .json
 * (comillas dobles, sin comas finales). Se carga como script para que el examen funcione al
 * abrir index.html con doble clic, donde el navegador bloquea fetch() de archivos locales.
 *
 * config        segundosPorPregunta, aprobacion (%), minPreguntas, maxPreguntas
 * dimensiones   id (lo usan las preguntas), nombre, corto (para el gráfico), tipo (Requerido | Recomendable)
 * preguntas     id único y estable (el historial lo referencia; no reutilizar ids)
 *               dimension: id de una dimensión
 *               tipo: "unica" o "multiple"
 *               opciones: 2 a 8 textos; se muestran barajadas
 *               correctas: letras de las opciones correctas según el orden de este archivo ("A" = primera)
 *               explicacion: se muestra en la revisión final
 *
 * Al cargar, la app valida el archivo y avisa en la pantalla de inicio si alguna pregunta tiene errores.
 * Cambiar el orden de las opciones de una pregunta ya usada altera cómo se ve su revisión en el historial.
 */
window.ASSESSMENT_DATA = {
  "config": {
    "segundosPorPregunta": 120,
    "aprobacion": 70,
    "minPreguntas": 10,
    "maxPreguntas": 60
  },
  "dimensiones": [
    {
      "id": "fw",
      "nombre": "Frameworks de trabajo ágil",
      "corto": "Frameworks",
      "tipo": "Requerido"
    },
    {
      "id": "okr",
      "nombre": "Técnicas de OKRs",
      "corto": "OKRs",
      "tipo": "Requerido"
    },
    {
      "id": "tools",
      "nombre": "Herramientas de gestión",
      "corto": "Herramientas",
      "tipo": "Requerido"
    },
    {
      "id": "met",
      "nombre": "Métricas organizacionales y de equipos",
      "corto": "Métricas",
      "tipo": "Requerido"
    },
    {
      "id": "coach",
      "nombre": "Coaching y mentoring de equipos",
      "corto": "Coaching",
      "tipo": "Requerido"
    },
    {
      "id": "o365",
      "nombre": "Microsoft Office 365",
      "corto": "Office 365",
      "tipo": "Requerido"
    },
    {
      "id": "disc",
      "nombre": "Descubrimiento de producto",
      "corto": "Discovery",
      "tipo": "Requerido"
    },
    {
      "id": "devops",
      "nombre": "DevOps",
      "corto": "DevOps",
      "tipo": "Recomendable"
    },
    {
      "id": "scale",
      "nombre": "Squads, tribus, chapters, CoE y foros (modelo BCG)",
      "corto": "Tribus y squads",
      "tipo": "Recomendable"
    }
  ],
  "preguntas": [
    {
      "id": "FW01",
      "dimension": "fw",
      "tipo": "unica",
      "pregunta": "Según la Guía Scrum 2020, ¿cuál es el compromiso asociado al Product Backlog?",
      "opciones": [
        "El Objetivo del Producto (Product Goal)",
        "La Definición de Hecho (Definition of Done)",
        "El Objetivo del Sprint (Sprint Goal)",
        "La Definición de Preparado (Definition of Ready)"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "Cada artefacto tiene un compromiso: Product Backlog → Objetivo del Producto; Sprint Backlog → Objetivo del Sprint; Incremento → Definición de Hecho. La Definition of Ready no forma parte de la Guía Scrum."
    },
    {
      "id": "FW02",
      "dimension": "fw",
      "tipo": "unica",
      "pregunta": "A mitad del Sprint, el Product Owner pide incorporar un ítem urgente que pondría en riesgo el Sprint Goal. ¿Qué es lo más coherente con la Guía Scrum?",
      "opciones": [
        "El PO lo agrega directamente, ya que es quien ordena el Sprint Backlog y responde por el valor",
        "No se hacen cambios que pongan en riesgo el Sprint Goal; si el objetivo quedó obsoleto, el PO puede cancelar el Sprint",
        "Los Developers lo incorporan y renegocian el Sprint Goal con el Scrum Master para reflejar el cambio",
        "Se agrega al Sprint Backlog y se extiende la duración del Sprint lo necesario para cumplir el Sprint Goal"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Durante el Sprint no se hacen cambios que pongan en peligro el Sprint Goal; el alcance puede renegociarse con el PO a medida que se aprende. El Sprint Backlog pertenece a los Developers, la duración del Sprint no se extiende y sólo el PO puede cancelar un Sprint."
    },
    {
      "id": "FW03",
      "dimension": "fw",
      "tipo": "multiple",
      "pregunta": "Los CoEs gestionan su trabajo con el método Kanban. ¿Cuáles de estas son prácticas centrales del método?",
      "opciones": [
        "Limitar el trabajo en progreso mediante un sistema pull",
        "Hacer explícitas las políticas del proceso",
        "Implementar circuitos de retroalimentación",
        "Mejorar y evolucionar colaborativamente",
        "Comprometer un objetivo por iteración de duración fija",
        "Estimar cada ítem con Planning Poker antes de tomarlo"
      ],
      "correctas": [
        "A",
        "B",
        "C",
        "D"
      ],
      "explicacion": "El método Kanban se apoya en seis prácticas centrales: visualizar el flujo, limitar el WIP (sistema pull), hacer explícitas las políticas, gestionar el flujo, circuitos de retroalimentación y mejorar colaborativamente. Los objetivos por iteración y Planning Poker son prácticas de Scrum."
    },
    {
      "id": "FW04",
      "dimension": "fw",
      "tipo": "unica",
      "pregunta": "Un equipo tiene en promedio 12 ítems en curso (WIP) y un throughput de 4 ítems por semana. Según la Ley de Little, ¿cuál es su cycle time promedio aproximado?",
      "opciones": [
        "3 semanas",
        "48 semanas",
        "0,33 semanas",
        "16 semanas"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "Ley de Little: Cycle Time promedio = WIP promedio / Throughput promedio = 12 / 4 = 3 semanas. Por eso reducir el WIP es la palanca más directa para bajar el cycle time."
    },
    {
      "id": "FW05",
      "dimension": "fw",
      "tipo": "unica",
      "pregunta": "¿Cuál es el propósito de la Sprint Review según la Guía Scrum 2020?",
      "opciones": [
        "Demostrar el incremento a los stakeholders para obtener su aceptación formal del trabajo realizado",
        "Inspeccionar el resultado del Sprint con los stakeholders y determinar adaptaciones futuras",
        "Inspeccionar cómo fue el Sprint en cuanto a personas, interacciones, procesos y herramientas",
        "Revisar el avance hacia el Sprint Goal y ajustar el Sprint Backlog para lo que resta del Sprint"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "La Review es una sesión de trabajo para inspeccionar el resultado y adaptar el Product Backlog; no es una \"puerta de aceptación\". Inspeccionar personas y procesos corresponde a la Retrospectiva, y ajustar el Sprint Backlog hacia el Sprint Goal, a la Daily."
    },
    {
      "id": "FW06",
      "dimension": "fw",
      "tipo": "unica",
      "pregunta": "En Extreme Programming (XP), ¿qué práctica busca que cualquier pareja pueda modificar cualquier parte del código cuando lo necesite?",
      "opciones": [
        "Propiedad colectiva del código",
        "Programación en pareja",
        "Integración continua",
        "Estándares de codificación"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "La propiedad colectiva del código elimina los \"dueños\" de módulos. Se apoya en la programación en pareja, los estándares de codificación y las pruebas automatizadas, pero la práctica que habilita modificar cualquier parte es la propiedad colectiva."
    },
    {
      "id": "FW07",
      "dimension": "fw",
      "tipo": "multiple",
      "pregunta": "Un equipo tiene muchos ítems \"casi terminados\" y sus miembros alternan entre 4 o 5 tareas a la vez. ¿Qué desperdicios Lean del desarrollo de software (Poppendieck) se evidencian en esta situación?",
      "opciones": [
        "Trabajo parcialmente hecho",
        "Cambio de tareas (task switching)",
        "Funcionalidades extra",
        "Traspasos (handoffs)"
      ],
      "correctas": [
        "A",
        "B"
      ],
      "explicacion": "Los siete desperdicios de Poppendieck son: trabajo parcialmente hecho, funcionalidades extra, reaprendizaje, traspasos, cambio de tareas, demoras y defectos. La situación describe trabajo parcialmente hecho y cambio de tareas; nada indica funcionalidades extra ni traspasos."
    },
    {
      "id": "FW08",
      "dimension": "fw",
      "tipo": "unica",
      "pregunta": "¿Cuál de las siguientes afirmaciones es uno de los 12 principios del Manifiesto Ágil?",
      "opciones": [
        "La medida principal de progreso es el cumplimiento del plan de entregas acordado con el cliente",
        "La simplicidad, o el arte de maximizar la cantidad de trabajo no realizado, es esencial",
        "Los procesos ágiles promueven el desarrollo sostenible gracias a una planificación detallada temprana",
        "El método más eficiente de comunicar información al equipo es la documentación compartida"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El principio de simplicidad es literal. Los otros distorsionan principios reales: la medida principal de progreso es el software funcionando, el desarrollo sostenible no depende de planificar en detalle, y el método más eficiente de comunicación es la conversación cara a cara."
    },
    {
      "id": "FW09",
      "dimension": "fw",
      "tipo": "unica",
      "pregunta": "Tres Scrum Teams trabajan sobre el mismo producto y cada uno tiene su propia Definición de Hecho. ¿Qué indica la Guía Scrum?",
      "opciones": [
        "Cada equipo puede mantener su DoD siempre que cumpla el estándar mínimo de la organización",
        "Deben definir y cumplir mutuamente una misma Definición de Hecho",
        "La define el Product Owner, porque es quien acepta el incremento del producto",
        "Cada equipo mantiene su DoD y se agrega una DoD de integración a cargo de un equipo"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "La Guía Scrum 2020 establece que si varios Scrum Teams trabajan en el mismo producto, deben definir y cumplir mutuamente la misma DoD. El estándar de la organización es el mínimo, pero no reemplaza esa DoD común."
    },
    {
      "id": "FW10",
      "dimension": "fw",
      "tipo": "unica",
      "pregunta": "Un gerente asiste a todas las Daily Scrum y pide a cada persona un reporte de estado. ¿Cuál es la intervención más adecuada como Agile Coach?",
      "opciones": [
        "Pedirle que no asista más, ya que la Guía Scrum prohíbe la presencia de personas ajenas al Scrum Team",
        "Devolver la Daily a los Developers con foco en el Sprint Goal y ayudar al gerente a obtener visibilidad por otros medios",
        "Mantener el formato de reporte pero limitarlo a 15 minutos para respetar el timebox del evento",
        "Pedir al Scrum Master que consolide el estado de cada persona y se lo envíe al gerente luego de la Daily"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "La Daily es de los Developers para inspeccionar el progreso hacia el Sprint Goal. La Guía 2020 no prohíbe explícitamente la asistencia de otros; el coach atiende la necesidad real del gerente (visibilidad) mediante artefactos transparentes y la Review, sin convertir la Daily en un reporte."
    },
    {
      "id": "FW11",
      "dimension": "fw",
      "tipo": "unica",
      "pregunta": "En la Guía Kanban, ¿qué es una Service Level Expectation (SLE)?",
      "opciones": [
        "Un compromiso con el cliente sobre el tiempo máximo de entrega, con consecuencias si no se cumple",
        "Un pronóstico de cuánto debería tardar un ítem en completarse, con un período y una probabilidad",
        "El cycle time promedio histórico del equipo, usado como meta de mejora para el siguiente período",
        "El tiempo máximo que un ítem puede permanecer en una columna antes de escalarse como bloqueo"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "La SLE es un pronóstico (por ejemplo, \"85% de los ítems en 8 días o menos\") basado en el cycle time histórico. No es un SLA contractual, no se basa en el promedio ni es un límite por columna."
    },
    {
      "id": "FW12",
      "dimension": "fw",
      "tipo": "unica",
      "pregunta": "Un equipo pide pasar a Sprints de 6 semanas porque \"nunca le alcanza el tiempo\". ¿Cuál es la mejor respuesta?",
      "opciones": [
        "Aceptarlo, siempre que la duración se mantenga constante durante toda la vida del producto",
        "Recordar que los Sprints duran un mes o menos y explorar las causas: ítems grandes, dependencias, WIP alto",
        "Aceptarlo de forma temporal y volver a 2 semanas cuando el equipo haya ganado madurez",
        "Mantener la duración y mover automáticamente lo no terminado al siguiente Sprint"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "La Guía Scrum fija los Sprints en un mes o menos para limitar el riesgo y acelerar el feedback. Alargarlos o arrastrar trabajo esconde el problema; el coach ayuda a encontrar la causa raíz."
    },
    {
      "id": "FW13",
      "dimension": "fw",
      "tipo": "multiple",
      "pregunta": "¿Cuáles son las responsabilidades (accountabilities) que define la Guía Scrum 2020 dentro del Scrum Team?",
      "opciones": [
        "Product Owner",
        "Scrum Master",
        "Developers",
        "Development Team (Equipo de Desarrollo)",
        "Product Manager"
      ],
      "correctas": [
        "A",
        "B",
        "C"
      ],
      "explicacion": "La Guía 2020 define Product Owner, Scrum Master y Developers. El \"Development Team\" era el término de la Guía 2017 y fue reemplazado para reforzar la idea de un único Scrum Team."
    },
    {
      "id": "FW14",
      "dimension": "fw",
      "tipo": "unica",
      "pregunta": "¿Cuál de los siguientes NO es un valor de Scrum?",
      "opciones": [
        "Compromiso",
        "Coraje",
        "Transparencia",
        "Foco"
      ],
      "correctas": [
        "C"
      ],
      "explicacion": "Los valores de Scrum son compromiso, foco, apertura, respeto y coraje. La transparencia es uno de los tres pilares del empirismo, junto con la inspección y la adaptación."
    },
    {
      "id": "FW15",
      "dimension": "fw",
      "tipo": "unica",
      "pregunta": "Según el marco Cynefin, ¿en qué dominio el enfoque recomendado es \"sondear, percibir, responder\" y los marcos empíricos como Scrum resultan más útiles?",
      "opciones": [
        "Claro",
        "Complicado",
        "Complejo",
        "Caótico"
      ],
      "correctas": [
        "C"
      ],
      "explicacion": "En el dominio complejo la relación causa-efecto sólo se entiende en retrospectiva, por eso se experimenta en ciclos cortos. En lo complicado se aplica análisis experto (percibir-analizar-responder) y en lo caótico se actúa primero (actuar-percibir-responder)."
    },
    {
      "id": "FW16",
      "dimension": "fw",
      "tipo": "unica",
      "pregunta": "En el modelo operativo de los squads, ¿cómo se define el Refinamiento del Product Backlog?",
      "opciones": [
        "Es un evento oficial de Scrum de 2 horas que se realiza al final de cada sprint",
        "Es una práctica recomendada, no un evento oficial de Scrum, de máximo 10% del sprint y al menos una vez por sprint",
        "Es una actividad exclusiva del Product Owner, que llega al Sprint Planning con los ítems ya detallados",
        "Es una sesión trimestral que se realiza durante el Big Room Planning"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El playbook define el refinamiento como una práctica recomendada (no forma parte de los eventos oficiales de Scrum): una o dos sesiones por sprint (mínimo una), con un time-box de hasta el 10% del sprint, para detallar y ajustar los PBIs de los próximos 2–3 sprints junto a los Developers."
    },
    {
      "id": "FW17",
      "dimension": "fw",
      "tipo": "unica",
      "pregunta": "Al introducir Kanban en un CoE con STATIK (Systems Thinking Approach to Introducing Kanban), ¿cuál es el primer paso?",
      "opciones": [
        "Diseñar el tablero y definir los límites de WIP de cada columna",
        "Identificar el propósito del sistema: ¿para qué hacemos lo que hacemos?",
        "Analizar la demanda: qué trabajo se recibe, por qué medios y con qué frecuencia",
        "Modelar el flujo de trabajo para cada tipo de trabajo"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "STATIK tiene 8 pasos: propósito del sistema, fuentes de insatisfacción, análisis de la demanda, capacidad actual, modelado del flujo, clases de servicio, diseño del sistema Kanban y socialización del tablero. Diseñar el tablero llega recién al final."
    },
    {
      "id": "FW18",
      "dimension": "fw",
      "tipo": "unica",
      "pregunta": "¿En qué momentos se utiliza la Definition of Ready (DoR) de un squad?",
      "opciones": [
        "Al terminar cada historia, para que el PO decida si la acepta como terminada",
        "En el refinamiento, para identificar historias listas, y en el Sprint Planning, para aceptarlas",
        "En la Sprint Review, para validar con los stakeholders que el incremento está listo",
        "Sólo durante el Inception, ya que luego la reemplaza la Definition of Done del squad"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "La DoR es un checklist construido por todo el squad (facilitado por el SM): se usa en el refinamiento para identificar historias \"listas\" y en el Sprint Planning para aceptar su ingreso. La aceptación de una historia terminada depende de la DoD."
    },
    {
      "id": "FW19",
      "dimension": "fw",
      "tipo": "unica",
      "pregunta": "Con sprints de 2 semanas, ¿qué time-box define el modelo operativo para Sprint Planning, Sprint Review y Retrospectiva, respectivamente?",
      "opciones": [
        "2 h, 1 h y 1 h",
        "4 h, 2 h y 1,5 h",
        "8 h, 4 h y 3 h",
        "4 h, 3 h y 2 h"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Para sprints de 2 semanas: Sprint Planning de máximo 4 h, Sprint Review de máximo 2 h, Retrospectiva de máximo 1,5 h y Daily de 15 min. Son proporcionales a los máximos de la Guía Scrum para sprints de un mes (8 h, 4 h y 3 h)."
    },
    {
      "id": "OK01",
      "dimension": "okr",
      "tipo": "unica",
      "pregunta": "¿Cuál de estos es el Key Result mejor formulado?",
      "opciones": [
        "Lanzar la nueva app móvil con onboarding digital antes del cierre del trimestre",
        "Aumentar de forma sostenida la satisfacción de los clientes de la app móvil",
        "Aumentar la retención a 90 días de clientes nuevos del 35% al 50%",
        "Realizar 40 entrevistas con clientes para entender sus motivos de abandono"
      ],
      "correctas": [
        "C"
      ],
      "explicacion": "Un KR debe ser medible y describir un resultado (outcome), con línea base y meta. Lanzar la app y hacer entrevistas son entregables o actividades (iniciativas); \"aumentar de forma sostenida la satisfacción\" no tiene métrica ni meta."
    },
    {
      "id": "OK02",
      "dimension": "okr",
      "tipo": "unica",
      "pregunta": "Según los principios de OKRs del modelo, ¿qué nivel de logro de los resultados clave se espera y cómo se interpreta?",
      "opciones": [
        "100%: cualquier valor menor indica un problema de ejecución",
        "Entre 70% y 80%: por debajo indica bajo logro y por encima, baja ambición",
        "Entre 50% y 60%: por encima indica que el objetivo no era aspiracional",
        "Más del 90%: los KRs se fijan sólo con metas alcanzables"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El principio \"pragmáticos\" del playbook espera un logro del 70–80% de los KRs: menos del 70% indica bajo nivel de logro y más del 80%, bajo nivel de ambición. Es coherente con el criterio de Google de que los OKRs aspiracionales no deberían cumplirse siempre al 100%."
    },
    {
      "id": "OK03",
      "dimension": "okr",
      "tipo": "unica",
      "pregunta": "Un área define 12 objetivos con 8 KRs cada uno para el trimestre. ¿Cuál es el principal riesgo y la recomendación?",
      "opciones": [
        "Desalineamiento; conviene cascadear cada objetivo a los equipos para asegurar que todos estén cubiertos",
        "Pérdida de foco; conviene priorizar entre 3 y 5 objetivos con 3 a 5 KRs cada uno",
        "Metas poco ambiciosas; conviene marcar la mitad de los objetivos como aspiracionales",
        "Sobrecarga de seguimiento; conviene pasar los check-ins de semanales a mensuales"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Los OKRs son una herramienta de foco. Doerr y Grove recomiendan pocos objetivos (3–5) con pocos KRs (hasta 5). Muchos objetivos diluyen la atención y terminan siendo una lista de trabajo."
    },
    {
      "id": "OK04",
      "dimension": "okr",
      "tipo": "unica",
      "pregunta": "La dirección quiere atar el bono anual al porcentaje de cumplimiento de los OKRs de cada persona. Según las prácticas recomendadas por Doerr y Google, ¿qué conviene?",
      "opciones": [
        "Atarlo sólo a los OKRs comprometidos y dejar los aspiracionales fuera de la compensación",
        "Desacoplar los OKRs de la compensación, porque atarlos incentiva metas conservadoras",
        "Atarlo con un peso bajo (por ejemplo, 10% del bono) para no distorsionar la ambición",
        "Atarlo al puntaje del OKR del equipo y no al individual, para fomentar la colaboración"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "La recomendación de Doerr y Google es separar los OKRs de la evaluación y la compensación. Cualquier vínculo, aunque sea parcial o grupal, empuja a proponer metas fáciles (sandbagging) y erosiona el valor aspiracional."
    },
    {
      "id": "OK05",
      "dimension": "okr",
      "tipo": "unica",
      "pregunta": "¿Qué enfoque de alineamiento de OKRs se considera una buena práctica?",
      "opciones": [
        "Cascada obligatoria: cada equipo adopta un KR del nivel superior como su objetivo",
        "Combinar dirección top-down con propuestas bottom-up alineadas a los OKRs de la organización",
        "Que cada equipo defina sus OKRs y luego el liderazgo los consolide en los OKRs corporativos",
        "Que el área de estrategia redacte los OKRs de todos los equipos para garantizar la coherencia"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "La cascada obligatoria es lenta y quita autonomía; la consolidación pura bottom-up pierde la estrategia. Doerr sugiere que una parte importante de los OKRs surja desde los equipos, alineada a los objetivos de nivel superior."
    },
    {
      "id": "OK06",
      "dimension": "okr",
      "tipo": "multiple",
      "pregunta": "¿Qué características debe tener un buen Key Result?",
      "opciones": [
        "Ser medible y verificable al final del período",
        "Describir un resultado (outcome), no una tarea",
        "Estar bajo el control total del equipo, sin depender de factores externos",
        "Incluir las iniciativas necesarias para lograrlo"
      ],
      "correctas": [
        "A",
        "B"
      ],
      "explicacion": "Un KR responde \"¿cómo sabremos que logramos el objetivo?\": es cuantitativo, verificable y centrado en el resultado. Los resultados rara vez están bajo control total del equipo (basta con que pueda influirlos), y las iniciativas se gestionan aparte."
    },
    {
      "id": "OK07",
      "dimension": "okr",
      "tipo": "unica",
      "pregunta": "¿Cuál es la diferencia más precisa entre un KPI y un OKR?",
      "opciones": [
        "Los KPIs miden resultados de negocio y los OKRs miden el avance de los proyectos estratégicos",
        "Un KPI monitorea la salud continua de algo; un OKR busca un cambio significativo en un período",
        "Los KPIs son anuales y los OKRs trimestrales; por lo demás, cumplen la misma función",
        "Los OKRs reemplazan a los KPIs: una vez adoptados, los KPIs dejan de ser necesarios"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Los KPIs son indicadores de salud que se observan siempre; los OKRs enfocan el esfuerzo en mejorar algo durante un ciclo. Es común tomar un KPI que se quiere mover y convertirlo en KR, y ambos conviven."
    },
    {
      "id": "OK08",
      "dimension": "okr",
      "tipo": "unica",
      "pregunta": "¿Cómo es el ciclo de OKRs de los squads en el modelo?",
      "opciones": [
        "Se definen cada trimestre y se revisan al cierre de cada sprint, en la Sprint Review",
        "Se definen anualmente y se revisan y recalibran cada trimestre",
        "Se definen al inicio de cada iniciativa y se revisan sólo al cerrarla formalmente",
        "Se definen anualmente y se revisan una vez al año en la evaluación de desempeño"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Los OKRs se definen anualmente (propuestos por los POs y acordados con la gerencia y los stakeholders) y se revisan y recalibran cada trimestre. El avance de los KRs de los squads se inspecciona además de forma mensual."
    },
    {
      "id": "OK15",
      "dimension": "okr",
      "tipo": "unica",
      "pregunta": "¿Quién propone los OKRs de los squads y quién responde por su cumplimiento?",
      "opciones": [
        "El Tribe Lead los define y los Scrum Masters responden por su seguimiento y cumplimiento",
        "Los POs los proponen, se acuerdan con la gerencia y los POs responden por ejecutarlos",
        "La Oficina de Transformación los define y cada Developer responde por un KR asignado",
        "El Agile Coach los propone en el Inception y el Sponsor responde por su cumplimiento"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "En el modelo, los Product Owners proponen los OKRs, que luego se discuten y acuerdan con la gerencia y los stakeholders de la iniciativa. Los POs son responsables últimos de ejecutar las iniciativas que los cumplen y de controlarlos para tomar acciones correctivas."
    },
    {
      "id": "OK16",
      "dimension": "okr",
      "tipo": "unica",
      "pregunta": "¿Cómo se alinean los OKRs desde la estrategia hasta el trabajo de los squads?",
      "opciones": [
        "Plan estratégico → objetivos estratégicos → OKRs de squads → iniciativas",
        "Iniciativas → OKRs de squads → objetivos estratégicos → plan estratégico",
        "OKRs individuales → OKRs de squad → OKRs de tribu → plan estratégico",
        "Plan estratégico → presupuesto por área → OKRs individuales → tareas del sprint"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "Los OKRs \"cascadean\" desde los objetivos e indicadores estratégicos (Plan Horizonte) hacia los customer journeys, cuyos squads definen OKRs que aseguran la ambición estratégica; las iniciativas apuntan a esos KRs. El modelo combina además OKRs descendentes y ascendentes."
    },
    {
      "id": "OK09",
      "dimension": "okr",
      "tipo": "unica",
      "pregunta": "¿Cuál de estos enunciados está mejor formulado como Objetivo (la \"O\" de OKR)?",
      "opciones": [
        "Aumentar el NPS de las pymes de 32 a 45 durante el trimestre",
        "Convertirnos en la opción preferida de las pymes para pagos digitales",
        "Implementar la nueva plataforma de pagos para pymes antes de marzo",
        "Mejorar los procesos internos de atención a clientes pymes"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El objetivo es cualitativo, inspirador y orientado al cliente; los números van en los KRs. El NPS sería un buen KR, la plataforma es una iniciativa y \"mejorar los procesos internos\" es vago y no inspira."
    },
    {
      "id": "OK10",
      "dimension": "okr",
      "tipo": "unica",
      "pregunta": "Para un objetivo de reducir la cancelación de clientes (churn), ¿cuál es el mejor indicador adelantado (leading)?",
      "opciones": [
        "Churn mensual de clientes, medido por cohorte de alta",
        "Ingresos promedio por cliente durante el trimestre",
        "% de clientes nuevos que usan la función clave en su primera semana",
        "Tasa de renovación anual de contratos y de productos"
      ],
      "correctas": [
        "C"
      ],
      "explicacion": "Los indicadores adelantados se mueven antes que el resultado y permiten actuar a tiempo. La activación temprana suele predecir la retención; el churn, los ingresos y la renovación son indicadores rezagados (lagging)."
    },
    {
      "id": "OK11",
      "dimension": "okr",
      "tipo": "unica",
      "pregunta": "Un equipo puso como KR \"Implementar el chatbot de atención\". ¿Qué le recomendarías?",
      "opciones": [
        "Mantenerlo, agregando una fecha y un porcentaje de avance para que sea medible",
        "Expresar el resultado esperado (por ejemplo, reducir el tiempo de primera respuesta) y tratar el chatbot como iniciativa",
        "Convertirlo en objetivo y definir como KRs las etapas del proyecto: diseño, piloto y lanzamiento",
        "Mantenerlo como KR comprometido, ya que su cumplimiento depende sólo del equipo"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Un entregable no garantiza un resultado. Separar el KR (outcome) de la iniciativa (output) permite cambiar la solución si no mueve la aguja."
    },
    {
      "id": "OK12",
      "dimension": "okr",
      "tipo": "unica",
      "pregunta": "Un equipo cumple siempre el 100% de sus OKRs aspiracionales, trimestre tras trimestre. ¿Qué suele indicar?",
      "opciones": [
        "Que es un equipo de alto desempeño y conviene replicar su forma de trabajo en otros equipos",
        "Que probablemente sus metas son poco ambiciosas (sandbagging)",
        "Que conviene pasar sus OKRs a comprometidos, ya que los cumple de forma confiable",
        "Que el equipo tiene capacidad ociosa y conviene asignarle más OKRs"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Un cumplimiento sistemático por encima del 80% indica bajo nivel de ambición (según los principios del modelo, lo esperado es 70–80%). Vale la pena conversar sobre la ambición, la seguridad psicológica y los incentivos antes de sacar conclusiones sobre desempeño o capacidad."
    },
    {
      "id": "OK13",
      "dimension": "okr",
      "tipo": "unica",
      "pregunta": "El KR \"Reducir el tiempo promedio de atención de 12 a 6 minutos\" genera el riesgo de que se corten llamadas sin resolver el problema. ¿Qué técnica lo mitiga?",
      "opciones": [
        "Pasar el KR a aspiracional para reducir la presión sobre el equipo",
        "Agregar una métrica de contrapeso, como la resolución en el primer contacto",
        "Reemplazar el promedio por la mediana del tiempo de atención",
        "Medir el KR por agente para identificar a quienes cortan llamadas"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Por la Ley de Goodhart, una métrica convertida en meta se \"juega\". Las métricas de contrapeso (health metrics) protegen la calidad mientras se mueve el KR principal. Cambiar el estadístico o vigilar individuos no elimina el incentivo."
    },
    {
      "id": "OK14",
      "dimension": "okr",
      "tipo": "multiple",
      "pregunta": "¿Cuáles de estas situaciones son antipatrones de OKRs?",
      "opciones": [
        "Usar los OKRs como lista de tareas del trimestre",
        "Vincular directamente los OKRs al bono individual",
        "Hacer check-ins semanales de progreso y confianza",
        "Proponer parte de los OKRs desde los equipos (bottom-up)",
        "Considerar 0,7 como resultado esperado de un KR aspiracional"
      ],
      "correctas": [
        "A",
        "B"
      ],
      "explicacion": "Convertir OKRs en listas de tareas o atarlos a la compensación son antipatrones frecuentes. Los check-ins, los OKRs bottom-up y el 0,7 en aspiracionales son prácticas recomendadas."
    },
    {
      "id": "TL01",
      "dimension": "tools",
      "tipo": "unica",
      "pregunta": "En el modelo, ¿cuál debería ser la única fuente de demanda de trabajo de un squad y quién responde por su contenido?",
      "opciones": [
        "La bandeja de tickets de ServiceNow, gestionada por el Chapter Lead",
        "El backlog en Azure Boards, responsabilidad del Product Owner",
        "La Ficha de la Iniciativa, mantenida por el Coordinador de Valor",
        "El plan en Microsoft Project, mantenido por el Scrum Master"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El playbook establece Azure Boards para la gestión colaborativa del backlog: debería ser la única fuente de demanda de trabajo de los equipos ágiles, y el PO es responsable de que esté correcto, priorizado y actualizado."
    },
    {
      "id": "TL02",
      "dimension": "tools",
      "tipo": "unica",
      "pregunta": "¿Cuál es la jerarquía del backlog definida para los squads en Azure Boards?",
      "opciones": [
        "Epic > Feature > Product Backlog Item > Sub-tarea",
        "Feature > Epic > Product Backlog Item > Sub-tarea",
        "Epic > Product Backlog Item > Feature > Sub-tarea",
        "Iniciativa > Epic > Historia de Usuario > Feature"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "Epic y Feature forman el Portfolio backlog (visión estratégica, útil para dar visibilidad a stakeholders); los PBIs y las sub-tareas forman el Product backlog (visión táctica del squad). Los PBIs y sub-tareas tienen tipologías para categorizar el trabajo y generar métricas."
    },
    {
      "id": "TL03",
      "dimension": "tools",
      "tipo": "unica",
      "pregunta": "En Azure DevOps Boards, usando la plantilla de proceso Scrum, ¿cómo se llama el work item del nivel de backlog de producto?",
      "opciones": [
        "User Story",
        "Issue",
        "Product Backlog Item",
        "Requirement"
      ],
      "correctas": [
        "C"
      ],
      "explicacion": "Proceso Scrum: Epic > Feature > Product Backlog Item > Task. User Story corresponde al proceso Agile, Issue al proceso Basic y Requirement al proceso CMMI."
    },
    {
      "id": "TL04",
      "dimension": "tools",
      "tipo": "unica",
      "pregunta": "Un PBI en curso no puede completarse por un factor externo al squad. ¿Cómo se registra en Azure Boards según el playbook?",
      "opciones": [
        "Se crea un PBI de tipo Seguimiento y el PBI original vuelve a \"To Do\"",
        "Se marca el PBI como \"Blocked\" y se crea una sub-tarea de tipo Impediment",
        "Se crea un Bug asignado al equipo externo",
        "Se mueve el PBI al siguiente sprint y se registra en la retrospectiva"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Cuando un factor externo impide avanzar, el PBI pasa a \"Blocked\" y se crea una sub-tarea Impediment con el trabajo necesario para eliminar el bloqueo. El tipo Seguimiento se usa para visibilizar tareas que hace otro equipo y de las que dependemos."
    },
    {
      "id": "TL05",
      "dimension": "tools",
      "tipo": "unica",
      "pregunta": "En un Cumulative Flow Diagram (CFD), la banda \"En progreso\" se ensancha sostenidamente mientras la banda \"Hecho\" crece poco. ¿Qué indica?",
      "opciones": [
        "Que el throughput aumentó y el equipo está entregando más rápido",
        "Que el WIP crece por un cuello de botella y el cycle time tenderá a aumentar",
        "Que el backlog crece más rápido de lo que el equipo puede absorber",
        "Que el equipo terminó el refinamiento y paralelizó trabajo listo, lo cual es esperable"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El ancho vertical de una banda es el WIP en esa etapa. Si entra más de lo que sale, se acumula WIP y crece el cycle time. El crecimiento del backlog se vería en la banda de \"Por hacer\", no en la de \"En progreso\"."
    },
    {
      "id": "TL06",
      "dimension": "tools",
      "tipo": "unica",
      "pregunta": "La organización quiere comprar una herramienta costosa \"para volverse ágil\". ¿Cuál es la mejor respuesta como Agile Coach?",
      "opciones": [
        "Elegir la herramienta líder del mercado, que trae incorporadas las mejores prácticas",
        "Entender primero el flujo de trabajo y los problemas: la herramienta soporta el proceso, no lo define",
        "Implementarla en un piloto con un equipo y luego escalarla a todos con la misma configuración",
        "Estandarizar una única herramienta para todos los equipos antes de iniciar la transformación"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "\"Individuos e interacciones sobre procesos y herramientas\". Una herramienta amplifica la forma de trabajar existente; si el flujo es malo, lo digitaliza tal cual. El piloto o la estandarización sin diagnóstico repiten el mismo error."
    },
    {
      "id": "TL07",
      "dimension": "tools",
      "tipo": "unica",
      "pregunta": "Una tarea que realiza otro equipo es dependencia de una historia del squad. ¿Qué tipo de PBI se usa en Azure Boards y cómo se trata?",
      "opciones": [
        "Spike: se estima y se prioriza para investigar la dependencia",
        "Seguimiento: se mapea sólo para tener visibilidad de su estado y no se estima",
        "Habilitador: se estima como trabajo no funcional del propio squad",
        "Deuda técnica: se registra para resolverla en un sprint posterior"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El PBI de Seguimiento representa tareas que hacen terceros y que son dependencias del squad: sólo se mapea para actualizarlo cuando haya novedades y no se estima. El Spike es una investigación del propio squad y sí tiene objetivo y duración acotada."
    },
    {
      "id": "TL08",
      "dimension": "tools",
      "tipo": "unica",
      "pregunta": "¿Qué reporte es más útil para analizar la dispersión del cycle time de cada ítem y detectar valores atípicos?",
      "opciones": [
        "Burndown del sprint en puntos",
        "Control chart o scatterplot de cycle time",
        "Cumulative Flow Diagram por estado",
        "Reporte de velocidad por sprint"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El control chart o scatterplot muestra cada ítem terminado con su cycle time, lo que permite ver percentiles, tendencias y outliers. El CFD muestra el WIP agregado por etapa, no la dispersión por ítem."
    },
    {
      "id": "TL09",
      "dimension": "tools",
      "tipo": "unica",
      "pregunta": "El burndown de un equipo queda plano durante 8 de los 10 días del sprint y cae bruscamente al final. ¿Qué patrón sugiere con más probabilidad?",
      "opciones": [
        "Que el equipo sobrecomprometió el sprint y debería reducir la capacidad planificada",
        "Ítems demasiado grandes o una \"mini cascada\": el trabajo se cierra recién al final",
        "Que el sprint es demasiado corto para el tipo de trabajo del equipo",
        "Que las estimaciones en story points están infladas"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Una curva plana seguida de una caída abrupta indica que poco trabajo se termina hasta el final, típicamente por historias grandes, testing al final o mucho WIP. Conviene trocear y limitar el WIP."
    },
    {
      "id": "TL10",
      "dimension": "tools",
      "tipo": "multiple",
      "pregunta": "¿Para qué es especialmente adecuada Confluence (o una wiki equivalente) en un equipo ágil?",
      "opciones": [
        "Documentación viva y registro de decisiones (ADR)",
        "Plantillas compartidas de retrospectivas y acuerdos de trabajo",
        "Gestionar el flujo de los ítems con límites de WIP",
        "Registrar y ordenar el Product Backlog con sus estimaciones"
      ],
      "correctas": [
        "A",
        "B"
      ],
      "explicacion": "Una wiki sirve para el conocimiento compartido: decisiones, acuerdos, actas y documentación viva. El flujo de ítems y el backlog se gestionan en herramientas como Jira o Azure Boards."
    },
    {
      "id": "TL11",
      "dimension": "tools",
      "tipo": "unica",
      "pregunta": "El backlog de Jira de un equipo tiene más de 300 ítems y la mayoría lleva más de un año sin cambios. ¿Qué recomendarías?",
      "opciones": [
        "Refinarlos y estimarlos todos para obtener una proyección completa del producto",
        "Depurar o archivar lo que no aporta y mantener un backlog emergente y manejable",
        "Crear un backlog paralelo para lo urgente y dejar el actual como histórico",
        "Asignar cada ítem a un responsable para revisarlo durante el próximo trimestre"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Un backlog enorme genera ruido, mantenimiento y falsas expectativas. Un backlog sano está ordenado, refinado en su parte superior y depurado periódicamente; lo importante vuelve a surgir."
    },
    {
      "id": "TL12",
      "dimension": "tools",
      "tipo": "unica",
      "pregunta": "En Azure Boards, ¿quién crea los PBIs de tipo Bug y de tipo Incidente, respectivamente?",
      "opciones": [
        "El Product Owner (bugs) y el Scrum Master (incidentes), que gestionan el backlog",
        "QA (bugs) y el Chapter Lead (incidentes)",
        "Los Developers (bugs) y el Nivel 1 de soporte (incidentes), al detectarlos",
        "El Scrum Master (bugs) y QA (incidentes), según el ambiente donde aparecen"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El Bug lo crea QA cuando encuentra un defecto o incumplimiento de criterios de aceptación en ambientes previos. El Incidente lo crea el Chapter Lead cuando recibe un defecto productivo (vía ServiceNow), y puede derivar en otros PBIs para resolverlo."
    },
    {
      "id": "TL13",
      "dimension": "tools",
      "tipo": "unica",
      "pregunta": "¿Qué servicio de Azure DevOps se utiliza para integración y entrega continua (CI/CD)?",
      "opciones": [
        "Azure Boards",
        "Azure Repos",
        "Azure Pipelines",
        "Azure Artifacts"
      ],
      "correctas": [
        "C"
      ],
      "explicacion": "Azure DevOps incluye Boards (gestión del trabajo), Repos (git), Pipelines (CI/CD), Test Plans (pruebas) y Artifacts (paquetes)."
    },
    {
      "id": "TL14",
      "dimension": "tools",
      "tipo": "unica",
      "pregunta": "Para facilitar un User Story Mapping remoto durante el Inception, ¿qué herramienta del stack definido es la más adecuada?",
      "opciones": [
        "Miro, tablero digital colaborativo en tiempo real",
        "Figma, herramienta de diseño de interfaces y prototipos",
        "Delivery Plans de Azure Boards",
        "Un Excel compartido en SharePoint con una columna por actividad"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "El playbook define Miro para talleres y reuniones apoyadas en un tablero visual colaborativo. Figma se usa para el diseño de interfaces y prototipos, y Delivery Plans para los planes de liberación; ninguna sirve para mover tarjetas libremente en dos ejes."
    },
    {
      "id": "TL15",
      "dimension": "tools",
      "tipo": "unica",
      "pregunta": "Según el playbook, ¿dónde deben cargarse los documentos necesarios para el desarrollo?",
      "opciones": [
        "Todos en una carpeta compartida de OneDrive del squad",
        "Los transversales en la Wiki de Azure DevOps y los específicos adjuntos al PBI correspondiente",
        "Todos como adjuntos en el ticket de ServiceNow",
        "Los transversales en la Ficha de la Iniciativa y los específicos en Microsoft Project"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Para centralizar la información en una única herramienta, los documentos transversales van en la sección Wiki (Overview) de Azure DevOps y los específicos se adjuntan al PBI, como imagen en la descripción o en Attachments."
    },
    {
      "id": "TL16",
      "dimension": "tools",
      "tipo": "unica",
      "pregunta": "¿Qué funcionalidad de Azure Boards se usa para gestionar los planes de liberación (fechas, hitos y PBIs asignados a cada release)?",
      "opciones": [
        "Delivery Plans",
        "Sprint Taskboard",
        "Queries",
        "Backlog de Epics"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "Los releases se gestionan en la sección Delivery Plans, que permite crear planes de liberación, definir fechas, agregar hitos, asignar PBIs y seguir visualmente su estado."
    },
    {
      "id": "TL17",
      "dimension": "tools",
      "tipo": "unica",
      "pregunta": "En Azure Boards, un PBI no puede abordarse hasta que otro esté terminado. ¿Qué tipo de vínculo corresponde?",
      "opciones": [
        "Parent / Child",
        "Predecessor / Successor",
        "Related",
        "Duplicate"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Predecessor indica el PBI que debe realizarse antes; Successor, el que no puede hacerse hasta terminar el actual. Parent/Child expresa contención (el padre no se cierra hasta que se cierren sus hijos) y Related, PBIs que deben liberarse juntos."
    },
    {
      "id": "TL18",
      "dimension": "tools",
      "tipo": "unica",
      "pregunta": "En el flujo de incidentes productivos, ¿qué rol recibe el incidente desde el Nivel 1 en ServiceNow y lo asigna al especialista adecuado?",
      "opciones": [
        "El Product Owner del squad",
        "El Chapter Lead de la disciplina",
        "El Scrum Master del squad",
        "El Agile Coach de la tribu"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El Nivel 1 categoriza y deriva el incidente a la bandeja del chapter según el catálogo de aplicaciones. El Chapter Lead lo asigna según especialidad, carga y SLA; el PO puede objetar la asignación o repriorizar dentro del squad."
    },
    {
      "id": "ME01",
      "dimension": "met",
      "tipo": "multiple",
      "pregunta": "Según la Guía Kanban (2020), ¿cuáles son las medidas de flujo que deben seguirse como mínimo?",
      "opciones": [
        "WIP (trabajo en curso)",
        "Throughput",
        "Work Item Age (antigüedad del ítem)",
        "Cycle Time",
        "Lead Time",
        "Eficiencia de flujo"
      ],
      "correctas": [
        "A",
        "B",
        "C",
        "D"
      ],
      "explicacion": "La Guía Kanban establece cuatro medidas obligatorias: WIP, Throughput, Work Item Age y Cycle Time. Lead time y eficiencia de flujo son útiles, pero no forman parte del mínimo de la Guía."
    },
    {
      "id": "ME02",
      "dimension": "met",
      "tipo": "unica",
      "pregunta": "La gerencia quiere comparar la velocidad (story points por sprint) entre equipos para premiar al más productivo. ¿Cuál es la mejor respuesta?",
      "opciones": [
        "Hacerlo, normalizando los story points con una tabla de equivalencias común",
        "Explicar que los puntos son relativos a cada equipo y proponer métricas de resultado",
        "Hacerlo sólo entre equipos del mismo tamaño y con el mismo tipo de trabajo",
        "Reemplazar los puntos por horas estimadas para que la comparación sea justa"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "La velocidad es una herramienta de planificación interna, no una medida de productividad comparable. Normalizarla o pasarla a horas activa la Ley de Goodhart: las estimaciones se inflan sin que cambie el valor."
    },
    {
      "id": "ME03",
      "dimension": "met",
      "tipo": "unica",
      "pregunta": "Los cycle times de un equipo tienen una distribución con cola larga a la derecha. ¿Qué conviene usar para comunicar expectativas de entrega?",
      "opciones": [
        "El promedio, porque considera todos los ítems terminados",
        "Un percentil alto: \"el 85% se termina en 10 días o menos\"",
        "La mediana, porque es robusta frente a los valores atípicos",
        "El promedio más una desviación estándar, como margen de seguridad"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Los cycle times rara vez siguen una distribución normal; el promedio y la desviación estándar engañan. La mediana sólo da un 50% de confianza. Un percentil alto comunica probabilidad y es la base de las SLE."
    },
    {
      "id": "ME04",
      "dimension": "met",
      "tipo": "unica",
      "pregunta": "¿Por qué es valiosa la métrica Work Item Age?",
      "opciones": [
        "Mide el tiempo que un ítem pasa en el backlog antes de comenzar",
        "Permite detectar ítems en riesgo mientras están en curso",
        "Permite calcular el cycle time sin esperar que los ítems terminen",
        "Mide la antigüedad de lo terminado para estimar deuda técnica"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Work Item Age es el tiempo transcurrido desde que un ítem empezó y aún no terminó. Es un indicador adelantado que permite intervenir a tiempo (por ejemplo, en la Daily), antes de que el cycle time sea alto."
    },
    {
      "id": "ME05",
      "dimension": "met",
      "tipo": "unica",
      "pregunta": "Un ítem tardó 20 días desde que empezó hasta que se entregó, pero sólo hubo trabajo activo sobre él durante 4 días. ¿Cuál es su eficiencia de flujo?",
      "opciones": [
        "80%",
        "20%",
        "25%",
        "16%"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Eficiencia de flujo = tiempo activo / tiempo total = 4 / 20 = 20%. En la mayoría de las organizaciones es baja (15–40%) por esperas y traspasos: la mejora suele estar en las colas, no en \"trabajar más rápido\"."
    },
    {
      "id": "ME06",
      "dimension": "met",
      "tipo": "unica",
      "pregunta": "La dirección fija como meta \"duplicar la velocidad del equipo este semestre\". ¿Qué es lo más probable que ocurra?",
      "opciones": [
        "Que el equipo encuentre formas de entregar el doble de valor",
        "Que los story points se inflen sin cambio real en lo entregado",
        "Que el equipo reduzca su WIP para enfocarse en terminar",
        "Que mejore la previsibilidad de las entregas del equipo"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Ley de Goodhart: \"cuando una medida se convierte en objetivo, deja de ser una buena medida\". La velocidad es fácil de mover cambiando las estimaciones, sin que cambie el valor entregado."
    },
    {
      "id": "ME07",
      "dimension": "met",
      "tipo": "unica",
      "pregunta": "Un stakeholder pregunta \"¿cuándo estarán listos estos 40 ítems?\". ¿Qué técnica responde de forma probabilística a partir de datos históricos?",
      "opciones": [
        "Dividir la cantidad de ítems por el throughput promedio semanal",
        "Simulación de Monte Carlo sobre el throughput histórico",
        "Estimar los 40 ítems con Planning Poker y proyectar con la velocidad",
        "Estimar en horas cada ítem y sumar con un margen del 20%"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Monte Carlo muestrea repetidamente el throughput histórico y produce una distribución de fechas (\"85% de probabilidad antes del 15/03\"). Las otras opciones dan una única fecha determinística, sin probabilidad."
    },
    {
      "id": "ME08",
      "dimension": "met",
      "tipo": "unica",
      "pregunta": "¿Cuál es el uso correcto del Squad Health Check (modelo de Spotify)?",
      "opciones": [
        "Construir un ranking entre squads para decidir dónde invertir en coaching",
        "Autoevaluación del squad para conversar y decidir mejoras, sin comparar equipos",
        "Evaluar el desempeño del Agile Coach o Scrum Master de cada squad",
        "Medir la madurez ágil de cada squad frente a un modelo estándar"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El Health Check es para que el equipo reflexione y para que el liderazgo vea patrones agregados. Si se usa para comparar, evaluar personas o auditar madurez, las respuestas dejan de ser honestas."
    },
    {
      "id": "ME09",
      "dimension": "met",
      "tipo": "multiple",
      "pregunta": "¿Cuáles son las áreas clave de valor (Key Value Areas) de Evidence-Based Management (Scrum.org)?",
      "opciones": [
        "Valor actual (Current Value)",
        "Valor no realizado (Unrealized Value)",
        "Capacidad de innovar (Ability to Innovate)",
        "Tiempo de llegada al mercado (Time to Market)",
        "Eficiencia operativa (Operational Efficiency)",
        "Calidad del producto (Product Quality)"
      ],
      "correctas": [
        "A",
        "B",
        "C",
        "D"
      ],
      "explicacion": "EBM propone cuatro áreas clave de valor: Current Value, Unrealized Value, Time to Market y Ability to Innovate. La calidad aparece como medida dentro de Ability to Innovate, no como área propia."
    },
    {
      "id": "ME10",
      "dimension": "met",
      "tipo": "unica",
      "pregunta": "¿Cuál es la diferencia más habitual entre lead time y cycle time?",
      "opciones": [
        "Son equivalentes; el término cambia según el framework",
        "El lead time va del pedido a la entrega al cliente; el cycle time, del inicio del trabajo a su fin",
        "El lead time va del commit a producción; el cycle time, del inicio del trabajo al commit",
        "El cycle time incluye el tiempo en el backlog; el lead time, sólo el desarrollo"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El lead time refleja la experiencia del cliente (cuánto espera desde que pide); el cycle time, el sistema de entrega del equipo. \"Del commit a producción\" es el lead time for changes de DORA, una medida distinta."
    },
    {
      "id": "ME11",
      "dimension": "met",
      "tipo": "unica",
      "pregunta": "Un área quiere medir la \"agilidad\" por el porcentaje de utilización de cada persona, con una meta del 100%. ¿Cuál es el problema principal?",
      "opciones": [
        "Que es difícil de medir con precisión en el trabajo de conocimiento",
        "Que cerca del 100% de utilización las colas y esperas crecen de forma no lineal",
        "Que incentiva a registrar horas de forma poco precisa",
        "Que no considera las horas extra ni las ausencias del equipo"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "La teoría de colas muestra que, al acercarse al 100% de utilización, los tiempos de espera se disparan. Optimizar la ocupación de las personas en vez del flujo del trabajo aumenta el lead time."
    },
    {
      "id": "ME12",
      "dimension": "met",
      "tipo": "multiple",
      "pregunta": "¿Cuáles de estas métricas son accionables (frente a métricas de vanidad)?",
      "opciones": [
        "Tasa de conversión por cohorte de clientes",
        "Percentil 85 del cycle time de las últimas 8 semanas",
        "Total acumulado de usuarios registrados desde el lanzamiento",
        "Cantidad de despliegues acumulados desde el inicio del producto"
      ],
      "correctas": [
        "A",
        "B"
      ],
      "explicacion": "Las métricas accionables comparan contra una referencia y cambian decisiones (cohortes, percentiles en una ventana de tiempo). Los totales acumulados siempre crecen y no indican si estamos mejorando."
    },
    {
      "id": "ME13",
      "dimension": "met",
      "tipo": "unica",
      "pregunta": "¿Qué recomienda el framework SPACE para medir la productividad de equipos de desarrollo?",
      "opciones": [
        "Usar la actividad (commits, pull requests) como indicador principal y complementarla con encuestas",
        "Combinar varias dimensiones con datos de sistema y de percepción, sin depender de una sola métrica",
        "Construir un índice único ponderado por desarrollador para comparar desempeño",
        "Adoptar las métricas DORA como medida suficiente de la productividad"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "SPACE (Forsgren et al., 2021) propone cinco dimensiones: satisfacción, desempeño, actividad, colaboración, y eficiencia y flujo. Recomienda usar al menos tres y combinar datos de sistema con percepciones."
    },
    {
      "id": "ME14",
      "dimension": "met",
      "tipo": "unica",
      "pregunta": "Según el Proyecto Aristóteles de Google, ¿qué factor es el más importante para la efectividad de un equipo?",
      "opciones": [
        "Seguridad psicológica",
        "Confiabilidad (dependability)",
        "Estructura y claridad",
        "Significado del trabajo"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "El estudio identificó cinco factores: seguridad psicológica, confiabilidad, estructura y claridad, significado e impacto. La seguridad psicológica resultó ser, por lejos, el más determinante."
    },
    {
      "id": "ME15",
      "dimension": "met",
      "tipo": "unica",
      "pregunta": "¿Qué mide el indicador \"Puntos de Change\" definido para los squads?",
      "opciones": [
        "El % de puntos comprometidos al inicio del sprint que efectivamente se entregaron al finalizarlo",
        "El % de puntos dedicados a Historias de Usuario (Change) sobre el total de Change + Run",
        "La cantidad de cambios a producción que pasaron por el proceso formal de control de cambios",
        "La variación porcentual de la velocidad del squad respecto del promedio de los últimos sprints"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Puntos de Change mide la \"centricidad en el cliente\": qué parte del esfuerzo va a funcionalidades para usuarios frente al trabajo de Run (incidencias, spikes, habilitadores técnicos o normativos). Si el Run crece más de lo previsto, hay que buscar causas. La primera opción describe Cumplimiento de Sprint."
    },
    {
      "id": "ME16",
      "dimension": "met",
      "tipo": "unica",
      "pregunta": "En el marco de indicadores del modelo, ¿qué es el Release Lead Time?",
      "opciones": [
        "El tiempo promedio que tarda un PBI en pasar de un estado A a un estado B cualquiera",
        "El tiempo transcurrido desde que un PBI se comienza a trabajar hasta que se libera a producción",
        "La cantidad de liberaciones a producción por unidad de tiempo",
        "El tiempo desde que se aprueba la iniciativa en la QBR hasta su primer release"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El playbook define Lead Time como el tiempo entre dos estados cualesquiera (por ejemplo, de \"Priorizado\" a \"Terminado\"); el Release Lead Time es el caso particular desde que se empieza a trabajar hasta la liberación a producción. La cantidad de liberaciones es la Frecuencia de liberaciones."
    },
    {
      "id": "ME17",
      "dimension": "met",
      "tipo": "unica",
      "pregunta": "¿Cuál de estas NO es una de las cinco dimensiones del marco de indicadores de desempeño de los squads?",
      "opciones": [
        "Generación de valor",
        "Disponibilidad, confiabilidad y seguridad",
        "Eficiencia de costos por desarrollador",
        "Desarrollo del equipo"
      ],
      "correctas": [
        "C"
      ],
      "explicacion": "Los 19 indicadores se agrupan en cinco dimensiones: Generación de valor, Productividad, Disponibilidad/confiabilidad/seguridad, Automatización de pruebas y Desarrollo del equipo (clima y madurez ágil). No se mide la eficiencia de costos por persona."
    },
    {
      "id": "ME18",
      "dimension": "met",
      "tipo": "unica",
      "pregunta": "Un gerente propone convertir los puntos de historia a horas para controlar mejor la capacidad del squad. Según el modelo, ¿qué corresponde?",
      "opciones": [
        "Hacerlo, usando la velocidad promedio del squad como factor de conversión",
        "Explicar que los puntos son relativos a una historia pivote y no equivalen a horas",
        "Hacerlo sólo para habilitadores y deuda técnica, que no aportan valor de negocio",
        "Reemplazar los puntos por horas desde el próximo trimestre en todos los squads"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El playbook define los puntos de historia como unidades de esfuerzo relativas a un patrón de comparación (pivote 5, serie de Fibonacci) que no deben convertirse en horas. La velocidad sirve para la previsibilidad del propio squad, no como medida de horas."
    },
    {
      "id": "CO01",
      "dimension": "coach",
      "tipo": "unica",
      "pregunta": "En el marco de competencias de Agile Coaching de Lyssa Adkins y Michael Spayd, ¿qué distingue la postura de coaching profesional de la de mentoring?",
      "opciones": [
        "El coaching se enfoca en el desempeño a corto plazo y el mentoring en la carrera a largo plazo",
        "En coaching el cliente encuentra sus respuestas; en mentoring el mentor comparte su experiencia",
        "En coaching se enseñan prácticas ágiles; en mentoring se acompaña la dimensión emocional",
        "El coaching se aplica a equipos y el mentoring a personas individuales"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "En el marco de Adkins y Spayd, el coaching profesional parte de que el cliente tiene las respuestas y el coach no aconseja; el mentoring transfiere la experiencia del mentor (y la enseñanza, el conocimiento). El Agile Coach elige la postura según el contexto."
    },
    {
      "id": "CO02",
      "dimension": "coach",
      "tipo": "unica",
      "pregunta": "¿Cuál es la secuencia del modelo GROW de John Whitmore?",
      "opciones": [
        "Goal, Reality, Options, Will",
        "Reality, Goal, Options, Will",
        "Goal, Options, Reality, Will",
        "Goal, Resources, Options, Wrap-up"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "GROW: definir la meta (Goal), explorar la realidad actual (Reality), generar opciones (Options) y acordar la voluntad y los próximos pasos (Will / Way forward)."
    },
    {
      "id": "CO03",
      "dimension": "coach",
      "tipo": "unica",
      "pregunta": "¿Cuál de estas es la pregunta más poderosa en una sesión de coaching con un equipo?",
      "opciones": [
        "¿No creen que convendría dividir mejor las historias?",
        "¿Por qué el equipo no cumplió lo comprometido en el sprint?",
        "¿Qué les gustaría que fuera distinto al final de este sprint?",
        "¿Probaron hacer refinamiento dos veces por semana?"
      ],
      "correctas": [
        "C"
      ],
      "explicacion": "Una pregunta poderosa es abierta, no inductiva ni enjuiciadora, y promueve la reflexión y la responsabilidad. \"¿No creen que…?\" y \"¿Probaron…?\" son consejos disfrazados; \"¿Por qué no…?\" genera defensividad."
    },
    {
      "id": "CO04",
      "dimension": "coach",
      "tipo": "unica",
      "pregunta": "Un equipo recién formado tiene discusiones frecuentes sobre roles y formas de trabajar. Según Tuckman, ¿en qué etapa está y qué conviene?",
      "opciones": [
        "Forming; dar claridad de objetivos y roles, y esperar a que el conflicto se resuelva solo",
        "Storming; facilitar el conflicto constructivo y ayudar a construir acuerdos de trabajo",
        "Norming; reforzar las normas existentes y escalar los conflictos al líder",
        "Storming; reubicar a quienes discuten en otros equipos para reducir la fricción"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Storming es una etapa natural (forming, storming, norming, performing). Evitar o suprimir el conflicto lo prolonga; facilitarlo y generar acuerdos de trabajo ayuda a pasar a norming."
    },
    {
      "id": "CO05",
      "dimension": "coach",
      "tipo": "unica",
      "pregunta": "Según \"Las cinco disfunciones de un equipo\" de Patrick Lencioni, ¿cuál es la disfunción base sobre la que se apoyan las demás?",
      "opciones": [
        "Falta de compromiso",
        "Ausencia de confianza",
        "Temor al conflicto",
        "Evitación de responsabilidades"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "La pirámide de Lencioni: ausencia de confianza → temor al conflicto → falta de compromiso → evitación de responsabilidades → falta de atención a los resultados."
    },
    {
      "id": "CO06",
      "dimension": "coach",
      "tipo": "unica",
      "pregunta": "Un equipo nuevo en Scrum no conoce las prácticas básicas. Según Shu-Ha-Ri, ¿qué postura conviene adoptar como coach?",
      "opciones": [
        "Coaching no directivo, para que el equipo descubra por sí mismo las prácticas que le funcionan",
        "Enseñar y acompañar a seguir las prácticas tal como están definidas, con postura de enseñanza y mentoring",
        "Alentar desde el inicio la adaptación del framework al contexto del equipo",
        "Observar sin intervenir durante algunos sprints para diagnosticar antes de actuar"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "En Shu se aprenden y siguen las reglas; en Ha se adaptan; en Ri se trascienden. Con equipos principiantes, enseñar y hacer mentoring es más útil que el coaching no directivo o que adaptar el framework antes de entenderlo."
    },
    {
      "id": "CO07",
      "dimension": "coach",
      "tipo": "unica",
      "pregunta": "Un gerente le pide al coach que le cuente lo que dijo cada persona del equipo en las sesiones individuales. ¿Qué debería hacer?",
      "opciones": [
        "Compartir la información, ya que el sponsor es quien contrató el proceso de coaching",
        "Mantener la confidencialidad acordada y ofrecer sólo patrones generales consentidos por el equipo",
        "Compartir sólo lo relacionado con el desempeño, que es de interés legítimo del gerente",
        "Sugerir que el gerente asista a las sesiones individuales para escuchar de primera mano"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El acuerdo de coaching (contracting) define objetivos, roles y confidencialidad para todas las partes. Romperlo, aunque sea parcialmente, destruye la confianza; el coach puede compartir tendencias acordadas sin identificar a nadie."
    },
    {
      "id": "CO08",
      "dimension": "coach",
      "tipo": "unica",
      "pregunta": "En el modelo Co-Active, ¿qué caracteriza la escucha de nivel 3?",
      "opciones": [
        "Escucha interna: lo que significa para mí lo que dice la otra persona",
        "Escucha focalizada: atención total en las palabras de la otra persona",
        "Escucha global: el entorno, la energía, las emociones y lo no dicho",
        "Escucha reflexiva: parafrasear para confirmar que se comprendió"
      ],
      "correctas": [
        "C"
      ],
      "explicacion": "Nivel 1: escucha interna. Nivel 2: escucha focalizada en el otro. Nivel 3: escucha global, que incluye el contexto, la energía del grupo y la intuición. La escucha reflexiva es una técnica, no un nivel del modelo."
    },
    {
      "id": "CO09",
      "dimension": "coach",
      "tipo": "multiple",
      "pregunta": "¿Qué técnicas favorecen decisiones grupales inclusivas, donde todas las voces se escuchan?",
      "opciones": [
        "Fist of Five (puño de cinco)",
        "1-2-4-All (Liberating Structures)",
        "Votación a mano alzada inmediatamente después de que el líder presenta su propuesta",
        "Discusión abierta hasta que se alcance consenso entre quienes más participan"
      ],
      "correctas": [
        "A",
        "B"
      ],
      "explicacion": "Fist of Five muestra rápidamente el grado de acuerdo de todos; 1-2-4-All da espacio a la reflexión individual antes de la conversación grupal. Votar tras la propuesta del líder lo ancla, y la discusión abierta favorece a las voces dominantes."
    },
    {
      "id": "CO10",
      "dimension": "coach",
      "tipo": "unica",
      "pregunta": "En una retrospectiva, dos subgrupos se acusan mutuamente (\"ellos siempre...\"), se forman bandos y lo importante pasó a ser ganar la discusión. Según Speed Leas, ¿en qué nivel de conflicto están?",
      "opciones": [
        "Nivel 2: Desacuerdo",
        "Nivel 3: Contienda",
        "Nivel 4: Cruzada",
        "Nivel 5: Guerra mundial"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Leas: 1 Problema a resolver, 2 Desacuerdo (autoprotección, lenguaje cauteloso), 3 Contienda (ganar importa más que resolver, bandos, generalizaciones), 4 Cruzada (proteger al propio grupo, posturas ideológicas), 5 Guerra mundial (destruir al otro)."
    },
    {
      "id": "CO11",
      "dimension": "coach",
      "tipo": "unica",
      "pregunta": "Después de un año, el equipo depende del Agile Coach para facilitar todos sus eventos. ¿Qué es lo más adecuado?",
      "opciones": [
        "Seguir facilitando todos los eventos para no poner en riesgo los resultados del equipo",
        "Transferir capacidades: rotar la facilitación, hacer mentoring y planificar la salida",
        "Retirarse por completo para que el equipo desarrolle autonomía por necesidad",
        "Designar al Scrum Master como facilitador permanente de todos los eventos del equipo"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El objetivo del coach es que el equipo pueda prescindir de él. Generar dependencia es un antipatrón; retirarse de golpe o trasladar la dependencia a otra persona no construye la capacidad del equipo."
    },
    {
      "id": "CO12",
      "dimension": "coach",
      "tipo": "unica",
      "pregunta": "¿Cuál de estos feedbacks sigue correctamente el modelo SBI (Situación–Comportamiento–Impacto)?",
      "opciones": [
        "En la planning de ayer interrumpiste a Ana; eso muestra falta de respeto hacia el equipo",
        "En la planning de ayer interrumpiste a Ana tres veces; ella dejó de participar y perdimos su análisis",
        "Últimamente interrumpes mucho en las reuniones y eso está afectando al equipo",
        "En la planning de ayer estuviste muy dominante; deberías dejar hablar más a los demás"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "SBI describe una situación concreta, un comportamiento observable y su impacto. Las otras opciones atribuyen intenciones (\"falta de respeto\"), generalizan (\"últimamente\") o juzgan y aconsejan (\"dominante\")."
    },
    {
      "id": "CO13",
      "dimension": "coach",
      "tipo": "unica",
      "pregunta": "Un equipo sabe hacer pruebas automatizadas pero no ve el valor de adoptarlas. ¿Qué postura suele ser más útil?",
      "opciones": [
        "Enseñanza: volver a explicar la técnica con ejemplos tomados del propio código del equipo",
        "Coaching: explorar con preguntas qué les importa, qué obstáculos ven y qué valor tendría",
        "Mentoring: contar cómo otros equipos obtuvieron beneficios concretos con esta práctica",
        "Pedir al líder que incorpore la práctica como obligatoria en la Definition of Done"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Si falta conocimiento, conviene enseñar o hacer mentoring; si el obstáculo es la motivación o la percepción de valor, el coaching ayuda a que el equipo encuentre sus propias razones y se comprometa. Imponerla genera cumplimiento, no adopción."
    },
    {
      "id": "CO14",
      "dimension": "coach",
      "tipo": "unica",
      "pregunta": "¿Cuál es la definición de seguridad psicológica de Amy Edmondson?",
      "opciones": [
        "Un clima de confianza en el que los miembros evitan el conflicto para preservar las relaciones",
        "La creencia compartida de que el equipo es un lugar seguro para asumir riesgos interpersonales",
        "La certeza de que no habrá consecuencias negativas por un bajo desempeño",
        "Un ambiente en el que las decisiones se toman por consenso y todos están de acuerdo"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Seguridad psicológica no significa comodidad, ausencia de conflicto ni falta de exigencia: es poder preguntar, admitir errores o disentir sin miedo a represalias. Habilita el conflicto productivo."
    },
    {
      "id": "CO15",
      "dimension": "coach",
      "tipo": "unica",
      "pregunta": "Un Chapter Lead quiere un formato para las sesiones del chapter sin agenda predefinida, en el que los participantes propongan y voten los temas a discutir. ¿Qué práctica es?",
      "opciones": [
        "Lean Coffee",
        "Skill Matrix",
        "Aprendiendo de mis errores",
        "Retrospectiva Starfish"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "Lean Coffee es el formato \"predeterminado\" sugerido para las sesiones de chapter: sin agenda, los participantes deciden colectivamente qué discutir y generan acciones. La Skill Matrix mapea capacidades y \"Aprendiendo de mis errores\" comparte fallas y aprendizajes."
    },
    {
      "id": "CO16",
      "dimension": "coach",
      "tipo": "unica",
      "pregunta": "¿Para qué usa un Chapter Lead la Skill Matrix?",
      "opciones": [
        "Para evaluar el desempeño individual y definir los bonos de los miembros del chapter",
        "Para mapear competencias del chapter, priorizar brechas y planificar su desarrollo",
        "Para asignar las historias de usuario a cada miembro según su nivel en cada skill",
        "Para medir la velocidad individual de cada miembro y compararla dentro del chapter"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "La Skill Matrix mapea las capacidades técnicas y blandas del chapter (escala de \"sin competencia\" a \"alto dominio\"), prioriza las brechas más profundas y orienta un plan de acción para fortalecer el conocimiento cruzado. Cada Chapter Lead define los skills de su especialidad."
    },
    {
      "id": "CO17",
      "dimension": "coach",
      "tipo": "unica",
      "pregunta": "¿Qué caracteriza a los Acuerdos del squad (Team Canvas) definidos en el modelo?",
      "opciones": [
        "Los define el Scrum Master al inicio y se mantienen fijos durante toda la iniciativa",
        "El squad los construye, se compromete con ellos y los revisa en las retrospectivas",
        "Los aprueba el Chapter Lead como parte de los estándares y lineamientos de su práctica",
        "Forman parte de la Definition of Done y se revisan antes de aceptar cada historia"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Los acuerdos son reglas de convivencia definidas y comprometidas por todo el squad (valores, comportamientos aceptados y rechazados). Se construyen en el Team Discovery y se debaten en cada retrospectiva para mejorarlos."
    },
    {
      "id": "OF01",
      "dimension": "o365",
      "tipo": "unica",
      "pregunta": "¿Qué aplicación de Microsoft 365 organiza las tareas de un equipo en \"buckets\" sobre un tablero visual y se integra como pestaña en Teams?",
      "opciones": [
        "Microsoft Planner",
        "Microsoft To Do",
        "Microsoft Lists",
        "OneNote"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "Planner organiza tareas en buckets, con asignaciones, etiquetas y gráficos, y se integra como pestaña de Teams. To Do es para tareas personales; Lists gestiona listas con vistas, pero no usa buckets."
    },
    {
      "id": "OF02",
      "dimension": "o365",
      "tipo": "unica",
      "pregunta": "Quieres hacer una retrospectiva asincrónica con respuestas anónimas dentro de la organización. ¿Qué opción lo garantiza?",
      "opciones": [
        "Microsoft Forms con la opción \"Registrar nombre\" desactivada",
        "Microsoft Forms restringido a \"Solo personas de mi organización\", con su configuración por defecto",
        "Una lista de Microsoft Lists con permisos de edición para todo el equipo",
        "Un documento de Word en coautoría donde cada persona agrega sus comentarios"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "Forms permite no registrar el nombre de quien responde. Restringir a la organización, por defecto, registra el nombre; Lists y Word muestran quién creó o editó cada entrada."
    },
    {
      "id": "OF03",
      "dimension": "o365",
      "tipo": "unica",
      "pregunta": "¿Qué condición permite la coautoría en tiempo real de un documento de Word o Excel?",
      "opciones": [
        "Activar \"Compartir libro\" en la versión de escritorio de Excel",
        "Guardar el archivo en OneDrive o SharePoint y compartir el enlace",
        "Enviarlo como adjunto en Outlook con seguimiento de cambios activado",
        "Habilitar el control de cambios en Word antes de enviarlo a los revisores"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "La coautoría moderna requiere que el archivo esté en la nube (OneDrive/SharePoint). \"Compartir libro\" es una función heredada, y los adjuntos o el control de cambios generan copias o revisiones secuenciales, no edición simultánea."
    },
    {
      "id": "OF04",
      "dimension": "o365",
      "tipo": "unica",
      "pregunta": "¿Qué herramienta del ecosistema Microsoft es más adecuada para un dashboard interactivo y actualizable de métricas de flujo, alimentado desde Jira y Excel y compartido con stakeholders?",
      "opciones": [
        "Power BI",
        "Excel con tablas y gráficos dinámicos",
        "Microsoft Lists con vistas personalizadas",
        "Power Apps"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "Power BI se conecta a múltiples fuentes, programa actualizaciones y publica tableros interactivos. Excel sirve para análisis puntuales, pero no es la herramienta adecuada para un tablero compartido y actualizable; Power Apps sirve para construir aplicaciones."
    },
    {
      "id": "OF05",
      "dimension": "o365",
      "tipo": "unica",
      "pregunta": "Tienes los cycle times en A2:A100. ¿Qué fórmula de Excel devuelve el percentil 85?",
      "opciones": [
        "=PERCENTILE.INC(A2:A100,0.85)",
        "=PERCENTRANK.INC(A2:A100,0.85)",
        "=PERCENTILE.INC(A2:A100,85)",
        "=QUARTILE.INC(A2:A100,0.85)"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "PERCENTILE.INC (PERCENTIL.INC en Excel en español) recibe k entre 0 y 1. Con 85 devuelve error; PERCENTRANK hace el cálculo inverso (la posición de un valor), y QUARTILE sólo acepta 0 a 4."
    },
    {
      "id": "OF06",
      "dimension": "o365",
      "tipo": "unica",
      "pregunta": "Necesitas colaborar en Teams con personas de otro equipo (o de otra organización) sin darles acceso al resto de tu equipo. ¿Qué usas?",
      "opciones": [
        "Un canal estándar",
        "Un canal privado",
        "Un canal compartido",
        "Agregarlas como invitadas al equipo"
      ],
      "correctas": [
        "C"
      ],
      "explicacion": "Los canales compartidos permiten sumar personas o equipos externos sólo a ese canal. Los privados restringen el acceso a miembros del propio equipo, y agregar invitados al equipo les da acceso a todos sus canales estándar."
    },
    {
      "id": "OF07",
      "dimension": "o365",
      "tipo": "unica",
      "pregunta": "Quieres que la lista de acciones de la retrospectiva pueda editarse desde un chat de Teams y quede sincronizada en un correo de Outlook. ¿Qué funcionalidad lo permite?",
      "opciones": [
        "Un componente de Microsoft Loop",
        "Un archivo de Word compartido desde OneDrive",
        "Una pestaña de Planner agregada al chat",
        "Una página de OneNote compartida"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "Los componentes de Loop son bloques \"vivos\" que se editan y sincronizan dentro del propio chat de Teams o del correo de Outlook. Las otras opciones requieren abrir otra aplicación o no se insertan como contenido editable en el correo."
    },
    {
      "id": "OF08",
      "dimension": "o365",
      "tipo": "unica",
      "pregunta": "Cada vez que alguien envía un formulario de \"impedimento\", quieres crear automáticamente una tarea en Planner y avisar en un canal de Teams. ¿Qué herramienta usas?",
      "opciones": [
        "Power Automate",
        "Power Apps",
        "Reglas de Outlook",
        "Las notificaciones de Planner"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "Power Automate conecta aplicaciones con flujos de disparador y acción (Forms → Planner → Teams) sin programar. Power Apps construye aplicaciones; las reglas de Outlook sólo actúan sobre correos."
    },
    {
      "id": "OF09",
      "dimension": "o365",
      "tipo": "unica",
      "pregunta": "Para comunicar novedades de la transformación ágil a toda la organización, con noticias y páginas para pocos autores y muchos lectores, ¿qué es más adecuado?",
      "opciones": [
        "Un sitio de comunicación de SharePoint",
        "Un sitio de grupo (team site) de SharePoint",
        "Un canal estándar en un equipo de Teams de toda la organización",
        "Un bloc de OneNote compartido con toda la organización"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "Los sitios de comunicación están diseñados para difundir información a una audiencia amplia. Los sitios de grupo y los canales de Teams están pensados para colaborar dentro de un equipo."
    },
    {
      "id": "OF10",
      "dimension": "o365",
      "tipo": "unica",
      "pregunta": "Facilitas un 1-2-4-All remoto en una reunión de Teams con 16 personas. ¿Qué funcionalidad de la reunión permite trabajar en parejas y grupos de cuatro y volver al plenario?",
      "opciones": [
        "Salas para grupos pequeños (breakout rooms)",
        "Modo Juntos (Together mode)",
        "Canales privados creados para cada grupo",
        "Reuniones paralelas, una por grupo, desde el calendario"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "Las salas para grupos pequeños dividen a los participantes y los devuelven a la sesión principal, algo clave para estructuras como 1-2-4-All. Las reuniones o canales paralelos obligan a salir y volver a entrar."
    },
    {
      "id": "OF11",
      "dimension": "o365",
      "tipo": "unica",
      "pregunta": "Tienes en Excel una tabla de ítems terminados con su fecha de cierre. ¿Cuál es la forma más directa de obtener el throughput por semana?",
      "opciones": [
        "Un gráfico de dispersión con las fechas de cierre de cada ítem",
        "Una tabla dinámica que agrupe la fecha de cierre por semana",
        "BUSCARV sobre la fecha de cierre de cada ítem terminado",
        "Un filtro automático por rango de fechas, contando cada semana"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Una tabla dinámica agrupada por fechas (en rangos de 7 días) con el recuento de ítems da el throughput semanal de forma inmediata y reutilizable; luego puede graficarse como serie temporal."
    },
    {
      "id": "OF12",
      "dimension": "o365",
      "tipo": "multiple",
      "pregunta": "¿Qué prácticas de colaboración en Microsoft Teams son recomendables para un equipo ágil?",
      "opciones": [
        "Organizar canales por tema o flujo de trabajo",
        "Anclar como pestañas del canal el tablero, la wiki y los documentos clave",
        "Usar el chat grupal para todo y los canales sólo para anuncios",
        "Guardar los archivos en el OneDrive de cada persona y compartir enlaces en el chat"
      ],
      "correctas": [
        "A",
        "B"
      ],
      "explicacion": "Los canales temáticos dan contexto y facilitan la búsqueda; las pestañas acercan las herramientas a la conversación. El chat grupal pierde contexto y los archivos en OneDrive personal dependen de su dueño."
    },
    {
      "id": "OF13",
      "dimension": "o365",
      "tipo": "unica",
      "pregunta": "Necesitas encontrar un horario común para un taller interno con 12 stakeholders de distintas áreas. ¿Qué funcionalidad de Outlook muestra su disponibilidad?",
      "opciones": [
        "El Asistente de programación (Scheduling Assistant)",
        "Microsoft Bookings",
        "La vista de calendario de grupo de Microsoft 365",
        "Las respuestas automáticas de los invitados"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "El Asistente de programación muestra la disponibilidad libre/ocupada de cada invitado y sugiere horarios en común. Bookings sirve para que otros reserven citas con un servicio, y el calendario de grupo muestra los eventos del grupo, no la disponibilidad de cada persona."
    },
    {
      "id": "DI01",
      "dimension": "disc",
      "tipo": "unica",
      "pregunta": "¿Qué describe mejor el enfoque \"Dual-Track Agile\"?",
      "opciones": [
        "Un equipo de discovery valida ideas y entrega especificaciones a un equipo de delivery",
        "Discovery y delivery ocurren en paralelo y de forma continua, con el mismo equipo involucrado",
        "Un sprint de discovery seguido de varios sprints de delivery, de forma alternada",
        "Un track para iniciativas estratégicas y otro para mantenimiento y bugs"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "En Dual-Track (Desirée Sy, Jeff Patton, Marty Cagan) el discovery valida ideas mientras el delivery construye lo ya validado, en paralelo y con el mismo equipo. No son fases alternadas ni equipos separados con traspasos."
    },
    {
      "id": "DI02",
      "dimension": "disc",
      "tipo": "unica",
      "pregunta": "En el Opportunity Solution Tree de Teresa Torres, ¿cuál es el orden de arriba hacia abajo?",
      "opciones": [
        "Resultado deseado → Oportunidades → Soluciones → Pruebas de supuestos",
        "Oportunidad → Resultado deseado → Soluciones → Experimentos",
        "Resultado deseado → Soluciones → Oportunidades → Experimentos",
        "Visión → Resultado deseado → Soluciones → Métricas"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "El árbol parte de un resultado medible, lo conecta con oportunidades (necesidades, dolores y deseos del cliente), luego con soluciones y finalmente con experimentos que prueban sus supuestos."
    },
    {
      "id": "DI03",
      "dimension": "disc",
      "tipo": "unica",
      "pregunta": "¿Cuál de estos NO es uno de los cuatro grandes riesgos de producto según Marty Cagan?",
      "opciones": [
        "Valor: ¿lo comprarán o elegirán usarlo?",
        "Usabilidad: ¿sabrán cómo usarlo?",
        "Viabilidad del negocio: ¿funciona para el resto del negocio?",
        "Adopción: ¿lo adoptará la organización internamente?"
      ],
      "correctas": [
        "D"
      ],
      "explicacion": "Los cuatro riesgos de Cagan son valor, usabilidad, factibilidad (¿podemos construirlo?) y viabilidad del negocio. La \"adopción interna\" no es uno de ellos."
    },
    {
      "id": "DI04",
      "dimension": "disc",
      "tipo": "unica",
      "pregunta": "¿Qué enunciado expresa mejor un \"job\" según Jobs To Be Done?",
      "opciones": [
        "Como contador de una pyme, quiero una conciliación automática para ahorrar tiempo",
        "Cuando cierro el mes, quiero conciliar mis cobros rápido, para no perder la tarde con extractos",
        "Contador de pyme, de 35 a 50 años, que usa Excel a diario y valora la rapidez",
        "El usuario necesita una integración con su banco que exporte los movimientos a Excel"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "JTBD se enfoca en el progreso que la persona busca en una situación concreta (cuando… quiero… para…), sin asumir la solución. La primera es una historia de usuario con solución incluida, la tercera es una persona y la cuarta, un requisito."
    },
    {
      "id": "DI05",
      "dimension": "disc",
      "tipo": "unica",
      "pregunta": "Un equipo lleva 9 meses construyendo su \"MVP\" y todavía no lo mostró a ningún usuario. ¿Qué le dirías?",
      "opciones": [
        "Que es razonable si el producto es complejo: el MVP debe estar completo para competir",
        "Que el MVP busca aprender con el mínimo esfuerzo: hay que validar ya la hipótesis más riesgosa",
        "Que conviene lanzarlo a toda la base de clientes para maximizar los datos obtenidos",
        "Que conviene recortar alcance para completar el MVP en tres meses más"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "En Lean Startup, el MVP es la versión que permite el máximo aprendizaje validado con el menor esfuerzo; puede ser un prototipo, un landing o un concierge. Recortar alcance pero seguir sin validar no resuelve el problema."
    },
    {
      "id": "DI06",
      "dimension": "disc",
      "tipo": "unica",
      "pregunta": "Siguiendo \"The Mom Test\" (Rob Fitzpatrick), ¿cuál es la mejor pregunta en una entrevista de discovery?",
      "opciones": [
        "¿Usarías una app que concilie tus pagos automáticamente?",
        "¿Cuál es el mayor problema que tienes con la conciliación de pagos?",
        "Cuéntame la última vez que conciliaste pagos: ¿qué hiciste y cuánto te llevó?",
        "Del 1 al 10, ¿qué tan útil te parecería una conciliación automática?"
      ],
      "correctas": [
        "C"
      ],
      "explicacion": "The Mom Test recomienda preguntar por comportamientos pasados y concretos. Las hipotéticas y las valoraciones generan respuestas complacientes, y \"¿cuál es tu mayor problema?\" invita a generalizar opiniones."
    },
    {
      "id": "DI07",
      "dimension": "disc",
      "tipo": "unica",
      "pregunta": "¿Cuál es el orden de las etapas de Design Thinking según la d.school de Stanford?",
      "opciones": [
        "Empatizar, Definir, Idear, Prototipar, Testear",
        "Definir, Empatizar, Idear, Prototipar, Testear",
        "Empatizar, Idear, Definir, Prototipar, Testear",
        "Empatizar, Definir, Prototipar, Idear, Testear"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "Empatizar → Definir → Idear → Prototipar → Testear. En la práctica el proceso es iterativo y se vuelve a etapas anteriores según lo aprendido."
    },
    {
      "id": "DI08",
      "dimension": "disc",
      "tipo": "unica",
      "pregunta": "En el Doble Diamante (Design Council), ¿qué fases componen el primer diamante?",
      "opciones": [
        "Descubrir y Definir: explorar y acotar el problema",
        "Descubrir y Desarrollar: explorar el problema y generar soluciones",
        "Definir y Desarrollar: priorizar el problema y diseñar la solución",
        "Desarrollar y Entregar: prototipar y lanzar la solución"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "Primer diamante: Discover y Define (diverger y converger sobre el problema). Segundo diamante: Develop y Deliver (diverger y converger sobre la solución)."
    },
    {
      "id": "DI09",
      "dimension": "disc",
      "tipo": "unica",
      "pregunta": "En un Assumption Mapping (David Bland), ¿qué supuestos conviene testear primero?",
      "opciones": [
        "Los poco importantes y con mucha evidencia",
        "Los muy importantes y con poca evidencia",
        "Los poco importantes y con poca evidencia",
        "Los muy importantes y con mucha evidencia"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Los supuestos críticos para el éxito y con poca evidencia son los \"saltos de fe\": si son falsos, la idea cae. Los importantes con mucha evidencia ya están razonablemente validados."
    },
    {
      "id": "DI10",
      "dimension": "disc",
      "tipo": "unica",
      "pregunta": "En un User Story Map (Jeff Patton), ¿para qué sirven los cortes horizontales (release slices)?",
      "opciones": [
        "Para agrupar las historias por componente técnico y facilitar su asignación",
        "Para definir el mínimo conjunto de historias que recorre todo el flujo y logra un resultado",
        "Para ordenar las actividades del backbone según la secuencia del usuario",
        "Para separar, dentro de cada actividad, las historias de mayor y menor prioridad"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El backbone se ordena de izquierda a derecha según el recorrido del usuario; cada corte horizontal agrupa lo mínimo necesario a lo largo de todo ese recorrido para lograr un resultado, evitando entregas por capas técnicas."
    },
    {
      "id": "DI11",
      "dimension": "disc",
      "tipo": "unica",
      "pregunta": "Antes de construir una funcionalidad premium, el equipo agrega un botón \"Activar premium\" que lleva a un mensaje de \"próximamente\" y mide cuántos lo pulsan. ¿Qué técnica es?",
      "opciones": [
        "A/B testing",
        "Fake door",
        "Concierge MVP",
        "Wizard of Oz"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El fake door mide la demanda real antes de construir. En el Concierge y el Wizard of Oz el cliente recibe el servicio (hecho a mano, abiertamente o detrás de una interfaz), y el A/B testing compara variantes existentes."
    },
    {
      "id": "DI12",
      "dimension": "disc",
      "tipo": "multiple",
      "pregunta": "¿Qué señales indican que el discovery es \"teatro\" y no un aprendizaje real?",
      "opciones": [
        "Las decisiones de producto ya estaban tomadas antes de investigar",
        "Sólo el PO habla con clientes y luego entrega requisitos cerrados al equipo",
        "Se prueban supuestos con prototipos de baja fidelidad antes de construir",
        "Las entrevistas se enfocan en comportamientos pasados de los clientes"
      ],
      "correctas": [
        "A",
        "B"
      ],
      "explicacion": "Si la decisión ya estaba tomada, la investigación sólo busca confirmarla. Teresa Torres propone que el trío de producto (producto, diseño, ingeniería) participe del contacto con clientes. Las otras dos son prácticas sanas."
    },
    {
      "id": "DI13",
      "dimension": "disc",
      "tipo": "unica",
      "pregunta": "¿Cuál de estas hipótesis está mejor formulada para un experimento?",
      "opciones": [
        "Creemos que el nuevo checkout mejorará la experiencia de compra y, en consecuencia, aumentará las ventas del canal digital",
        "Creemos que mostrar el costo total antes del pago bajará el abandono de carrito de clientes nuevos del 70% al 60% en 4 semanas",
        "Si mostramos el costo total antes del pago a todos los clientes, bajará el abandono del carrito en el checkout",
        "Creemos que los clientes nuevos abandonan por el costo de envío; lo validaremos con entrevistas en profundidad"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Una hipótesis testeable define el cambio, el segmento, la métrica, el umbral y el plazo, de modo que pueda confirmarse o refutarse. Las demás carecen de métrica, umbral o plazo."
    },
    {
      "id": "DI14",
      "dimension": "disc",
      "tipo": "unica",
      "pregunta": "Según el modelo Kano, ¿cómo se clasifica una funcionalidad que el cliente no espera, que genera entusiasmo cuando está, pero cuya ausencia no genera insatisfacción?",
      "opciones": [
        "Básica (must-be)",
        "De desempeño (lineal)",
        "Atractiva (delighter)",
        "Indiferente"
      ],
      "correctas": [
        "C"
      ],
      "explicacion": "Kano: las básicas generan insatisfacción si faltan; las de desempeño aumentan la satisfacción proporcionalmente; las atractivas sorprenden; las indiferentes no influyen. Con el tiempo, las atractivas tienden a volverse básicas."
    },
    {
      "id": "DI15",
      "dimension": "disc",
      "tipo": "unica",
      "pregunta": "Según Teresa Torres, ¿qué caracteriza al \"Continuous Discovery\"?",
      "opciones": [
        "Un ciclo de investigación al inicio de cada trimestre, alineado con los OKRs",
        "Contacto al menos semanal con clientes, del propio equipo que construye",
        "Encuestas continuas dentro del producto, analizadas por el equipo de research",
        "Pruebas de usabilidad antes de cada release, realizadas por el equipo de UX"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "La definición de Torres: \"al menos semanalmente, puntos de contacto con clientes, del equipo que construye el producto, realizando pequeñas actividades de investigación en busca de un resultado deseado\"."
    },
    {
      "id": "DI16",
      "dimension": "disc",
      "tipo": "unica",
      "pregunta": "¿Cuál es el propósito del Inception de producto en el modelo?",
      "opciones": [
        "Aprobar el presupuesto, el caso de negocio y las capacidades de la iniciativa",
        "Reducir la incertidumbre, explicitar riesgos y alinear expectativas para construir el backlog",
        "Identificar las dependencias entre todos los squads de la tribu para el próximo trimestre",
        "Validar el incremento con clientes reales antes de liberarlo de forma masiva"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El Inception (inspirado en Inception Deck y Lean Inception) reúne al squad, negocio y stakeholders para enfocarse en un mismo objetivo, reducir incertidumbre y producir el insumo del Product Backlog. Aprobar capacidades es propio de la QBR e identificar dependencias de la tribu, del Big Room Planning."
    },
    {
      "id": "DI17",
      "dimension": "disc",
      "tipo": "unica",
      "pregunta": "En el Product Vision Board, ¿en qué sección se responde \"¿Qué problema soluciona este producto y qué beneficios trae?\"",
      "opciones": [
        "Grupo objetivo",
        "Necesidades",
        "Producto",
        "Objetivos de negocio"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El Product Vision Board tiene una Visión y cuatro bloques: Grupo objetivo (quiénes lo usarán), Necesidades (qué problema resuelve y qué beneficios trae), Producto (funcionalidades principales y diferenciales) y Objetivos de negocio (cómo beneficia a la compañía)."
    },
    {
      "id": "DI18",
      "dimension": "disc",
      "tipo": "unica",
      "pregunta": "Durante el Inception, el squad decide que un riesgo no será resuelto y lo tratará como una restricción. ¿Cómo se clasifica?",
      "opciones": [
        "Resuelto",
        "Asignado",
        "Aceptado",
        "Mitigado"
      ],
      "correctas": [
        "C"
      ],
      "explicacion": "Los riesgos identificados se clasifican en cuatro estados: Resuelto (el equipo decide que no existe), Asignado (alguien se apropia de resolverlo), Aceptado (se asume como restricción) y Mitigado (hay un plan que reduce su impacto)."
    },
    {
      "id": "DI19",
      "dimension": "disc",
      "tipo": "unica",
      "pregunta": "Un squad en operación continuará el próximo trimestre una iniciativa conocida, aprobada en la QBR y con baja incertidumbre. ¿Qué actividad corresponde?",
      "opciones": [
        "Un Inception completo de cinco días con todo el squad",
        "Un Descubrimiento de Producto/Servicio con los siete frentes",
        "La Actualización del Release Plan (día y medio)",
        "Un nuevo Kick-off de lanzamiento del squad con el sponsor"
      ],
      "correctas": [
        "C"
      ],
      "explicacion": "El árbol de decisión del diseño de iniciativas indica que, para una iniciativa que continúa o con baja incertidumbre, basta con actualizar el Release Plan: un subconjunto del Inception (USM, release plan, dependencias, estimación, DoR/DoD y refinamiento) en día y medio."
    },
    {
      "id": "DV01",
      "dimension": "devops",
      "tipo": "multiple",
      "pregunta": "¿Cuáles son las cuatro métricas clave de DORA para medir el desempeño de entrega de software?",
      "opciones": [
        "Frecuencia de despliegue",
        "Lead time de cambios",
        "Tasa de fallos de cambios",
        "Tiempo de recuperación ante un fallo",
        "Tiempo medio entre fallos (MTBF)",
        "Cobertura de pruebas automatizadas"
      ],
      "correctas": [
        "A",
        "B",
        "C",
        "D"
      ],
      "explicacion": "DORA (Accelerate) mide el throughput (frecuencia de despliegue, lead time de cambios) y la estabilidad (tasa de fallos de cambios, tiempo de recuperación). MTBF y cobertura no forman parte de las cuatro claves."
    },
    {
      "id": "DV02",
      "dimension": "devops",
      "tipo": "unica",
      "pregunta": "¿Qué significa el acrónimo CALMS en DevOps?",
      "opciones": [
        "Culture, Automation, Lean, Measurement, Sharing",
        "Culture, Automation, Lean, Monitoring, Security",
        "Collaboration, Automation, Lean, Measurement, Sharing",
        "Culture, Agility, Lean, Measurement, Sharing"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "CALMS (Jez Humble, Damon Edwards, John Willis) es un marco para evaluar la adopción de DevOps: Cultura, Automatización, Lean, Medición y Compartir."
    },
    {
      "id": "DV03",
      "dimension": "devops",
      "tipo": "unica",
      "pregunta": "¿Cuáles son \"Las Tres Vías\" (The Three Ways) descritas en The Phoenix Project y The DevOps Handbook?",
      "opciones": [
        "Flujo, retroalimentación, y aprendizaje y experimentación continuos",
        "Flujo, automatización de la entrega y medición del desempeño",
        "Colaboración entre Dev y Ops, automatización y mejora continua",
        "Integración continua, entrega continua y despliegue continuo"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "Primera vía: optimizar el flujo de izquierda a derecha. Segunda: amplificar el feedback de derecha a izquierda. Tercera: cultura de experimentación y aprendizaje continuo."
    },
    {
      "id": "DV04",
      "dimension": "devops",
      "tipo": "unica",
      "pregunta": "¿Cuál es la diferencia entre Continuous Delivery y Continuous Deployment?",
      "opciones": [
        "Continuous Delivery automatiza hasta el entorno de pruebas; Continuous Deployment, hasta producción",
        "En Delivery cada cambio queda listo para producción y se libera por decisión; en Deployment se despliega automáticamente",
        "Continuous Delivery integra el código varias veces al día; Continuous Deployment lo lleva a producción",
        "Son equivalentes; la diferencia es sólo de nomenclatura entre proveedores de herramientas"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Ambas requieren que cada cambio sea desplegable a producción. La diferencia es si el paso a producción es una decisión de negocio (Delivery) o automático (Deployment). Integrar varias veces al día es Continuous Integration."
    },
    {
      "id": "DV05",
      "dimension": "devops",
      "tipo": "unica",
      "pregunta": "En la estrategia de branches GitFlow definida en el playbook, ¿qué rama contiene el código desplegado en producción y cuál se usa para corregir errores productivos?",
      "opciones": [
        "Development y Feature",
        "Main y Hotfix",
        "Release y Hotfix",
        "Main y Release"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Main contiene el código del artefacto desplegado en producción; Hotfix corrige errores productivos y sus cambios deben propagarse a Development. Release genera los artefactos de staging (pruebas de QA) y Feature son ramas temporales por funcionalidad."
    },
    {
      "id": "DV06",
      "dimension": "devops",
      "tipo": "unica",
      "pregunta": "¿Qué permiten principalmente los feature flags (feature toggles)?",
      "opciones": [
        "Separar el despliegue (deploy) de la liberación (release) a los usuarios",
        "Eliminar por completo la necesidad de ramas en el control de versiones",
        "Revertir cambios de esquema de base de datos sin downtime",
        "Ejecutar las pruebas automatizadas sólo sobre las funcionalidades activas"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "Con feature flags el código se despliega desactivado y se libera de forma gradual o por segmento, lo que habilita experimentos y apagado inmediato. No resuelven las migraciones de datos y requieren limpieza para no acumular deuda."
    },
    {
      "id": "DV07",
      "dimension": "devops",
      "tipo": "unica",
      "pregunta": "Tras una caída en producción, el gerente quiere identificar \"quién tuvo la culpa\". ¿Qué práctica propondrías?",
      "opciones": [
        "Un análisis de causa raíz que identifique el error humano para reforzar la capacitación",
        "Un postmortem sin culpables, centrado en las causas sistémicas y las mejoras",
        "Agregar una aprobación del comité de cambios (CAB) a todos los despliegues",
        "Documentar el incidente y asignar la acción correctiva a la persona involucrada"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Los postmortems blameless generan seguridad para contar lo que pasó realmente. Detenerse en el \"error humano\" oculta las causas del sistema, y más aprobaciones suelen empeorar el lead time sin mejorar la estabilidad (según DORA)."
    },
    {
      "id": "DV08",
      "dimension": "devops",
      "tipo": "unica",
      "pregunta": "¿Qué significa \"shift left\" en el contexto de calidad y seguridad?",
      "opciones": [
        "Incorporar pruebas y controles de seguridad lo antes posible en el ciclo",
        "Trasladar responsabilidades de operación y guardia al equipo de desarrollo",
        "Priorizar las pruebas de extremo a extremo sobre las pruebas unitarias",
        "Asignar un equipo de calidad independiente desde el inicio del proyecto"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "Detectar defectos y vulnerabilidades temprano es más barato. DevSecOps integra la seguridad en el pipeline (SAST, análisis de dependencias). Que desarrollo opere sus servicios es \"you build it, you run it\", otro concepto."
    },
    {
      "id": "DV09",
      "dimension": "devops",
      "tipo": "unica",
      "pregunta": "Un cambio tarda 30 días desde el commit hasta producción, pero sólo hay 2 días de trabajo efectivo. ¿Qué técnica ayuda más a encontrar dónde está la demora?",
      "opciones": [
        "Value Stream Mapping del flujo de entrega",
        "Diagrama de Ishikawa sobre la demora",
        "Análisis de Pareto de los defectos",
        "Medición de la velocidad del equipo"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "El Value Stream Mapping visualiza cada etapa con su tiempo de proceso y su tiempo de espera, y hace evidentes los traspasos, colas y aprobaciones que alargan el lead time. Ishikawa ayuda a explorar causas, pero no mide dónde se acumula la espera."
    },
    {
      "id": "DV10",
      "dimension": "devops",
      "tipo": "unica",
      "pregunta": "Un servicio tiene un SLO de disponibilidad del 99,9% mensual y ya consumió todo su error budget. Según la práctica de SRE, ¿qué corresponde?",
      "opciones": [
        "Seguir lanzando funcionalidades, reforzando las pruebas manuales antes de cada despliegue",
        "Priorizar el trabajo de confiabilidad y frenar los cambios riesgosos hasta recuperar el presupuesto",
        "Ajustar el SLO al 99,5% para reflejar la realidad actual del servicio",
        "Escalar la infraestructura para absorber la carga y continuar con el roadmap"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El error budget (100% − SLO) equilibra innovación y estabilidad: mientras hay presupuesto se puede arriesgar; cuando se agota, la prioridad pasa a la confiabilidad. Bajar el SLO para \"cumplir\" desvirtúa el acuerdo."
    },
    {
      "id": "DV11",
      "dimension": "devops",
      "tipo": "unica",
      "pregunta": "¿Qué describe un despliegue canary?",
      "opciones": [
        "Exponer la nueva versión a un pequeño porcentaje de usuarios y ampliarla gradualmente",
        "Mantener dos entornos idénticos y conmutar todo el tráfico de uno a otro",
        "Reemplazar las instancias de a una hasta actualizar todo el clúster",
        "Desplegar el código desactivado y activarlo después mediante un flag"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "Canary limita el impacto de un problema a una porción de usuarios. Las otras opciones describen blue-green, rolling update y dark launch, respectivamente."
    },
    {
      "id": "DV12",
      "dimension": "devops",
      "tipo": "unica",
      "pregunta": "¿Qué es Infraestructura como Código (IaC)?",
      "opciones": [
        "Definir y aprovisionar la infraestructura mediante archivos declarativos versionados y ejecutables",
        "Automatizar la creación de servidores con scripts que operaciones ejecuta manualmente",
        "Documentar la arquitectura de infraestructura en el repositorio junto al código",
        "Usar servicios administrados en la nube para no gestionar infraestructura"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "IaC (Terraform, Bicep, CloudFormation) crea entornos reproducibles, permite revisar cambios con pull requests y evita la deriva de configuración. Scripts ejecutados a mano o documentación no cumplen esas propiedades."
    },
    {
      "id": "DV13",
      "dimension": "devops",
      "tipo": "multiple",
      "pregunta": "¿Cuáles de estos son antipatrones comunes al adoptar DevOps?",
      "opciones": [
        "Que un equipo DevOps ejecute todos los despliegues por los squads, convirtiéndose en un nuevo traspaso sin transferir capacidades",
        "Hacer despliegues grandes y poco frecuentes para \"reducir el riesgo\"",
        "Que el equipo que desarrolla un servicio participe de su guardia operativa",
        "Desplegar varias veces al día en horario laboral"
      ],
      "correctas": [
        "A",
        "B"
      ],
      "explicacion": "DevOps es responsabilidad compartida. Un equipo (o CoE) de DevOps habilita con pipelines, estándares y transferencia de capacidades, pero si ejecuta todo por los squads se vuelve un silo. Los lotes grandes aumentan el riesgo; \"you build it, you run it\" y desplegar a menudo son buenas prácticas."
    },
    {
      "id": "DV14",
      "dimension": "devops",
      "tipo": "unica",
      "pregunta": "Según el versionado semántico (Semantic Versioning) adoptado, una nueva versión rompe la compatibilidad hacia atrás de una API. ¿Qué número debe incrementarse?",
      "opciones": [
        "MAJOR",
        "MINOR",
        "PATCH",
        "LABEL"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "MAJOR.MINOR.PATCH: MAJOR para cambios que rompen la compatibilidad, MINOR para nuevas funcionalidades compatibles y PATCH para correcciones sin funcionalidades nuevas. El LABEL es opcional e indica pre-releases o ramas (alpha, rc)."
    },
    {
      "id": "DV15",
      "dimension": "devops",
      "tipo": "unica",
      "pregunta": "¿Qué tipo de pipeline valida la integridad del build y la ausencia de errores de compilación, sin generar artefactos ni requerir aprobación?",
      "opciones": [
        "Build Validation (BV)",
        "Continuous Integration (CI)",
        "Continuous Delivery (CD)",
        "Release pipeline de staging"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "El playbook define tres tipos: Build Validation (valida el build, no genera artefacto), Continuous Integration (compila, prueba y empaqueta artefactos) y Continuous Delivery (despliega los artefactos en los distintos ambientes)."
    },
    {
      "id": "DV16",
      "dimension": "devops",
      "tipo": "unica",
      "pregunta": "¿Quién aprueba la ejecución del pipeline cuando se hace un pull request de la rama Release hacia Main (ambiente de producción)?",
      "opciones": [
        "El equipo de desarrollo, ya que la rama Release ya fue validada por QA en staging",
        "El Chapter Lead de desarrollo, QA y el PO, sin reemplazar la gestión de cambios del banco",
        "El CoE de DevOps, responsable de configurar y ejecutar todos los pipelines del banco",
        "El Scrum Master y el Agile Coach, como garantes del cumplimiento metodológico"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Hacia Main se requiere la aprobación del Chapter Lead de desarrollo, QA y el PO. Esa aprobación es de la ejecución del pipeline: si modifica producción, además debe cumplirse la normativa de gestión de cambios vigente, que no se reemplaza."
    },
    {
      "id": "DV17",
      "dimension": "devops",
      "tipo": "unica",
      "pregunta": "Un squad necesita un nuevo repositorio de código y su pipeline. Según el playbook, ¿cómo se gestiona?",
      "opciones": [
        "Cada Developer crea el repositorio y su pipeline en Azure DevOps cuando lo necesita",
        "Se solicita al CoE de DevOps mediante un ticket en ServiceNow",
        "Lo crea el Product Owner desde Azure Boards al aprobar la historia que lo requiere",
        "Se solicita en el Big Room Planning y lo crea la fábrica de software asignada"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "La creación y configuración de repositorios y pipelines está a cargo del CoE de DevOps mediante tickets en ServiceNow. Los arquitectos de solución, junto con los Chapter Leads, definen cuántos repositorios crear (uno por artefacto) siguiendo la convención de nombres."
    },
    {
      "id": "SC01",
      "dimension": "scale",
      "tipo": "unica",
      "pregunta": "En el modelo operativo, ¿cuál es la responsabilidad principal del Chapter Lead?",
      "opciones": [
        "Definir y priorizar el backlog de los squads donde trabajan los miembros de su chapter",
        "Liderar su disciplina: estándares, staffing, formación y evaluación de sus miembros",
        "Coordinar las dependencias entre squads de la tribu y facilitar el Big Room Planning",
        "Responder por los resultados de negocio de la tribu y distribuir la capacidad entre squads"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El Chapter Lead es líder jerárquico y funcional de hasta 10–15 especialistas desplegados en squads: asegura estándares y lineamientos (\"el cómo\"), asigna perfiles a los squads, apoya la selección, impulsa la formación y evalúa el desempeño. El backlog lo prioriza el PO y el BRP lo facilita el Agile Coach."
    },
    {
      "id": "SC02",
      "dimension": "scale",
      "tipo": "unica",
      "pregunta": "¿Cuál es el rol del Tribe Lead?",
      "opciones": [
        "Alinear y coordinar los squads a través de los POs: dirección, iniciativas, dependencias y riesgos",
        "Acompañar a los squads como coach, responsable de su madurez ágil y de la facilitación de sus eventos",
        "Liderar técnicamente la tribu, definiendo la arquitectura y los estándares de todas las disciplinas",
        "Actuar como Product Owner del squad más crítico y representar a los demás POs ante la dirección"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "El Tribe Lead alinea y coordina a los squads mediante los Product Owners para impactar los objetivos estratégicos: fija dirección, mantiene el alineamiento, define iniciativas, gestiona dependencias y riesgos y aprovecha sinergias. La madurez ágil es foco del Agile Coach y los estándares técnicos, de los chapters."
    },
    {
      "id": "SC03",
      "dimension": "scale",
      "tipo": "unica",
      "pregunta": "¿Qué es un Centro de Excelencia (CoE) en el modelo?",
      "opciones": [
        "Una comunidad voluntaria de práctica, abierta a toda la organización, sobre un tema de interés común",
        "Especialistas con expertise escaso, no desplegados en squads, que apoyan ad-hoc y definen lineamientos",
        "Especialistas de una misma disciplina desplegados en los squads, liderados por un Chapter Lead",
        "Un área de soporte que mantiene su estructura original y apoya puntualmente, sin responsabilidad de entrega"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El CoE reúne expertise escaso (por ejemplo Cloud o DevOps), con un CoE Lead y no más de ~15 miembros no desplegados. Apoya a los squads bajo demanda, crea assets y lineamientos transversales, evoluciona la práctica y transfiere capacidades. La tercera opción describe un chapter y la cuarta, una función de soporte."
    },
    {
      "id": "SC04",
      "dimension": "scale",
      "tipo": "unica",
      "pregunta": "Una práctica es requerida de forma recurrente, pero no a diario, por varios squads y hay pocos especialistas en el banco. ¿Cómo conviene agruparla?",
      "opciones": [
        "Como chapter, desplegando un especialista fijo en cada uno de los squads que la usan",
        "Como CoE, con apoyo ad-hoc a los squads y definición de lineamientos de la práctica",
        "Como función de soporte, sin participación en los eventos ni en el Big Room Planning",
        "Como squad independiente que recibe y prioriza los pedidos de los demás squads"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El playbook recomienda el chapter para prácticas de alta demanda en el trabajo diario y con perfiles suficientes para dedicarlos a los squads; el CoE, para prácticas requeridas recurrentemente pero no a diario y con perfiles altamente escasos."
    },
    {
      "id": "SC05",
      "dimension": "scale",
      "tipo": "unica",
      "pregunta": "Una desarrolladora trabaja en el squad de Tarjetas de Crédito y pertenece al chapter de Desarrollo Digital. ¿Cómo se reparten las responsabilidades sobre ella?",
      "opciones": [
        "El PO define en qué trabaja; el Chapter Lead vela por el cómo y también la evalúa",
        "El Chapter Lead define en qué trabaja; el PO evalúa su desempeño técnico en el squad",
        "El Tribe Lead define en qué trabaja y la evalúa, con aportes del PO y del Chapter Lead",
        "El PO es su jefe directo para todo efecto; el chapter es sólo una comunidad de práctica"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "Es una matriz: el PO define \"el qué\" (prioridades del squad) y el chapter define \"el cómo\". Los miembros del chapter se evalúan por el cumplimiento de los resultados de los squads y, además, por su Chapter Lead, y mantienen el vínculo con su área funcional."
    },
    {
      "id": "SC06",
      "dimension": "scale",
      "tipo": "unica",
      "pregunta": "¿Cuáles son las principales responsabilidades de la QBR (Quarterly Business Review)?",
      "opciones": [
        "Identificar dependencias técnicas y de negocio entre squads y ajustar los release plans",
        "Evaluar resultados y aprobar las iniciativas y capacidades de cada squad para el trimestre",
        "Demostrar el incremento consolidado del trimestre y recibir feedback de los stakeholders",
        "Revisar cada semana el progreso de los squads, sus métricas, riesgos e impedimentos"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "La QBR (trimestral, ~4 h, con Gerencia General, gerencias, Tribe Leads y POs) socializa la generación de valor, aprueba las iniciativas de cada squad según su impacto y aprueba la asignación de capacidades. Las dependencias se trabajan en el Big Room Planning y el seguimiento semanal en la Sincronización de Tribu."
    },
    {
      "id": "SC07",
      "dimension": "scale",
      "tipo": "unica",
      "pregunta": "Según el modelo, ¿qué caracteriza a un squad?",
      "opciones": [
        "Un equipo armado para un proyecto, con fecha de inicio y fin, que se disuelve al entregarlo",
        "Un equipo dedicado, multidisciplinario y end-to-end de ~12 personas, con PO y SM",
        "Un equipo de especialistas de una misma disciplina que atiende pedidos de varias tribus",
        "Un equipo de hasta 5 personas cuyos miembros se reasignan cada trimestre según la demanda"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El squad es la mínima unidad operativa: equipo multidisciplinario de ~12 personas con las disciplinas necesarias para minimizar dependencias, con PO dedicado (el qué) y SM, autonomía en el cómo y duración indefinida. Los equipos que se disuelven al final son propios de los proyectos tradicionales."
    },
    {
      "id": "SC08",
      "dimension": "scale",
      "tipo": "unica",
      "pregunta": "¿Cuál es la composición típica de una tribu según el modelo?",
      "opciones": [
        "Entre 2 y 4 squads y hasta 40 personas",
        "Entre 5 y 15 squads y de 50 a 150 personas",
        "Entre 15 y 30 squads y de 150 a 300 personas",
        "No hay rango: depende del presupuesto de la línea de negocio"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "La tribu agrupa squads con misiones relacionadas y un propósito común; su composición típica es de 5 a 15 squads y de 50 a 150 FTEs, liderados por un Tribe Lead. El límite superior se relaciona con el número de Dunbar."
    },
    {
      "id": "SC09",
      "dimension": "scale",
      "tipo": "unica",
      "pregunta": "¿Cuál de estas responsabilidades corresponde al Agile Coach en los foros de la tribu?",
      "opciones": [
        "Aprobar las iniciativas y la asignación de capacidades de cada squad en la QBR",
        "Ser responsable del Big Room Planning y facilitar la Sincronización de Tribu",
        "Evaluar el desempeño de los Scrum Masters y POs de la tribu junto al Tribe Lead",
        "Liderar la Sprint Review de cada squad y aceptar los incrementos terminados"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El Agile Coach es el responsable del BRP (con apoyo de la Oficina de Transformación), facilita la Sincronización de Tribu y acompaña a Chapter Leads y CoEs en sus foros. La aprobación de iniciativas es de la QBR y la aceptación de incrementos, del PO."
    },
    {
      "id": "SC10",
      "dimension": "scale",
      "tipo": "unica",
      "pregunta": "Un banco renombró sus gerencias como tribus y sus áreas como squads, pero mantiene proyectos con PM, equipos que se disuelven al terminar y presupuesto por proyecto. ¿Cuál es el problema de fondo?",
      "opciones": [
        "Que faltan Chapter Leads dedicados en cada squad para asegurar la calidad técnica",
        "Que se copió la estructura sin cambiar cómo se financia, gobierna y decide",
        "Que los squads deberían tener al menos 15 personas para cubrir todas las disciplinas",
        "Que faltan CoEs por especialidad que coordinen el trabajo de los proyectos"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Los productos digitales trabajan con equipos de duración indefinida, con misión, y valor que se captura incrementalmente; las capacidades se aprueban en la QBR. Renombrar áreas sin cambiar cómo se financia, gobierna y decide es \"cargo cult\"."
    },
    {
      "id": "SC11",
      "dimension": "scale",
      "tipo": "unica",
      "pregunta": "¿Cuál es el objetivo principal del Big Room Planning (BRP)?",
      "opciones": [
        "Aprobar las iniciativas del trimestre y la asignación de capacidades por squad",
        "Identificar y gestionar dependencias, asegurando la viabilidad de lo aprobado en la QBR",
        "Demostrar el incremento consolidado del trimestre a los stakeholders ampliados",
        "Revisar y recalibrar los OKRs anuales del banco junto a la Junta Directiva"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El BRP (trimestral, ~2 días para ~10 squads) toma las decisiones de la QBR, los backlogs y release plans, y busca identificar dependencias y riesgos, generar planes de acción y alinear a sponsors, CoEs, Chapter Leads, áreas de soporte y proveedores. La aprobación de iniciativas y capacidades es de la QBR."
    },
    {
      "id": "SC12",
      "dimension": "scale",
      "tipo": "unica",
      "pregunta": "¿Qué significa \"alineamiento alto, autonomía alta\" en este modelo?",
      "opciones": [
        "El Tribe Lead define qué hacer, los Chapter Leads cómo hacerlo, y el squad ejecuta",
        "Los responsables del \"qué\" dan contexto y prioridades; el squad decide el cómo",
        "Cada squad define su estrategia y sus objetivos, y luego el liderazgo los consolida",
        "Los squads deciden el cómo, siempre que respeten un plan anual de entregables fijo"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "La autonomía sin alineamiento genera caos; el alineamiento sin autonomía, micromanagement. Los responsables del qué (Tribe Lead, PO) dan dirección y prioridades; el squad, multifuncional, tiene autonomía en el cómo, dentro de los estándares que aportan chapters y CoEs."
    },
    {
      "id": "SC13",
      "dimension": "scale",
      "tipo": "unica",
      "pregunta": "El playbook evalúa dos opciones para el Chapter Lead. ¿Cuál es la recomendada y por qué?",
      "opciones": [
        "Dentro de un squad, porque mantiene el foco técnico y conoce de cerca el trabajo diario",
        "Dedicado al 100%, porque permite chapters más grandes y foco en gestión de personas",
        "Rotativo, elegido por los miembros cada trimestre para distribuir el liderazgo",
        "Compartido entre varias disciplinas, para minimizar la cantidad de perfiles de liderazgo"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "La opción recomendada es el Chapter Lead dedicado: no pertenece a un squad, lidera chapters de 10–15 miembros y se orienta a la gestión de personas. El Chapter Lead dentro de un squad conviene para chapters pequeños (5–10) y con inclinación más técnica."
    },
    {
      "id": "SC14",
      "dimension": "scale",
      "tipo": "multiple",
      "pregunta": "¿Qué afirmaciones sobre Chapters y CoEs son correctas según el modelo?",
      "opciones": [
        "Los miembros del chapter están desplegados en los squads",
        "Los miembros del CoE apoyan a los squads con dedicación ad-hoc, sin estar desplegados en ellos",
        "El CoE es idóneo para prácticas de alta demanda en el trabajo diario de los squads",
        "El alcance del chapter es transversal a toda la organización, incluso fuera de los squads ágiles"
      ],
      "correctas": [
        "A",
        "B"
      ],
      "explicacion": "El chapter despliega a sus miembros en los squads y es idóneo para prácticas de alta demanda diaria, con alcance dentro de los squads. El CoE apoya ad-hoc sin estar desplegado, con alcance transversal a toda la organización, incluso fuera de los squads."
    },
    {
      "id": "SC15",
      "dimension": "scale",
      "tipo": "unica",
      "pregunta": "¿Qué caracteriza al Product Owner de un squad en el modelo?",
      "opciones": [
        "Un líder de TI que traduce los requerimientos del negocio a especificaciones técnicas",
        "Dedicado, máxima autoridad de priorización del backlog y voz del cliente",
        "Comparte su tiempo entre varios squads y delega la priorización en el Scrum Master",
        "Su principal responsabilidad es reportar el avance a la Oficina de Transformación"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El PO está dedicado y 100% disponible para el equipo, representa al cliente y a los interesados, es la autoridad máxima en la priorización del backlog, lidera el refinamiento y gestiona el release plan buscando maximizar el valor."
    },
    {
      "id": "SC16",
      "dimension": "scale",
      "tipo": "unica",
      "pregunta": "¿Cómo se asigna la capacidad de los squads en este modelo?",
      "opciones": [
        "Por proyecto, con un business case aprobado y un equipo que se disuelve al finalizar",
        "Squads estables con iniciativas y capacidades aprobadas cada trimestre en la QBR",
        "Por horas consumidas por cada squad, facturadas internamente a las áreas de negocio",
        "Con un presupuesto anual fijo por chapter, que asigna personas a los proyectos aprobados"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "La QBR aprueba trimestralmente las iniciativas de cada squad y la asignación de capacidades para asegurar costo/beneficio. Los squads son estables y de duración indefinida; no se arman ni desarman por proyecto."
    },
    {
      "id": "SC17",
      "dimension": "scale",
      "tipo": "unica",
      "pregunta": "¿Qué caracteriza a las Funciones de Soporte (por ejemplo, Legal, Procesos o Crédito y Riesgo) dentro del modelo?",
      "opciones": [
        "Se integran como miembros dedicados de cada squad que requiere su especialidad",
        "Mantienen su estructura y liderazgo, y apoyan puntualmente sin responsabilidad de entrega",
        "Se convierten en chapters, con un Chapter Lead propio desplegado en los squads",
        "Adoptan Scrum y participan obligatoriamente en todos los eventos de los squads"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Las funciones de soporte dan apoyo puntual y transversal (servicios, revisión de soluciones, lineamientos, participación en eventos a demanda) sin ser responsables de la entrega. Mantienen su estructura y forma de trabajo, y pueden evolucionar a CoE si crece la demanda."
    },
    {
      "id": "SC18",
      "dimension": "scale",
      "tipo": "multiple",
      "pregunta": "¿En qué eventos de los squads es obligatoria la participación del CoE?",
      "opciones": [
        "Big Room Planning",
        "Descubrimiento de producto (Product Discovery)",
        "Sprint Review",
        "Daily Scrum"
      ],
      "correctas": [
        "A",
        "B"
      ],
      "explicacion": "Para el CoE, el Big Room Planning y el Descubrimiento de producto son obligatorios; Sprint Planning y Refinamiento son a demanda, y la Sprint Review, opcional. No participa de la Daily del squad."
    },
    {
      "id": "SC19",
      "dimension": "scale",
      "tipo": "unica",
      "pregunta": "¿Con qué frecuencia se realiza la Sincronización de Tribu y qué se revisa en ella?",
      "opciones": [
        "Mensualmente, para revisar capacidades y aprobar las nuevas iniciativas de los squads",
        "Semanalmente, para revisar objetivos, métricas, capacidad y dependencias críticas",
        "Diariamente, como una Daily de los POs para coordinar las dependencias del día",
        "Quincenalmente, al cierre de cada sprint, junto con la Sprint Review de la tribu"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "La Sincronización de Tribu es semanal (~3 h), la lidera el Tribe Lead y la facilita el Agile Coach. Revisa avance de objetivos, métricas, capacidad y dependencias críticas; quincenalmente incluye la priorización con Chapter Leads y mensualmente con los CoEs."
    },
    {
      "id": "SC20",
      "dimension": "scale",
      "tipo": "unica",
      "pregunta": "Para los chapters de desarrollo, el playbook compara un chapter generalista con chapters especializados (Digital, Core Libra, Core Sistar). ¿Cuál se recomienda y por qué?",
      "opciones": [
        "Generalista, porque centraliza el control en un único Chapter Lead y minimiza perfiles",
        "Especializados, porque líderes con dominio profundo de cada tecnología reducen el riesgo",
        "Generalista, porque evita la coordinación entre chapters y da una visión integrada",
        "Especializados, porque reducen el costo de perfiles dedicados frente al generalista"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Se recomiendan chapters especializados para reducir riesgos: permiten un control técnico más exhaustivo en sistemas críticos. Como desventaja, requieren más perfiles dedicados (costo) y coordinación entre chapters; el generalista minimiza perfiles pero es muy difícil encontrar un líder que domine todas las tecnologías."
    },
    {
      "id": "SC21",
      "dimension": "scale",
      "tipo": "unica",
      "pregunta": "¿Cómo se realiza la Sprint Review a nivel de la Tribu Digital?",
      "opciones": [
        "Cada squad la hace por separado, sólo con su PO, su equipo y sus stakeholders directos",
        "En conjunto, cada quince días, con una demo consolidada en la última del trimestre",
        "Se reemplaza por la QBR, donde se demuestra el trabajo realizado en todo el trimestre",
        "Una vez por mes, con la Junta Directiva y el Comité Ejecutivo como audiencia"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Quincenalmente los squads de la tribu demuestran juntos su incremento, reciben feedback y alinean próximos pasos (~3 h). En la última Sprint Review del trimestre se muestra una demo consolidada de todo lo construido, con invitación ampliada a stakeholders."
    }
  ]
};
