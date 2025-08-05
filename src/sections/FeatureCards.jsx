export default function FeatureCards() {
  const features = [
    {
      icon: '/icons/heart.svg', // Place in public/icons folder
      title: 'Emotional Intelligence',
      desc: 'Understands nuanced emotions and responds with genuine empathy and care.',
    },
    {
      icon: '/icons/brain.svg',
      title: 'Thoughtful Responses',
      desc: 'Processes conversations with depth, considering context and emotional state.',
    },
    {
      icon: '/icons/shield.svg',
      title: 'Safe & Secure',
      desc: 'Your conversations are private, encrypted, and never shared or stored.',
    },
    {
      icon: '/icons/women.svg',
      title: 'Designed for Women',
      desc: "Built with understanding of women's communication styles and emotional needs.",
    },
  ];

  return (
    <section className="px-6 md:px-20 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#392d2d] mb-14">
          What Makes Whisper Special?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="border border-[#ecdede] p-8 rounded-tl-[2rem] rounded-br-[6rem] text-center md:text-left"
            >
              <div className="w-12 h-12 rounded-full border border-[#d4b2a2] mx-auto md:mx-0 flex items-center justify-center mb-6">
                <img src={item.icon} alt={item.title} className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-[#1c1c1c] mb-3">{item.title}</h3>
              <p className="text-[16px] leading-relaxed text-[#443e3e]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}