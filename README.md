# Agile Coach Assessment

Examen para evaluar Agile Coaches. Es un único archivo HTML sin dependencias: se abre `index.html` con doble clic y funciona sin servidor ni conexión.

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

## Agregar preguntas

El banco está en `index.html`, en el arreglo `BANK`. Cada pregunta tiene `id` único, dimensión (`d`), tipo (`t`: `s` única, `m` múltiple), opciones (`o`), índices correctos (`a`) y explicación (`e`).
