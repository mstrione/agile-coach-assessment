# Agile Coach Assessment

Examen para evaluar Agile Coaches. No tiene dependencias externas: se abre `index.html` con doble clic y funciona sin servidor ni conexión. Publicado en https://mstrione.github.io/agile-coach-assessment/

## Estructura

```
index.html          la página (sólo estructura)
css/styles.css      estilos y temas claro/oscuro
js/app.js           lógica: examen, temporizador, resultados, historial
data/preguntas.js   configuración, dimensiones y banco de preguntas
```

## Cómo funciona

- Al iniciar se ingresa el nombre del coach y la cantidad de preguntas (10 a 60).
- El tiempo es de 2 minutos por pregunta, sobre el total del examen; al agotarse se entrega solo.
- Preguntas de respuesta única y múltiple, elegidas al azar y repartidas parejo entre dimensiones.
- No hay corrección durante el examen. Al final muestra puntaje, nivel por dimensión (barras y radar) y la revisión de cada pregunta con su explicación.
- Aprobación: 70%.

## Dimensiones

Frameworks ágiles, OKRs, herramientas de gestión, métricas, coaching y mentoring, Microsoft Office 365, descubrimiento de producto y, como recomendables, DevOps y el modelo de tribus, squads, chapters y CoEs con sus foros.

Las preguntas están alineadas al Agile Playbook del Plan Horizonte y a la teoría oficial donde el playbook no profundiza.

## Datos

El historial por coach se guarda en el `localStorage` del navegador. Para respaldarlo o moverlo a otra computadora, usar *Exportar* / *Importar* en la pantalla Historial.

## Modificar preguntas

Todo se edita en `data/preguntas.js`. Después de `window.ASSESSMENT_DATA =` hay JSON estricto (comillas dobles, sin comas finales). No es un `.json` puro porque el navegador bloquea `fetch()` de archivos locales al abrir la página con doble clic.

```json
{
  "id": "FW01",
  "dimension": "fw",
  "tipo": "unica",
  "pregunta": "Según la Guía Scrum 2020, ¿cuál es el compromiso asociado al Product Backlog?",
  "opciones": ["El Objetivo del Producto", "La Definición de Hecho", "El Objetivo del Sprint", "La Definición de Preparado"],
  "correctas": ["A"],
  "explicacion": "Cada artefacto tiene un compromiso: ..."
}
```

- `tipo`: `"unica"` (exactamente 1 correcta) o `"multiple"` (2 o más; se indica al evaluado cuántas elegir).
- `correctas`: letras según el orden del archivo; las opciones se barajan al mostrarse.
- `id`: único y estable, porque el historial lo referencia. Para una pregunta nueva, usar un id nuevo.
- `config` define segundos por pregunta, porcentaje de aprobación y mínimo/máximo de preguntas.
- `dimensiones` define las dimensiones (`id`, `nombre`, `corto` para el gráfico, `tipo`).

Al cargar, la app valida el banco: si una pregunta tiene errores la descarta y lo avisa en la pantalla de inicio.
