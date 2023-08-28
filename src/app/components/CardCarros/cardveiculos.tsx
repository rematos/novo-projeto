/* eslint-disable @next/next/no-img-element */
import { FaCrown } from "react-icons/fa"

export default function CardVeiculos() {
  return (
    <div className="flex flex-col border rounded-lg bg-white w-80 shadow-md cursor-pointer hover:scale-105 transition-all ease-in-out duration-200">
      <div
        className="w-full h-80 rounded-t-lg bg-cover bg-center"
        style={{
          backgroundImage: `url("https://www.usadofacil.com.br/fotoscarrosano/2022/05/986330-m.jpg")`,
        }}
      ></div>
      <div className="flex flex-col gap-2 p-2">
        <div className="text-xl font-extrabold">Hyundai Creta</div>
        <div className="text-sm">
          <ul className="flex flex-col leading-relaxed">
            <li className="text-contrast">1.6 Pulse 16V Bege</li>
            <li className="text-contrast">Automático</li>
            <li className="text-contrast">2018/2019</li>
            <li className="text-contrast">45.000 km</li>
          </ul>
        </div>
        <div className="font-extrabold text-2xl">R$ 94.990,00</div>
      </div>
      <div>
        <hr />

        <div className="flex items-center gap-2 text-sm font-bold text-contrast p-2">
          <FaCrown />
          <p className="text-primary">Em estoque - Cuiabá</p>
        </div>
      </div>
    </div>
  )
}
