import { guardarMedico } from "../services/serviciosMedico.js";


let cajaNombre=document.getElementById('nombreMedico');
let cajaMatricula=document.getElementById('matriculaMedico');
let cajaEspecialidad=document.getElementById('especialidadMedico');
let cajaSalario=document.getElementById('salarioMedico');
let cajaIps=document.getElementById('ipsMedico');
let cajaCorreo=document.getElementById('correoMedico');
let cajaTelefono=document.getElementById('telefonoMedico');
let cajaDireccion=document.getElementById('direccionMedico');
let cajaEstaDisponibleFindeSemana=true

let botonRegistroMedico=document.getElementById('botonregistromedico')

    botonRegistroMedico.addEventListener('click',function(evento){
    evento.preventDefault()
    

    let datosFormularioMedico={
        nombre:cajaNombre.value,
        matricula:cajaMatricula.value,
        especialidad:cajaEspecialidad.value,
        salario:cajaSalario.value,
        ips:cajaIps.value,
        correo:cajaCorreo.value,
        telefono:cajaTelefono.value,
        direccion:cajaDireccion.value,
        estaDisponibleFindeSemana:cajaEstaDisponibleFindeSemana
    }
    console.log(datosFormularioMedico)

    guardarMedico(datosFormularioMedico)
    .then(function(respuestaBack){
        console.log(respuestaBack)
        Swal.fire({
            title: "Buen Trabajo!",
            text: "Ya haces parte de nuestra familia!",//ESTE ES EL ALERTA
            icon: "success"
          })
      })

})