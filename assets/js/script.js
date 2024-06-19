

function pintar(elemento){
    elemento.style.backgroundColor = 'black'
    }

    
// ele1 = document.getElementById("ele1")
// ele1.addEventListener("click", pintar);

// ele2 = document.getElementById("ele2")
// ele2.addEventListener("click", pintar);


ele1 = document.getElementById("ele1")
ele1.addEventListener ('click', ()=> {
    pintar(ele1)
})

ele2 = document.getElementById("ele2")
ele2.addEventListener ('click', ()=> {
    pintar(ele2)
})
    
ele3 = document.getElementById("ele3")
ele3.addEventListener ('click', ()=> {
    pintar(ele3)
})

ele4 = document.getElementById("ele4")
ele4.addEventListener ('click', ()=> {
    pintar(ele4)
})

ele5 = document.getElementById("ele5")
// // ele5.addEventListener ('click', ()=> {
// //     pintar2
// })



function pintar2(color){
    ele5.style.backgroundColor = color
    }


ele6 = document.getElementById("ele6")
ele6.addEventListener ('keydown', function(event) {
    console.log(event.key)
    if (event.key ==='a') {
        ele6.style.backgroundColor = 'ablack'
    }
})
