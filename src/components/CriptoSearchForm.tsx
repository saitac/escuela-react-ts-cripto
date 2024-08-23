import { Moneda } from "../classes"
import { monedas } from "../data"
import { useCriptoStore } from "../stores/useCriptoStore"

const CriptoSearchForm = () => {

    const x = useCriptoStore( (state) => state.CryptoCurrencies );
    console.log(x);

    return(
        <form
            className="flex flex-col gap-5"
        >
            <div>
                <label
                    className="text-black block font-"
                    htmlFor="currency"
                >Moneda:</label>
                <select
                    className="bg-[#ECEBEB] border-none rounded-2xl px-4 w-full"
                    name="currency"
                    id="currency"
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
                >
                    <option value="">-- Seleccione --</option>
                </select>
            </div>
            <input
                className="bg-[#61ECBC] text-black border-none px-4 font-black cursor-pointer uppercase mt-4 hover:bg-[#0CB387] transition-colors ease-in-out delay-150"
                type="submit" value="Cotizar"/>
        </form>
    )
}

export default CriptoSearchForm