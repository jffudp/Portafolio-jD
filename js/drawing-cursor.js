/* ══ Drawing cursor ══════════════════════════════════════
   Adaptación en JavaScript puro del efecto Drawing Cursor de Skiper UI
   (Skiper59, licencia MIT; skiper-ui.com/v1/skiper59). El canvas queda
   sobre la página, no captura eventos y dibuja una línea que desaparece.
*/
(() => {
  if (matchMedia('(pointer: fine)').matches === false || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const canvas = document.createElement('canvas');
  canvas.className = 'drawing-cursor-canvas';
  canvas.setAttribute('aria-hidden', 'true');
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  const points = [];
  const lifetime = 620;
  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(window.innerWidth * dpr);
    canvas.height = Math.round(window.innerHeight * dpr);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  const move = event => {
    if (event.pointerType === 'touch') return;
    const now = performance.now();
    points.push({ x: event.clientX, y: event.clientY, t: now });
    if (points.length > 90) points.shift();
  };
  const draw = now => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    while (points.length && now - points[0].t > lifetime) points.shift();
    for (let i = 1; i < points.length; i += 1) {
      const a = points[i - 1];
      const b = points[i];
      const age = (now - b.t) / lifetime;
      const alpha = Math.max(0, 0.65 * (1 - age));
      if (alpha <= 0) continue;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.lineWidth = 1.5 + (1 - age) * 1.2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = `rgba(111,66,183,${alpha})`;
      ctx.stroke();
    }
    requestAnimationFrame(draw);
  };
  resize();
  window.addEventListener('resize', resize, { passive: true });
  window.addEventListener('pointermove', move, { passive: true });
  requestAnimationFrame(draw);
})();
