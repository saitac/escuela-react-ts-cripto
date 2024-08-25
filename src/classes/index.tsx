import { IntCryptoCompare, IntCryptoMoneda, IntMoneda, IntPair } from "../interface";

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

class CryptoCompare implements IntCryptoCompare {
    pair: IntPair;
    imageurl: string;
    price: string;
    highday: string;
    lowday: string;
    lastupdate: string;
    changepct24hour: string;

    constructor(pair: Pair = new Pair(), imageurl: string = "", price: string = "", highday: string = "",
    lowday: string = "", lastupdate: string = "", changepct24hour: string = ""){

        this.pair = pair;
        this.imageurl = imageurl;
        this.price = price;
        this.highday = highday;
        this.lowday = lowday;
        this.lastupdate = lastupdate;
        this.changepct24hour = changepct24hour
    }
}

export {
    Moneda,
    CryptoMoneda,
    Pair,
    CryptoCompare
}