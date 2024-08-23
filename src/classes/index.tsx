import { IntCryptoMoneda, IntMoneda } from "../interface";

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

export {
    Moneda,
    CryptoMoneda
}