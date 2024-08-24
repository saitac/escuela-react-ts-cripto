import { ChangeEvent, FormEvent, useState } from "react";
import { CryptoMoneda, Moneda, Pair } from "../classes"
import { monedas } from "../data"
import { useCriptoStore } from "../stores/useCriptoStore"
import ErrorMessage from "./ErrorMessage";

const CriptoSearchForm = () => {

    const CryptoCurrencies = useCriptoStore( (state) => state.CryptoCurrencies );
    const getData = useCriptoStore( (state) => state.getData );
    const [pair, setpair] = useState<Pair>(new Pair())
    const [error, setError] = useState("");

    const HandleOnChangeEvent = (e: ChangeEvent<HTMLSelectElement>) => {
        if (e.target.name === "currency"){
            //const actualCurrency = new Moneda(e.target.value,"") 
            //console.log(e.target[e.target.selectedIndex].textContent)
            setpair({
                ...pair,
                moneda: new Moneda(e.target.value,"")
            })
        } else {
            setpair({
                ...pair,
                criptoMoneda: new CryptoMoneda(e.target.value,"")
            })
        }
    }

    const HandleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if ( !pair.moneda.code || !pair.criptoMoneda.code ) {
            setError("Todos los campos son obligatorios");
            return;
        }
        setError("");
        getData(pair);
    }
    
    return(
        <form
            className="flex flex-col gap-5"
            onSubmit={(e)=>HandleOnSubmit(e)}
        >
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <div>
                <label
                    className="text-black block font-"
                    htmlFor="currency"
                >Moneda:</label>
                <select
                    className="bg-[#ECEBEB] border-none rounded-2xl px-4 w-full"
                    name="currency"
                    id="currency"
                    onChange={(e)=>HandleOnChangeEvent(e)}
                >
                    <option value="">-- Seleccione --</option>
                    {
                        monedas.map( (mon: Moneda) => (<option key={mon.code} value={mon.code}>{mon.name}</option>))
                    }
                </select>
            </div>
            <div>
                <label 
                    className="text-black block"
                    htmlFor="criptocurrency">Criptomoneda:</label
                >
                <select
                    className="bg-[#ECEBEB] border-none rounded-2xl px-4 w-full"
                    name="criptocurrency"
                    id="criptocurrency"
                    onChange={(e)=>HandleOnChangeEvent(e)}
                >
                    <option value="">-- Seleccione --</option>
                    {
                        CryptoCurrencies.map( (cripto: CryptoMoneda) => (<option key={cripto.code} value={cripto.code}>{cripto.name}</option>) )
                    }
                </select>
            </div>
            <input
                className="bg-[#61ECBC] text-black border-none px-4 font-black cursor-pointer uppercase mt-4 hover:bg-[#0CB387] transition-colors ease-in-out delay-150"
                type="submit" value="Cotizar"/>
        </form>
    )
}

export default CriptoSearchForm