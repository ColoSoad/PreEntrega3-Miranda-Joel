// ENLACES AL DOM
const spanMarca = document.querySelector("span.label-marca")
const spanModelo = document.querySelector("span.label-modelo") 
const spanAño = document.querySelector("span.label-año")
const spanTipo = document.querySelector("span.label-tipo")
const spanCombustible = document.querySelector("span.label-combustible")
const spanCobertura = document.querySelector("span.label-cobertura")
const spanPrima = document.querySelector("span.label-prima")
const spanCuota = document.querySelector("span.label-cuota")
const btnContratar = document.querySelector("button.button-contratar")
let email = ""

// FUNCION PARA RECUPERAR DATOS DE LS
// MEDIANTE UN OBJETO LITERAL LLAMADO 'infoDelPrestamo' RECUPERAMOS LOS DATOS ALMACENADOS EN EL NAVEGADOR
function recuperarInformacionDeLocalStorage() {
    const infoDelSeguro = JSON.parse(localStorage.getItem("informacionDelSeguroDeVehiculo"))
    if (infoDelSeguro !== "" && infoDelSeguro !== null) {
        spanMarca.textContent = infoDelSeguro.marca
        spanModelo.textContent = infoDelSeguro.modelo
        spanAño.textContent = infoDelSeguro.año
        spanTipo.textContent = infoDelSeguro.tipoDVehiculo
        spanCombustible.textContent = infoDelSeguro.combustible
        spanCobertura.textContent = infoDelSeguro.cobertura
        spanPrima.textContent = parseFloat(infoDelSeguro.prima.toFixed(2)).toLocaleString("es-AR")
        spanCuota.textContent = parseFloat(infoDelSeguro.cuota.toFixed(2)).toLocaleString("es-AR")
        email = infoDelSeguro.email
    }
    else {
        location.href = "./seguroAutomovil.html"
    }    
}

//EVENTOS
btnContratar.addEventListener("click", ()=> {
    Swal.fire({
        title: "FELICITACIONES!",
        text: `Se enviará un email a ${email} para finalizar la operación`,
        icon: "success"
    });
    localStorage.removeItem("informacionDelSeguroDeVehiculo")
})

recuperarInformacionDeLocalStorage()