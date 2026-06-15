
export default function OurHistory() {
  const milestones = [
    {
      year: '2001',
      title: 'The Seed is Sown',
      description: 'The Ramakrishna Vedanta Society of the Philippines was officially established by a group of dedicated devotees. Driven by the universal message of Sri Ramakrishna and Swami Vivekananda, they began conducting regular readings, meditations, and small gatherings to foster spiritual growth in Metro Manila.',
      color: 'text-vedanta-orange',
      bg: 'bg-vedanta-orange/10',
      border: 'border-vedanta-orange/30'
    },
    {
      year: 'Early Years',
      title: 'Finding a Home',
      description: 'As the community of devotees grew, the need for a dedicated space became apparent. The Society moved into its permanent center in Barangay Horseshoe, Quezon City. This provided an "oasis of tranquility" away from the bustling city, allowing for more structured spiritual programs and retreats.',
      color: 'text-vedanta-blue',
      bg: 'bg-vedanta-blue/10',
      border: 'border-vedanta-blue/30'
    },
    {
      year: '2006',
      title: 'Official Incorporation',
      description: 'To solidify its presence and expand its charitable works, the Society was officially incorporated as a non-stock, non-profit religious corporation under the Securities and Exchange Commission (SEC), and later accredited by the Philippine Council for NGO Certification (PCNC).',
      color: 'text-vedanta-brown',
      bg: 'bg-vedanta-brown/10',
      border: 'border-vedanta-brown/30'
    },
    {
      year: 'Present Day',
      title: 'A Thriving Spiritual Center',
      description: 'Today, the ashram stands as a beacon of Vedanta in the Philippines. With a resident spiritual minister, daily Vesper services, weekly Gospel classes, and ongoing philanthropic activities, the Society continues to serve the spiritual and physical needs of the local community.',
      color: 'text-yellow-600',
      bg: 'bg-yellow-500/10',
      border: 'border-yellow-500/30'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-16 animate-in fade-in duration-1000 pb-20">
      
      {/* Organic Page Header */}
      <div className="text-center space-y-6 pt-8">
        <h1 className="font-cursive text-6xl text-vedanta-brown drop-shadow-md">Our History</h1>
        
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

      <div className="text-center px-4 md:px-16 relative z-10 mb-16">
        <p className="text-xl text-slate-700 leading-relaxed font-light">
          From humble beginnings to a sanctuary of peace in the heart of Metro Manila.
        </p>
      </div>

      {/* The Glass Timeline */}
      <div className="relative px-4 md:px-8">
        
        {/* Central Glowing Line (Hidden on very small screens, acts as a left-border on mobile, centered on large) */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-vedanta-orange/50 via-vedanta-blue/30 to-transparent -translate-x-1/2 rounded-full hidden sm:block"></div>

        <div className="space-y-12">
          {milestones.map((milestone, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={index} className={`relative flex flex-col sm:flex-row items-center ${isEven ? 'sm:flex-row-reverse' : ''} group`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 sm:left-1/2 w-6 h-6 rounded-full bg-white border-4 border-vedanta-orange shadow-lg transform -translate-x-1/2 z-20 group-hover:scale-125 group-hover:border-vedanta-blue transition-all duration-500 hidden sm:block"></div>
                
                {/* Empty Half for Spacing */}
                <div className="hidden sm:block sm:w-1/2"></div>
                
                {/* Content Card */}
                <div className={`w-full sm:w-1/2 ${isEven ? 'sm:pr-12' : 'sm:pl-12'} relative z-10`}>
                  <div className={`bg-white/60 backdrop-blur-xl border ${milestone.border} p-8 rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden`}>
                    
                    {/* Decorative Year Watermark */}
                    <div className="absolute -right-4 -bottom-4 text-8xl font-black text-slate-100 opacity-50 pointer-events-none select-none">
                      {milestone.year.replace(/\D/g,'').slice(0,4)}
                    </div>

                    <div className="relative z-10">
                      <span className={`inline-block px-4 py-1 rounded-full text-sm font-bold tracking-wider mb-4 ${milestone.bg} ${milestone.color}`}>
                        {milestone.year}
                      </span>
                      <h3 className="font-cursive text-3xl text-slate-800 mb-3">{milestone.title}</h3>
                      <p className="font-sans text-slate-600 leading-relaxed font-light">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}