
const CriptoSearchForm = () => {
    return(
        <form
            className="flex flex-col gap-8"
        >
            <div>
                <label htmlFor="currency">Moneda:</label>
                <select
                    name="currency"
                    id="currency"
                >
                    <option value="">-- Seleccione --</option>
                </select>
            </div>
            <div>
                <label htmlFor="criptocurrency">Criptomoneda:</label>
                <select
                    name="criptocurrency"
                    id="criptocurrency"
                >
                    <option value="">-- Seleccione --</option>
                </select>
            </div>
            <input type="submit" value="Cotizar"/>
        </form>
    )
}

export default CriptoSearchForm