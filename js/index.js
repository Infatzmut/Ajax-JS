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
    console.log(fecmen.sort().reverse());fecma.sort((a,b)=>b-a); //ordenamos de menor a maoyr las fechas


  })

  
  
  
  //Ordena los eventos segun la fecha (los mas cercanos primero)

  //Extrae solo dos eventos

  //Ordena los eventos segun la fecha (los mas cercanos primero)

  //Extrae solo dos eventos

  //Crea un string que contenga el HTML que describe el detalle del evento

  //Recorre el arreglo y concatena el HTML para cada evento

  //Modifica el DOM agregando el html generado

  //Crea un string que contenga el HTML que describe el detalle del evento

  //Recorre el arreglo y concatena el HTML para cada evento

  //Modifica el DOM agregando el html generado

});
