export const categorias = {
  suv: "https://www.usadofacil.com.br/fotoscarrosano/2023/05/1076177-m.jpg",

  sedan: "https://www.usadofacil.com.br/fotoscarrosano/2023/05/1074099-m.jpg",

  hatch: "https://www.usadofacil.com.br/fotoscarrosano/2023/05/1074988-m.jpg",

  pickup:
    "https://quatrorodas.abril.com.br/wp-content/uploads/2021/04/ultra_0004-large.jpeg?quality=70&strip=info",

  caminhonetes:
    "https://production.autoforce.com/uploads/picture/image/140844983/main_webp_comprar-s10-z71-2022-02de9ed9-5718-4794-a4ec-172d42997346_c82cb0bedf.jpg.webp",
}

export default function CardCategorias() {
  return (
    <div className="flex justify-around gap-7">
      <div
        style={{ backgroundImage: `url(${categorias.suv})` }}
        className="h-56 w-80 bg-cover cursor-pointer bg-center rounded-md flex items-end"
      >
        <div className="text-2xl  font-bold text-white p-3">{"SUV's"}</div>
      </div>
      <div
        style={{ backgroundImage: `url(${categorias.sedan})` }}
        className="h-56 w-80 bg-cover cursor-pointer bg-center rounded-md flex items-end"
      >
        <div className="text-2xl  font-bold text-white p-3">Sedan</div>
      </div>
      <div
        style={{ backgroundImage: `url(${categorias.hatch})` }}
        className="h-56 w-80 bg-cover cursor-pointer bg-center rounded-md flex items-end"
      >
        <div className="text-2xl  font-bold text-white p-3">Hatches</div>
      </div>
      <div
        style={{ backgroundImage: `url(${categorias.pickup})` }}
        className="h-56 w-80 bg-cover cursor-pointer bg-center rounded-md flex items-end"
      >
        <div className="text-2xl  font-bold text-white p-3">Pick-ups</div>
      </div>
      <div
        style={{ backgroundImage: `url(${categorias.caminhonetes})` }}
        className="h-56 w-80 bg-cover cursor-pointer bg-center rounded-md flex items-end"
      >
        <div className="text-2xl  font-bold text-white p-3">Caminhonetes</div>
      </div>
    </div>
  )
}
