import { BsFillLockFill } from "react-icons/bs"
import { FaHandshake, FaPhoneAlt, FaWhatsapp } from "react-icons/fa"
import { FiMapPin } from "react-icons/fi"

export default function Footer() {
  return (
    <footer className="w-full flex md:justify-around bg-primary border-t-4 border-contrast mt-10 h-72">
      <div className="flex flex-col w-full items-center justify-center space-y-6">
        <div className="flex flex-col justify-around h-full">
          <div className="space-y-1 text-contrast text-xs md:text-sm p-2 gap-1">
            <div className="h-20 w-20 border hidden"></div>
            <h1 className="font-bold text-lg leading-relaxed">Contato</h1>
            <p className="flex gap-2 items-start">
              <FaPhoneAlt className="mt-1" />
              Vendas: 65 99296-5658
            </p>
            <p className="flex gap-2 items-start">
              <FaWhatsapp className="mt-1" />
              Whatsapp: 65 99296-7588
            </p>
            <p className="flex gap-2 items-center">
              <FiMapPin className="" />
              R. Guanabara, 205 - Jardim Paulista, Cuiabá - MT, 78065-358
            </p>
          </div>
          <div className="space-y-1 text-contrast text-xs md:text-sm p-2 gap-1">
            {/* <div className="h-20 w-20 border text-center"></div> */}
            <h1 className="font-bold text-lg leading-relaxed">Horários</h1>
            <p className="flex gap-2 items-start">
              Segunda a Sexta-feira - 08:00 às 17:30
            </p>
            <p className="flex gap-2 items-start">Sábado - 08:00 às 12:00</p>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex w-full flex-col gap-10 justify-center items-center">
        <div className="flex items-center gap-3 w-1/2">
          <div className="text-contrast">
            <FaHandshake size={54} />
          </div>
          <div>
            <p className="text-contrast font-bold">Negociação simplificada</p>
            <p className="text-contrast text-sm">
              100% de nossos clientes elogiaram nossa abordagem eficiente e
              livre de complicações.
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 w-1/2">
          <div className="text-contrast">
            <BsFillLockFill size={54} />
          </div>
          <div>
            <p className="text-contrast font-bold">
              Confiabilidade e Segurança
            </p>
            <p className="text-contrast text-sm">
              Todos os nossos veículos possuem laudo de conformidade.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
