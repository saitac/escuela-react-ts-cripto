
import { useMemo } from "react";
import { useCriptoStore } from "../stores/useCriptoStore"
import Spinner from "./Spinner";

const CriptoPriceDisplay = () => {

    const CryptoCompare = useCriptoStore( (state) => state.CryptoCompare );
    const loading = useCriptoStore( (state) => state.loading );
    const hasResult = useMemo(() => CryptoCompare.price.length > 0 ,[CryptoCompare]);

    return(
        <div
            className="mt-10"
        >
            {loading ? <Spinner/> : hasResult && (<>
                <h2 className="text-lg font-bold text-center">Cotización</h2>
                <div className="grid grid-cols-[2fr,3fr] items-center">
                    <img
                        className="w-full"
                        src={`https://cryptocompare.com/${CryptoCompare.imageurl}`}
                        alt="Imagen CryptoMoneda"
                    />
                    <div>
                        <p className="mb-2 text-base">El precio es de: <span className="font-bold">{CryptoCompare.price}</span></p>
                        <p className="mb-2 text-base">Precio más alto del día: <span className="font-bold">{CryptoCompare.highday}</span></p>
                        <p className="mb-2 text-base">Precio más bajo del día: <span className="font-bold">{CryptoCompare.lowday}</span></p>
                        <p className="mb-2 text-base">Variación últimas 24 horas: <span className="font-bold">{CryptoCompare.changepct24hour}</span></p>
                        <p className="mb-2 text-base">Última actualización: <span className="font-bold">{CryptoCompare.lastupdate}</span></p>
                    </div>
                </div>
            </>) }
            
        </div>
    )
}

export default CriptoPriceDisplay