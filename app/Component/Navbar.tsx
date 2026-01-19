"use client"
import { useState } from "react"
import Link from "next/link"
import { Leftcomponent } from "./Navbarcomponents/Leftcomponent"
import { Rightcomponent } from "./Navbarcomponents/Rightcomponent"
import { FaBars, FaTimes } from "react-icons/fa"

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="flex items-center w-full relative z-50">
       {/* Mobile Menu Button (Visible on Mobile) */}
       <div className="md:hidden flex-1 justify-start flex">
        <button onClick={toggleMenu} className="text-2xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div className="flex gap-6 flex-1 justify-start hidden md:flex text-sm"><Leftcomponent /></div>
      <h1 className="font-bold text-xl text-center">PersonaAI</h1>
      <div className="flex gap-6 flex-1 justify-end"><Rightcomponent /></div>

      {/* Mobile Menu List */}
      {isMenuOpen && (
        <div className="absolute top-full mt-2 left-0 w-full bg-white shadow-xl rounded-xl flex flex-col gap-4 p-6 md:hidden border border-gray-100">
            <Link href="#" className="cursor-pointer font-medium hover:text-gray-600 w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full">Services</Link>
            <Link href="#" className="cursor-pointer font-medium hover:text-gray-600 w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full">Blog</Link>
            <Link href="#" className="cursor-pointer font-medium hover:text-gray-600 w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full">Product</Link>
            <Link href="#" className="cursor-pointer font-medium hover:text-gray-600 w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full">About</Link>
            <Link href="#" className="cursor-pointer font-medium hover:text-gray-600 w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full">Pricing</Link>
            <Link href="#" className="cursor-pointer font-medium hover:text-gray-600 w-fit relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-500 hover:after:w-full">Contact</Link>
            <button className="bg-black text-white px-4 py-2 rounded-full mt-2 w-fit">
              Get started
            </button>
        </div>
      )}
    </div>
  )
}

