// {//------------RETORNANDO UNA FUNCTION CON UNA FUNCTION------
// function hello() {
//     return function cliente() {
//         return 'clientes'
//     }
// }
// console.log(hello()())

// //---------RETORNANDO CON FUNCTION VALORES CON PARAMETROS------
// function saludar(name) {
//     console.log('Bienvenid@ ' + name)
// }
// console.log(saludar('juli'))
// console.log(saludar('pocha'))
// console.log(saludar('fernandez'))
// //con mas de un parametro
// function sumar(a, b) {
//     return console.log(a + b)
// }
// console.log(sumar(30, 4))
// console.log(sumar(6, 7))

// //-----------OBJETOS-------------
// const mascota = {
//     name: 'Pocha',
//     animal: 'dog',
//     age: 5,
//     dueñx: ['Javier', 'Débora', 'Nélida'],//con array
//     adress: {//objeto dentro de objeto
//         countri: 'Argentina',
//         city: 'Capital Federal',
//         street: 'Mi casa 123'
//     },
//     adopted: true,
//     sendLove: function () {//con functions
//         return 'Sending love <3...'
//     }

// }
// console.log(mascota.sendLove())
// //objeto nuevo con datos externos (como los const de producto y precio 
// //tienen el mismo valor que la key en el objeto, no hace falta hacer 
// //precio = precio)
// const producto = 'Comida para perro'
// const precio = 2000
// const vencimiento = 25

// const site = {
//     producto,
//     precio,
//     caducidad: vencimiento
// }
// console.log(site)

// //----------------CREAR ETIQUETA HTML DESDE JS-----------
// const title = document.createElement('h1')//tipo de etiqueta a crear

// title.innerText = 'Hola! Este es un h1 desde JS'//texto a mostrar

// document.body.append(title)//mostrarlo en el navegador

// //ejemplo AÑADIENDO EVENTOS
// const button = document.createElement('button')
// button.innerText = 'clik here'
// button.addEventListener('click', function(){
//     const subTitulo = document.createElement('h3')
//     subTitulo.innerText = 'cree un h3 desde JS'
//     document.body.append(subTitulo)
//     alert('se estan creando h3 desde JS, soy capa')
// })
// document.body.append(button)

// //usando objetos para mostrarlos en dom
// const paleta = {
//     color: 'rojo',
//     complementario: 'verde'
// }
// function printColor(paleta) {
//     return '<h1> Mi color favorito es ' + paleta.color + '</h1>'
// }
// console.log(printColor(paleta))
// document.body.innerHTML = printColor(paleta)
// //document.body.innerHTML = '<h4> AJJJA un h4 </h4>'
// }

// //--------CREAR Y EJECUTAR UNA FUNCION ANONIMA ------
// console.log(function (){
//     return 'La cosa se esta iniciando...'
// }())
// //la añadimos a un evento
// const boton = document.createElement('button')
// boton.innerText = 'click me'
// boton.addEventListener('click', function(){
//     alert('Ahora si, la cosa se inicia...')
// })
// document.body.append(boton)

// //---------ARROW FUNCTION----------
// const numeros = () => [1, 2, 3];
// const names = () => 'Emma';
// const objetoCool = () => ({tipo: 'cool'})//retornando con objetos

// console.log(numeros())
// console.log(names())
// console.log(objetoCool())

//return con if-return en vez d if-else

// const background = 'pink'
// const autorizacion = true;

// const botonAutorizar = document.createElement('button')
// botonAutorizar.innerText = ('confirmar')
// botonAutorizar.style = `background: ${autorizacion ? 'orange' : background}; color: blue;` //cambiando estilo desde js y usando un condicional string literals
// botonAutorizar.addEventListener('click', () => {
//     if (autorizacion) {
//         return alert('Usted esta autorizado')
//     }
//     alert('NONONO Usted no esta autorizado maestro')
// });
// document.body.append(botonAutorizar)

//--------------ARRAYS------------------
//CON BUCLE FOR
// const frutas = ['manzana','naranja','banana']
// for (let i = 0; i < frutas.length; i++) {
//     const element = frutas[i];
//     console.log(element)
// } 
// //CON BUCLE forEach
// const verduras = ['zanahoria','lechuga','tomate']
// verduras.forEach(function(verdura){
//     console.log(verdura)
// })
// //CON METODO .MAP, EL MAS USADO. CREA UN ARRAY ADEMAS
// const listaDeCompras = verduras.map(function(verdura){
//     return `Hay que comprar ${verdura}`
// })
// console.log(listaDeCompras)

// //CON EL METODO FIND RECORREMOS EL ARRAY Y PODEMOS INCLUIR UNA CONDICION
//const amigos = ['Lucero','Juano','Alma']

// const encontrarAmigos = amigos.find(function(amigo){
//     if (amigo === 'Juano') {
//         return amigo
//     }
// })
// console.log(encontrarAmigos)

// //CON EL METODO FILTER, hace lo mismo q .FIND, podemos quitar un elemento d un array con esto
// const excluirAmigos = amigos.filter(function(amigo){
//     if (amigo !== 'Alma') {
//         return amigo
//     }
// })
// console.log(excluirAmigos)

// //METODO CONCAT para unir dos array
// const nuevosAmigos = ['Magui','Vicente','Luana']
// console.log(amigos.concat(nuevosAmigos))

// //SPREAD OPERATOR, tambien para unir dos arrays u objetos
// const autor = {
//     name: 'Coller',
//     lastname: 'Hoover'
// }
// const libro = {
//     titulo: 'Romper el circulo'
// }

// const infoLibro = {
//     ...autor,
//     ...libro
// }
// console.log(infoLibro)

//----------------ECMASCRIPT MODULES-------------------
// import { sumar, colores } from "./add.js";
// console.log(sumar(10, 90))
// console.log(`Los colores primarios son ${colores}`)

//ACTIVIDAD DE CLASE 3-------------------------------------------------------------------------------------------------------------------------------

const charmander = {
    name: 'charmander',
    type: 'fire',
    level: 5
  }
  
  const squirtle = {
    name: 'squirtle',
    type: 'water',
    level: 5
  }
  
  const bulbasaur = {
    name: 'bulbasaur',
    type: 'grass',
    level: 5
  }



  
  const pokemons = [charmander, squirtle, bulbasaur]
  




