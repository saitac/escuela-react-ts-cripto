import { IntCryptoMoneda, IntMoneda, IntPair } from "../interface";

class Moneda implements IntMoneda {
    code: string;
    name: string;

    constructor(code: string = "", name: string = "") {
        this.code = code;
        this.name = name
    }
}

class CryptoMoneda implements IntCryptoMoneda {
    code: string;
    name: string;

    constructor(code: string = "", name: string = "") {
        this.code = code;
        this.name = name
    }
}

class Pair implements IntPair {
    moneda: Moneda;
    criptoMoneda: CryptoMoneda;

    constructor(moneda: Moneda = new Moneda("",""), criptoMoneda: CryptoMoneda = new CryptoMoneda("","")) {
        this.moneda = moneda;
        this.criptoMoneda = criptoMoneda
    }
}

export {
    Moneda,
    CryptoMoneda,
    Pair
}