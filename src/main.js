// JavaScript mínimo para el ejemplo
document.addEventListener('DOMContentLoaded', ()=>{
  const btn = document.getElementById('actionBtn');
  if(btn){
    btn.addEventListener('click', ()=>{
      alert('¡Hola! Has hecho clic en el botón.');
    });
  }
});
