//Define las variables que necesites

$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url:'info.json'
  }).done(function(resp){
    //Guarda el resultado en variables
   eventos = resp.eventos;
    let fecAct = resp.fechaActual
    var previos=[]
    //Selecciona los eventos que sean posteriores a la fecha actual del JSON
  //Ordena los eventos segun la fecha (los mas cercanos primero)
    eventos.forEach(element=>{
      if(element.fecha < fecAct )
        previos.push(element.fecha) 
       })
    previos.sort().reverse();//orden fechas
    //Crea un string que contenga el HTML que describe el detalle del evento
  //Recorre el arreglo y concatena el HTML para cada evento
  //Modifica el DOM agregando el html generado dentro del div con id=evento
      for(var i=0;i<previos.length;i++){
         var evento = eventos.find(element =>element.fecha ==previos[i])
         var div=document.createElement("div")
         div.setAttribute("class","ev2");
         var texto=`<h2><a href="detalle.html?id=${evento.id}">${evento.nombre}</a></h2>
                    <p>Fecha: ${evento.fecha}-Lugar: ${evento.lugar}</p>
                    <p>${evento.descripcion}</p>
                    <p style="color:blue">Costo: ${evento.precio}</p>`
        div.innerHTML=texto
        document.getElementById("pasados").appendChild(div)
      }

});
})
