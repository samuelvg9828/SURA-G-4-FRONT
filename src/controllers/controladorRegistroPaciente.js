import { guardarPacientes } from "../services/serviciosPaciente.js"

//CONTROLADOR ES IGUAL A ARCHIVO DE JS PARA MANIPULAR LA INTERFAS GRAFICA

//OBJETIVO:  RECOGER LOS DATOS DE UN FORMULARIO
//1-ASIGNAMOS UN ID A CADA INPUT, SELECT O TEXTAREA DEL FORMULARIO
//2-ASIGNAR UN ID A CADA BOTON DE ENVIO DE FORMULARIO
//3-a cada id asignado le creo una variable en js
//4-ASOCIAR A CADA VARIABLE EL ID QUE SE CONFIGURO EN HTML

let cajaNombre=document.getElementById('nombrePaciente')
let cajaFechaNacimiento=document.getElementById('añoNacimientoPaciente')
let cajaCiudad=document.getElementById('ciudadPaciente')
let cajaCorreo=document.getElementById('correoPaciente')
let cajaIps=document.getElementById('ipsPaciente')
let cajaTelefono=document.getElementById('telefonoPaciente')
let cajaFechaAfiliacion=document.getElementById('grupoingresopaciente')
let cajaGrupoIngreso=document.getElementById('afiliacionPasiente')
let cajaAsegurado=true

let botonRegistroPasiente=document.getElementById('botonregistropaciente')

//5- DETECTAR EL EVENTO DE CICK EN EL BOTON
botonRegistroPasiente.addEventListener('click',function(evento){
    evento.preventDefault()

    //6-RECOGER LOS DATOS (los atributos del objeto se deben nombrar tal cual estan en java en la capa de modelo)
    let datosFormularioPaciente={
        nombre:cajaNombre.value,
        anioNacimiento:cajaFechaNacimiento.value,
        ciudad:cajaCiudad.value,
        correo:cajaCorreo.value,
        telefono:cajaTelefono.value,
        ips:cajaIps.value,
        tienePoliza:cajaAsegurado,
        grupoIngreso:cajaGrupoIngreso.value,
        fechaAfiliacion:cajaFechaAfiliacion.value
    }
    guardarPacientes(datosFormularioPaciente)
    .then(function(respuestaBack){
        console.log(respuestaBack)
        Swal.fire({
            title: "Buen Trabajo!",
            text: "Ya haces parte de nuestra familia!",//ESTE ES EL ALERTA
            icon: "success"
          })
    })
})