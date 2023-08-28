import Footer from "./components/Footer"
import Header from "./components/Header/header"
import "./globals.css"
import { Inter, Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  weight: "300",
})

export const metadata = {
  title: "Prince Motors",
  description: "Website Prince Motors Cuiabá",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
