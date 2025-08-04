import { useState } from 'react'
import logo from '/public/logo.png'

export default function Navbar() {
  const [hovered, setHovered] = useState(false)

  return (
    <header className="w-full px-6 py-4 flex items-center justify-between border-b border-gray-200">
      {/* Left Logo */}
      <div className="flex items-center space-x-2">
        <img
          src={logo}
          alt="Logo"
          className="h-10 w-auto object-contain drop-shadow-md"
        />
      </div>

      {/* Center Nav Links */}
      <nav className="hidden md:flex items-center space-x-8 text-[15px] text-[#5c4140] font-light">
        <a href="#" className="hover:text-[#d4948d]">Chat with whisper</a>
        <a href="#" className="hover:text-[#d4948d]">Start Journaling</a>
        <a href="#" className="hover:text-[#d4948d]">Safety Tips</a>
        <a href="#" className="hover:text-[#d4948d]">Resource Hub</a>
      </nav>

      {/* Right Side */}
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-500 hidden sm:block">
          Tap any time to exit safely.
        </span>
        <button
          className="px-3 py-1.5 rounded-md border border-gray-300 text-sm font-medium text-[#5c4140] hover:bg-[#f3e1df] transition"
        >
          Safe Exit
        </button>
        <a
          href="#"
          className="ml-3 text-[#ba6d65] hover:text-[#a15048] text-sm font-medium"
        >
          Login
        </a>
      </div>
    </header>
  )
}
