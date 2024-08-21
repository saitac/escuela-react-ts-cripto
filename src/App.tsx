import CriptoSearchForm from "./components/CriptoSearchForm"

function App() {
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
        <div className="my-20 py-24 px-8 rounded-2xl shadow-[0_px_4px_12px_rgba(0,0,0,0.1)] bg-white">
          <CriptoSearchForm/>
        </div>
      </div>
    </div>
  )
}

export default App
