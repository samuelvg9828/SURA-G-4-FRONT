//import {pacientesSimulados} from "../data/simuladorPacientes.js"

import {consultarPacientes} from  "../services/serviciosPaciente.js"

consultarPacientes()
.then(function(respuestaBack){
    let fila = document.getElementById('fila')
//DEBO RECORRER LOS DATOS DE LA BD PARA PINTARLOS

    respuestaBack.forEach(function(paciente){
    console.log(paciente)
    //APLICANDO TRAVERSING

    //1-CREO UNA COLUMNA PARA CADA PACIENTE
     let columna = document.createElement('div')
     columna.classList.add('col')

     //2-CREO UNA TARJETA PARA CAJA PACIENTE
     let tarjeta = document.createElement('div')
     tarjeta.classList.add('card','h-100','p-50','shadow')

     //3-CREO UNA ETIQUETA PARA EL NOMBRE DE CADA PACIENTE
     let etiquetaNombre=document.createElement('h2')
     etiquetaNombre.classList.add('text-center','fw-bold')
     etiquetaNombre.textContent=paciente.nombre


    let etiquetaIcono=document.createElement('img')
    etiquetaIcono.classList.add('img-fluid', 'w-50','p-3','mx-auto','d-block')
    etiquetaIcono.src='../../assets/img/pacientessss.png'


    
    
    let etiquetaAnionacimiento=document.createElement('h4')
    etiquetaAnionacimiento.classList.add('text-center')
    etiquetaAnionacimiento.textContent='Fecha Nacimiento:'+paciente.anioNaciomiento

    

    let etiquetaCiudad=document.createElement('h3')
    etiquetaCiudad.classList.add('text-center')
    etiquetaCiudad.textContent='Ciudad:'+paciente.ciudad

    

    let etiquetaCorreo=document.createElement('h4')
    etiquetaCorreo.classList.add('text-start','p-3','mx-auto','d-block')
    etiquetaCorreo.textContent='Correo:'+paciente.correo

    

    let etiquetaTelefono=document.createElement('h4')
    etiquetaTelefono.classList.add('text-center')
    etiquetaTelefono.textContent='Telefono:'+paciente.telefono

    

    let etiquetaIps=document.createElement('h5')
    etiquetaIps.classList.add('text-start','textosura','p-3','mx-auto','d-block')
    etiquetaIps.textContent='IPS:'+paciente.ips

   

    let etiquetaTienePoliza=document.createElement('h4')
    etiquetaTienePoliza.classList.add('text-center')
    etiquetaTienePoliza.textContent='Tiene Poliza?:'+paciente.tienePoliza

    

    let etiquetaGrupoIngresos=document.createElement('h4')
    etiquetaGrupoIngresos.classList.add('text-center','textosura')
    etiquetaGrupoIngresos.textContent='Grupo De Ingresos: '+paciente.grupoIngresos

    

    let etiquetaFechaAfiliaciones=document.createElement('h4')
    etiquetaFechaAfiliaciones.classList.add('text-center')
    etiquetaFechaAfiliaciones.textContent='Fecha De Afiliacion: '+paciente.fechaAfiliacion


    let eliminar=document.createElement('button')
    eliminar.classList.add('btn','btn-primary','w-30')

    let iconoBasura=document.createElement('i')
    iconoBasura.classList.add("bi","bi-trash3-fill")

    let editar=document.createElement('button')
    editar.classList.add('btn','btn-primary','w-30','m-2')

    let iconoEditar=document.createElement('i')
    iconoEditar.classList.add("bi","bi-pencil-square")



    //PASO FINAL --> ASOCIO LAS ETIQUETAS
    eliminar.appendChild(iconoBasura)
    editar.appendChild(iconoEditar)
    tarjeta.appendChild(etiquetaNombre)
    tarjeta.appendChild(etiquetaIcono)
    tarjeta.appendChild(etiquetaIps)
    tarjeta.appendChild(etiquetaTelefono)
    tarjeta.appendChild(etiquetaCorreo)
    tarjeta.appendChild(etiquetaCiudad)
    tarjeta.appendChild(etiquetaFechaAfiliaciones)
    tarjeta.appendChild(etiquetaGrupoIngresos)
    tarjeta.appendChild(etiquetaTienePoliza)
    tarjeta.appendChild(eliminar)
    tarjeta.appendChild(editar)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
   

    
})


})


