import { useState } from 'react'

import Navbar from './sections/Navbar'
import HeroSection from './sections/HeroSection'
import WhisperInput from './sections/WhisperInput'
import SafePopup from './sections/SafePopup'
import TrustSection from './sections/TrustSection'
import FeatureCards from './sections/FeatureCards'
import CoreEmotion from './sections/CoreEmotion'
import LoginModal from './components/LoginModal'

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  console.log("showLogin is", showLogin);
  

  return (
    <div className="bg-[#fefcfc] text-[#4a2f2f] font-sans relative">
      {/* Optional: modal */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}

      <SafePopup />
      <div id="main-content">
        {/* Pass login toggle to Navbar or trigger elsewhere */}
        <Navbar onLoginClick={() => setShowLogin(true)} />
        <HeroSection />
        <WhisperInput />
        <TrustSection />
        <FeatureCards />
        <CoreEmotion />
<button
  onClick={() => {
    console.log("TEST button clicked");
    setShowLogin(true);
  }}
  className="bg-red-400 text-white px-4 py-2 mt-6 ml-6 rounded"
>
  TEST SHOW LOGIN MODAL
</button>

      </div>
    </div>
  )
}
