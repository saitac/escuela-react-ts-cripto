import { create } from "zustand"
import { devtools } from "zustand/middleware";
import { CryptoCompare, CryptoMoneda, Pair } from "../classes";
import { getCryptos, getData } from "../services/CriptoService"


type CriptoState = {
    CryptoCurrencies: CryptoMoneda[],
    CryptoCompare: CryptoCompare,
    getCryptos: () => Promise<void>,
    getData: (pair: Pair) => Promise<void>

}

const useCriptoStore = create<CriptoState>()(devtools((set) => ({

    CryptoCurrencies: [],
    CryptoCompare: new CryptoCompare(new Pair()),
        
    getCryptos: async () => {
        const CryptoCurrencies: CryptoMoneda[] = await getCryptos();
        set((state) => ({...state, CryptoCurrencies}));
    },

    getData: async (pair: Pair) => {
        const CryptoCompare: CryptoCompare = await getData(pair);
        set((state)=>({...state, CryptoCompare}));
    }

})));

export {
    useCriptoStore
}