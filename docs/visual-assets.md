# Dirección visual y activos

Remake editorial del portfolio de Alejandro Nieto, basado en las tres referencias aportadas por el usuario: tipografía sans serif, composición asimétrica y navegación de proyectos mediante un índice. En la revisión del 28/09/2026, el usuario pide ocupar toda la ventana: se elimina el marco arquitectónico y la superficie blanca pasa a ancho completo, con altura mínima de viewport y desplazamiento natural cuando el contenido lo requiere.

## Tipografía

La familia principal usa `-apple-system` y `BlinkMacSystemFont` en dispositivos Apple. Como alternativa local, especialmente en Windows, se incluye Inter variable del [repositorio oficial](https://github.com/rsms/inter/tree/master/docs/font-files), con su licencia SIL Open Font License en `public/fonts/Inter-LICENSE.txt`. No se distribuye la tipografía propietaria de Apple. La jerarquía ajusta pesos, interlineado y espaciado; Inter se sirve desde el propio sitio, sin peticiones a proveedores externos.

## Activos y estado actual

- Los proyectos se presentan con tipografía y datos profesionales, sin imágenes ni composiciones de portada. Ningún archivo WebP se importa en la compilación actual.
- `src/img/cleverpsico.webp`: activo original de la web pública de CleverPsico, obtenido de https://www.cleverpsico.com/images/cleverpsico-clinic-in-order.webp mediante el inventario de activos del navegador. Se conserva en el árbol de trabajo, pero ya no aparece en la interfaz.
- `src/img/MockupSnake.webp`: mockup histórico conservado en el repositorio; Snake Barber se ha retirado y este archivo ya no se importa ni se incluye en la compilación.
- Las antiguas composiciones CSS de las fichas se retiraron. Los trabajos para clientes dejaron de figurar como proyectos seleccionados.
- `src/img/architecture.webp`: fondo decorativo de la primera iteración, conservado pero ya no usado ni incluido en el bundle. Espacio imaginario generado mediante Imagegen. Original de 1536 × 1024 convertido a WebP, 89.082 bytes. No representa una localización o proyecto del autor.
- `public/favicon.svg`: monograma tipográfico AN creado para el portfolio.

## Prompt del fondo

Modo: herramienta integrada Imagegen; generación nueva, fondo opaco, sin imágenes de entrada.

> Use case: photorealistic-natural. Asset type: subtle full-bleed background for a very minimal black-and-white software developer portfolio, behind a large white editorial sheet. Primary request: original black-and-white architectural photograph of a silent brutalist concrete interior with a tall narrow opening to daylight. Wide landscape 3:2 composition. Monumental simple geometry, a concrete wall and staircase along the left edge, vertical steel window framing on the right, deep dark space in the center. Fine authentic concrete texture and analog grain, dramatic natural sidelight, mostly charcoal and black with restrained silver highlights. Strong structural lines visible around the outer edges, the middle will be covered by the website. Photorealistic architectural editorial photography, restrained and quiet. This is an imaginary place, not a specific existing building. No people, no furniture, no text, no logos, no watermark, no web interface or white overlay.

No hay fuentes remotas, seguimiento, formularios que recojan datos ni peticiones externas en la carga de la aplicación. Los enlaces externos solo se visitan por acción del usuario. El único dato guardado por la nueva implementación es la preferencia de idioma en localStorage.
