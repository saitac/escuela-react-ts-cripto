
import { useMemo } from "react";
import { useCriptoStore } from "../stores/useCriptoStore"

const CriptoPriceDisplay = () => {

    const CryptoCompare = useCriptoStore( (state) => state.CryptoCompare );
    const hasResult = useMemo(() => CryptoCompare.price.length > 0 ,[CryptoCompare]);

    console.log(hasResult)

    return(
        <div
            className="mt-10"
        >
            {hasResult && (<>
                <h2 className="text-lg font-bold text-center">Cotización</h2>
                <div className="grid grid-cols-2">
                    <img
                        src={`https://cryptocompare.com/${CryptoCompare.imageurl}`}
                        alt="Imagen CryptoMoneda"
                    />
                    <div>
                        <p>El precio es de: <span>{CryptoCompare.price}</span></p>
                        <p>El precio es de: <span>{CryptoCompare.highday}</span></p>
                        <p>El precio es de: <span>{CryptoCompare.lowday}</span></p>
                        <p>El precio es de: <span>{CryptoCompare.changepct24hour}</span></p>
                        <p>El precio es de: <span>{CryptoCompare.lastupdate}</span></p>
                        <p>El precio es de: <span>{CryptoCompare.price}</span></p>
                    </div>
                </div>
            </>) }
            
        </div>
    )
}

export default CriptoPriceDisplay