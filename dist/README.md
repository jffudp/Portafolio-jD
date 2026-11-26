# Portafolio — Jeffer Diaz

Portafolio personal de diseño, procesos y proyectos. La web reúne mi trabajo editorial, gráfico, visual y digital en un recorrido único: primero presento una forma de mirar, luego cuento quién soy y finalmente dejo que cada proyecto se explore como una pieza independiente.

## Demo

[Abrir portafolio publicado](https://portafolio-diseno-vista-previa-2026.jefferimd1501.chatgpt.site)

La versión publicada funciona como una web estática y está preparada para abrirse desde teléfono, tablet o computador.

## Concepto y sistema visual

El concepto rector es **“Diseño, procesos y proyectos”**. La landing funciona como una entrada editorial: el nombre, la frase principal y la selección de trabajos aparecen antes de cualquier explicación extensa. La navegación continúa en una página About y en un archivo de proyectos donde cada pieza tiene su propio ritmo.

El sistema visual combina Space Grotesk y DM Mono, una grilla editorial flexible y una paleta de morados en contraste con negro, lavanda y pequeños acentos naranjos. Las superficies, los bloques inclinados, el texto de gran escala y el movimiento del cursor hacen que el código se sienta como parte del lenguaje gráfico, no solo como soporte.

La landing integra dos adaptaciones de componentes externos: el botón magnético de 21st.dev y el cursor dibujado de Skiper UI. Ambos fueron llevados a HTML, CSS y JavaScript sin depender de React para mantener el sitio liviano y publicable en GitHub Pages.

## Qué contiene

- **Landing:** presentación, selección de trabajos, contacto y acceso a proyectos.
- **About me:** formación desde 2023 en Diseño UDP, intereses, herramientas, trayectoria y correo copiable.
- **Proyectos del curso:** Gestos (E01), Dos realidades (E02), Oír la luz / Fuga Vice City (E03 + T06) y Neon Salvage (Tacto).
- **Proyectos personales:** Poetas / sistema editorial y Hard bop / sistema gráfico.
- **Registro audiovisual:** cada proyecto digital incluye un video de funcionamiento optimizado para navegador.

## Estructura

```text
index.html                         landing
about.html                         perfil y contacto
projects.html                      índice de proyectos
project-*.html                     una subpágina por proyecto
css/style.css                      sistema visual responsive
js/main.js                         navegación, copiado de correo y movimiento
js/CardSwap.js                     recorrido interactivo de imágenes
js/drawing-cursor.js               cursor dibujado inspirado en Skiper59
assets/                            imágenes, GIFs y PDFs de los proyectos
dist/                              archivos preparados para publicación
```

## Cómo probarlo localmente

```bash
python -m http.server 8000 --directory dist
```

Después abre `http://localhost:8000` en el navegador. También se puede abrir `index.html` directamente, aunque un servidor local permite probar mejor rutas, videos y recursos.

## Conceptos aplicados

### HTML

Cada proyecto tiene una estructura propia con título, descripción, enlaces y registro audiovisual:

```html
<div class="project-links">
  <a href="https://github.com/jffudp/gatos_jf">Repositorio ↗</a>
  <a href="https://jffudp.github.io/gatos_jf/">Ver experiencia ↗</a>
</div>
<video class="project-video" controls preload="metadata" playsinline>
  <source src="videos/gestos-web.mp4" type="video/mp4">
</video>
```

### CSS

Las variables permiten mantener una familia cromática común en todas las páginas:

```css
:root {
  --paper: #f3eefc;
  --purple-light: #e4d5ff;
  --purple: #8d55d9;
  --purple-deep: #3c1d67;
  --ink: #10110d;
}
```

### JavaScript

El correo se puede copiar sin abandonar la página y muestra una respuesta breve:

```js
document.querySelectorAll('[data-copy-email]').forEach(button => {
  button.addEventListener('click', async () => {
    await navigator.clipboard.writeText(button.dataset.copyEmail);
    button.querySelector('[data-copy-feedback]').textContent = 'Copiado';
  });
});
```

### MediaPipe, Web Audio y MQTT

Estos conceptos aparecen en los proyectos del curso, no solo en la interfaz del portafolio. MediaPipe permite interpretar manos y rostro en **Gestos** y **Dos realidades**; Web Audio transforma cambios visuales en capas sonoras en **Oír la luz**; MQTT conecta el teléfono y el computador en **Neon Salvage**. Los fragmentos completos de esas implementaciones están en los repositorios de cada proyecto.

### GitHub Pages

El sitio se publica como archivos estáticos. La carpeta `dist/` contiene la versión lista para servir: HTML, CSS, JavaScript, imágenes, PDFs y videos optimizados. Cada proyecto conserva además su enlace a su repositorio y a su experiencia funcionando.

## Aprendizajes del ramo

Durante el semestre aprendimos a pensar una experiencia completa y no solo una pantalla aislada: definir una idea, construir un sistema visual, ordenar una narrativa, programar interacciones, probar en teléfono, documentar el proceso y publicar una versión que otras personas puedan recorrer.

También aprendimos a trabajar con distintas formas de entrada —gestos, cámara, sonido, tacto y movimiento— y a traducirlas en respuestas visuales o sonoras. La dificultad no estuvo solamente en hacer funcionar cada proyecto, sino en explicar qué hace, cómo se usa y por qué está diseñado de esa manera.

## Créditos y licencias

- Space Grotesk y DM Mono: Google Fonts, [SIL Open Font License](https://scripts.sil.org/OFL).
- Botón magnético: adaptación del componente [Magnetic Button de 21st.dev](https://21st.dev/community/components), licencia MIT.
- Cursor dibujado: adaptación del componente [Drawing Cursor de Skiper UI / Skiper59](https://skiper-ui.com/v1/skiper59), licencia MIT y atribución solicitada para la versión gratuita.
- Imágenes, fotografías, afiches, publicaciones y videos: material propio de los proyectos de Jeffer Diaz.

## Uso de IA

La IA se utilizó como apoyo técnico durante el proceso: explorar alternativas de estructura, detectar errores, proponer formas de resolver interacciones y revisar la organización de archivos. Las decisiones de concepto, selección de proyectos, textos personales, créditos y dirección visual corresponden al autor y deben revisarse antes de la entrega.

## Reflexión personal del semestre

Esta sección debe completarse con las palabras de Jeffer Diaz, sin delegar su redacción a IA. Incluye aquí: los principales aprendizajes, los desafíos que enfrentaste, cómo los resolviste, qué cambió en tu forma de diseñar y qué te gustaría seguir explorando.
