// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites


$(document).ready(function () {

  //Carga los datos que estan en el JSON (info.json) usando AJAX
  $.ajax({
    url :'info.json'
  }).done(function(resp){
      //Guarda el resultado en variables
    var fechas =[]
    eventos = resp.eventos;
    eventos.forEach(function(element){
       fechas.push(element.fecha) //capturo las fechas en un array divididos por - -
    })
    //capturo la fecha actual
    var fecActual = resp.fechaActual;
    
    //Clasifica los eventos segun la fecha actual del JSON
    var fecmen =[],fecma =[]
    for(var i=0;i<fechas.length;i++){
      if(fechas[i]<fecActual)
      fecmen.push(fechas[i])
      else fecma.push(fechas[i])
    }
    fecmen.sort().reverse();fecma.sort().reverse();  //Ordena los eventos segun la fecha (los mas cercanos primero)
    //Extrae solo dos eventos
    var primer_ev=fecmen[0]
    var segun_ev=fecmen[1]
    evento_1 = eventos.find(element=>element.fecha==primer_ev)
    evento_2 = eventos.find(element=>element.fecha==segun_ev)
    var html=`<div class="ev"><h2>${evento_1.nombre}</h2>
              <p>${evento_1.fecha}</p>
              <p>${evento_1.descripcion}</p>
              </div>
              <div class="ev"><h2>${evento_2.nombre}</h2>
              <p>${evento_2.fecha}</p>
              <p>${evento_2.descripcion}</p>
              </div>`;
    document.getElementById('pasados').innerHTML=html

    var primer_ev=fecma[0]
    var segun_ev=fecma[1]
    evento_1 = eventos.find(element=>element.fecha==primer_ev)
    evento_2 = eventos.find(element=>element.fecha==segun_ev)
    var html=`<div class="ev"><h2>${evento_1.nombre}</h2>
              <p>${evento_1.fecha}</p>
              <p>${evento_1.descripcion}</p>
              </div>
              <div class="ev"><h2>${evento_2.nombre}</h2>
              <p>${evento_2.fecha}</p>
              <p>${evento_2.descripcion}</p>
              </div>`;
    document.getElementById('proximos').innerHTML=html
  })

  
  
  

  

  //Ordena los eventos segun la fecha (los mas cercanos primero)

  //Extrae solo dos eventos

  //Crea un string que contenga el HTML que describe el detalle del evento

  //Recorre el arreglo y concatena el HTML para cada evento

  //Modifica el DOM agregando el html generado

  //Crea un string que contenga el HTML que describe el detalle del evento

  //Recorre el arreglo y concatena el HTML para cada evento

  //Modifica el DOM agregando el html generado

});
