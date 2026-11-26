# Diseño, procesos y proyectos — Jeffer Diaz

Este repositorio contiene mi portafolio personal de diseño. La web reúne proyectos editoriales, gráficos, visuales y digitales en un recorrido que parte por una presentación breve, continúa con un perfil personal y termina en páginas independientes para cada trabajo.


## 1. Concepto y recorrido

El concepto del portafolio es **“Diseño, procesos y proyectos”**. No funciona como una galería que solo muestra resultados: propone una entrada, un contexto y una experiencia para recorrer cada pieza.

La landing responde en pocos segundos quién soy y qué hago. El apartado **Sobre mí** explica mi formación, intereses y herramientas. El archivo de proyectos organiza el semestre como una secuencia: cada subpágina tiene su propio título, descripción, enlaces y registro de funcionamiento.

La navegación está construida como un sistema editorial. Se repiten el monograma `JD`, los encabezados de gran escala, los textos breves en DM Mono y los enlaces con flechas. Las repeticiones construyen identidad; las variaciones de color, inclinación y movimiento distinguen cada proyecto.

## 2. Proyectos incluidos

| Proyecto | Qué muestra | Repositorio | Experiencia / registro |
| --- | --- | --- | --- |
| Gestos (E01) | Reconocimiento de manos y rostro con MediaPipe | [gatos_jf](https://github.com/jffudp/gatos_jf) | [Demo](https://jffudp.github.io/gatos_jf/) · `gestos-web.mp4` |
| Dos realidades (E02) | Dos lecturas visuales de una cámara en tiempo real | [Dos_realidades](https://github.com/jffudp/Dos_realidades) | [Demo](https://jffudp.github.io/Dos_realidades/) · `dos-realidades-web.mp4` |
| Oír la luz / Fuga Vice City (E03 + T06) | Traducción de movimiento de video a capas sonoras | [FUGA-VICE-CITY-final-](https://github.com/jffudp/FUGA-VICE-CITY-final-) | [Demo](https://jffudp.github.io/FUGA-VICE-CITY-final-/) · `vice-city-web.mp4` |
| Neon Salvage (Tacto) | Juego conectado a un teléfono mediante MQTT | [T07_Tacto](https://github.com/jffudp/T07_Tacto) | [Demo](https://jffudp.github.io/T07_Tacto/) · `neon-salvage-web.mp4` |
| Poetas / sistema editorial | Afiche, publicación y piezas desplegables impresas | Proyecto editorial no digital | [Afiche PDF](assets/personal-01/afiche-poetas-a3.pdf) · imágenes del proceso |
| Hard bop / sistema gráfico | Afiche y serie de posavasos inspirados en el jazz | Proyecto gráfico no digital | [Afiche PDF](assets/personal-02/afiche-jazz-hard-bop.pdf) · imágenes del proceso |

Los proyectos digitales tienen un video de registro optimizado para navegador. En los proyectos impresos, el PDF y las imágenes cumplen la función de mostrar el resultado y el proceso.

## 3. Gráfica, movimiento y componentes

| Decisión | Aplicación en el portafolio |
| --- | --- |
| Tipografía | Space Grotesk para títulos y lectura; DM Mono para datos, etiquetas y navegación. |
| Color | Morados y lavandas como familia principal, negro para estructura y naranja como acento puntual. |
| Grilla | Columnas amplias para presentar ideas y bloques compactos para metadatos y navegación. |
| Imagen | Las portadas funcionan como campos visuales; las galerías permiten acercarse a los detalles. |
| Movimiento | Parallax editorial, botón magnético, cursor dibujado y CardSwap para recorrer imágenes. |
| Responsive | La grilla se reorganiza a una columna y el menú se convierte en navegación móvil. |

La landing integra una adaptación del **Magnetic Button** de 21st.dev y una adaptación del **Drawing Cursor** de Skiper UI / Skiper59. Ambos componentes fueron trasladados a HTML, CSS y JavaScript sin React para conservar una publicación estática y fácil de mantener.

## 4. Arquitectura de la experiencia

```text
index.html                         landing y selección
about.html                         perfil, trayectoria y contacto
projects.html                      archivo de proyectos
project-*.html                     una subpágina por proyecto
css/style.css                      sistema visual responsive
js/main.js                         menú, correo copiable y movimiento
js/CardSwap.js                     tarjetas arrastrables y zoom
js/drawing-cursor.js               cursor dibujado en canvas
assets/                            imágenes, GIFs y PDFs
dist/videos/                       registros MP4 optimizados
```

Cada subpágina mantiene la misma lógica: nombre, descripción, enlaces, visual principal y evidencia del funcionamiento. Esto permite que el portafolio se lea como un conjunto, aunque cada proyecto tenga una atmósfera diferente.

## 5. Conceptos técnicos

### HTML: una página por proyecto

```html
<div class="project-links">
  <a href="https://github.com/jffudp/gatos_jf">Repositorio ↗</a>
  <a href="https://jffudp.github.io/gatos_jf/">Ver experiencia ↗</a>
</div>
<video class="project-video" controls preload="metadata" playsinline>
  <source src="videos/gestos-web.mp4" type="video/mp4">
</video>
```

### CSS: variables y sistema visual

```css
:root {
  --paper: #f3eefc;
  --purple-light: #e4d5ff;
  --purple: #8d55d9;
  --purple-deep: #3c1d67;
  --ink: #10110d;
}
```

### JavaScript: interacción pequeña y útil

```js
document.querySelectorAll('[data-copy-email]').forEach(button => {
  button.addEventListener('click', async () => {
    await navigator.clipboard.writeText(button.dataset.copyEmail);
    button.querySelector('[data-copy-feedback]').textContent = 'Copiado';
  });
});
```

### MediaPipe, Web Audio y MQTT

MediaPipe permite convertir manos y rostro en gestos visuales en **Gestos** y **Dos realidades**. Web Audio transforma cambios de imagen en capas de sonido en **Oír la luz**. MQTT conecta un teléfono y un computador para controlar **Neon Salvage**. Esos sistemas viven en sus repositorios respectivos; este repositorio documenta cómo se presentan dentro del portafolio.

### GitHub Pages

La publicación se realiza como un sitio estático. Se mantienen separados los archivos de trabajo y la carpeta `dist/`, que contiene la versión lista para servir: HTML, CSS, JavaScript, imágenes, PDFs y videos web. Antes de publicar se revisan las rutas, el tamaño de los videos y la versión móvil.

## 6. Experiencia del ramo

El trabajo del semestre no consistió en producir una pieza nueva para el portafolio, sino en construir una forma de leer todas las piezas que ya existían. Diseñar la landing, el About y las subpáginas obligó a seleccionar, ordenar y explicar el trabajo, además de programar una navegación coherente.

Aprendimos a trabajar con entradas muy distintas: gestos, cámara, movimiento, audio, tacto y comunicación entre dispositivos. También aprendimos que una interacción debe poder entenderse, probarse y documentarse: no basta con que el código funcione una vez, tiene que abrirse en un teléfono, tener instrucciones claras y dejar una evidencia visible.

El portafolio reúne ese aprendizaje en una sola experiencia: diseño gráfico y editorial para construir identidad, HTML y CSS para organizar el relato, JavaScript para darle respuesta al recorrido y GitHub Pages para convertir el conjunto en una web accesible.

## 7. Créditos y licencias

- Space Grotesk y DM Mono: Google Fonts, [SIL Open Font License](https://scripts.sil.org/OFL).
- Botón magnético: adaptación del [Magnetic Button de 21st.dev](https://21st.dev/community/components), licencia MIT.
- Cursor dibujado: adaptación del [Drawing Cursor de Skiper UI / Skiper59](https://skiper-ui.com/v1/skiper59), licencia MIT y atribución para la versión gratuita.
- Imágenes, fotografías, afiches, publicaciones y videos de registro: material propio de los proyectos de Jeffer Diaz.
- Los créditos específicos de sonidos, imágenes o librerías de cada experiencia se mantienen en los README de sus repositorios correspondientes.

## 8. Uso de IA

La IA se utilizó como apoyo técnico para explorar alternativas de estructura, detectar errores, revisar rutas, convertir videos a formatos compatibles y ordenar la documentación. La selección de proyectos, la dirección visual, la narrativa y las decisiones finales pertenecen al autor.

## 9. Reflexión personal del semestre

Esta sección debe escribirse con las palabras de Jeffer Diaz, sin delegar su redacción a IA. Para completarla, desarrolla:

1. Qué aprendiste sobre diseño, código e interacción.
2. Qué desafío fue más difícil y cómo lo resolviste.
3. Cómo cambió tu forma de pensar una experiencia digital.
4. Qué te gustaría seguir explorando después del ramo.

## Uso local

```bash
python -m http.server 8000 --directory dist
```

Luego abre `http://localhost:8000` en el navegador. Un servidor local permite probar correctamente las rutas, los videos y los recursos antes de subir el repositorio a GitHub.
