/* ══ Card swap ════════════════════════════════════════════
   Adaptación estática para este portafolio del componente CardSwap de
   Bencho (MIT — bencho.dev/licence). Una pila de tarjetas fotográficas
   cambia de posición al presionar, arrastrar o lanzar la tarjeta frontal.

   ── UNA TARJETA ES SU SLOT ──────────────────────────────
   El orden es el único estado: cada posición tiene una transformación fija
   y cambiar de tarjeta significa cambiarla de slot. El z-index conserva la
   lectura plana de la pila mientras las transiciones hacen el movimiento.
*/
(function(){
  const STEP_X=34,STEP_Y=26,STEP_Z=70;
  const slot=k=>`translate3d(${k*STEP_X}px,${-k*STEP_Y}px,${-k*STEP_Z}px) skewY(6deg)`;

  document.querySelectorAll('[data-card-swap]').forEach(root=>{
    const cards=[...root.querySelectorAll('.csw-card')];
    let order=cards.map((_,i)=>i);
    const state={drag:null};
    const settle=()=>cards.forEach(card=>{card.style.transition='';card.style.transform='';});
    const render=()=>cards.forEach((card,index)=>{const k=order.indexOf(index);card.style.zIndex=cards.length-k;card.style.setProperty('--t',slot(k));card.toggleAttribute('data-front',k===0);card.setAttribute('aria-label',k===0?'Tarjeta frontal. Presiona o arrastra para cambiar':'Tarjeta en la pila');});
    const swap=()=>{settle();order=[...order.slice(1),order[0]];render();};

    /* ── zoom ──────────────────────────────────────────────
       The stack stays playful, while the zoom button gives every image a
       calm, readable view without leaving the project page. */
    const lightbox=document.createElement('div');
    lightbox.className='csw-lightbox';
    lightbox.setAttribute('role','dialog');
    lightbox.setAttribute('aria-modal','true');
    lightbox.setAttribute('aria-label','Imagen ampliada');
    lightbox.innerHTML='<button class="csw-lightbox-close" type="button" aria-label="Cerrar imagen">×</button><button class="csw-lightbox-arrow csw-lightbox-prev" type="button" aria-label="Imagen anterior">←</button><figure><img class="csw-lightbox-photo" alt=""><figcaption class="csw-lightbox-caption"></figcaption></figure><button class="csw-lightbox-arrow csw-lightbox-next" type="button" aria-label="Imagen siguiente">→</button>';
    root.appendChild(lightbox);
    const lightPhoto=lightbox.querySelector('.csw-lightbox-photo');
    const lightCaption=lightbox.querySelector('.csw-lightbox-caption');
    let lightIndex=0;
    const showLightbox=index=>{lightIndex=(index+cards.length)%cards.length;const card=cards[lightIndex];const image=card.querySelector('img');lightPhoto.src=image.src;lightPhoto.alt=image.alt;lightCaption.textContent=card.querySelector('.csw-tag')?.textContent||'';lightbox.classList.add('is-open');document.body.classList.add('lightbox-open');lightbox.querySelector('.csw-lightbox-close').focus();};
    const closeLightbox=()=>{lightbox.classList.remove('is-open');document.body.classList.remove('lightbox-open');};
    cards.forEach((card,index)=>{const zoom=document.createElement('button');zoom.type='button';zoom.className='csw-zoom';zoom.setAttribute('aria-label','Ver imagen grande');zoom.textContent='↗';zoom.addEventListener('pointerdown',event=>event.stopPropagation());zoom.addEventListener('click',event=>{event.stopPropagation();showLightbox(index);});card.appendChild(zoom);});
    lightbox.querySelector('.csw-lightbox-close').addEventListener('click',closeLightbox);
    lightbox.querySelector('.csw-lightbox-prev').addEventListener('click',()=>showLightbox(lightIndex-1));
    lightbox.querySelector('.csw-lightbox-next').addEventListener('click',()=>showLightbox(lightIndex+1));
    lightbox.addEventListener('click',event=>{if(event.target===lightbox)closeLightbox();});
    document.addEventListener('keydown',event=>{if(!lightbox.classList.contains('is-open'))return;if(event.key==='Escape')closeLightbox();if(event.key==='ArrowLeft')showLightbox(lightIndex-1);if(event.key==='ArrowRight')showLightbox(lightIndex+1);});

    const grab=(event,index)=>{
      if(order[0]!==index||event.button!==0||state.drag)return;
      const card=cards[index];const start={x:event.clientX,y:event.clientY,t:performance.now()};state.drag={index,dx:0,dy:0,pid:event.pointerId};card.style.transition='none';card.setPointerCapture?.(event.pointerId);
      const move=ev=>{if(!state.drag||ev.pointerId!==state.drag.pid)return;state.drag.dx=ev.clientX-start.x;state.drag.dy=ev.clientY-start.y;const rub=d=>160*Math.tanh(d/160);const x=rub(state.drag.dx),y=rub(state.drag.dy);card.style.transform=`${slot(0)} translate(${x.toFixed(1)}px,${y.toFixed(1)}px) rotate(${(x*.05).toFixed(2)}deg)`;};
      const release=ev=>{if(!state.drag||ev.pointerId!==state.drag.pid)return;const d=state.drag;state.drag=null;card.releasePointerCapture?.(ev.pointerId);window.removeEventListener('pointermove',move);window.removeEventListener('pointerup',release);window.removeEventListener('pointercancel',release);const distance=Math.hypot(d.dx,d.dy);const quick=distance/Math.max(1,performance.now()-start.t)>.6;if(ev.type!=='pointercancel'&&(distance<6||distance>70||(quick&&distance>24)))swap();else settle();};
      window.addEventListener('pointermove',move);window.addEventListener('pointerup',release);window.addEventListener('pointercancel',release);
    };
    cards.forEach((card,index)=>{card.tabIndex=0;card.addEventListener('pointerdown',event=>grab(event,index));card.addEventListener('keydown',event=>{if((event.key==='Enter'||event.key===' ')&&order[0]===index){event.preventDefault();swap();}});});
    render();
  });
})();
