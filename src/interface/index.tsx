interface IntMoneda {
    code: string,
    name: string
}

interface IntCryptoMoneda {
    code: string,
    name: string
}

interface IntPair {
    moneda: IntMoneda,
    criptoMoneda: IntCryptoMoneda
}

interface IntCryptoCompare {
    pair: IntPair,
    imageurl: string,
    price: string,
    highday: string,
    lowday: string,
    lastupdate: string,
    changepct24hour: string
}

export {
    type IntMoneda,
    type IntCryptoMoneda,
    type IntPair,
    type IntCryptoCompare
}