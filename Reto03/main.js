//alert('Qué onda??')
let check = document.getElementById('tarea1')
let titulo = document.getElementById ('titulo')
let btninicio = document.getElementById('btninicio')
let nombreinput = document.getElementById('nombreinput')

//btninicio.addEventListener('click', function(){
  //  alert('acá')
//})

btninicio.addEventListener('click',function(){
  let tipo = nombreinput.value
  if (tipo != ''){
    let tipo = nombreinput.value
    titulo.innerHTML = " Hola " + tipo +" empezá a tachar"}
})


//check.addEventListener('click',function(){
  //  let tipo = nombreinput.value
    //alert (tipo +' que Bueno ya hiciste la actividad ')
//})
//Planteo la constante para que pueda seleccionar la clase 

const tareas = document.querySelectorAll('.tareas')

tareas.forEach(tarea => {
  tarea.addEventListener('click',function(){
    let tipo = nombreinput.value
    alert(tipo +' que bueno ya hiciste la actividad!!! ')
})
})

