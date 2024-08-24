import axios from "axios"
import { CryptoMoneda } from "../classes";
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

export {
    getCryptos
}