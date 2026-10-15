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
 *               situacional: true si plantea un caso y pide decidir qué hacer (filtro "Solo situacionales")
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
      "situacional": false,
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
      "situacional": true,
      "pregunta": "A mitad del Sprint, el Product Owner pide incorporar una funcionalidad nueva (no es un incidente productivo) que, por su tamaño, haría imposible cumplir el Sprint Goal. ¿Qué es lo más coherente con la Guía Scrum?",
      "opciones": [
        "El PO lo agrega directamente, ya que es quien ordena el Sprint Backlog y responde por el valor",
        "No se hacen cambios que pongan en riesgo el Sprint Goal; si el objetivo quedó obsoleto, el PO puede cancelar el Sprint",
        "Los Developers lo incorporan y renegocian el Sprint Goal con el Scrum Master para reflejar el cambio",
        "Se agrega al Sprint Backlog y se extiende la duración del Sprint lo necesario para cumplir el Sprint Goal"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Durante el Sprint no se hacen cambios que pongan en peligro el Sprint Goal; el alcance puede renegociarse con el PO a medida que se aprende. El Sprint Backlog pertenece a los Developers, la duración del Sprint no se extiende y sólo el PO puede cancelar un Sprint. Distinto es un incidente crítico en producción, que el playbook indica atender de inmediato intercambiándolo por un PBI en curso."
    },
    {
      "id": "FW03",
      "dimension": "fw",
      "tipo": "multiple",
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": true,
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
      "situacional": false,
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
      "situacional": true,
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
      "situacional": true,
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
      "situacional": false,
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
      "situacional": true,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
      "pregunta": "Con sprints de 2 semanas, ¿qué time-box define el modelo operativo para la Sprint Planning, la Sprint Review y la Retrospectiva de cada squad, respectivamente?",
      "opciones": [
        "2 h, 1 h y 1 h",
        "4 h, 2 h y 1,5 h",
        "8 h, 4 h y 3 h",
        "4 h, 3 h y 2 h"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Para sprints de 2 semanas, a nivel de squad: Sprint Planning de máximo 4 h, Sprint Review de máximo 2 h, Retrospectiva de máximo 1,5 h y Daily de 15 min. Son proporcionales a los máximos de la Guía Scrum para sprints de un mes (8 h, 4 h y 3 h). La Sprint Review conjunta de la tribu es otro foro, de unas 3 h."
    },
    {
      "id": "FW20",
      "dimension": "fw",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "En la Sprint Review de la tribu, un stakeholder pide cambiar la prioridad de una funcionalidad para el próximo sprint. ¿Qué corresponde?",
      "opciones": [
        "El squad la incorpora al sprint en curso para demostrar capacidad de respuesta al stakeholder",
        "El PO recoge el feedback y lo refleja en el Product Backlog",
        "El Scrum Master la registra como impedimento y la escala a la Sincronización de Tribu",
        "El Tribe Lead decide en la misma sesión si cambia la prioridad para todos los squads"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "La Review existe para obtener feedback que alimente el Product Backlog. El PO es la autoridad de priorización: incorpora el pedido y lo ordena para el siguiente Sprint Planning, sin alterar el sprint en curso ni saltear su rol."
    },
    {
      "id": "FW21",
      "dimension": "fw",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "En la Daily, dos Developers inician una discusión técnica de 20 minutos sobre el diseño de un microservicio mientras el resto espera. ¿Qué haces como Agile Coach?",
      "opciones": [
        "Dejar que continúe, porque resolver el diseño es más importante que respetar el time-box",
        "Pedirles que lleven la discusión a la próxima Retrospectiva del squad, que es donde se mejora",
        "Cerrar la Daily a tiempo y que quienes lo necesiten sigan después",
        "Pedir al Chapter Lead que defina el diseño y lo comunique en la Daily siguiente"
      ],
      "correctas": [
        "C"
      ],
      "explicacion": "La Daily es para sincronizar y planificar el día hacia el Sprint Goal, en 15 minutos. Las conversaciones de detalle se hacen inmediatamente después con quienes las necesitan. La Retro no es el lugar para resolver diseño y delegar la decisión quita autonomía al squad."
    },
    {
      "id": "FW22",
      "dimension": "fw",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "A mitad de sprint el squad detecta que no llegará a completar todas las historias, aunque sí podría cumplir el Sprint Goal ajustando el alcance. ¿Qué es lo más adecuado?",
      "opciones": [
        "Extender el sprint dos días para completar todo lo planificado originalmente con el PO",
        "Renegociar con el PO el alcance, manteniendo el Sprint Goal",
        "Flexibilizar la Definition of Done para poder cerrar más historias dentro del sprint",
        "Mantener el plan sin cambios y explicar en la Review por qué no se completó todo"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El Sprint Backlog es un pronóstico: el alcance puede clarificarse y renegociarse con el PO a medida que se aprende, cuidando el Sprint Goal. La duración del sprint no se extiende y la calidad (DoD) no se reduce."
    },
    {
      "id": "FW23",
      "dimension": "fw",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "El PO llega al Sprint Planning con historias sin criterios de aceptación y con dependencias sin identificar. Según el modelo, ¿qué corresponde?",
      "opciones": [
        "Tomarlas igual y completar los criterios de aceptación con el PO durante el sprint",
        "No ingresarlas por no cumplir la DoR y reforzar el refinamiento",
        "Que el Scrum Master escriba los criterios durante la planning para no perder la sesión",
        "Estimarlas en 13 puntos para reflejar la incertidumbre y tomarlas en el sprint igual"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "La DoR se usa en el Sprint Planning para aceptar el ingreso de historias: refinadas, con criterios de aceptación y dependencias gestionadas. La causa está en el refinamiento previo (máx. 10% del sprint), que conviene fortalecer."
    },
    {
      "id": "FW24",
      "dimension": "fw",
      "tipo": "multiple",
      "situacional": true,
      "pregunta": "Las retrospectivas de un squad se volvieron repetitivas: siempre surgen los mismos temas y los accionables no se cumplen. ¿Qué acciones ayudan?",
      "opciones": [
        "Registrar cada mejora como PBI \"Accionable Retro\" concreto, con dueño y dentro del sprint",
        "Variar los formatos y enfocar la conversación en un tema con datos del sprint",
        "Reducir la retrospectiva a 15 minutos para que no resulte cansadora",
        "Que el Chapter Lead defina las mejoras y se las comunique al squad"
      ],
      "correctas": [
        "A",
        "B"
      ],
      "explicacion": "El playbook define los Accionables Retro como ítems tangibles, sin ambigüedad y con temporalidad no mayor al sprint, para que la mejora se planifique. Cambiar formatos y usar datos renueva la conversación. Acortarla o imponer mejoras desde afuera quita valor y compromiso."
    },
    {
      "id": "FW25",
      "dimension": "fw",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "A mitad de sprint aparece un incidente crítico en producción relacionado con un desarrollo del squad. ¿Cómo se aborda según el playbook?",
      "opciones": [
        "Se planifica para el próximo sprint, para no romper el compromiso asumido en el actual",
        "Se atiende ya, cambiándolo por un PBI en curso acordado con el PO",
        "Se deriva siempre a la fábrica de software para que el squad no pierda el foco",
        "Se cancela el sprint en curso y se planifica uno nuevo que incluya el incidente"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Los incidentes críticos se atienden inmediatamente intercambiándolos por algún PBI en curso, acordado con el PO; los no críticos se priorizan para próximos sprints. Además conviene reservar un porcentaje de capacidad para bugs e incidencias."
    },
    {
      "id": "FW26",
      "dimension": "fw",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Un squad de Marketing Digital recibe pedidos de campañas con prioridades que cambian a diario y entregables de duración muy variable. ¿Qué forma de trabajo sugiere el modelo?",
      "opciones": [
        "Scrum con sprints de una semana y Scrum Master, para responder rápido a los cambios",
        "Kanban con Flow Master, gestionando el flujo",
        "Scrum con sprints de dos semanas y refinamiento diario de las campañas pedidas",
        "Plan de proyecto tradicional gestionado en Microsoft Project por la Oficina de Transformación"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El playbook define tres arquetipos: Productos Digitales y Analítica Avanzada trabajan con Scrum (eficacia por inspección y adaptación), y Marketing Digital con Kanban y Flow Master (eficiencia basada en la gestión del flujo de valor)."
    },
    {
      "id": "FW27",
      "dimension": "fw",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Un squad lleva tres sprints sin un incremento demostrable porque \"está construyendo la base técnica\". ¿Qué haces como Agile Coach?",
      "opciones": [
        "Aceptarlo, porque los primeros sprints de un squad siempre se dedican a infraestructura",
        "Trocear en rebanadas verticales que unan habilitadores y valor",
        "Proponer sprints de cuatro semanas para que la base técnica entre en uno solo",
        "Saltear las Sprint Reviews hasta tener algo funcional para mostrar a los stakeholders"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Cada sprint debe producir un incremento inspeccionable. Construir por capas retrasa el feedback; las rebanadas verticales (walking skeleton) permiten avanzar en lo técnico mientras se entrega algo de punta a punta que los stakeholders pueden validar."
    },
    {
      "id": "OK01",
      "dimension": "okr",
      "tipo": "unica",
      "situacional": false,
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
      "situacional": false,
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
      "situacional": true,
      "pregunta": "Un área define 12 objetivos con 8 KRs cada uno para el año. ¿Cuál es el principal riesgo y la recomendación?",
      "opciones": [
        "Desalineamiento; conviene cascadear cada objetivo a los equipos para asegurar que todos estén cubiertos",
        "Pérdida de foco; conviene priorizar entre 3 y 5 objetivos con pocos KRs cada uno",
        "Metas poco ambiciosas; conviene marcar la mitad de los objetivos como aspiracionales",
        "Sobrecarga de seguimiento; conviene pasar los check-ins de semanales a mensuales"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El playbook recomienda un set de 3 a 5 objetivos (\"menos es más\"): los OKRs son una herramienta de foco. Muchos objetivos diluyen la atención y terminan siendo una lista de trabajo."
    },
    {
      "id": "OK04",
      "dimension": "okr",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "La dirección quiere atar el bono anual al porcentaje de cumplimiento de los OKRs de cada persona. Según los principios del modelo y las recomendaciones de Doerr, ¿qué conviene?",
      "opciones": [
        "Atarlo sólo a los OKRs comprometidos y dejar los aspiracionales fuera de la compensación",
        "Desacoplar los OKRs de la compensación, porque atarlos incentiva metas conservadoras",
        "Atarlo con un peso bajo (por ejemplo, 10% del bono) para no distorsionar la ambición",
        "Atarlo al puntaje del OKR del equipo y no al individual, para fomentar la colaboración"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Uno de los seis principios del modelo es que los OKRs no miden directamente el rendimiento individual ni se usan para evaluarlo, en línea con Doerr y Google. Atarlos a la compensación, aunque sea de forma parcial o grupal, empuja a proponer metas fáciles (sandbagging) y erosiona la ambición."
    },
    {
      "id": "OK05",
      "dimension": "okr",
      "tipo": "unica",
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": true,
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
      "situacional": true,
      "pregunta": "Un squad cumple siempre el 100% de sus KRs, trimestre tras trimestre. Según los principios de OKRs del modelo, ¿qué suele indicar?",
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
      "situacional": true,
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
      "situacional": false,
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
      "id": "OK17",
      "dimension": "okr",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Un PO propone como Objetivo del trimestre \"Aumentar el NPS de la apertura digital de 35 a 50\". ¿Qué le recomiendas?",
      "opciones": [
        "Mantenerlo tal cual, porque es medible, ambicioso y está alineado con la estrategia",
        "Reformular un objetivo cualitativo y usar el NPS como KR",
        "Quitarlo de los OKRs y monitorearlo sólo como un KPI de salud del squad",
        "Agregarle una fecha límite de cumplimiento para que respete el criterio SMART"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "En el modelo los Objetivos son cualitativos, acordados, ambiciosos y públicos; los KRs son cuantificables y miden el avance hacia el objetivo. \"NPS de 35 a 50\" es un excelente KR para un objetivo como \"Ofrecer la apertura de cuenta más simple del mercado\"."
    },
    {
      "id": "OK18",
      "dimension": "okr",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Al cierre del trimestre, un squad alcanzó en promedio el 45% de sus KRs. Según los principios del modelo, ¿qué corresponde?",
      "opciones": [
        "Celebrarlo como un buen resultado aspiracional y repetir el mismo plan el próximo trimestre",
        "Analizar causas en la revisión trimestral y recalibrar",
        "Reflejarlo en la evaluación de desempeño individual del Product Owner del squad",
        "Reducir todas las metas a la mitad para asegurar el 100% el próximo trimestre"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Lo esperado es un logro del 70–80%; por debajo del 70% indica bajo nivel de logro. La revisión trimestral sirve para entender causas y recalibrar. Los OKRs no se usan para evaluar desempeño individual, y bajar metas sin análisis elimina su valor."
    },
    {
      "id": "OK19",
      "dimension": "okr",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Una tribu presentó para el año nueve objetivos, todos de crecimiento comercial. Según las recomendaciones del modelo, ¿qué ajustarías?",
      "opciones": [
        "Reducirlos a 3–5 y combinar objetivos de negocio y de transformación",
        "Mantenerlos, porque más objetivos implican más foco de la tribu en resultados de negocio",
        "Repartirlos entre los squads para que cada uno sea dueño de un objetivo propio",
        "Convertir los nueve en Key Results de un único objetivo general de la tribu"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "El playbook recomienda un set de 3–5 objetivos (\"menos es más\") que mezcle objetivos de negocio y de transformación, alineados a los objetivos estratégicos y relevantes por al menos tres meses."
    },
    {
      "id": "OK20",
      "dimension": "okr",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Un squad entregó todas las iniciativas planificadas, pero su KR de conversión no se movió. ¿Qué haces como Agile Coach?",
      "opciones": [
        "Dar el OKR por cumplido, ya que se entregaron todas las iniciativas comprometidas",
        "Revisar qué hipótesis fallaron y probar otras iniciativas",
        "Reemplazar el KR por un indicador de entregables completados durante el trimestre",
        "Esperar a la definición anual de OKRs para revisar si el KR sigue siendo válido"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Los KRs miden resultados, no entregables: las iniciativas son hipótesis sobre cómo moverlos. Si no funcionan, se aprende y se ajusta la apuesta. Cambiar el KR por un output esconde el problema."
    },
    {
      "id": "OK21",
      "dimension": "okr",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "La gerencia propone que cada Developer tenga OKRs individuales para medir su desempeño anual. ¿Qué recomiendas?",
      "opciones": [
        "Implementarlos ligados a la evaluación anual para reforzar la responsabilidad individual",
        "Explicar que no miden desempeño individual y mantenerlos por squad",
        "Aceptarlos sólo si son OKRs comprometidos y nunca aspiracionales",
        "Definirlos de forma individual pero sin comunicarlos al resto del equipo"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Uno de los seis principios del modelo es que los OKRs no miden directamente el rendimiento individual. Usarlos así incentiva metas conservadoras y compite con la colaboración del squad, además de contradecir el principio de transparencia."
    },
    {
      "id": "OK22",
      "dimension": "okr",
      "tipo": "multiple",
      "situacional": true,
      "pregunta": "Revisando los KRs propuestos por un squad, ¿cuáles reformularías porque describen actividades o entregables y no resultados?",
      "opciones": [
        "Realizar 20 entrevistas a clientes pyme durante el trimestre",
        "Lanzar el onboarding digital de tarjetas en el mes de marzo",
        "Reducir el tiempo de apertura de cuenta de 3 días a 15 minutos",
        "Aumentar las aperturas digitales de cuentas de 1.000 a 9.000 al año"
      ],
      "correctas": [
        "A",
        "B"
      ],
      "explicacion": "Las entrevistas y el lanzamiento son iniciativas (outputs) que pueden apoyar un KR. Reducir el tiempo de apertura y aumentar las aperturas describen resultados medibles, como los KRs definidos para los journeys de 2024."
    },
    {
      "id": "OK23",
      "dimension": "okr",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "El KR de aperturas digitales sólo puede medirse con un reporte manual que tarda seis semanas en estar disponible. ¿Qué recomiendas?",
      "opciones": [
        "Mantenerlo y revisarlo únicamente al cierre del año, cuando el reporte esté completo",
        "Buscar una fuente de primera mano para inspeccionarlo seguido",
        "Reemplazarlo por la velocidad del squad, que ya está disponible en Azure Boards",
        "Estimarlo en cada revisión según la percepción del Product Owner y del sponsor"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El playbook recomienda que un OKR efectivo se base en información de fácil acceso y proveniente de fuentes de primera mano, para poder seguir su progreso y corregir a tiempo. La velocidad no mide el resultado y la percepción no es cuantitativa."
    },
    {
      "id": "OK24",
      "dimension": "okr",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "A mitad de año, un cambio regulatorio deja sin sentido uno de los objetivos de un squad. ¿Qué corresponde?",
      "opciones": [
        "Mantenerlo hasta fin de año para no generar desalineamiento con la estrategia definida",
        "Recalibrarlo en la revisión trimestral con gerencia y stakeholders",
        "Que el squad lo descarte por su cuenta y siga trabajando con los demás objetivos",
        "Marcarlo como aspiracional para que no afecte el puntaje final del squad"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Los OKRs se definen anualmente pero se revisan y recalibran trimestralmente frente a la realidad del negocio y nuevas iniciativas, con la gerencia y los stakeholders. Descartarlo unilateralmente rompe el principio de mutuo acuerdo."
    },
    {
      "id": "TL01",
      "dimension": "tools",
      "tipo": "unica",
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": true,
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
      "situacional": true,
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
      "situacional": true,
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
      "situacional": true,
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
      "situacional": false,
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
      "situacional": true,
      "pregunta": "El burndown de un squad queda plano durante 8 de los 10 días del sprint y en los dos últimos días cae hasta cero. ¿Qué patrón sugiere?",
      "opciones": [
        "Que el equipo sobrecomprometió el sprint y debería reducir la capacidad planificada",
        "Ítems demasiado grandes o una \"mini cascada\": el trabajo se cierra recién al final",
        "Que el sprint es demasiado corto para el tipo de trabajo del equipo",
        "Que las estimaciones en story points están infladas"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Si el trabajo restante llega a cero, el squad terminó lo comprometido, así que no hubo sobrecompromiso. Una curva plana seguida de una caída abrupta indica que casi nada se termina hasta el final, típicamente por historias grandes, testing al final o mucho WIP. Conviene trocear (INVEST, slicing) y limitar el WIP."
    },
    {
      "id": "TL10",
      "dimension": "tools",
      "tipo": "multiple",
      "situacional": false,
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
      "explicacion": "Una wiki sirve para el conocimiento compartido: decisiones, acuerdos, actas y documentación viva (el playbook menciona Confluence para las wikis de chapter y la Wiki de Azure DevOps para los documentos transversales). El flujo de ítems y el backlog se gestionan en Azure Boards."
    },
    {
      "id": "TL11",
      "dimension": "tools",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "El backlog en Azure Boards de un squad tiene más de 300 ítems y la mayoría lleva más de un año sin cambios. ¿Qué recomendarías?",
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "id": "TL19",
      "dimension": "tools",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Un stakeholder envía pedidos directamente a los Developers por correo y por chat, fuera de Azure Boards. ¿Qué haces como Agile Coach?",
      "opciones": [
        "Que cada Developer los atienda directamente si son pedidos pequeños y urgentes",
        "Canalizarlos al PO para que los registre y priorice en el backlog",
        "Crear un tablero paralelo en Planner para gestionar esos pedidos del stakeholder",
        "Pedir al Scrum Master que los cargue directamente en el sprint que está en curso"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El backlog en Azure Boards debería ser la única fuente de demanda del squad y el PO es responsable de su priorización. El trabajo invisible por canales paralelos rompe la transparencia y el foco del sprint."
    },
    {
      "id": "TL20",
      "dimension": "tools",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "QA encuentra en staging que una historia del sprint no cumple un criterio de aceptación. ¿Qué se registra en Azure Boards?",
      "opciones": [
        "Un Incidente, creado por el Chapter Lead de la disciplina",
        "Un Bug, creado por QA y asociado al desarrollo del squad",
        "Un ticket en ServiceNow derivado al Nivel 1 de soporte",
        "Un PBI de Deuda técnica para resolverlo en otro sprint"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El Bug representa defectos o incumplimientos de criterios de aceptación en ambientes previos, y lo crea QA. El Incidente corresponde a defectos en producción (lo crea el Chapter Lead) y la deuda técnica, a soluciones de transición."
    },
    {
      "id": "TL21",
      "dimension": "tools",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "En el tablero del squad en Azure Boards, el estado \"Dev ready\" (desarrollo terminado, listo para QA) acumula nueve PBIs, mientras \"In Progress\" tiene dos. ¿Qué indica y qué conviene hacer?",
      "opciones": [
        "Que desarrollo trabaja rápido y conviene tomar más ítems nuevos del backlog",
        "Un cuello de botella en QA: dejar de empezar y ayudar a terminar",
        "Que QA tiene capacidad ociosa y puede tomar tareas de otros squads de la tribu",
        "Que falta un estado intermedio para separar mejor los ítems del flujo de trabajo"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "En el workflow de Azure Boards del playbook, \"Dev ready\" significa desarrollo terminado y en espera de QA (\"QA ready\", en cambio, es QA terminado y en espera de UAT). Ítems acumulados en una espera revelan un cuello de botella en la etapa siguiente: conviene limitar el WIP y ayudar a terminar (swarming, automatización de pruebas) en lugar de seguir empezando trabajo nuevo."
    },
    {
      "id": "TL22",
      "dimension": "tools",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Hay dos PBIs en estado \"Blocked\" sin ningún impedimento registrado y un Developer quiere empezar una historia nueva. ¿Qué haces?",
      "opciones": [
        "Que la empiece, ya que los bloqueos dependen de factores externos al squad",
        "Registrar los Impediment y priorizar desbloquear antes de empezar",
        "Mover los PBIs bloqueados al siguiente sprint para mantener el tablero limpio",
        "Cerrar los PBIs bloqueados y volver a crearlos cuando el bloqueo se resuelva"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Un PBI bloqueado requiere una sub-tarea Impediment que haga visible el trabajo para destrabarlo. Terminar antes que empezar reduce el WIP y el cycle time; mover o cerrar los ítems esconde el problema."
    },
    {
      "id": "TL23",
      "dimension": "tools",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "El burndown del sprint en Azure muestra que el trabajo restante sube a mitad del sprint. ¿Qué indica?",
      "opciones": [
        "Que el squad terminó historias antes de lo previsto y re-estimó las restantes",
        "Que entró trabajo nuevo o se re-estimó al alza",
        "Un error de sincronización de Azure Boards que conviene ignorar",
        "Que la velocidad del squad aumentó durante la segunda semana del sprint"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El burndown mide el trabajo restante: si sube, entró trabajo nuevo o se re-estimó al alza. Es una señal para conversar sobre cambios de alcance y su impacto en el Sprint Goal."
    },
    {
      "id": "TL24",
      "dimension": "tools",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Las decisiones técnicas de un squad están dispersas en correos y carpetas personales, y cuesta encontrarlas. ¿Qué recomiendas según el playbook?",
      "opciones": [
        "Mantenerlas así, ya que cada persona sabe dónde guarda sus propias decisiones",
        "Lo transversal a la Wiki de Azure DevOps y lo específico al PBI",
        "Imprimirlas y archivarlas en el área funcional que corresponda a cada decisión",
        "Moverlas a la Ficha de la Iniciativa que mantiene el Coordinador de Valor del squad"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Centralizar la documentación en una única herramienta elimina complejidad: los documentos transversales van a la Wiki (Overview) de Azure DevOps y los específicos se adjuntan al PBI correspondiente."
    },
    {
      "id": "TL25",
      "dimension": "tools",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Los stakeholders quieren ver el avance de las grandes funcionalidades y las fechas de los releases, no el detalle de tareas. ¿Qué usas en Azure Boards?",
      "opciones": [
        "El taskboard del sprint con todas las sub-tareas visibles para cada stakeholder",
        "El Portfolio backlog (Epics y Features) y Delivery Plans",
        "Un Excel semanal exportado manualmente desde Azure y enviado por correo",
        "Invitar a los stakeholders a todas las Daily del squad para que sigan el avance"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El nivel Portfolio backlog (Epic y Feature) da una visión estratégica útil para stakeholders, y Delivery Plans muestra los planes de liberación con fechas e hitos. El taskboard y la Daily son del nivel táctico del squad."
    },
    {
      "id": "ME01",
      "dimension": "met",
      "tipo": "multiple",
      "situacional": false,
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
      "situacional": true,
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
      "situacional": true,
      "pregunta": "Los últimos 40 PBIs terminados por un squad tardaron, desde que se empezaron: promedio 6 días, mediana 4 días, el 85% terminó en 11 días o menos y el más lento, 30 días. Un stakeholder pregunta cuánto tardará el próximo ítem que el squad empiece. ¿Qué respuesta comunica mejor la expectativa?",
      "opciones": [
        "Unos 6 días, que es el promedio histórico del squad",
        "11 días o menos, con un 85% de probabilidad según el historial",
        "Unos 4 días, porque la mediana no se ve afectada por los casos extremos",
        "Hasta 30 días, para cubrir el peor caso observado"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Con una distribución sesgada (pocos ítems muy largos), la mediana se cumple sólo la mitad de las veces y el promedio apenas algo más: comprometer esos valores genera incumplimientos frecuentes. El peor caso es excesivamente conservador. Un percentil alto del historial (aquí, 11 días al 85%) comunica la expectativa junto con su probabilidad. Este enfoque viene de las métricas de flujo de Kanban; el Lead Time promedio que usa el playbook sirve para seguir tendencias, no para comprometer plazos."
    },
    {
      "id": "ME04",
      "dimension": "met",
      "tipo": "unica",
      "situacional": false,
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
      "situacional": false,
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
      "situacional": true,
      "pregunta": "La dirección fija como meta \"duplicar la velocidad del squad este semestre\". ¿Qué le recomiendas?",
      "opciones": [
        "Aceptar la meta y seguirla sprint a sprint en la Sincronización de Tribu",
        "Explicar que los puntos son relativos y se inflan, y proponer metas de resultado y de flujo",
        "Aceptarla sólo si la velocidad se convierte a horas para que sea objetiva",
        "Aceptarla y compensar el esfuerzo flexibilizando la Definition of Done"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Ley de Goodhart: cuando una medida se convierte en objetivo, deja de ser una buena medida. En el modelo, los puntos son estimaciones relativas a una historia pivote y la velocidad sirve para la previsibilidad del squad: se pueden duplicar inflando estimaciones sin entregar más valor. Las metas deben expresarse como resultados (KRs) o indicadores de flujo."
    },
    {
      "id": "ME07",
      "dimension": "met",
      "tipo": "unica",
      "situacional": true,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
      "pregunta": "Un PBI pasó a \"Priorizado\" el 1 de marzo, se empezó a trabajar el 4, quedó terminado el 11 y se liberó a producción el 18. Según las definiciones del marco de indicadores del modelo, ¿cuál fue su Release Lead Time?",
      "opciones": [
        "14 días (del 4 al 18 de marzo)",
        "17 días (del 1 al 18 de marzo)",
        "10 días (del 1 al 11 de marzo)",
        "7 días (del 4 al 11 de marzo)"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "El playbook define el Release Lead Time como el tiempo desde que un PBI se comienza a trabajar hasta que se libera a producción: del 4 al 18 de marzo, 14 días. Los 10 días (de \"Priorizado\" a \"Terminado\") corresponden al ejemplo de Lead Time del playbook, que mide el paso entre dos estados cualesquiera; los 7 días son sólo el tiempo de trabajo hasta terminarlo."
    },
    {
      "id": "ME11",
      "dimension": "met",
      "tipo": "unica",
      "situacional": true,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": true,
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
      "id": "ME19",
      "dimension": "met",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "La velocidad de un squad fue 30, 32, 18 y 31 puntos. El gerente quiere aplicar medidas por la caída del tercer sprint. ¿Qué recomiendas?",
      "opciones": [
        "Aplicar un plan de mejora individual a los Developers que bajaron su aporte",
        "Analizar con el squad la causa raíz antes de concluir",
        "Exigir recuperar los puntos faltantes durante el sprint siguiente",
        "Ajustar las estimaciones del tercer sprint para normalizar la serie histórica"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El playbook usa la velocidad para dar previsibilidad y hacer análisis de causa raíz ante bajas significativas. Un sprint atípico suele explicarse por capacidad, incidentes o bloqueos; castigar o maquillar la serie incentiva la inflación de puntos."
    },
    {
      "id": "ME20",
      "dimension": "met",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "El indicador Puntos de Change de un squad cayó del 75% al 40% en tres sprints. ¿Qué sugiere?",
      "opciones": [
        "Que el squad aumentó su productividad en historias de usuario de forma sostenida",
        "Que crece el Run y conviene revisar sus causas",
        "Que las historias de usuario se están estimando por encima de su tamaño real",
        "Que la velocidad total del squad está cayendo de un sprint a otro"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Puntos de Change compara el esfuerzo en Historias de Usuario contra el total (Change + Run). Si el Run gana espacio, el squad dedica más tiempo a sostener la operación que a mejorar la experiencia del cliente: hay que buscar las causas (calidad, deuda, incidentes)."
    },
    {
      "id": "ME21",
      "dimension": "met",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Un squad muestra 100% de Cumplimiento de Sprint durante ocho sprints consecutivos. ¿Qué haces como Agile Coach?",
      "opciones": [
        "Presentarlo como squad modelo en la tribu y replicar su forma de trabajo",
        "Conversarlo con el squad y cruzarlo con otros indicadores antes de concluir",
        "Pedir que el squad comprometa un 50% más de puntos en el próximo sprint",
        "Dejar de medir el indicador porque ya no aporta información útil"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Un cumplimiento perfecto y sostenido puede reflejar un gran desempeño, pero también compromisos conservadores o estimaciones infladas. Un indicador aislado no alcanza para concluir: se mira junto con throughput, Puntos de Change y KRs, y se conversa con el squad."
    },
    {
      "id": "ME22",
      "dimension": "met",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Un stakeholder pide una fecha exacta para 40 PBIs. El throughput histórico del squad varía entre 4 y 8 PBIs por sprint. ¿Cuál es la mejor respuesta?",
      "opciones": [
        "Comprometer una fecha usando el throughput máximo de 8 PBIs por sprint",
        "Un rango basado en su historial: entre 5 y 10 sprints",
        "Comprometer una fecha concreta y sumar horas extra si no se llega a tiempo",
        "No dar ninguna estimación, porque en agilidad no se comprometen fechas"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Con 40 ítems y un throughput histórico de 4 a 8 por sprint, el rango va de 5 a 10 sprints (40/8 y 40/4). Comunicar un rango es honesto y útil, y se puede afinar con más datos (por ejemplo, con una simulación de Monte Carlo). Usar el mejor caso genera compromisos irreales."
    },
    {
      "id": "ME23",
      "dimension": "met",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Los PBIs de deuda técnica pendientes en el backlog pasaron de 6 a 22 en seis sprints, con muy pocos resueltos. ¿Qué recomiendas?",
      "opciones": [
        "Ignorarla mientras no se traduzca en bugs visibles para los usuarios del producto",
        "Visibilizarla y reservar un porcentaje de capacidad para pagarla",
        "Dedicar un sprint completo a deuda técnica una vez al año, al cierre del ejercicio",
        "Trasladar los PBIs de deuda técnica al backlog de la fábrica de software"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El indicador de deuda técnica sirve para ver si se genera más rápido de lo que se paga. Su costo crece de forma no lineal y reduce la velocidad futura; el playbook propone documentarla, priorizarla en las planificaciones y asignarle capacidad del squad."
    },
    {
      "id": "ME24",
      "dimension": "met",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "SonarQube muestra el Quality Gate en rojo por vulnerabilidades en un cambio que el PO quiere liberar por una fecha comercial. ¿Qué recomiendas?",
      "opciones": [
        "Liberar y registrar el riesgo para revisarlo con QA en el próximo sprint",
        "No liberar con el Quality Gate en rojo y gestionar la fecha",
        "Desactivar esa regla de SonarQube sólo para este repositorio y esta liberación",
        "Liberarlo sólo al grupo de Friends & Family para reducir la exposición al riesgo"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El Quality Gate indica si el código tiene calidad suficiente para pasar a producción. Las vulnerabilidades son un riesgo para los clientes y la reputación del banco: se priorizan y, si afectan la fecha, se gestiona el cambio con transparencia."
    },
    {
      "id": "ME25",
      "dimension": "met",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "La gerencia pide un único número para comparar el desempeño de los squads de la tribu. ¿Qué recomiendas?",
      "opciones": [
        "Usar la velocidad en puntos de historia, que ya está disponible en Azure Boards",
        "Mirar varias dimensiones y la tendencia de cada squad",
        "Usar el throughput normalizado por la cantidad de personas de cada squad",
        "Usar el porcentaje de utilización promedio de los miembros de cada squad"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El marco del modelo tiene 19 indicadores en cinco dimensiones porque ninguna métrica aislada refleja el desempeño. Los puntos son relativos a cada squad y los squads tienen contextos distintos: conviene comparar a cada squad consigo mismo y contra sus resultados."
    },
    {
      "id": "CO01",
      "dimension": "coach",
      "tipo": "unica",
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": true,
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
      "situacional": false,
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
      "situacional": true,
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
      "situacional": true,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": true,
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
      "situacional": true,
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
      "situacional": false,
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
      "situacional": true,
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
      "situacional": false,
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
      "situacional": true,
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
      "situacional": false,
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
      "situacional": false,
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
      "id": "CO18",
      "dimension": "coach",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "En una retrospectiva, un miembro senior acapara la palabra y las personas más nuevas casi no participan. ¿Qué haces?",
      "opciones": [
        "Pedirle públicamente que deje hablar a los demás",
        "Usar dinámicas que den voz a todos y luego conversar con él en privado",
        "Dejar que siga, ya que su experiencia es valiosa para el equipo",
        "Pedir a los nuevos que envíen sus aportes por escrito al Scrum Master"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Estructuras como la reflexión individual por escrito, rondas o 1-2-4-All equilibran la participación sin exponer a nadie. La conversación privada (con feedback concreto, tipo SBI) ayuda a que la persona tome conciencia del impacto sin humillarla."
    },
    {
      "id": "CO19",
      "dimension": "coach",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Un Product Owner te pide: \"Diles al equipo cómo tienen que trabajar, que vos sabés de agilidad\". ¿Cómo respondes?",
      "opciones": [
        "Definir las prácticas e imponerlas para acelerar la adopción en el equipo",
        "Explorar la necesidad, acordar objetivos y elegir la postura",
        "Negarte, porque un coach nunca da indicaciones concretas a un equipo",
        "Derivar el pedido al Chapter Lead de Agilidad, que define los lineamientos"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Antes de intervenir, el coach explora la necesidad y acuerda el contrato (qué se busca, con quién, cómo se medirá). Luego elige entre enseñar, mentorear, facilitar o hacer coaching según la madurez y el contexto; imponer genera cumplimiento, no adopción."
    },
    {
      "id": "CO20",
      "dimension": "coach",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Un Scrum Master recién incorporado te pide ayuda para facilitar mejor las retrospectivas. ¿Qué postura suele ser más útil?",
      "opciones": [
        "Coaching puro: sólo preguntas, sin compartir ninguna experiencia propia con él",
        "Mentoring: compartir formatos y experiencias, con reflexión",
        "Facilitar tú todas las retros del squad hasta que aprenda observándote",
        "Recomendarle un curso online y no intervenir en su proceso de aprendizaje"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Ante una persona que pide conocimiento práctico, el mentoring (compartir experiencia, co-facilitar, dar feedback) es efectivo, complementado con preguntas que lo hagan reflexionar. Reemplazarlo genera dependencia y no intervenir lo deja solo."
    },
    {
      "id": "CO21",
      "dimension": "coach",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "En una sesión 1:1, un Developer te cuenta que piensa renunciar por conflictos con su PO. ¿Qué haces?",
      "opciones": [
        "Contárselo al PO para que corrija su conducta antes de que el Developer renuncie",
        "Escuchar, explorar opciones y, con su acuerdo, facilitar una conversación",
        "Informar de inmediato a Recursos Humanos sobre el riesgo de renuncia",
        "Decirle que los conflictos son normales en los equipos y animarlo a quedarse"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "La confidencialidad del 1:1 se respeta. El coach ayuda a la persona a clarificar qué quiere y qué opciones tiene, y puede facilitar una conversación con el PO si ella lo consiente. Actuar sin su acuerdo destruye la confianza."
    },
    {
      "id": "CO22",
      "dimension": "coach",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "El squad está en desacuerdo sobre la arquitectura de una solución; hay posiciones firmes pero el diálogo sigue siendo respetuoso. ¿Qué intervención es más adecuada?",
      "opciones": [
        "Escalar la decisión al Comité Ejecutivo para destrabarla con su autoridad",
        "Facilitar una conversación basada en intereses, datos y criterios",
        "Decidir tú la arquitectura para evitar que el conflicto escale de nivel",
        "Separar a quienes discuten en squads distintos para reducir la fricción"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Un desacuerdo (nivel 2 de Speed Leas) todavía es un problema a resolver: conviene ayudar al equipo a explicitar intereses, apoyarse en datos y definir cómo decidirá, involucrando al Chapter Lead o arquitecto como expertos si hace falta."
    },
    {
      "id": "CO23",
      "dimension": "coach",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Después de un incidente grave, el squad está desmotivado y aparecen culpas cruzadas. ¿Cómo planteas la siguiente retrospectiva?",
      "opciones": [
        "Suspenderla para no remover un tema delicado mientras el equipo está afectado",
        "Reconocer emociones y facilitar un análisis sin culpables",
        "Pedir al PO que identifique al responsable del incidente antes de la sesión",
        "Hacerla con el gerente presente para darle más seriedad y compromiso"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "La seguridad psicológica es la base para aprender de un error. Abrir un espacio para las emociones y luego analizar causas sistémicas (como en un postmortem blameless) evita la búsqueda de culpables y genera acciones de mejora reales."
    },
    {
      "id": "OF01",
      "dimension": "o365",
      "tipo": "unica",
      "situacional": false,
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
      "situacional": true,
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
      "situacional": false,
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
      "situacional": false,
      "pregunta": "¿Qué herramienta del ecosistema Microsoft es más adecuada para un dashboard interactivo y actualizable de métricas de flujo, alimentado desde Azure Boards y Excel y compartido con stakeholders?",
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
      "situacional": false,
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
      "situacional": true,
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
      "situacional": true,
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
      "situacional": true,
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
      "situacional": false,
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
      "situacional": true,
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
      "situacional": true,
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
      "situacional": false,
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
      "situacional": true,
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
      "id": "OF14",
      "dimension": "o365",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "En un squad distribuido, la Daily por Teams empieza tarde porque la gente no encuentra el enlace y nadie recuerda los acuerdos. ¿Qué propones?",
      "opciones": [
        "Grabar todas las Dailies y compartir el video al final de cada día",
        "Reunión recurrente del canal y acuerdos visibles en una pestaña",
        "Reemplazar la Daily por un correo diario de estado de cada miembro",
        "Hacer la Daily por chat de texto para que cada uno escriba cuando pueda"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Una reunión de canal recurrente deja el enlace siempre en el mismo lugar, y los acuerdos visibles (pestaña, Loop) los mantienen presentes. Reemplazar la Daily por reportes asincrónicos pierde la sincronización y la colaboración."
    },
    {
      "id": "OF15",
      "dimension": "o365",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Necesitas medir el clima del squad mensualmente, de forma anónima, y mostrar la tendencia en un tablero. ¿Qué combinación usas?",
      "opciones": [
        "Microsoft Forms con respuestas anónimas y la tendencia en Excel o Power BI",
        "Un hilo en el canal de Teams donde cada persona responde las preguntas",
        "Una tarea de Planner asignada a cada miembro con las preguntas",
        "Un correo individual a cada persona y una tabla manual en Word"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "Forms sin registro de nombre favorece respuestas honestas y exporta los datos a Excel, donde (o en Power BI) se construye la tendencia. El playbook propone medir el clima del equipo mensualmente, en una escala de 0 a 5."
    },
    {
      "id": "OF16",
      "dimension": "o365",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Un stakeholder de otra área debe revisar un documento del squad, pero no debe acceder al resto de los canales del equipo. ¿Qué haces?",
      "opciones": [
        "Compartir el enlace sólo con esa persona y el permiso necesario",
        "Agregarlo como miembro invitado al equipo de Teams del squad",
        "Enviarle el archivo como adjunto cada vez que se actualice el contenido",
        "Copiar el documento en su OneDrive para que trabaje sobre su propia versión"
      ],
      "correctas": [
        "A"
      ],
      "explicacion": "Compartir un enlace con permisos específicos (personas concretas, lectura o edición) da acceso sólo a lo necesario y mantiene una única versión. Agregarlo al equipo expone todos los canales estándar y los adjuntos o copias generan versiones divergentes."
    },
    {
      "id": "OF17",
      "dimension": "o365",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Llevarás métricas exportadas de Azure a la Sincronización de Tribu y quieren filtrarlas por squad durante la reunión. ¿Qué preparas?",
      "opciones": [
        "Capturas de pantalla de cada gráfico pegadas en una presentación de PowerPoint",
        "Una tabla dinámica con segmentaciones por squad o Power BI",
        "Un documento de Word con las cifras de cada squad ordenadas por métrica",
        "Un plan de Planner con una tarea por cada métrica y su valor en la descripción"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Las tablas dinámicas con segmentaciones (o Power BI) permiten filtrar e interactuar con los datos en vivo, algo clave para un foro donde se discuten métricas y se toman decisiones."
    },
    {
      "id": "OF18",
      "dimension": "o365",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Organizas un Big Room Planning virtual de dos días con unas 80 personas. ¿Qué preparación es más adecuada?",
      "opciones": [
        "Una única reunión de Teams sin agenda fija para que la conversación fluya",
        "Teams con salas por squad y un tablero colaborativo",
        "Una cadena de correos con los release plans de cada squad adjuntos",
        "Un seminario web en el que sólo presentan los Product Owners de la tribu"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El playbook destaca la planificación exhaustiva del BRP: sesiones plenarias y paralelas, material enviado con antelación y participación activa. Las salas para grupos pequeños y un tablero colaborativo (Miro) habilitan el trabajo sobre dependencias."
    },
    {
      "id": "OF19",
      "dimension": "o365",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Los acuerdos del squad están en un Word guardado en una carpeta que nadie abre. ¿Qué propones?",
      "opciones": [
        "Imprimirlos y pegarlos en la oficina del squad, a la vista de todos",
        "Anclarlos en el canal y revisarlos en las retrospectivas",
        "Enviarlos por correo a todo el squad cada lunes por la mañana",
        "Guardarlos en el OneDrive del Scrum Master para que los mantenga actualizados"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Los acuerdos sirven si están a la vista y se usan: anclarlos en el canal los acerca al trabajo diario y revisarlos en las retrospectivas, como indica el playbook, los mantiene vivos."
    },
    {
      "id": "DI01",
      "dimension": "disc",
      "tipo": "unica",
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": true,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": true,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": true,
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
      "situacional": true,
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
      "id": "DI20",
      "dimension": "disc",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "El sponsor llega con la solución ya decidida (\"necesitamos una app de préstamos\") y pide empezar a construirla. ¿Qué haces?",
      "opciones": [
        "Empezar a construir lo pedido para no perder tiempo ni generar fricción con el sponsor",
        "Explorar el problema y formular una hipótesis de valor",
        "Rechazar el pedido hasta que se haga un estudio de mercado formal",
        "Hacer un Inception sólo para estimar el esfuerzo de construir la app"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El descubrimiento parte de un problema u oportunidad y genera una hipótesis de valor que lo resuelva. Entender a quién se sirve y qué resultado se busca evita construir la solución equivocada, sin descartar de plano la idea del sponsor."
    },
    {
      "id": "DI21",
      "dimension": "disc",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Se lanza un squad nuevo y todavía no está claro qué elementos debe tener el producto. Según el árbol de decisión del diseño de iniciativas, ¿qué corresponde primero?",
      "opciones": [
        "Actualizar el Release Plan",
        "Un Descubrimiento de Producto/Servicio",
        "Ir directo al primer Sprint Planning",
        "Presentar la iniciativa en el Big Room Planning"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Si el squad es nuevo y el producto requiere más claridad sobre qué desarrollar, se hace un Descubrimiento de Producto/Servicio (siete frentes, de arte de lo posible a habilitadores TI); luego el Inception baja la solución a un backlog."
    },
    {
      "id": "DI22",
      "dimension": "disc",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "En entrevistas, 8 de 10 personas dicen que \"usarían\" una nueva función, pero en la prueba con landing page casi nadie se registra. ¿Qué concluyes?",
      "opciones": [
        "Avanzar con la construcción, porque hay un 80% de intención declarada",
        "Priorizar el comportamiento observado y revisar la propuesta",
        "Hacer más entrevistas hasta llegar a cien personas y confirmar el interés",
        "Agregar más funcionalidades a la landing para hacerla más atractiva"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Lo que la gente hace es mejor evidencia que lo que dice que haría (principio de The Mom Test). La baja conversión indica que la hipótesis de valor no se sostiene tal como está planteada: conviene revisar problema, segmento o propuesta."
    },
    {
      "id": "DI23",
      "dimension": "disc",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "En el Inception, una funcionalidad del MVP queda en el cuadrante de alta incertidumbre tanto en el \"qué\" como en el \"cómo\". ¿Qué corresponde?",
      "opciones": [
        "Construirla primero, para aprender lo antes posible durante el desarrollo",
        "Reducir la incertidumbre (spike, prototipo) antes de construir",
        "Eliminarla definitivamente del producto por ser demasiado riesgosa",
        "Estimarla en 100 puntos para reflejar la incertidumbre en el release plan"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El playbook indica que los cuadrantes rojos y amarillos revelan alta incertidumbre que el squad debe resolver antes de iniciar la construcción. Spikes y prototipos son las herramientas para reducirla de forma barata."
    },
    {
      "id": "DI24",
      "dimension": "disc",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "El MVP propuesto por el negocio incluye 25 funcionalidades \"imprescindibles\". ¿Cómo ayudas a acotarlo?",
      "opciones": [
        "Aceptarlo, porque el negocio conoce mejor que nadie lo que necesita el cliente",
        "Cortar en el story map el mínimo de punta a punta",
        "Duplicar el tamaño del squad para poder construir todo a tiempo",
        "Planificar un único release al final con todas las funcionalidades juntas"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El story map muestra el recorrido completo del usuario; el primer corte horizontal define el MVP: lo mínimo que atraviesa todo el flujo y permite aprender del cliente. Los releases siguientes suman valor con feedback real."
    },
    {
      "id": "DI25",
      "dimension": "disc",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "El squad diseña las pantallas y las desarrolla sin validarlas, y después de cada Review debe rehacer gran parte. ¿Qué propones?",
      "opciones": [
        "Documentar mejor los requisitos y las pantallas antes de empezar a diseñar",
        "Validar con prototipos (Historias UX/UI) antes de desarrollar",
        "Saltear la etapa de diseño y desarrollar directamente sobre el código",
        "Que QA valide todas las pantallas antes de presentarlas en la Sprint Review"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El playbook define la Historia UX/UI como un requerimiento abordado sólo en diseño para validar hipótesis antes de desarrollar, ajustando de forma fácil y temprana. Prototipar en Figma es mucho más barato que rehacer código."
    },
    {
      "id": "DI26",
      "dimension": "disc",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Compiten dos ideas: A tiene alto impacto potencial y poca evidencia; B tiene impacto medio y mucha evidencia. ¿Qué conviene testear primero?",
      "opciones": [
        "La idea B, porque ya cuenta con evidencia que la respalda",
        "Los supuestos críticos de la idea A, que son los más riesgosos",
        "Ninguna: conviene construir ambas en paralelo y medir",
        "La que el equipo prefiera en una votación rápida"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "En el Assumption Mapping se testean primero los supuestos importantes con poca evidencia: si son falsos, la idea cae. Validar A de forma barata puede desbloquear el mayor impacto o descartarlo a tiempo."
    },
    {
      "id": "DI27",
      "dimension": "disc",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Durante el descubrimiento del journey de apertura de cuenta, Operaciones advierte que el back-office no puede procesar solicitudes en línea. ¿En qué frente del descubrimiento se aborda?",
      "opciones": [
        "Go-to-market",
        "Experiencia",
        "Arte de lo posible",
        "Cliente y ambición"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El frente Experiencia incluye el customer journey de punta a punta: levantamiento as-is, diseño UI/UX y procesos impactados en back-office, con los ajustes requeridos para habilitar la experiencia deseada."
    },
    {
      "id": "DI28",
      "dimension": "disc",
      "tipo": "multiple",
      "situacional": true,
      "pregunta": "Se prepara el lanzamiento del MVP de tarjetas digitales. ¿Qué actividades pertenecen al frente Go-to-market del descubrimiento?",
      "opciones": [
        "Definir la estrategia de Friends & Family (invitados y dinámica)",
        "Definir tiempos e hitos del despliegue controlado y la masificación",
        "Definir la parametrización del producto en los sistemas core",
        "Levantar el customer journey de la experiencia as-is"
      ],
      "correctas": [
        "A",
        "B"
      ],
      "explicacion": "Go-to-market incluye la estrategia de lanzamiento (Friends & Family, despliegue controlado y masificación) y la campaña y canales de mercadeo. La parametrización en core pertenece al frente Producto y el journey as-is, a Experiencia."
    },
    {
      "id": "DV01",
      "dimension": "devops",
      "tipo": "multiple",
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": true,
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
      "situacional": false,
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
      "situacional": true,
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
      "situacional": true,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": true,
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
      "id": "DV18",
      "dimension": "devops",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Un squad libera cada seis semanas en un paquete grande y cada release trae incidentes. ¿Qué recomiendas?",
      "opciones": [
        "Agregar más aprobaciones manuales antes de cada pase a producción del squad",
        "Lotes más chicos y frecuentes, con automatización",
        "Espaciar los releases a cada doce semanas para estabilizar mejor cada paquete",
        "Congelar todos los cambios durante el mes previo a cada release"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Los lotes grandes concentran riesgo y dificultan el diagnóstico. Según DORA, frecuencia y estabilidad van juntas: cambios pequeños y frecuentes, apoyados en automatización, reducen la tasa de fallos y el tiempo de recuperación."
    },
    {
      "id": "DV19",
      "dimension": "devops",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Un Developer quiere mergear directamente a Main un arreglo urgente de un error en producción. Según la estrategia GitFlow del playbook, ¿qué corresponde?",
      "opciones": [
        "Permitirlo por la urgencia y regularizar el proceso después",
        "Usar una rama Hotfix con pull request a Main y propagar el cambio a Development",
        "Mergear el arreglo a Release y esperar el próximo despliegue planificado",
        "Aplicar el cambio directamente en producción y versionarlo luego"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Hotfix se usa para errores productivos: el cambio entra a Main por pull request (con las aprobaciones definidas) y se propaga a Development. Saltear el flujo rompe la trazabilidad y el control de cambios."
    },
    {
      "id": "DV20",
      "dimension": "devops",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Una funcionalidad está lista, pero el negocio quiere activarla recién en tres semanas, junto con una campaña. ¿Qué recomiendas?",
      "opciones": [
        "Mantener la rama abierta tres semanas y mergearla el día de la campaña",
        "Desplegarla con un feature flag desactivado y activarla en la fecha acordada",
        "Revertir el desarrollo y retomarlo una semana antes de la campaña",
        "Desplegarla y ocultar el botón en la interfaz mediante estilos"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Los feature flags separan el despliegue de la liberación: el código llega a producción integrado y probado, y se activa cuando el negocio lo decide. Las ramas largas generan conflictos y ocultar con estilos no es seguro."
    },
    {
      "id": "DV21",
      "dimension": "devops",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "La cobertura de pruebas unitarias de un squad es del 12% y las pruebas manuales de QA son el cuello de botella del flujo. ¿Qué propones?",
      "opciones": [
        "Sumar más personas de QA manual para absorber la demanda del squad",
        "Metas incrementales de automatización incluidas en la DoD",
        "Saltear la etapa de QA en los cambios que el equipo considere menores",
        "Exigir el 100% de cobertura de pruebas a partir del próximo sprint"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El marco de indicadores mide la cobertura de pruebas unitarias y funcionales para habilitar la integración y el despliegue continuo. Metas graduales (con tareas de Automation Testing) y su inclusión en la DoD mejoran calidad y flujo de forma sostenible."
    },
    {
      "id": "DV22",
      "dimension": "devops",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "El pipeline de CD falla de forma intermitente y el equipo lo relanza hasta que pasa. ¿Qué recomiendas?",
      "opciones": [
        "Seguir relanzándolo, ya que finalmente el despliegue termina funcionando",
        "Tratarlo como deuda técnica y investigar las pruebas inestables",
        "Desactivar las pruebas que fallan de forma intermitente en el pipeline",
        "Volver a desplegar de forma manual hasta que el pipeline se estabilice"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Un pipeline poco confiable erosiona la confianza en la automatización y oculta fallas reales. Las pruebas inestables (flaky) y los problemas de ambiente deben investigarse y resolverse como deuda técnica, no esquivarse."
    },
    {
      "id": "DV23",
      "dimension": "devops",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Un Developer publica como 2.3.1 (desde 2.3.0) una librería compartida cuyo cambio rompe la compatibilidad con quienes la consumen. ¿Qué versión correspondía?",
      "opciones": [
        "2.3.1, porque es un cambio pequeño",
        "3.0.0, porque rompe la compatibilidad",
        "2.4.0, porque agrega comportamiento nuevo",
        "2.3.1-beta, por ser un cambio en prueba"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "En Semantic Versioning, un cambio que rompe la compatibilidad hacia atrás incrementa MAJOR. MINOR es para funcionalidades compatibles y PATCH para correcciones; en librerías compartidas (Cross Channel), versionar mal rompe a otros squads."
    },
    {
      "id": "DV24",
      "dimension": "devops",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Un squad quiere crear sus propios pipelines por fuera del CoE de DevOps porque \"tarda demasiado\". ¿Qué haces como Agile Coach?",
      "opciones": [
        "Dejar que lo hagan, ya que la autonomía del squad es la prioridad del modelo",
        "Visibilizar la espera y trabajar la transferencia de capacidades",
        "Escalar el problema directamente al Comité Ejecutivo para que decida",
        "Prohibir que los squads hagan pedidos al CoE fuera del Big Room Planning"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Saltear el CoE rompe los estándares; tolerar la espera frena a los squads. El CoE gestiona su demanda con Kanban y métricas de flujo, y entre sus responsabilidades está transferir capacidades para que los squads ganen autonomía."
    },
    {
      "id": "DV25",
      "dimension": "devops",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "El despliegue a producción de un squad requiere nueve pasos manuales y lleva un día completo. ¿Qué recomiendas?",
      "opciones": [
        "Documentar mejor cada uno de los pasos para reducir los errores manuales",
        "Automatizarlo con pipelines de CD",
        "Desplegar con menos frecuencia para reducir el esfuerzo total del equipo",
        "Que sólo el Chapter Lead ejecute los despliegues para garantizar el control"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Los pasos manuales son lentos y propensos a error, y desalientan liberar seguido. Los pipelines de Continuous Delivery en Azure DevOps (creados con el CoE de DevOps) hacen el despliegue repetible, trazable y rápido."
    },
    {
      "id": "DV26",
      "dimension": "devops",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "El mismo tipo de incidente se repitió tres veces en el trimestre, aunque después de cada uno se hizo un análisis posterior. ¿Qué revisarías primero?",
      "opciones": [
        "Si conviene dejar de hacer análisis posteriores para ese tipo de incidente",
        "Si las acciones correctivas se registraron en el backlog y recibieron capacidad",
        "Si el Nivel 1 está categorizando mal la criticidad de esos incidentes",
        "Si el squad necesita sumar personas dedicadas a soporte productivo"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Que el incidente se repita pese a los análisis sugiere que las acciones correctivas no se ejecutaron. Un postmortem sólo sirve si sus acciones se registran como PBIs (habilitador, deuda técnica), se priorizan y reciben capacidad del squad."
    },
    {
      "id": "SC01",
      "dimension": "scale",
      "tipo": "unica",
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": true,
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
      "situacional": true,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "explicacion": "La tribu agrupa squads con misiones relacionadas y un propósito común; según el playbook, su composición típica es de 5 a 15 squads y de 50 a 150 FTEs, liderados por un Tribe Lead."
    },
    {
      "id": "SC09",
      "dimension": "scale",
      "tipo": "unica",
      "situacional": false,
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
      "situacional": true,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
      "situacional": false,
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
    },
    {
      "id": "SC22",
      "dimension": "scale",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Dos squads necesitan modificar el mismo componente del core Libra durante el trimestre. ¿Dónde se identifica y gestiona principalmente esta dependencia?",
      "opciones": [
        "En la Daily de cada squad, a medida que vayan surgiendo los conflictos",
        "En el BRP, con el Chapter Lead de Core Libra y la fábrica",
        "En la QBR, donde se aprueban las iniciativas y las capacidades de cada squad",
        "En una retrospectiva conjunta de ambos squads al cierre del trimestre"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El BRP busca identificar dependencias técnicas y de negocio entre squads y generar planes de acción. El Chapter Lead de desarrollo valida la compatibilidad de los planes con las fábricas y gestiona las interdependencias sobre sistemas compartidos."
    },
    {
      "id": "SC23",
      "dimension": "scale",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Un Chapter Lead quiere reasignar a un desarrollador a otro squad a mitad de sprint, sin avisar al PO. ¿Qué corresponde?",
      "opciones": [
        "Puede hacerlo, porque es el líder jerárquico y funcional del desarrollador",
        "Coordinarlo con el PO y el Tribe Lead, cuidando el sprint",
        "Lo decide sólo el PO, porque el desarrollador trabaja para su squad",
        "Escalarlo a Recursos Humanos para que defina la asignación correcta"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El Chapter Lead asegura el staffing de su disciplina, pero la capacidad de los squads se acuerda (QBR) y el PO gestiona la demanda de su equipo. Los cambios se coordinan para no poner en riesgo el sprint ni las iniciativas."
    },
    {
      "id": "SC24",
      "dimension": "scale",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "El CoE de Cloud recibe pedidos por chat de todos los squads y no sabe qué atender primero. ¿Qué propones?",
      "opciones": [
        "Atender los pedidos por estricto orden de llegada para ser justos con todos",
        "Un único backlog Kanban con políticas explícitas y priorización",
        "Asignar un miembro del CoE de forma fija a cada uno de los squads",
        "Pedir a los squads que sólo hagan pedidos al CoE durante el BRP"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El playbook indica que los CoEs usan Kanban con un único backlog para dar transparencia y facilitar la priorización, con políticas explícitas, y alinean prioridades mensualmente con el Tribe Lead. Asignar miembros fijos lo convierte en chapter."
    },
    {
      "id": "SC25",
      "dimension": "scale",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "La tribu pasó de 2 a 7 squads y las dependencias se siguen gestionando sólo dentro de cada squad. ¿Qué recomiendas?",
      "opciones": [
        "Mantener el esquema actual, ya que los squads son autónomos y se autogestionan",
        "Formalizar los foros de agilidad a escala",
        "Dividir la tribu en siete tribus de un squad cada una para simplificar",
        "Agregar un Project Manager en cada squad para coordinar las dependencias"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El playbook indica que, a partir de unos 5 squads, conviene formalizar los foros de agilidad a escala. Con pocos squads cada uno gestiona sus dependencias, pero al crecer se necesitan espacios de alineación de tribu."
    },
    {
      "id": "SC26",
      "dimension": "scale",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "En la QBR, un PO pide más capacidad para su squad sin ficha de iniciativa ni resultados del trimestre anterior. ¿Qué corresponde?",
      "opciones": [
        "Aprobarla, porque el PO es quien mejor conoce las necesidades de su producto",
        "Pedir la ficha aprobada por el Tribe Lead y los resultados",
        "Rechazarla de forma definitiva hasta la definición de OKRs del próximo año",
        "Reasignarle capacidad de otro squad de la tribu para no frenar su avance"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Los inputs de la QBR incluyen el cumplimiento de objetivos y métricas del trimestre, las fichas de iniciativa aprobadas por el Tribe Lead y las solicitudes de capacidad, para decidir con foco en costo/beneficio y generación de valor."
    },
    {
      "id": "SC27",
      "dimension": "scale",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "El PO de un squad dedica el 30% de su tiempo al squad y el 70% a tareas operativas de su área. ¿Qué haces como Agile Coach?",
      "opciones": [
        "Aceptarlo, ya que es habitual en la transición y se resolverá con el tiempo",
        "Visibilizar el impacto y gestionar un PO dedicado",
        "Que el Scrum Master priorice el backlog cuando el PO no esté disponible",
        "Que el Chapter Lead asuma también el rol de PO del squad"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El modelo define un PO dedicado, 100% disponible para el equipo y autoridad máxima de priorización. Un PO parcial genera esperas y decisiones tardías; el coach hace visible el costo con datos y trabaja con el sponsor."
    },
    {
      "id": "SC28",
      "dimension": "scale",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Varias especialidades transversales (Seguridad, Redes, Legal) tienen una sola persona asignada para los dos primeros squads. ¿Cómo se tratan según el playbook?",
      "opciones": [
        "Como CoEs formales, con daily, planificación semanal y retrospectiva",
        "Como áreas de soporte, evaluando formalizarlas como CoE al crecer los squads",
        "Como chapters, con un Chapter Lead propio de cada especialidad",
        "Como miembros dedicados dentro de cada uno de los squads"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Con un solo miembro y pocos squads, estas especialidades se manejan como áreas de soporte (participan a demanda en los eventos). Los foros internos del CoE sólo aplican con más de un miembro; al activarse más squads se evalúa formalizarlas."
    },
    {
      "id": "SC29",
      "dimension": "scale",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "El PO considera que una desarrolladora tiene un desempeño excelente, pero su Chapter Lead la evalúa por debajo de lo esperado. ¿Cómo debería resolverse?",
      "opciones": [
        "Prevalece la evaluación del Chapter Lead, por ser su líder jerárquico y funcional",
        "Combinar resultados del squad y evaluación técnica, alineando visiones",
        "Prevalece la opinión del PO, porque trabaja con ella todos los días",
        "Lo decide el Tribe Lead sin necesidad de consultar a ninguno de los dos"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Los miembros del chapter se evalúan por el cumplimiento de los resultados del squad y, además, por su Chapter Lead según los estándares de la práctica. Las diferencias se conversan con evidencia para dar un feedback consistente."
    },
    {
      "id": "SC30",
      "dimension": "scale",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "En el BRP aparece una dependencia con Legal que pone en riesgo una iniciativa ya aprobada en la QBR. ¿Qué corresponde?",
      "opciones": [
        "Ignorarla hasta que el riesgo efectivamente se materialice en el sprint",
        "Plan de acción con responsable, release plan ajustado y escalamiento",
        "Cancelar la iniciativa y devolver su capacidad al resto de la tribu",
        "Pedir a Legal que asigne a una persona de forma dedicada al squad"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "El día 2 del BRP se dedica a gestionar dependencias: esquemas de gestión, necesidades de escalamiento, planes de acción y release plan ajustado. Las funciones de soporte participan a demanda, sin dedicación al squad."
    },
    {
      "id": "SC31",
      "dimension": "scale",
      "tipo": "unica",
      "situacional": true,
      "pregunta": "Para un squad nuevo se seleccionó a una desarrolladora que está terminando una iniciativa en su fábrica. Según el proceso de transferencia, ¿qué opción existe?",
      "opciones": [
        "Retirarla de inmediato de la fábrica, porque el squad nuevo tiene prioridad",
        "Negociar su ingreso tardío, sin superar 15 días",
        "Esperar a que la fábrica la libere, sin una fecha límite definida",
        "Reemplazarla por un proveedor externo sin evaluar el impacto en la iniciativa"
      ],
      "correctas": [
        "B"
      ],
      "explicacion": "Ante una iniciativa impactada, el proceso contempla repriorizarla, ajustar su plan (no más de un mes) o, si está próxima a terminar, negociar que la persona ingrese fuera de tiempo, sin superar 15 días del inicio del squad."
    }
  ]
};
