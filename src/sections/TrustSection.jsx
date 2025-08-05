import { useNavigate } from 'react-router-dom'

export default function TrustSection() {
  const navigate = useNavigate()

  return (
    <section className="px-6 lg:px-24 py-20 bg-white">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
    {/* Left Image with background shape */}
    <div className="relative w-full lg:w-[40%] flex justify-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[400px] bg-[#f4b8b8] rounded-[80px] -z-10"></div>
      <img
        src={`${import.meta.env.BASE_URL}girl-phone.webp`}
        alt="Smiling woman using phone"
        className="w-[300px] h-[400px] object-cover rounded-[40px] z-10"
      />
    </div>

        {/* Right Text */}
        <div className="w-full lg:w-[60%] text-center lg:text-left">
          {/* Trust Icons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-base mb-6">
            <div className="text-green-700 font-medium flex items-center gap-2">
              <span className="text-xl">🛡️</span> 100% Private
            </div>
            <div className="text-pink-800 font-medium flex items-center gap-2">
              <span className="text-xl">💫</span> Emotionally Intelligent
            </div>
            <div className="text-rose-800 font-medium flex items-center gap-2">
              <span className="text-xl">🕒</span> Always Available
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-[#392d2d] leading-relaxed italic mb-8">
            More than just AI – It’s a companion that truly understands emotional intelligence and creates genuine connections.
            <br />
            <span className="block mt-1 not-italic">Let’s try:</span>
          </p>

          {/* Button */}
          <button
            onClick={() => navigate('/chat')}
            className="px-6 py-3 bg-gradient-to-r from-pink-200 to-pink-300 text-gray-900 font-semibold rounded-full shadow-md hover:shadow-lg transition"
          >
            Whisper Now
          </button>
        </div>
      </div>
    </section>
  )
}
