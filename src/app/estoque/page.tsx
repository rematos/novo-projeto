/* eslint-disable @next/next/no-img-element */
import CardVeiculos from "../components/CardCarros/cardveiculos"

export default function Estoque() {
  return (
    <div className="space-y-10 p-10">
      <div>
        <p className="font-bold text-xl text-primary">
          Nosso estoque completo de seminovos | Prince Motors
        </p>
        <p className="text-xs font-semibold text-gray-400 leading-relaxed">
          12 carros econtrados
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-0">
        <div className="rounded h-full bg-contrast/50">
          <div className="flex flex-col justify-center items-center gap-2 md:w-[350px] p-4">
            <p className="text-sm font-bold w-full text-primary">
              O que você procura?
            </p>
            <input
              type="text"
              className="border rounded p-1.5 placeholder:text-xs focus:outline-primary w-full border-contrast"
              placeholder="Digite marca ou modelo do carro"
            />
            <button className="bg-primary p-1.5 text-contrast font-semibold rounded w-full">
              Buscar
            </button>
          </div>
          <div className="border-t-contrast border-t w-full my-4" />
          <div className="flex flex-col justify-center items-center  gap-2 w-full md:w-[350px] p-4">
            <p className="text-sm font-bold w-full text-primary">
              Filtrar por:
            </p>
            <label
              htmlFor="Filtro1"
              className="flex w-full items-center text-sm gap-3 leading-relaxed cursor-pointer select-none"
            >
              <input
                id="Filtro1"
                type="checkbox"
                className="peer border rounded sr-only placeholder:text-xs focus:outline-primary w-full border-contrast"
              />
              <div className="p-1.5 w-4 h-4 bg-white border-contrast border rounded peer-checked:bg-primary"></div>
              <div>
                <p className="font-semibold text-primary">Menor preço</p>
                <p className="text-xs text-zinc-500 font-semibold">
                  Veículos de menores preços do estoque
                </p>
              </div>
            </label>
            <label
              htmlFor="Filtro3"
              className="flex w-full items-center text-sm gap-3 leading-relaxed cursor-pointer select-none"
            >
              <input
                id="Filtro3"
                type="checkbox"
                className="peer border rounded sr-only placeholder:text-xs focus:outline-primary w-full border-contrast"
              />
              <div className="p-1.5 w-4 h-4 bg-white border-contrast border rounded peer-checked:bg-primary"></div>
              <div>
                <p className="font-semibold text-primary">Seu carro na troca</p>
                <p className="text-xs text-zinc-500 font-semibold">
                  Veículos que aceitam seu carro na troca
                </p>
              </div>
            </label>
            <label
              htmlFor="Filtro4"
              className="flex w-full items-center text-sm gap-3 leading-relaxed cursor-pointer select-none"
            >
              <input
                id="Filtro4"
                type="checkbox"
                className="peer border rounded sr-only placeholder:text-xs focus:outline-primary w-full border-contrast"
              />
              <div className="p-1.5 w-4 h-4 bg-white border-contrast border rounded peer-checked:bg-primary"></div>
              <div>
                <p className="font-semibold text-primary">Mega oferta</p>
                <p className="text-xs text-zinc-500 font-semibold">
                  Veículos com valores abaixo da tabela fipe
                </p>
              </div>
            </label>
          </div>
          <div className="border-t-contrast border-t w-full my-4" />
          <div className="p-4 space-y-3">
            <p className="text-sm font-bold text-primary">Marca do carro:</p>
            <div className="flex gap-4">
              <div className="p-2 bg-transparent w-[80px] h-[80px] flex items-center justify-center rounded flex-col">
                <img
                  src="https://logosmarcas.net/wp-content/uploads/2021/04/Chevrolet-Logo.png"
                  alt="chevrolet-logo"
                  width={60}
                />
                <p className="text-xs">Chevrolet</p>
              </div>
              <div className="p-2 bg-transparent w-[80px] h-[80px] flex items-center justify-center rounded flex-col">
                <img
                  src="https://www.freepnglogos.com/uploads/toyota-logo-png/toyota-logos-brands-10.png"
                  alt="toyota-logo"
                  width={50}
                />
                <p className="text-xs">Toyota</p>
              </div>
              <div className="p-2 bg-transparent w-[80px] h-[80px] flex items-center justify-center rounded flex-col">
                <img
                  src="https://www.freeiconspng.com/thumbs/honda-logo-png/honda-logo-png-picture-20.png"
                  alt="chevrolet-logo"
                  width={50}
                />
                <p className="text-xs">Honda</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-7 flex-wrap items-center justify-center">
          <CardVeiculos />
          <CardVeiculos />
          <CardVeiculos />
          <CardVeiculos />
          <CardVeiculos />
          <CardVeiculos />
          <CardVeiculos />
          <CardVeiculos />
          <CardVeiculos />
          <CardVeiculos />
          <CardVeiculos />
          <CardVeiculos />
        </div>
      </div>
    </div>
  )
}
