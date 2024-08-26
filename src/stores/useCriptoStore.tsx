import { create } from "zustand"
import { devtools } from "zustand/middleware";
import { CryptoCompare, CryptoMoneda, Pair } from "../classes";
import { getCryptos, getData } from "../services/CriptoService"


type CriptoState = {
    CryptoCurrencies: CryptoMoneda[],
    CryptoCompare: CryptoCompare,
    loading: boolean,
    getCryptos: () => Promise<void>,
    getData: (pair: Pair) => Promise<void>,
    clearCompare: () => void

}

const useCriptoStore = create<CriptoState>()(devtools((set) => ({

    CryptoCurrencies: [],
    CryptoCompare: new CryptoCompare(new Pair()),
    loading: false,
        
    getCryptos: async () => {
        const CryptoCurrencies: CryptoMoneda[] = await getCryptos();
        set((state) => ({...state, CryptoCurrencies}));
    },

    getData: async (pair: Pair) => {
        set(()=>({loading: true}));
        const CryptoCompare: CryptoCompare = await getData(pair);
        set((state)=>({...state, CryptoCompare, loading: false}));
    },

    clearCompare: () => {
        set((state)=>({...state, CryptoCompare: new CryptoCompare(new Pair())}));
    }

})));

export {
    useCriptoStore
}