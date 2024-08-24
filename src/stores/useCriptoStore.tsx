import { create } from "zustand"
import { devtools } from "zustand/middleware";
import { CryptoMoneda } from "../classes";
import { getCryptos } from "../services/CriptoService"


type CriptoState = {
    CryptoCurrencies: CryptoMoneda[],
    getCryptos: () => Promise<void>
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