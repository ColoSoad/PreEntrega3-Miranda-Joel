// ENLACES AL DOM
const spanTipo = document.querySelector("span.label-tipo")
const spanUbicacion = document.querySelector("span.label-ubicacion") 
const spanSuperficie = document.querySelector("span.label-superficie")
const spanCuota = document.querySelector("span.label-cuota")
const btnContratar = document.querySelector("button.button-contratar")
let email = ""

// FUNCION PARA RECUPERAR DATOS DE LS
// MEDIANTE UN OBJETO LITERAL LLAMADO 'informacionDelSeguroDeHogar' RECUPERAMOS LOS DATOS ALMACENADOS EN EL NAVEGADOR
function recuperarInfoDeLocalStorage() {
    const infoDelSeguro = JSON.parse(localStorage.getItem("informacionDelSeguroDeHogar"))
    if (infoDelSeguro !== "" && infoDelSeguro !== null) {
        spanTipo.textContent = infoDelSeguro.TipoDeInmueble;
        spanUbicacion.textContent = infoDelSeguro.Ubicacion;
        spanSuperficie.textContent = infoDelSeguro.Mts2;
        spanCuota.textContent = infoDelSeguro.cuota;
        email = infoDelSeguro.email
    }
    else {
        location.href = "./seguroCasa.html"
    }    
}

//EVENTOS
btnContratar.addEventListener("click", ()=> {
    Swal.fire({
        title: "FELICITACIONES!",
        text: `Se enviará un email a ${email} para finalizar la operación`,
        icon: "success"
    });
    localStorage.removeItem("informacionDelSeguroDeHogar")
})

recuperarInfoDeLocalStorage()