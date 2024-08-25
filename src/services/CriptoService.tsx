import axios from "axios"
import { CryptoCompare, CryptoMoneda, Pair } from "../classes";
import { CryptoCompareResponseSchema, CryptoCurrenciesResponseSchema } from "../schema/cripto-schema";

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

const getData = async (pair: Pair): Promise<CryptoCompare> => {
    let cryptoCompare: CryptoCompare = new CryptoCompare();
    const uri: string = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${pair.criptoMoneda.code}&tsyms=${pair.moneda.code}`;
    try {
        cryptoCompare.pair = pair;
        const {data: {DISPLAY}} = await axios.get(uri);
        const result = CryptoCompareResponseSchema.safeParse(DISPLAY[pair.criptoMoneda.code][pair.moneda.code]);
        if (result.success) {
            cryptoCompare = {
                ...cryptoCompare,
                imageurl: result.data.IMAGEURL,
                price: result.data.PRICE,
                highday: result.data.HIGHDAY,
                lowday: result.data.LOWDAY,
                lastupdate: result.data.LASTUPDATE
            }            
        }
    } catch (error) {
        console.log(error);
    } finally {
        return cryptoCompare;
    }
}

export {
    getCryptos,
    getData
}