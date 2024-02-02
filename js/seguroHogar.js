// ENLACES AL DOM
const inputEmail = document.querySelector("input#email")
const selectTipoDeInmueble = document.querySelector("select#tipoDeInmueble")
const selectUbicacion = document.querySelector("select#ubicacion")
const inputMetros2 = document.querySelector("input#metros2")
const btnCotizar = document.querySelector("button#btnCotizar")

// VARIABLES GLOBALES, ARRAYS Y ARRAYS DE OBJETOS LITERALES 
const inmueblesTipo = [{ codigo: 1, tipo: 'Hogar', factor: 1.12,},
                       { codigo: 2, tipo: 'Local comercial', factor: 1.44 },
                       { codigo: 3, tipo: 'Consultorio / Oficina', factor: 1.75 }]


const inmuebleUbicacion =  [{tipo: 'CABA', factorUbicacion: 1.13},
                            {tipo: 'Tandil', factorUbicacion: 1.07},
                            {tipo: 'Costa Atlántica', factorUbicacion: 1.29},
                            {tipo: 'Patagonia', factorUbicacion: 1.00},
                            {tipo: 'Cuyo', factorUbicacion: 1.11}]

const costoM2 = 221.02

// FUNCIONES 'CARGAR TIPO DE INMUEBLE Y UBICACION'
function cargartipoDeInmuebleYUbicacion() {
    if (inmueblesTipo.length > 0 && inmuebleUbicacion.length > 0) {
        inmueblesTipo.forEach((factor)=> {
            selectTipoDeInmueble.innerHTML += `<option>${factor.tipo}</option>`
        })
        inmuebleUbicacion.forEach((factorUbicacion)=> {
            selectUbicacion.innerHTML += `<option>${factorUbicacion.tipo}</option>`
        })    
    }
}

// FUNCION DEVOLVER FACTOR DEL TIPO DE INMUEBLE
function devolverFactorTipoInmueble(tipo) {
    let factorTipo = inmueblesTipo.find((factorTipo)=> factorTipo.tipo === tipo)
    return factorTipo.factor
}

// FUNCION DEVOLVER FACTOR DE UBICACI+ON DE INMUEBLE
function devolverFactorTipoInmueble(tipo) {
    let factorUbicacionTipo = inmueblesTipo.find((factorUbicacionTipo)=> factorUbicacionTipo.tipo === tipo)
    return factorUbicacionTipo.factorUbicacion
}

// FUNCION QUE RECIBE COMO PARAMETROS 5 ARGUMENTOS Y CREA UN OBJETO LITERAL LLAMADO 'informacionDelSeguroDeHogar'
// PARA PODER ALMACENARLO EN EL NAVEGADOR MEDIANTE 'localStorage', LS NO PERMITE DATOS EN FORMATO DE OBJETOS, YA QUE SE PROCEDE
// A HACER LA TRANSFORMACION DE DATO CON JSON.stringify() : 
function guardarInfoDeSegurosInmueblesEnLocalStorage(email, montoASolicitar, cantidadDeCuota, tipoDeInteres, cuota) {
    const informacionDelSeguroDeHogar = {
        email: email,
        montoASolicitar: montoASolicitar,
        cantidadDeCuota: cantidadDeCuota,
        tipoDeInteres: tipoDeInteres,
        cuota: cuota
    }
    localStorage.setItem("informacionDelPrestamo", JSON.stringify(informacionDelPrestamo))
}

// CODIGO AUTOEJECUTABLE
cargartipoDeInmuebleYUbicacion()