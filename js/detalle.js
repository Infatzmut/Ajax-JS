// Hemos omitido los acentos en los comentarios por compatibilidad

$(document).ready(function () {

  
  

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url:'info.json'
  }).done(function(resp){
    //Esta es la instruccion para tomar el id del URL detalle.html?id=<identificador>
    var id = location.search.match(/id=(\d)*/)[1]
    //Guarda el resultado en una variable
    eventos = resp.eventos;
    //Busca el elemento en el arreglo
    evento = eventos.find(function(element){
      return element.id==id
    })
     //Crea un string que contenga el HTML que describe el detalle del evento
    var html = `<h2>${evento.nombre}</h2>
              <p>Fecha: ${evento.fecha} - ${evento.lugar}</p>
              <p>${evento.descripcion}</p>
              <p>Invitados: ${evento.invitados}</p>
              <p>Precio: ${evento.precio}</p>` //Completa este HTML con los demas atributos del evento

  //Modifica el DOM agregando el html generado dentro del div con id=evento
  document.getElementById("evento").innerHTML=html;
  document.getElementById("evento").setAttribute("class","ev2")
  })
});
