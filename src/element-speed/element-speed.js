export default function elementSpeed(elementSelector, speed){
    // Obtén el elemento
    let elements = document.querySelectorAll(elementSelector);
  
    if(!elements){
      return;
    }

    elements.forEach(element => {
        
        // Guarda la posición original del h1
        let posicionOriginal = element.offsetTop;
      
        // Agrega un evento de desplazamiento
        window.addEventListener('scroll', function() {
          // console.log('Posicion Original', posicionOriginal);
          // console.log('Tamano ventana', window.innerHeight);
          // console.log('Posicion actual', window.scrollY);
          
          // Calcula la distancia entre la posición original y la posición actual
          let distanciaDesdeOriginal;
      
          if(posicionOriginal < window.innerHeight){
            distanciaDesdeOriginal = window.scrollY;
          }else{
            distanciaDesdeOriginal = window.scrollY - (posicionOriginal-(window.innerHeight));
          }
      
          // Asegúrate de que la distancia no sea negativa
          let rate = distanciaDesdeOriginal * speed;
      
          // Mueve el elemento a una velocidad diferente
          element.style.position = 'relative';
          element.style.transform = `translate3d(0px, -${rate}px, 0px)`;
        });
    });
}