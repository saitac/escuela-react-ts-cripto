import axios from "axios"
import { CryptoMoneda, Pair } from "../classes";
import { CryptoCurrenciesResponseSchema } from "../schema/cripto-schema";

const getCryptos = async (): Promise<CryptoMoneda[]> => {
    
    const uri: string = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
    let cryptos: CryptoMoneda[] = [];

    try {
        const {data: {Data}} = await axios.get(uri);
        const result = CryptoCurrenciesResponseSchema.safeParse(Data);
        if ( result.success ) {
            cryptos = result.data.map( x =>
                new CryptoMoneda(x.CoinInfo.Name, x.CoinInfo.FullName) 
            )
        }
        
    } catch (error) {
        console.log(error);
    } finally {
        return cryptos;
    }
}

const getData = async (pair: Pair) => {
    const uri: string = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptoMoneda.code}&tsyms=${pair.moneda.code}`;
    try {
        const {data: {DISPLAY}} = await axios.get(uri);
        console.log(DISPLAY[pair.criptoMoneda.code][pair.moneda.code]);
    } catch (error) {
        console.log(error);
    }
}

export {
    getCryptos,
    getData
}