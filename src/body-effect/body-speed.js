export default function bodySpeed(speed){
  
    // Obtén el elemento h1
    let body = document.querySelector('body');
    
    // Agrega un evento de desplazamiento
    window.addEventListener('scroll', function() {
      let scrolled = window.scrollY;
      let rate = scrolled * speed; 
      // Mueve el h1 a una velocidad diferente
      body.style.position = 'relative';
      body.style.transform = `translate3d(0px, ${rate}px, 0px)`;
    });
  
}