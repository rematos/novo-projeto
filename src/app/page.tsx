import Carousel from "./components/Carousel/carousel"
import CardVeiculos from "./components/CardCarros/cardveiculos"
import CardOfertas from "./components/CardOfertas"
import { carros } from "./components/types"

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col text-primary">
        {/* <Header /> */}
        <Carousel />
        {/* <CardPrincipal />       */}
        <div className="relative w-full overflow-hidden md:overflow-visible flex md:justify-center gap-4 -mt-48 before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] sm:before:bg-none sm:after:bg-none before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_50%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_50%)] after:content-['']">
          <CardOfertas item={carros} />
        </div>
        {/*                                                                                   CARROS EM DESTAQUE*/}
        <hr className="mt-16 md:hidden" />
        <div className="flex gap-2 font-extrabold items-center p-10 text-primary md:-mt-2  justify-center">
          <div className="text-2xl pr-2">Veículos em destaque</div>
          <hr className="flex-1 ml-2 border-contrast hidden md:flex" />
        </div>
        <div className="flex gap-7 flex-wrap w-full items-center justify-center">
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
        <div className="w-full text-center mt-10">
          <button className="p-2 px-10 rounded bg-primary text-contrast font-bold uppercase border hover:bg-contrast hover:text-primary transition-colors">
            Estoque Completo
          </button>
        </div>
      </main>
    </>
  )
}
