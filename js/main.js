if('serviceWorker'in navigator){
  console.log('Puedes usar el SW');
  navigator.serviceWorker.register('./sw.js')
  .then(res=>console.log('ServiceWorker ok', res))
  .catch(err=>console.log('No hay Service Worker'));
}else{
  console.log('No puedes usar los Service Worker')
}

$(document).ready(function(){
  $("menu a").click(function(e){
      e.preventDefault();
      $("html, body").animate({
          scrollTop: $($(this).attr('href').offeset().top)
      });
      return false;
  });
})
/* tambien se puede registrar el servi WORKER de esta manera
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("./Service_Worker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
} */