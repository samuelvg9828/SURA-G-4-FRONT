//import {medicamentosSimulador} from "../data/simuladorMedicamento.js"
import { consultarMedicamentos } from "../services/serviciosMedicamento.js"

consultarMedicamentos()
.then(function(respuestaBack){
    let fila = document.getElementById('fila')
//DEBO RECORRER LOS DATOS DE LA BD PARA PINTARLOS

    respuestaBack.forEach(function(medicamentos){
    console.log(medicamentos)
    //APLICANDO TRAVERSING

    //1-CREO UNA COLUMNA PARA CADA PACIENTE
    let columna = document.createElement('div')
    columna.classList.add('col')

    //2-CREO UNA TARJETA PARA CAJA PACIENTE
    let tarjeta = document.createElement('div')
    tarjeta.classList.add('card','h-100','p-50','shadow')

    //3-CREO UNA ETIQUETA PARA EL NOMBRE DE CADA PACIENTE
    let etiquetaNombre=document.createElement('h2')
    etiquetaNombre.classList.add('text-center')
    etiquetaNombre.textContent='Nombre: '+medicamentos.nombre

    let etiquetaIcono=document.createElement('img')
    etiquetaIcono.classList.add('img-fluid', 'w-50','p-3','mx-auto','d-block')
    etiquetaIcono.src='../../assets/img/medicamentossss.png'


    let etiquetaPresentacion=document.createElement('h4')
    etiquetaPresentacion.classList.add('text-center')
    etiquetaPresentacion.textContent='Presentacion: '+medicamentos.presentacion


    let etiquetaLaboratorio=document.createElement('h3')
    etiquetaLaboratorio.classList.add('text-center','textosura')
    etiquetaLaboratorio.textContent='Laboratorio: '+medicamentos.laboratorio


    let etiquetaFechaCaducidad=document.createElement('h4')
    etiquetaFechaCaducidad.classList.add('text-center','textosura')
    etiquetaFechaCaducidad.textContent='Fecha De Caducidad: '+medicamentos.fechaCaducidad


    let etiquetaContraIndicaciones=document.createElement('h4')
    etiquetaContraIndicaciones.classList.add('text-center')
    etiquetaContraIndicaciones.textContent='Contra Indicaiones: '+medicamentos.contraIndicaciones


    let etiquetaRegistroINVIMA=document.createElement('h4')
    etiquetaRegistroINVIMA.classList.add('text-center')
    etiquetaRegistroINVIMA.textContent='Registro INVIMA: '+medicamentos.registroINVIMA


    let etiquetaTieneCopago=document.createElement('h4')
    etiquetaTieneCopago.classList.add('text-center')
    etiquetaTieneCopago.textContent='Tiene Copago?: '+medicamentos.etiquetaTieneCopago


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
    tarjeta.appendChild(etiquetaNombre)
    tarjeta.appendChild(etiquetaPresentacion)
    tarjeta.appendChild(etiquetaLaboratorio)
    tarjeta.appendChild(etiquetaFechaCaducidad)
    tarjeta.appendChild(etiquetaContraIndicaciones)
    tarjeta.appendChild(etiquetaRegistroINVIMA)
    tarjeta.appendChild(etiquetaTieneCopago)
    tarjeta.appendChild(eliminar)
    tarjeta.appendChild(editar)
    columna.appendChild(tarjeta)
    fila.appendChild(columna)
    
})
})