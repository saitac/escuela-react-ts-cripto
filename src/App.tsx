import { useEffect } from "react";
import CriptoSearchForm from "./components/CriptoSearchForm"
import { useCriptoStore } from "./stores/useCriptoStore"
import CriptoPriceDisplay from "./components/CriptoPriceDisplay";

function App() {
  
  const getCryptos = useCriptoStore( (state) => state.getCryptos );

  useEffect( () => { getCryptos() }, [])

  return (
    <div
      className="m-0 flex justify-center"
    >
      <div className="">
        <h1
          className="text-4xl my-10 text-white text-center"
        >
          Cotizador de <span className="block text-[#61ECBC] text-5xl">Criptomonedas</span>
        </h1>
        <div className="my-20 py-8 px-4 rounded-2xl shadow-[0_px_4px_12px_rgba(0,0,0,0.1)] bg-white">
          <CriptoSearchForm/>
          <CriptoPriceDisplay/>
        </div>
      </div>
    </div>
  )
}

export default App
