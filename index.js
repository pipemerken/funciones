// function hugo_pregunta () {
//     // console.log("profe tengo un pregunta")
//     alert("profe tengo un pregunta")
// }

// hugo_pregunta ()


// // Arrow function
// ()=>{}


// // ejemplo

// const hugo_pregunta_de_nuevo = ()=>{}


// let color = prompt("ingrese el color de fondo")


// function pintar_fondo(){
//     let elemento = document.querySelector('body')
//     elemento.style.backgroundColor = color

// }

// function pintar_rojo(){
//     let elemento = document.querySelector('body')
//     elemento.style.backgroundColor = 'red'

// }

// function pintar_amarillo(){
//     let elemento = document.querySelector('body')
//     elemento.style.backgroundColor = 'yellow'
// }


// pintar_fondo()
// pintar_fondo()
// pintar_amarillo()


// let color = prompt("ingrese el color de fondo")
// parametor que puede ser cualquier nombre de variable

// let numero = parseInt(prompt("Ingrese un numero)"))
// //parametro es la variable que espera dicho valor
// function pintar_fondo(color='purple'){
//     let elemento = document.querySelector('body')
//     elemento.style.backgroundColor = color
// }

// if (numero == 1){
// // argumento es el valor que enviamos

//     pintar_fondo("red")
// }else if (numero == 2){
//     pintar_fondo("blue")
// }else {
//     //pintar_fondo("yellow")
//     pintar_fondo()
// }



// pintar_fondo("yellow")

function saludar(){
    alert ("Hola me ejecuto")

}

function pintar_fondo(color='purple'){
    let elemento = document.querySelector ('body')
    elemento.style.backgroundColor = color
}

function agregar_border(id,color){
    let elemento = document.querySelector(id)
    if (elemento.style.border == ''){
    elemento.style.border = '4px solid'+' '+color
    
}  else {
    elemento.style.border =''
}
}










