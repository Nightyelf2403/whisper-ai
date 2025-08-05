import { useState, useEffect } from 'react'

export default function SafePopup() {
  const [visible, setVisible] = useState(true)

  const handleContinue = () => {
    setVisible(false)
    setTimeout(() => {
      document.getElementById('main-content')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  useEffect(() => {
    document.body.style.overflow = visible ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [visible])

  if (!visible) return null

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center px-4 py-12">
      <div className="bg-white rounded-2xl shadow-xl px-6 py-6 w-full max-w-sm text-center border border-[#e1bfc4]">
        {/* Whisper AI logo */}
        <img
          src="/logo.webp"
          alt="Whisper AI Logo"
          className="mx-auto h-12 mb-3"
        />

        <h3 className="text-lg font-bold text-[#2e1a1a] mb-1">You’re safe here</h3>
        <p className="text-sm text-gray-500 mb-3">Take your time</p>

        <p className="text-xs text-gray-600 leading-snug mb-2">
          Your privacy is paramount. For added discretion, use Incognito/Private mode or clear your browser history. We use cookies to enhance your experience.
        </p>
        <p className="text-xs text-gray-600 leading-snug mb-3">
          Need to leave fast? Click the <span className="text-[#c05e6f] font-medium">Safe Exit</span> button at the top right.
        </p>

        <p className="text-green-700 text-sm font-medium flex items-center justify-center gap-1 mb-4">
          🛡️ Everything you share is private and secure
        </p>

        <button
          onClick={handleContinue}
          className="bg-[#d6a9ac] hover:bg-[#c2898f] text-white font-medium px-6 py-2 text-sm rounded-full w-full flex items-center justify-center gap-2"
        >
          I understand, let’s continue <span className="text-lg">→</span>
        </button>

        <p className="text-[10px] text-gray-500 mt-2 leading-snug">
          By continuing, you acknowledge this is a support tool and not a replacement for professional help
        </p>
      </div>
    </div>
  )
}