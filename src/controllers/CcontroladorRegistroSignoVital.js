import {guardarSignoVital} from "../services/serviciosSignoVital.js"

let cajaNombre=document.getElementById('nombreSignoVital')
let cajaValor=document.getElementById('valorSignoVital')
let cajaFechaMedida=document.getElementById('fechaMediaSignoVital')

let botonRegistroSignoVital=document.getElementById('botonregistrosignovital')

botonRegistroSignoVital.addEventListener('click',function(evento){
    evento.preventDefault()


    let datosFormularioSignoVital={
        nombre:cajaNombre.value,
        valor:cajaValor.value,
        fechaMedida:cajaFechaMedida.value
    }
    guardarSignoVital(datosFormularioSignoVital)
    .then(function(respuestaBack){
        console.log(respuestaBack)
        Swal.fire({
            title: "Buen Trabajo!",
            text: "Ya haces parte de nuestra familia!",//ESTE ES EL ALERTA
            icon: "success"
          })
    })
})