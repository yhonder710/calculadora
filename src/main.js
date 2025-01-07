const modos = document.getElementById('modos')
const pantalla = document.getElementById('pantalla')
const borrar = document.getElementById('borrar')
const c = document.getElementById('c')
const potenciacion = document.getElementById('potenciacion')
const resultado = document.getElementById('resultado')
const btn = document.querySelectorAll('.btn')


modos.addEventListener('click', ()=>{
  document.body.classList.toggle('dark')

  if(document.body.classList.contains('dark')){
    modos.classList.toggle('modo-claro')
  } else {
    modos.classList.remove('modo-claro')
  }


})


btn.forEach(boton => {
  boton.addEventListener('click', () => {
    const botonPresionado = boton.value

    /*boton Reset*/
    if(boton.id === "c"){
      pantalla.textContent = "0"
      return
    }

    /*borrar*/
    if (boton.id === "borrar") {
      if(pantalla.textContent.length === 1) {
        pantalla.textContent = "0"
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1)
      }
      return
    }

    /*Resultado*/
    if(boton.id === "resultado"){
      try {
        pantalla.textContent = eval(pantalla.textContent)
      } catch (error) {
        pantalla.textContent = "Error!"
      }
      return
    }



    /*Pantalla*/
    if(pantalla.textContent === "0" || pantalla.textContent === "Error!") {
      pantalla.textContent = botonPresionado
    } else {
      pantalla.textContent += botonPresionado
    }

  })
} )
