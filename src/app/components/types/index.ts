export type Veiculos = {
  id: number
  nome: string
  marca: string
  motor: string
  anoModelo: string
  anoFabricacao: string
  km: string
  portas: number
  combustivel: string
  cor: string
  cambio: string
  placa: string
  fotos: string[]
}

type ItensVeiculo = {
  descricao: string
}

export const carros: Veiculos[] = [
  {
    id: 1,
    cor: "Preto",
    combustivel: "flex",
    nome: "Audi A4",
    marca: "Audi",
    motor: "2.0",
    anoFabricacao: "2020",
    anoModelo: "2020",
    km: "32.000",
    portas: 5,
    cambio: "Automático",
    placa: "PZZ-2233",
    fotos: [
      "https://www.usadofacil.com.br/fotoscarrosano/2023/05/1074099-m.jpg",
      "https://www.usadofacil.com.br/fotoscarrosano/2023/05/1074099-3.jpg",
      "https://www.usadofacil.com.br/fotoscarrosano/2023/05/1074099-4.jpg",
      "https://www.usadofacil.com.br/fotoscarrosano/2023/05/1074099-5.jpg",
      "https://www.usadofacil.com.br/fotoscarrosano/2023/05/1074099-6.jpg",
    ],
  },
  {
    id: 2,
    cor: "Cinza",
    combustivel: "Flex",
    nome: "C4 Cactus",
    marca: "Audi",
    motor: "2.0",
    anoFabricacao: "2019",
    anoModelo: "2020",
    km: "47.686",
    portas: 5,
    cambio: "Automático",
    placa: "PZZ-2233",
    fotos: [
      "https://www.usadofacil.com.br/fotoscarrosano/2023/07/1095110.jpg",
      "https://www.usadofacil.com.br/fotoscarrosano/2023/07/1095110-2.jpg",
      "https://www.usadofacil.com.br/fotoscarrosano/2023/07/1095110-3.jpg",
      "https://www.usadofacil.com.br/fotoscarrosano/2023/07/1095110-4.jpg",
      "https://www.usadofacil.com.br/fotoscarrosano/2023/07/1095110-5.jpg",
    ],
  },
  {
    id: 3,
    cor: "Branco",
    combustivel: "Flex",
    nome: "Jeep Compass",
    marca: "Jeep",
    motor: "2.0",
    anoFabricacao: "2017",
    anoModelo: "2018",
    km: "32.000",
    portas: 5,
    cambio: "Automático",
    placa: "PZZ-2233",
    fotos: [
      "	https://www.usadofacil.com.br/fotoscarrosano/2023/07/1095123.jpg",
      "https://www.usadofacil.com.br/fotoscarrosano/2023/05/1074099-3.jpg",
      "https://www.usadofacil.com.br/fotoscarrosano/2023/05/1074099-4.jpg",
      "https://www.usadofacil.com.br/fotoscarrosano/2023/05/1074099-5.jpg",
      "https://www.usadofacil.com.br/fotoscarrosano/2023/05/1074099-6.jpg",
    ],
  },
  {
    id: 4,
    cor: "Branco",
    combustivel: "Flex",
    nome: "Corolla Altis",
    marca: "Toyota",
    motor: "2.0",
    anoFabricacao: "2018",
    anoModelo: "2019",
    km: "43.000",
    portas: 5,
    cambio: "Automático",
    placa: "PZZ-2233",
    fotos: [
      "	https://www.usadofacil.com.br/fotoscarrosano/2023/06/1086003.jpg",
      "https://www.usadofacil.com.br/fotoscarrosano/2023/06/1086003-2.jpg",
      "	https://www.usadofacil.com.br/fotoscarrosano/2023/06/1086003-3.jpg",
      "https://www.usadofacil.com.br/fotoscarrosano/2023/06/1086003-4.jpg",
      "https://www.usadofacil.com.br/fotoscarrosano/2023/06/1086003-6.jpg",
    ],
  },
]
