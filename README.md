# Alejandro Nieto — Portfolio

Portfolio editorial en React y Vite. Blanco y negro, una portada tipográfica, un contador de más de 30 proyectos trabajados, Gouka Studio como empresa y tres productos seleccionados, trayectoria profesional y contacto. Disponible en español e inglés.

## Desarrollo

```sh
npm ci
npm run dev
npm run build
npm run lint
npm test
```

`npm run preview` sirve la compilación de `dist`. La web principal es `https://www.alexnieto.es/`: Netlify compila `npm run build` y publica `dist` automáticamente al recibir cambios en `main`. La copia de GitHub Pages no es el destino de producción.

## Contenido

- `src/content.js`: perfil, proyectos y experiencia en ambos idiomas.
- `src/App.jsx`: textos de interfaz, navegación, índice editorial de proyectos, menú y contacto.
- `src/styles.css`: sistema visual y adaptaciones móviles; movimiento reducido mediante la preferencia del sistema.
- Los PDF del CV se retiraron del repositorio activo y la web dejó de ofrecer su descarga. Los archivos se pueden recuperar desde el historial de Git. La web usa `goukastudio@gmail.com` como correo de contacto y omite la ciudad y la sección personal.

Rutas: `#home`, `#work`, `#work/gouka-studio`, `#work/cleverpsico`, `#work/gouka`, `#work/ezbarbers`, `#about` y `#contact`. Gouka Studio y Gouka Media Engine son entradas distintas. Los trabajos de clientes no figuran en la selección; una ruta de proyecto desconocida muestra la primera entrada.

El menú utiliza un diálogo nativo con foco modal y cierre mediante Escape. Los proyectos mantienen el foco al avanzar con teclado; los enlaces funcionan con el historial del navegador. El idioma se conserva localmente cuando el almacenamiento está disponible.

La apertura tipográfica muestra «Alejandro Nieto» durante al menos 1,5 segundos, espera las fuentes y cualquier imagen futura (con salida de seguridad a 1,8 segundos) y permite entrar antes mediante un botón. El fundido de salida dura 480 ms; las entradas de contenido usan CSS, y un único IntersectionObserver revela bloques secundarios al hacer scroll. Con movimiento reducido se omite la introducción y se desactivan las animaciones. No se añaden librerías de animación. Los proyectos actuales se presentan sin imágenes.

`node --test tests/portfolio.test.mjs` verifica la selección de contenido y que la carga termina incluso ante fallos o recursos que no responden.

## Evidencia y procedencia

- [Fuentes y límites del contenido](docs/content-sources.md).
- [Dirección visual, activos y prompt del fondo](docs/visual-assets.md).
- [Revisión visual](docs/visual-qa.md).

Las traducciones originales permanecen en `src/lng` como referencia histórica. Los componentes obsoletos retirados están disponibles en el historial de Git.
