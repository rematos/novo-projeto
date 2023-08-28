"use client"

import { useState } from "react"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"

export default function Carousel() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1583&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1534093607318-f025413f49cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1493238792000-8113da705763?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  function prevSlide() {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1

    setCurrentIndex(newIndex)
  }

  function nextSlide() {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1

    setCurrentIndex(newIndex)
  }

  return (
    <div>
      <div className="w-[screen] m-auto h-[480px] relative group ">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full bg-center bg-cover duration-500 text-center flex justify-center"
        >
          <h1 className="text-3xl px-3 md:text-5xl h-full flex items-center font-extrabold tracking-widest text-white bg-black/50 w-full justify-center drop-shadow-md">
            <p className="-mt-44 md:-mt-16">NOVIDADES DA SEMANA</p>
          </h1>
        </div>
        {/* Left Arrow */}
        <div
          onClick={prevSlide}
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-white/30 text-white cursor-pointer"
        >
          <BsChevronLeft size={30} />
        </div>
        {/* Right Arrow */}
        <div
          onClick={nextSlide}
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-white/30 text-white cursor-pointer"
        >
          <BsChevronRight size={30} />
        </div>
      </div>
    </div>
  )
}
