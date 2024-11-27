//import {enfermedadSimulada} from "../data/simuladorEnfermedad.js";

import {consultarEnfermedad} from "../services/serviosEnfermedad.js"

consultarEnfermedad()
.then(function(respuestaBack){
    let fila = document.getElementById('fila')
//DEBO RECORRER LOS DATOS DE LA BD PARA PINTARLOS

    respuestaBack.forEach(function(enfermedad){
    console.log(enfermedad)
    //APLICANDO TRAVERSING

    //1-CREO UNA COLUMNA PARA CADA PACIENTE
     let columna = document.createElement('div')
     columna.classList.add('col')

     //2-CREO UNA TARJETA PARA CAJA PACIENTE
     let tarjeta = document.createElement('div')
     tarjeta.classList.add('card','h-100','p-50','shadow')

     //3-CREO UNA ETIQUETA PARA EL NOMBRE DE CADA PACIENTE
     let etiquetaNombre=document.createElement('h3')
     etiquetaNombre.classList.add('text-center')
    etiquetaNombre.textContent='Nombre: '+enfermedad.nombre


    let etiquetaIcono=document.createElement('img')
    etiquetaIcono.classList.add('img-fluid', 'w-50','p-3','mx-auto','d-block')
    etiquetaIcono.src='../../assets/img/enfermedadessss.png'


    let etiquetaSintoma=document.createElement('h3')
    etiquetaSintoma.classList.add('text-center')
    etiquetaSintoma.textContent='Sintoma: '+enfermedad.sintoma


    let etiquetaClsificacion=document.createElement('h3')
    etiquetaClsificacion.classList.add('text-center')
    etiquetaClsificacion.textContent='Clasificacion: '+enfermedad.clasificacion


    let etiquetaGrado=document.createElement('h3')
    etiquetaGrado.classList.add('text-center')
    etiquetaGrado.textContent='Grado: '+enfermedad.grado


    let etiquetaProbabilidadVivir=document.createElement('h4')
    etiquetaProbabilidadVivir.classList.add('text-center','textosura')
    etiquetaProbabilidadVivir.textContent='Probabilidad De Vivir:  '+enfermedad.probabilidadVivir


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
    tarjeta.appendChild(etiquetaIcono)
    tarjeta.appendChild(etiquetaSintoma)
    tarjeta.appendChild(etiquetaSintoma)
    tarjeta.appendChild(etiquetaClsificacion)
    tarjeta.appendChild(etiquetaGrado)
    tarjeta.appendChild(etiquetaProbabilidadVivir)
    tarjeta.appendChild(eliminar)
    tarjeta.appendChild(editar)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
    
})
})