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