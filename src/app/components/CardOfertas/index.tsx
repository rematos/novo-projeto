"use client"
import { useRouter } from "next/navigation"
import { Veiculos } from "../types"

interface Veiculo {
  item: Veiculos[]
}

export default function CardOfertas({ item }: Veiculo) {
  const router = useRouter()
  return (
    <div className="flex gap-4 w-full md:justify-center translate-x-[-50%] md:translate-x-0">
      {item.map((item, index) => (
        <div
          key={index}
          className="p-1 rounded-md flex justify-center bg-white shadow-md relative hover:scale-110 transition-all duration-300 ease-in-out"
        >
          <div>
            <div
              style={{ backgroundImage: `url(${item.fotos[0]})` }}
              className="h-40 w-56 bg-cover cursor-pointer bg-center rounded-md flex items-end"
            ></div>
            <div className="p-4 space-y-2">
              <p className="text-xl font-semibold">{item.nome}</p>
              <div className="space-y-1">
                <p className="text-sm">
                  Ano: {item.anoFabricacao} / {item.anoModelo}
                </p>
                <p className="text-sm">Motor: {item.motor}</p>
                <p className="text-sm">Km: {item.km}</p>
              </div>
            </div>
            <button
              onClick={() => router.push(`/carros/${item.id}`)}
              className="w-full border p-1.5 bg-contrast cursor-pointer font-bold uppercase rounded-md hover:bg-primary hover:text-contrast transition-colors"
            >
              + detalhes
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}
