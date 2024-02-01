class SeguroInmueble {
    constructor(tipoInmueble, valor, mts2) {
        this.tipoInmueble = tipoInmueble || 1
        this.valor = valor || 1
        this.mts2 = mts2 || 1
    }
    
    obtenerCotizacionInmueble() {
        return this.tipoInmueble.factor * this.valor * this.mts2
    }
}

class SeguroMueble {
    constructor(marca, tipoDeVehiculo, valorDeclarado, año, tipoDeCobertura, cuotaValor) {
        this.marca = marca
        this.tipoDeVehiculo = tipoDeVehiculo
        this.valorDeclarado = valorDeclarado
        this.año = año
        this.tipoDeCobertura = tipoDeCobertura
        this.tipoAntiguedad = tipoAntiguedad
        this.cuotaValor = cuotaValor
    }


    obtenerPrimaAsegurada() {
        return ((this.valorDeclarado * this.tipoDeVehiculo.factorTipo) + (this.año * this.tipoAntiguedad.factorAntiguedad) + this.tipoDeCobertura.sumador) / this.tipoDeVehiculo.factorTipo
    }

    obtenerValorCuota() {
        return (((this.valorDeclarado * this.tipoDeVehiculo.factorTipo) + (this.año * this.tipoAntiguedad.factorAntiguedad) + this.tipoDeCobertura.sumador) / this.tipoDeVehiculo.factorTipo) * this.cuotaValor / 100
    }
}

// class Cotizador {
//     constructor(m2, factorPropiedad, factorUbicacion, costoM2) {
//         this.m2 = parseInt(m2) || 1
//         this.factorPr = parseFloat(factorPropiedad) || 1
//         this.factorUb = parseFloat(factorUbicacion) || 1
//         this.costoM2 = parseFloat(costoM2) || 1
//     }
//     cotizar() {
//         return (this.m2 * this.factorPr * this.factorUb * this.costoM2).toFixed(2)
//     }
// } 