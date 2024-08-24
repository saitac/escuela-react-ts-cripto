import { create } from "zustand"
import { devtools } from "zustand/middleware";
import { CryptoMoneda, Pair } from "../classes";
import { getCryptos, getData } from "../services/CriptoService"


type CriptoState = {
    CryptoCurrencies: CryptoMoneda[],
    getCryptos: () => Promise<void>,
    getData: (pair: Pair) => Promise<void>

}

const useCriptoStore = create<CriptoState>()(devtools((set) => ({

    CryptoCurrencies: [],
        
    getCryptos: async () => {
        const CryptoCurrencies: CryptoMoneda[] = await getCryptos();
        set(() => ({CryptoCurrencies}));
    },

    getData: async (pair: Pair) => {

        await getData(pair)

    }

})));

export {
    useCriptoStore
}