import { create } from "zustand"
import axios from "axios"


const getCryptos = async () => {
    
    const uri: string = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"

    try {

        const {data: {Data}} = await axios.get(uri);

        if ( Data ) {
            
        }

        console.log(Data);
        
    } catch (error) {
        
    }
}


const useCriptoStore = create( () => ({
    
    getCryptos: () => {
        getCryptos();
        //console.log("Desde getcryotos")
    }

}));

export {
    useCriptoStore
}