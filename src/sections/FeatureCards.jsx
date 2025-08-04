export default function FeatureCards() {
  const features = [
    {
      icon: '🤍',
      title: 'Emotional Intelligence',
      desc: 'Understands nuanced emotions and responds with genuine empathy and care.',
    },
    {
      icon: '🧠',
      title: 'Thoughtful Responses',
      desc: 'Processes conversations with depth, considering context and emotional state.',
    },
    {
      icon: '🛡️',
      title: 'Safe & Secure',
      desc: 'Your conversations are private, encrypted, and never shared or stored.',
    },
    {
      icon: '👭',
      title: 'Designed for Women',
      desc: "Built with understanding of women's communication styles and emotional needs.",
    },
  ];

  return (
    <section className="px-6 md:px-20 py-16 bg-[#fdf7f8]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-semibold text-[#4a2f2f] mb-10">What Makes Whisper Special?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#f0eaea] rounded-[2rem] p-6 shadow-sm transition-all duration-200 text-left cursor-pointer hover:shadow-md hover:border-pink-200 rounded-br-[4rem]"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-[#4a2f2f] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
