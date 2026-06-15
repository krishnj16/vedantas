
export default function Vedanta() {
  return (
    <div className="max-w-4xl mx-auto space-y-16 animate-in fade-in duration-1000 pb-16">
      
      {/* Organic Page Header */}
      <div className="text-center space-y-6 pt-8">
        <h1 className="font-cursive text-6xl text-vedanta-brown drop-shadow-md">What is Vedanta?</h1>
        
        {/* Cultural Flourish Divider */}
        <div className="flex justify-center items-center gap-4 text-vedanta-orange/70">
          <span className="w-16 h-px bg-gradient-to-r from-transparent to-vedanta-orange"></span>
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 22C12 22 5 16.5 5 10C5 6.134 8.134 3 12 3C15.866 3 19 6.134 19 10C19 16.5 12 22 12 22ZM12 5C9.23858 5 7 7.23858 7 10C7 14.5 12 19.2 12 19.2C12 19.2 17 14.5 17 10C17 7.23858 14.7614 5 12 5Z" />
            <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" />
          </svg>
          <span className="w-16 h-px bg-gradient-to-l from-transparent to-vedanta-orange"></span>
        </div>
      </div>

      {/* Spiritual Intro Text */}
      <div className="text-center px-4 md:px-16 relative z-10">
        <p className="text-2xl text-slate-700 leading-relaxed font-serif italic text-vedanta-blue drop-shadow-sm">
          "Vedanta is one of the world's most ancient religious philosophies and one of its broadest. Based on the Vedas, the sacred scriptures of India, it affirms the oneness of existence, the divinity of the soul, and the harmony of religions."
        </p>
      </div>

      {/* The Teachings (Organic Flow) */}
      <div className="relative mt-20">
        
        {/* Soft Radial "Aura" Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-vedanta-orange/10 via-transparent to-transparent blur-3xl pointer-events-none"></div>

        <div className="space-y-12 relative z-10 px-4 md:px-8">
          
          {/* Teaching 1: Leaf-shaped card (Top-Right / Bottom-Left rounded) */}
          <div className="bg-white/50 backdrop-blur-md rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-xl rounded-br-xl p-8 md:p-10 border border-white/60 shadow-xl shadow-orange-900/5 hover:bg-white/70 transition-colors duration-700 group">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
              <div className="w-16 h-16 rounded-full bg-vedanta-orange/10 flex items-center justify-center shrink-0 border border-vedanta-orange/20 text-vedanta-orange group-hover:scale-110 transition-transform duration-700">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              </div>
              <div>
                <h3 className="font-cursive text-4xl text-vedanta-brown mb-4 drop-shadow-sm">Truth is One</h3>
                <p className="font-sans text-slate-700 leading-relaxed text-lg font-light">
                  God is one without a second, the absolute and sole reality. The various religions of the world are simply different paths leading towards this one ultimate truth.
                </p>
              </div>
            </div>
          </div>

          {/* Teaching 2: Inverse Leaf Shape (Top-Left / Bottom-Right rounded) */}
          <div className="bg-white/50 backdrop-blur-md rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-xl rounded-bl-xl p-8 md:p-10 border border-white/60 shadow-xl shadow-blue-900/5 hover:bg-white/70 transition-colors duration-700 group">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
              <div className="w-16 h-16 rounded-full bg-vedanta-blue/10 flex items-center justify-center shrink-0 border border-vedanta-blue/20 text-vedanta-blue group-hover:scale-110 transition-transform duration-700">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <div>
                <h3 className="font-cursive text-4xl text-vedanta-brown mb-4 drop-shadow-sm">The Divinity of the Soul</h3>
                <p className="font-sans text-slate-700 leading-relaxed text-lg font-light">
                  Every individual is essentially divine. The goal of human life is to unfold and manifest this inherent divinity through selfless work, worship, philosophical inquiry, or deep meditation.
                </p>
              </div>
            </div>
          </div>
          
          {/* Teaching 3: Leaf-shaped card (Top-Right / Bottom-Left rounded) */}
          <div className="bg-white/50 backdrop-blur-md rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-xl rounded-br-xl p-8 md:p-10 border border-white/60 shadow-xl shadow-orange-900/5 hover:bg-white/70 transition-colors duration-700 group">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
              <div className="w-16 h-16 rounded-full bg-vedanta-orange/10 flex items-center justify-center shrink-0 border border-vedanta-orange/20 text-vedanta-orange group-hover:scale-110 transition-transform duration-700">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <div>
                <h3 className="font-cursive text-4xl text-vedanta-brown mb-4 drop-shadow-sm">Harmony of Religions</h3>
                <p className="font-sans text-slate-700 leading-relaxed text-lg font-light">
                  Vedanta respects all sincere religious paths. As different streams having their sources in different places all mingle their water in the sea, so different paths ultimately lead to the same goal.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Quote Card */}
      <div className="mt-20 relative px-4 md:px-0">
        <div className="absolute left-1/2 -top-6 -translate-x-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center text-vedanta-orange shadow-lg z-20">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
        </div>
        
        <blockquote className="relative p-10 md:p-14 bg-gradient-to-b from-white/60 to-white/30 backdrop-blur-xl rounded-[3rem] border border-white/60 shadow-2xl shadow-blue-900/10 text-center">
          <p className="italic text-slate-700 text-xl md:text-2xl leading-relaxed font-serif mb-8 text-vedanta-blue">
            "To me the very essence of education is concentration of mind, not the collecting of facts. If I had to do my education over again, and had any voice in the matter, I would not study facts at all. I would develop the power of concentration and detachment..."
          </p>
          <footer className="font-bold text-vedanta-brown tracking-widest text-sm uppercase">
            — Swami Vivekananda
          </footer>
        </blockquote>
      </div>

    </div>
  );
}