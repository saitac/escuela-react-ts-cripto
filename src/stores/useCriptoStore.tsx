import { create } from "zustand"
import { devtools } from "zustand/middleware";
import axios from "axios"
import { CryptoCurrenciesResponseSchema } from "../schema/cripto-schema";
import { CryptoMoneda } from "../classes";


type CriptoState = {
    CryptoCurrencies: CryptoMoneda[],
    getCryptos: () => Promise<void>
}

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

const useCriptoStore = create<CriptoState>()(devtools((set) => ({

    CryptoCurrencies: [],
        
    getCryptos: async () => {
        const CryptoCurrencies: CryptoMoneda[] = await getCryptos();
        set(() => ({CryptoCurrencies}));
    }

})));

export {
    useCriptoStore
}