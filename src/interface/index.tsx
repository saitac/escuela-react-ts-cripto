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

export {
    type IntMoneda,
    type IntCryptoMoneda,
    type IntPair
}