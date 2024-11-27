export async function guardarMedico(datosMedico) {
    const URL = "http://localhost:8080/api/medico";
    let peticion = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosMedico),
    };

    let respuestaInicial = await fetch(URL, peticion);
    let respuestaFinal = await respuestaInicial.json();

    return respuestaFinal;
}



export async function consultarMedico(){
    //1-para donde voy - URL DEL SERVICO
    const URL="http://localhost:8080/api/medico"

    //2-Que vas a haer alla ome - CONFIGURO LA PETICION
    let peticion={
        method:"GET"
    }

    //3-Arranque pues mijo - CONSUMA EL API
    let respuestaInicial=await fetch(URL,peticion)
    let respuestaFinal=await respuestaInicial.json()

    return respuestaFinal
    }