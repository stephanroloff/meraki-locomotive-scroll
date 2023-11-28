export default function scrollToTopAfterReload(){
  // Agrega un evento que se ejecuta cuando la carga de la página ha finalizado
  window.addEventListener('load', function() {
    // Restablece la posición de desplazamiento a la parte superior sin suavizado
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  });
}