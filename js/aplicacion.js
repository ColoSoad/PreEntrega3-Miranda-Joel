const selectPropiedad = document.querySelector("select#propiedad")
const selectUbicacion = document.querySelector("select#ubicacion")
const inputMetros2 = document.querySelector("input#metros2")
const valorPoliza = document.querySelector("span#valorPoliza")

const btnCotizar = document.querySelector("button.button.button-outline")

const btnGuardar = document.querySelector("span.guardar")
const arrayHistorial = []

function cargarPropiedades() {
    datosPropiedad.forEach((propiedad)=> {
        selectPropiedad.innerHTML += `<option>${propiedad.tipo}</option>`
    })
}

function cargarUbicaciones() {
    datosUbicacion.forEach((ubicacion)=> {
        selectUbicacion.innerHTML += `<option>${ubicacion.tipo}</option>`
    })
}
// INICIALIZAN LA INFORMACIÓN DE LOS COMBO SELECT
cargarPropiedades()
cargarUbicaciones()

function retornarFactorPropiedad(tipoProp) {
    return datosPropiedad.find((propiedad)=> propiedad.tipo === tipoProp)
}

function retornarFactorUbicacion(tipoUbica) {
    return datosUbicacion.find((ubicacion)=> ubicacion.tipo === tipoUbica)
}

function cotizarPropiedad() {
    if (selectPropiedad.value !== 'Seleccionar...' && selectUbicacion.value !== 'Seleccionar...' && (inputMetros2.value >= 20 || inputMetros2.value <= 500)) {
        let metros2 = inputMetros2.value
        let factorPropiedad = retornarFactorPropiedad(selectPropiedad.value)
        let factorUbicacion = retornarFactorUbicacion(selectUbicacion.value)

        const cotizador = new Cotizador(metros2, factorPropiedad, factorUbicacion, costoM2)
        return cotizador.cotizar()
    } else {
        return 'Error'
    }
}

btnCotizar.addEventListener("click", ()=> {
    let resultado = cotizarPropiedad()

    if (resultado !== 'Error') {
        valorPoliza.textContent = resultado
    } else {
        alert("⛔️ Faltan datos por cargar o seleccionar.")
    }
})

btnGuardar.addEventListener("click", ()=> {
    const historialCotizacion = {
        fecha: Date(),
        propiedad: selectPropiedad.value,
        ubicacion: selectUbicacion.value,
        metros2: inputMetros2.value,
        poliza: valorPoliza.textContent
    }

    localStorage.setItem("HistorialCotizacion", JSON.stringify(historialCotizacion))
})