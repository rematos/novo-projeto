/* eslint-disable @next/next/no-img-element */
import { trace } from "console"
import Link from "next/link"
import {
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa"
import { FiMapPin } from "react-icons/fi"
export default function Header() {
  return (
    <div>
      <div className="h-10 flex px-10 justify-around items-center bg-primary text-contrast">
        <Link
          href={"https://goo.gl/maps/zCBpTD8BX1PrUrwWA"}
          target="_blank"
          className="lg:flex items-center text-sm hidden gap-2"
        >
          <FiMapPin />
          R. Guanabara, 205 - Jardim Paulista, Cuiabá - MT, 78065-358
        </Link>
        <div className="hidden lg:flex items-center text-sm gap-2">
          <FaPhoneAlt />
          65 2127-2623 / 65 99637-9813
        </div>
        <div className="flex items-center gap-5 text-lg">
          <FaPhoneAlt className="cursor-pointer hover:scale-125 transition duration-150 hover:text-blue-400" />
          <FaWhatsapp className="cursor-pointer hover:scale-125 transition duration-150 hover:text-green-400" />
          <Link
            href={"https://www.instagram.com/princemotors01/"}
            target="_blank"
          >
            <FaInstagram className="cursor-pointer hover:scale-125 hover:text-pink-500 transition duration-150" />
          </Link>
          <Link
            href={"https://www.facebook.com/princemotors01/"}
            target="_blank"
          >
            <FaFacebook className="cursor-pointer hover:scale-125 hover:text-blue-600 transition duration-150" />
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-around h-36 bg-white text-xs md:text-sm px-1 text-contrast font-semibold border-b-contrast border-b-4 w-full">
        <div className="flex gap-4 items-center">
          <Link
            className="hover:text-primary duration-150 cursor-pointer md:flex"
            href={"/"}
          >
            Início
          </Link>
          <Link
            className="hover:text-primary duration-150 cursor-pointer md:flex"
            href={"/estoque"}
          >
            Estoque
          </Link>
          <Link
            className="hover:text-primary duration-150 cursor-pointer lg:flex hidden"
            href={"/estoque"}
          >
            Parceiros
          </Link>
          <div className="mx-2">
            <img
              width={130}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSCmOk6oKcUeF6fRUakmRBcX7oAzDuJFN16Plqvn-gKg&s"
              alt="Logo-Prince-Header"
            />
          </div>
          {/* <div className="hover:text-primary duration-150 cursor-pointer hidden md:flex">
            Parceiros
          </div> */}
          <Link
            className="hover:text-primary duration-150 cursor-pointer md:flex "
            href={"/empresa"}
          >
            Empresa
          </Link>
          <Link
            className="hover:text-primary duration-150 cursor-pointer hidden lg:flex "
            href={"/empresa"}
          >
            Financiamento
          </Link>
          <Link
            className="hover:text-primary duration-150 cursor-pointer md:flex"
            href={"/contato"}
          >
            Contato
          </Link>
        </div>
      </div>
    </div>
  )
}
