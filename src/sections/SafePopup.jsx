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
    <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center px-4 py-12 overflow-y-auto">
      <div className="bg-white rounded-[36px] shadow-2xl px-8 py-10 w-full max-w-sm text-center border border-[#e1bfc4]">
        {/* Whisper Ai Title */}
        <h2 className="text-[40px] leading-tight font-['Great_Vibes'] text-[#2e1a1a] mb-2">
          Whisper Ai
        </h2>

        {/* Headline */}
        <h3 className="text-xl font-semibold text-[#4a2f2f] mb-1">
          You're safe here
        </h3>

        {/* Subtitle */}
        <p className="text-sm text-gray-500 mb-5">Take your time</p>

        {/* Description */}
        <p className="text-xs text-gray-600 mb-2 leading-relaxed">
          Your privacy is paramount. For added discretion, use Incognito/Private mode or clear your browser history.
          We employ cookies to enhance your experience — by continuing, you consent to our cookie policy.
        </p>
        <p className="text-xs text-gray-600 mb-5 leading-relaxed">
          Need to leave fast? Click the <span className="text-[#c05e6f] font-medium">Safe Exit</span> button at the top right.
        </p>

        {/* Trust Icon */}
        <p className="text-green-700 text-sm font-medium flex items-center justify-center gap-1 mb-5">
          <span>🛡️</span> Everything you share is private and secure
        </p>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="bg-[#d6a9ac] hover:bg-[#c2898f] text-white font-medium px-6 py-2 text-sm rounded-full w-full flex items-center justify-center gap-2 transition"
        >
          I understand, let’s continue <span className="text-lg">→</span>
        </button>

        {/* Disclaimer */}
        <p className="text-[10px] text-gray-500 mt-3 leading-snug">
          By continuing, you acknowledge this is a support tool and not a replacement for professional help.
        </p>
      </div>
    </div>
  )
}
