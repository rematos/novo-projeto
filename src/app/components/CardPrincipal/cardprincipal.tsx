import { BsSearch } from "react-icons/bs";
import { FaCrown } from "react-icons/fa";

export default function CardPrincipal() {
  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-3/4 border rounded-md p-20 bg-white -mt-36 relative drop-shadow-md flex flex-col justify-center items-center">
        <div className="flex gap-10">
          <div className="text-md font-bold border-b-4 border-contrast mb-5 pb-1 pr-2">
            Encontre seu carro
          </div>

          <div className="text-md font-bold mb-5 pb-1 cursor-pointer hover:text-contrast duration-150">
            Simular financiamento
          </div>
          <div className="text-md font-bold mb-5 pb-1 cursor-pointer hover:text-contrast duration-150">
            Vender seu veículo
          </div>
          <div className="text-md font-bold mb-5 pb-1 cursor-pointer hover:text-contrast duration-150">
            Solicitar avaliação
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 w-full">
          <input
            type="text"
            className="border p-3 rounded-md placeholder:text-sm w-1/2"
            placeholder="Digite modelo ou marca do veículo"
          />
          <div className="flex items-center">
            <button className="bg-primary h-12 text-md text-contrast font-bold px-10 rounded-md flex items-center justify-center gap-3 hover:bg-contrast hover:text-primary duration-150 ease-in-out">
              <BsSearch />
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
