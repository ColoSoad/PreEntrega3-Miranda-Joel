// ENLACES DOM
const inputEmail = document.querySelector("input#email")
const inputMontoASolicitar = document.querySelector("input#montoASolicitar")
const inputCantidadDeCuota = document.querySelector("input#cantidadDeCuota")
const selectTipoDeInteres = document.querySelector("select#tipoDeInteres")
const btnCalcular = document.querySelector("button.btnCalcular")

// VARIABLES GLOBALES, ARRAYS Y ARRAYS DE OBJETOS LITERALES

const tiposDeCreditos = [{id: 1, tipoDelCredito: 'Credito Personal', interes: 1.6},
                       {id: 2, tipoDelCredito: 'Credito Prendario', interes: 2.5},]

// CODIGO FUNCIONES DE LA LOGICA

function cargartipoDeInteres() {
    if (tiposDeCreditos.length > 0) {
        tiposDeCreditos.forEach((interes)=> {
            selectTipoDeInteres.innerHTML += `<option>${interes.tipoDelCredito}</option>`
        })
    }
}

function devolverIntereses(tipoDelCredito) {
    let creditoTipo = tiposDeCreditos.find((creditoTipo)=> creditoTipo.tipoDelCredito === tipoDelCredito)
    return creditoTipo.interes
}

function guardarInfoDePrestamoEnLocalStorage(email, montoASolicitar, cantidadDeCuota, tipoDeInteres) {
    const informacionDelPrestamo = {
        email: email,
        montoASolicitar: montoASolicitar,
        cantidadDeCuota: cantidadDeCuota,
        tipoDeInteres: tipoDeInteres
    }
    localStorage.setItem("informacionDelPrestamo", JSON.stringify(informacionDelPrestamo))
}

function calcularPrestamo() {

    let email = inputEmail.value
    let montoASolicitar = parseInt(inputMontoASolicitar.value)
    let cantidadDeCuota = parseInt(inputCantidadDeCuota.value)
    let tipoDeInteres = devolverIntereses(selectTipoDeInteres.value)
    
    const creditoSolicitado = new Credito(email, cantidadDeCuota, tipoDeInteres, montoASolicitar)
    let cuota = creditoSolicitado.calcularCuotaMensual()

    guardarInfoDePrestamoEnLocalStorage(email, montoASolicitar, cantidadDeCuota, tipoDeInteres, cuota, selectTipoDeInteres.value)
    location.href = "calculadorPrestamo.html"
}

// EVENTOS
btnCalcular.addEventListener("click", ()=> calcularPrestamo())
// CODIGO AUTOEJECUTABLE

cargartipoDeInteres()













// const selectPropiedad = document.querySelector("select#propiedad")
// const selectUbicacion = document.querySelector("select#ubicacion")
// const inputMetros2 = document.querySelector("input#metros2")
// const valorPoliza = document.querySelector("span#valorPoliza")

// const btnCotizar = document.querySelector("button.button.button-outline")

// const btnGuardar = document.querySelector("span.guardar")
// const arrayHistorial = []

// function cargarPropiedades() {
//     datosPropiedad.forEach((propiedad)=> {
//         selectPropiedad.innerHTML += `<option>${propiedad.tipo}</option>`
//     })
// }

// function cargarUbicaciones() {
//     datosUbicacion.forEach((ubicacion)=> {
//         selectUbicacion.innerHTML += `<option>${ubicacion.tipo}</option>`
//     })
// }
// // INICIALIZAN LA INFORMACIÓN DE LOS COMBO SELECT
// cargarPropiedades()
// cargarUbicaciones()

// function retornarFactorPropiedad(tipoProp) {
//     return datosPropiedad.find((propiedad)=> propiedad.tipo === tipoProp)
// }

// function retornarFactorUbicacion(tipoUbica) {
//     return datosUbicacion.find((ubicacion)=> ubicacion.tipo === tipoUbica)
// }

// function cotizarPropiedad() {
//     if (selectPropiedad.value !== 'Seleccionar...' && selectUbicacion.value !== 'Seleccionar...' && (inputMetros2.value >= 20 || inputMetros2.value <= 500)) {
//         let metros2 = inputMetros2.value
//         let factorPropiedad = retornarFactorPropiedad(selectPropiedad.value)
//         let factorUbicacion = retornarFactorUbicacion(selectUbicacion.value)

//         const cotizador = new Cotizador(metros2, factorPropiedad, factorUbicacion, costoM2)
//         return cotizador.cotizar()
//     } else {
//         return 'Error'
//     }
// }

// btnCotizar.addEventListener("click", ()=> {
//     let resultado = cotizarPropiedad()

//     if (resultado !== 'Error') {
//         valorPoliza.textContent = resultado
//     } else {
//         alert("⛔️ Faltan datos por cargar o seleccionar.")
//     }
// })

// btnGuardar.addEventListener("click", ()=> {
//     const historialCotizacion = {
//         fecha: Date(),
//         propiedad: selectPropiedad.value,
//         ubicacion: selectUbicacion.value,
//         metros2: inputMetros2.value,
//         poliza: valorPoliza.textContent
//     }

//     localStorage.setItem("HistorialCotizacion", JSON.stringify(historialCotizacion))
// })