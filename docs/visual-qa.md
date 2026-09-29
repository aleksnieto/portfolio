# Revisión visual del portfolio

## Revisión actual — apertura tipográfica con nombre

Fecha: 2026-09-29. Revisión del implementador en la compilación local; sin despliegue.

- Apertura negra con «Alejandro Nieto.» en dos líneas, cabecera y pie mínimos y línea de avance. Inspeccionada durante la pausa a 1440×900, 482px y 320×740; a 320px el nombre cabe sin desbordamiento (`scrollWidth=320`).
- La introducción dura al menos 1,5 segundos o hasta que los activos estén listos si tardan más, con salida de 480 ms. «Entrar» la salta: después `intro=false`, `aria-busy=false` y sin `inert`. La salida natural mostró los mismos estados.
- El modo de movimiento reducido conserva la ruta directa sin introducción según el código; no se emuló visualmente esa preferencia. Consola sin warnings ni errores. Compilación, lint y cuatro pruebas Node correctos.

**Gate del implementador: 92/100, apto para revisión humana.** Tesis 14/15, tipografía 14/15, composición 15/15, imágenes 9/10 (ausencia deliberada), movimiento 9/10, componentes 9/10, marca y contenido 9/10, accesibilidad 8/10, técnica 5/5. Deuda menor: verificar visualmente movimiento reducido. No es aprobación independiente ni autorización de publicación.

## Revisión anterior — índice tipográfico y perfil profesional

Fecha: 2026-09-29. Revisión del implementador en la compilación local; sin despliegue.

- Cuatro entradas públicas: Gouka Studio, CleverPsico, Gouka Media Engine y Ezbarbers. La antigua ficha de un cliente no figura en la selección ni en el DOM; una ruta antigua desconocida cae en la primera entrada.
- Se retiraron las imágenes y composiciones de portada. Home usa un resumen profesional de ingeniería full stack, IA aplicada y dirección de producto; la ficha usa índice textual, título, estado, descripción, aportación y tecnologías/enfoque.
- Vista de proyectos inspeccionada a 1440×900, 482px y 320×740. A 320px, `clientWidth=scrollWidth=305`; cuatro enlaces legibles en una columna, sin desbordamiento de página. No hay elementos `<img>` en `main`.
- About inspeccionado a 1440px: trayectoria en cinco filas y párrafo profesional con tecnologías atribuidas a productos documentados, no a METRICA. Consola sin warnings ni errores.
- Compilación de producción, lint y tres pruebas Node pasan. El bundle solo genera HTML, CSS y JS; no incluye WebP. Movimiento reducido conservado en CSS, sin prueba visual específica en esta sesión.

**Gate del implementador: 90/100, apto para revisión humana.** Tesis 14/15, tipografía 14/15, composición 14/15, imágenes 9/10 (ausencia deliberada), movimiento 8/10, componentes 9/10, marca y contenido 9/10, accesibilidad 8/10, técnica 5/5. Deuda menor: algunas etiquetas de 11px; no se ha probado visualmente la preferencia de movimiento reducido. Esta evaluación no autoriza publicación ni sustituye una revisión externa.

## Revisión actual — empresa y movimiento

Fecha: 2026-09-28. Verificación visual del implementador en CUA, con asesoría de movimiento y revisión técnica independiente de solo lectura. Sin despliegue.

- Snake Barber ya no aparece en DOM ni en la selección; tampoco se importa su imagen en el bundle. Gouka Studio ocupa una ficha propia de tipo Empresa / Company, separada de Gouka Media Engine. La ficha cambia «Tecnologías» por «Enfoque» y no inventa un dominio.
- Home y ficha del estudio inspeccionadas en 1440×1000, 390×844 y 320×740; textos ES/EN. Sin desbordamiento horizontal: 1440/1440, 390/390 y 305/305 o 320/320 según presencia del scrollbar. Se corrigió y revalidó el recorte de la miniatura y la portada del estudio a 320px.
- Carga inicial observada en fase de salida: pantalla tipográfica «Hola.», fundido de 320 ms y entradas escalonadas. Después se verificó ausencia del loader, `aria-busy=false` y ausencia de `inert`. La carga espera fuentes/imágenes, admite entrada anticipada y tiene un límite de espera de 1800 ms, sin porcentaje ni retardo mínimo artificial.
- Galería: cinco cambios consecutivos con Enter conservaron foco en «Siguiente proyecto». Tras cada cambio, exactamente una portada y una cartela. La revisión técnica detectó keys de React duplicadas; se corrigieron con prefijos distintos antes de esta verificación.
- Scroll móvil: los bloques secundarios pasaron de `reveal-pending` / opacidad 0 a `is-revealed` / opacidad 1 al entrar en pantalla. Contenido principal visible sin depender del observer; foco dentro de un bloque revela su contenido.
- Menú animado inspeccionado en móvil; Escape cierra y restaura el foco al botón. Consola inspeccionada sin warnings ni errores.
- Tres pruebas Node pasan: contenido de la selección, espera real y fallo de imágenes, salida por timeout/APIs ausentes. Build, lint y formato revisados. Sin nuevas dependencias de animación.
- Movimiento reducido revisado en código: se omite la introducción y el observer, se desactivan animaciones/transiciones/zoom y los bloques pendientes siguen visibles. El navegador de prueba estaba en `no-preference`; no se certifica una sesión visual con la preferencia activada.

**Gate del implementador: 91/100, apto para revisión humana.** Tesis 14/15, tipografía 14/15, composición 15/15, imágenes 8/10, movimiento 9/10, estados 9/10, marca 9/10, accesibilidad 8/10, técnica 5/5. Deuda menor: algunas leyendas pequeñas y portadas editoriales en lugar de capturas reales; falta de prueba visual de movimiento reducido. No es una aprobación visual independiente ni autorización de publicación. Capturas inspeccionadas directamente en CUA, sin archivos de imagen guardados.

## Revisión anterior — corrección minimalista sin marco exterior

Fecha: 2026-09-28. Alcance acotado: lienzo blanco a ancho completo, tipografía de sistema Apple con Inter local como fallback, identidad Full Stack Engineer / CEO de Gouka Studio y trayectoria reducida a cinco filas.

**Estado: condicionalmente listo según la revisión del implementador. Gate del implementador: 90/100. No se emite aprobación visual independiente de esta versión.** La sesión CUA del revisor independiente no encontró ningún navegador disponible; no pudo abrir una pestaña ni inspeccionar imágenes del resultado nuevo. Los datos visuales siguientes fueron observados y comunicados por el implementador desde su propia sesión CUA; no son observaciones directas del revisor. El 90/100 histórico que aparece más abajo corresponde a la versión anterior y no se reutiliza como aprobación de esta corrección.

### Evidencia visual comunicada por el implementador

- Preview compilada: `http://127.0.0.1:4173/`.
- Home 1440×1000: captura inspeccionada; hoja con rectángulo `(0, 0, 1440, 1000)`, sin marco ni arquitectura exterior. Familia de sistema Apple/Inter; `document.fonts.check('600 48px Inter') === true`.
- Home 948×872: captura de viewport inspeccionada; hoja `(0, 0, 948, 872)`, titular de `53.088px` distribuido en tres líneas de `56.26px` de altura. La captura `fullPage` del instrumento presentó ocasionalmente una recomposición; se usaron capturas de viewport para juzgar esta anchura.
- About 1440px y 948px: cinco filas legibles, sin acordeones. About móvil 390px: `clientWidth=scrollWidth=375`.
- Home EN y galería EN de una ficha de cliente a 320px: capturas inspeccionadas; `clientWidth=scrollWidth=305`. METRICA sigue visible en el margen del hero móvil. Vista normal 482×844: captura correcta, `clientWidth=scrollWidth=467`.
- Menú 320px: ocupa el viewport. Escape cierra el diálogo y devuelve foco al botón Menu. Enter en Next project abre esa ficha y conserva foco con `aria-label="Next project"`.
- EN: snapshot de las cinco experiencias con roles, fechas y resúmenes correctos. Contacto 948px: nuevo enlace LinkedIn verificado; `clientWidth=scrollWidth=948`.
- Consola observada sin warnings ni errores. Build y lint mediante Node directo correctos; cinco aserciones de roles correctas. El CLI global de npm está roto previamente, por lo que no se atribuye a esta interfaz.
- Ajuste final comunicado: eliminado el preload de Inter para evitar descargar el fallback cuando Apple usa su fuente nativa; sin cambios de CSS o layout. Reconstrucción y formato correctos tras ese ajuste.
- No se guardaron archivos de capturas. No se proporcionan rutas de imágenes inexistentes. No se realizó despliegue.

### Revisión estática independiente

Se leyeron `src/styles.css`, `src/App.jsx` y `src/content.js` sin editarlos. Se confirma en código:

- `.portfolio-sheet`: `margin: 0`, `width: 100%`, `min-height: 100svh`; cuerpo sin ancho mínimo.
- Orden de fuentes `-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", sans-serif`; Inter variable local con rango 100–900 y `font-display: swap`.
- Trayectoria en cinco `article` semánticos: Gouka Studio CEO desde julio de 2026; METRICA Full Stack Engineer desde junio de 2026, con ingeniería de software con IA; Grupo Digital hasta junio de 2026; Grupo NGN y Controlnet 2024–2025. Sin `details` en esa presentación. La fecha de 2026 es un supuesto comunicado por el implementador, no una fecha validada por el revisor.
- Las filas pasan a una columna en móvil; la identidad incluye Full Stack Engineer y CEO de Gouka Studio. Se conservan estilos de foco y la regla `prefers-reduced-motion: reduce` que desactiva animación, transiciones y scroll suave.

No se detectó bloqueo nuevo en esta lectura estática. Esta conclusión no sustituye una inspección independiente del producto en ejecución.

### Gate comunicado por el implementador

| Dimensión | Nota | Evidencia comunicada y límite |
|---|---:|---|
| Tesis específica del producto | 14/15 | Identidad de ingeniero y CEO, METRICA y Gouka visibles; lienzo minimalista completo solicitado por el usuario. |
| Tipografía y jerarquía | 14/15 | Inter cargada, tres líneas controladas a 948px y filas de experiencia legibles. Fuente nativa Apple sin verificación en macOS. |
| Composición y responsive | 15/15 | Rectángulo a ancho completo en 1440/948; capturas 390/320/482 y métricas de anchura sin overflow de página. |
| Imágenes e ilustración | 8/10 | La galería continúa funcionando y una ficha de cliente fue inspeccionada a 320px. Tres proyectos siguen con portadas editoriales, pendientes de capturas reales. |
| Movimiento y feedback | 8/10 | Escape y navegación de galería responden con foco conservado. Reduced motion conservado en CSS; no emulado. |
| Componentes y estados | 9/10 | Menú, galería y EN comprobados; trayectoria simplificada en cinco filas sin estados desplegables. |
| Marca y contenido | 9/10 | Roles actuales, METRICA/IA, CEO Gouka y nuevo LinkedIn verificados. Año 2026 asumido y CVs heredados pendientes de actualizar. |
| Accesibilidad y usabilidad | 8/10 | Restauración y persistencia de foco verificadas; algunas leyendas siguen en 9–10px. No hay auditoría visual independiente de esta versión. |
| Pulido técnico | 5/5 | Build/lint y aserciones correctos; consola sin errores y métricas sin overflow en los tamaños revisados. |
| **Total del implementador** | **90/100** | **Sin bloqueo comunicado; no es una certificación independiente.** |

### Pendientes y límites actuales

1. **Contenido/propietario:** actualizar los CVs heredados para que incluyan los roles nuevos y confirmar el año asumido. La web y los PDF no se consideran sincronizados.
2. **Diseño/frontend:** aumentar las leyendas de 9–10px cuando se revise su legibilidad, manteniendo el minimalismo pedido.
3. **Contenido/propietario:** incorporar capturas reales de los tres proyectos que usan composiciones editoriales.
4. **QA:** comprobar fuente nativa en Apple y movimiento reducido en un entorno que permita ambas verificaciones. La sesión independiente estuvo bloqueada por ausencia de navegador; no hubo bloqueo de producto constatado.

El revisor no cambió viewport ni abrió/cerró pestañas en esta segunda revisión. El navegador permaneció bajo control del implementador, que confirmó al terminar: viewport restaurado, pestaña principal 1 recargada y conservada como entregable, pestaña auxiliar de LinkedIn cerrada.

---

## Revisión histórica — versión con marco y fondo arquitectónico

Todo el contenido restante describe la versión anterior. Su puntuación y sus observaciones no certifican la corrección actual.

Fecha: 2026-09-28. Revisión independiente del producto en ejecución, mediante CUA/IAB. Sin cambios de código por parte del revisor.

## Resultado

**Condicionalmente listo — 90/100.** Supera el umbral Gouka de 85. No se observaron fallos críticos en los recorridos revisados. Las condiciones pendientes son mejoras menores de contenido y verificación, enumeradas al final; no implican autorización de despliegue.

## Evidencia observada

- Desarrollo: `http://127.0.0.1:5173/`. Home, los cinco proyectos, About y Contact; contenido ES y EN. Escritorio 1440×1000, móvil 390×844 y límite 320×740.
- Compilación: `http://127.0.0.1:4173/`. Home y galería en escritorio, galería en 768×1024 y 320×740. Las imágenes observadas cargaron. Consola `warn/error`: vacía en ambos servidores durante la sesión.
- Escritorio: hoja blanca sobre arquitectura monocroma, titular desplazado respecto a su etiqueta, índice compacto y visual CleverPsico. Galería con índice lateral, portada amplia y aportación/tecnologías separadas.
- Móvil: cabecera simplificada, titular y lista apilados; índice de proyectos horizontal con desplazamiento propio; ficha y texto en una columna. La selección del último proyecto desplaza correctamente el índice. El contenido no rebasa el viewport.
- 320px: se detectó inicialmente un desbordamiento horizontal de 15px causado por el ancho mínimo del body. Tras la corrección del implementador se verificó en producción `body=clientWidth=scrollWidth=305`, `innerWidth=320`; desapareció la barra horizontal de página.
- Se detectó texto de miniaturas inactivas atenuado por opacidad del enlace. Corregido por el implementador y revalidado visualmente en producción: enlace y caption `opacity: 1`, portada `opacity: 0.65`. También se confirmó el pie EN «Jerez, Spain» tras su corrección.
- Teclado: Enter en la flecha siguiente conserva el foco en la flecha tras cambiar proyecto. Enter abre la trayectoria NGN. El menú recibe foco al abrir; Escape lo cierra y devuelve foco al disparador. Se observó contorno de foco visible en la flecha.
- Contacto: «Copiar correo» produce «Correo copiado»; el estado cambia a «Email copied» al seleccionar EN. Los enlaces de CV cambian de `cvES.pdf` a `cvEN.pdf`.
- About: Grupo Digital, NGN y Controlnet con fechas y responsabilidades concretas; NGN despliega OrgChart, widgets, Web Worker y coordinación con backend.
- Movimiento: transición breve de aparición/desplazamiento de páginas. Se revisó la regla real `prefers-reduced-motion: reduce`, que desactiva animaciones/transiciones y scroll suave. La API disponible no expone emulación de esa preferencia: no se afirma verificación visual del modo reducido.
- Capturas inspeccionadas directamente en resultados de CUA; no se guardaron archivos de capturas ni se inventaron rutas. Las capturas tomadas durante el primer instante de la transición se repitieron en estado estable.

## Gouka No-AI Gate

| Dimensión | Nota | Evidencia y límite |
|---|---:|---|
| Tesis específica del producto | 14/15 | Claridad y oficio trasladados a la hoja editorial, índice de trabajo y tipografía sobria; identidad, ubicación y proyectos de Alejandro visibles. El fondo arquitectónico aporta la referencia estética más que información profesional. |
| Tipografía y jerarquía | 14/15 | Titulares compactos y grandes, etiquetas pequeñas, texto profesional con lectura clara; buena adaptación ES/EN. Algunas leyendas de 9–10px merecen más tamaño. |
| Composición y responsive | 14/15 | Galería lateral en escritorio/tablet transformada en índice horizontal móvil; blanco amplio y columnas deliberadas. Corregido y revalidado el límite de 320px. |
| Imágenes e ilustración | 8/10 | Escultura CleverPsico y mockup Snake coherentes, cargados y con recortes útiles. Las demás portadas están etiquetadas «Composición editorial del proyecto»; son honestas, aunque demuestran menos producto que capturas reales. |
| Movimiento y feedback | 8/10 | Apariciones breves, selección visible, foco persistente y confirmación de copia. Regla de reducción presente; emulación visual no disponible en esta sesión. |
| Componentes y estados | 9/10 | Menú abierto/cerrado, selección de proyectos, trayectoria expandida/colapsada, cambio de idioma y copia correctos. Sitio estático: no hay carga de datos remotos que exija estados vacíos. |
| Marca y contenido | 9/10 | Cinco proyectos nombrados, aportación y tecnologías; experiencia profesional concreta y contacto real. Idioma del pie corregido y confirmado. Podrían añadirse resultados o decisiones más detalladas a los casos cuando exista evidencia. |
| Accesibilidad y usabilidad | 9/10 | Contenido semántico, enlaces nombrados, salto al contenido, foco visible y restaurado, navegación por teclado. Leyendas pequeñas reducen comodidad de lectura. |
| Pulido técnico | 5/5 | Consolas inspeccionadas sin warnings/errores, imágenes cargadas, rutas y títulos responden; sin desbordamiento de página tras corrección. Build/lint pertenecen a la verificación del implementador. |
| **Total** | **90/100** | **Sin bloqueo crítico observado.** |

## Mejoras de mayor impacto

1. **Contenido/propietario:** incorporar capturas reales de las interfaces cuando estén disponibles, conservando las etiquetas honestas hasta entonces. Mejora la evidencia de trabajo sin cambiar la dirección visual.
2. **Diseño/frontend:** subir las leyendas del índice y algunos metadatos de 9–10px a 11–12px en una próxima iteración; mantener el contraste del texto independiente de la atenuación de las portadas.
3. **QA:** verificar visualmente una sesión con preferencia de movimiento reducido cuando exista un entorno que la emule. El fallback CSS está presente; no se ha certificado su ejecución visual.

No se probaron destinos externos, envío de email ni un despliegue público. La revisión cubre el portfolio local y compilado, no los productos enlazados.

Al finalizar se restauró el viewport del navegador y se cerró únicamente la pestaña de QA (2); la pestaña principal (1) permanece intacta.
