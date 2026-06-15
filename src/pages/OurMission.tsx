import React from 'react';

export default function OurMission() {
  return (
    <div className="max-w-5xl mx-auto space-y-16 animate-in fade-in duration-1000 pb-20">
      
      {/* Organic Page Header */}
      <div className="text-center space-y-6 pt-8">
        <h1 className="font-cursive text-6xl text-vedanta-brown drop-shadow-md">Our Mission</h1>
        
        {/* Cultural Flourish Divider (Text-based, no complex SVGs) */}
        <div className="flex justify-center items-center gap-4 text-vedanta-orange/60">
          <span className="w-24 h-px bg-gradient-to-r from-transparent to-vedanta-orange"></span>
          <span className="font-serif text-2xl">~ 🪷 ~</span>
          <span className="w-24 h-px bg-gradient-to-l from-transparent to-vedanta-orange"></span>
        </div>
      </div>

      {/* The Core Motto (Editorial Style) */}
      <div className="text-center px-4 md:px-16 relative z-10 mb-16">
        <div className="inline-block border-y border-vedanta-brown/20 py-6 px-4 md:px-12 bg-white/40">
          <h2 className="text-3xl md:text-4xl font-serif text-vedanta-orange mb-3 tracking-wider drop-shadow-sm">
            आत्मनो मोक्षार्थं जगद्धिताय च
          </h2>
          <h3 className="text-xl md:text-2xl font-serif text-vedanta-blue mb-4">
            "Atmano mokshartham jagad hitaya cha"
          </h3>
          <p className="text-lg text-slate-600 font-light italic tracking-wide">
            For one's own liberation, and for the welfare of the world.
          </p>
        </div>
      </div>

      {/* The Two Pillars of the Mission (Temple Arch Style) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-8">
        
        {/* Pillar 1: Spiritual Realization */}
        <div className="bg-[#fdfcf9] rounded-t-[6rem] rounded-b-xl p-8 md:p-12 shadow-xl shadow-orange-900/5 hover:-translate-y-1 transition-transform duration-700 relative overflow-hidden group">
          
          {/* Traditional Inner Border */}
          <div className="absolute inset-2 border border-vedanta-orange/20 rounded-t-[5.5rem] rounded-b-lg pointer-events-none transition-colors duration-700 group-hover:border-vedanta-orange/40"></div>
          
          <div className="text-center mb-8 mt-4">
            <span className="font-serif text-6xl text-vedanta-orange/20 block mb-2 select-none">I</span>
            <h3 className="font-cursive text-4xl text-vedanta-brown">Spiritual Growth</h3>
          </div>
          
          <p className="text-slate-700 leading-relaxed font-serif text-lg text-center px-2">
            Our primary mission is to help individuals realize their innate divinity. Through daily meditation, prayer, philosophical study, and adherence to the universal teachings of Vedanta, the Society provides a structured, supportive environment for sincere spiritual seekers to advance on their personal journey toward enlightenment and inner peace.
          </p>
          
          {/* Decorative bottom element */}
          <div className="mt-10 flex justify-center text-vedanta-orange/30">
            <span className="text-2xl">❧</span>
          </div>
        </div>

        {/* Pillar 2: Service to Humanity */}
        <div className="bg-[#fdfcf9] rounded-t-[6rem] rounded-b-xl p-8 md:p-12 shadow-xl shadow-blue-900/5 hover:-translate-y-1 transition-transform duration-700 relative overflow-hidden group">
          
          {/* Traditional Inner Border */}
          <div className="absolute inset-2 border border-vedanta-blue/20 rounded-t-[5.5rem] rounded-b-lg pointer-events-none transition-colors duration-700 group-hover:border-vedanta-blue/40"></div>
          
          <div className="text-center mb-8 mt-4">
            <span className="font-serif text-6xl text-vedanta-blue/20 block mb-2 select-none">II</span>
            <h3 className="font-cursive text-4xl text-vedanta-brown">Service to Humanity</h3>
          </div>
          
          <p className="text-slate-700 leading-relaxed font-serif text-lg text-center px-2">
            True spirituality must manifest as love in action. Following Swami Vivekananda's ideal of serving humanity as God, the Society engages in various philanthropic activities. From distributing essentials to the indigent to supporting educational initiatives, we strive to serve the community selflessly, without any distinction of race, religion, or social status.
          </p>

          {/* Decorative bottom element */}
          <div className="mt-10 flex justify-center text-vedanta-blue/30">
            <span className="text-2xl">❧</span>
          </div>
        </div>

      </div>

      {/* Concluding Full-width Banner */}
      <div className="px-4 md:px-8 mt-16">
        <div className="bg-transparent border-t border-b border-vedanta-brown/10 py-12 text-center">
          <p className="text-xl md:text-2xl text-slate-700 font-serif italic max-w-3xl mx-auto leading-relaxed">
            "By doing well to others, we are really doing good to ourselves. By serving humanity, we are purifying our own hearts and moving closer to the divine reality that unites us all."
          </p>
        </div>
      </div>

    </div>
  );
}