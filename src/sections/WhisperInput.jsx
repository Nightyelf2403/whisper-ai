import { useNavigate } from 'react-router-dom'
import { Mic } from 'lucide-react' // You can replace with any icon lib

export default function WhisperInput() {
  const navigate = useNavigate()

  return (
    <section className="w-full px-6 md:px-20 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Input + Mic + Button */}
        <div className="flex items-center border border-[#e3dada] rounded-full px-4 py-2 shadow-sm bg-white gap-2">
          <input
            type="text"
            placeholder="You can whisper anything here..."
            className="flex-1 px-4 py-2 outline-none text-sm md:text-base bg-transparent"
          />
          <button
            className="p-2 rounded-full text-[#5c4140] hover:bg-gray-100 transition"
            aria-label="Record"
          >
            <Mic className="w-5 h-5" />
          </button>
          <button
            onClick={() => navigate('/chat')}
            className="bg-[#bda5aa] text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-[#a4898e] transition-all"
          >
            Whisper Now
          </button>
        </div>

        {/* Example whispers */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
          {[
            "I feel controlled but I’m not sure it’s abuse…",
            "I think I’m being gaslighted, but I’m confused…",
            "I don’t know how to talk to anyone about this…",
            "I just need a safe space to express how I feel…"
          ].map((text, idx) => (
            <div key={idx} className="bg-white border border-[#f0eaea] rounded-xl p-4 shadow-sm">
              {text}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}