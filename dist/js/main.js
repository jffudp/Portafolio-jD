const menuButton=document.querySelector('.menu-button');const menu=document.querySelector('nav');if(menuButton){menuButton.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',open);menuButton.textContent=open?'Cerrar':'Menú';});}

// Adaptación sin dependencias del efecto "Magnetic Button" de 21st.dev (licencia MIT).
document.querySelectorAll('.round-link').forEach(link=>{link.addEventListener('pointermove',event=>{const box=link.getBoundingClientRect();const x=(event.clientX-box.left-box.width/2)*.18;const y=(event.clientY-box.top-box.height/2)*.18;link.style.transform=`translate(${x}px, ${y}px) rotate(8deg)`;});link.addEventListener('pointerleave',()=>{link.style.transform='';});});

// Refracción de agua sin anillo visible: el brillo y el contraste cambian bajo el cursor.
if(matchMedia('(pointer:fine) and (prefers-reduced-motion:no-preference)').matches){const water=document.createElement('div');water.className='cursor-water';document.body.append(water);document.addEventListener('pointermove',event=>{water.style.setProperty('--water-x',`${event.clientX}px`);water.style.setProperty('--water-y',`${event.clientY}px`);water.style.setProperty('--water-angle',`${Math.atan2(event.movementY,event.movementX)||0}rad`);});}
