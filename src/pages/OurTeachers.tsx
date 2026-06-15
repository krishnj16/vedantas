
export default function OurTeachers() {
  const teachers = [
    {
      id: 'ramakrishna',
      name: 'Sri Ramakrishna',
      title: 'The Great Master (1836–1886)',
      quote: '"As many faiths, so many paths."',
      description: 'Sri Ramakrishna represents the very core of the spiritual realizations of the seers and sages of India. His life was a continuous contemplation of God. He experienced the spiritual truths of various religious paths, including Hinduism, Islam, and Christianity, and realized that they all lead to the same ultimate reality.',
      color: 'from-vedanta-orange to-vedanta-brown',
      textColor: 'text-vedanta-orange',
      imageAlt: '[Portrait of Sri Ramakrishna]'
    },
    {
      id: 'sarada',
      name: 'Holy Mother Sri Sarada Devi',
      title: 'The Divine Consort (1853–1920)',
      quote: '"If you want peace of mind, do not find fault with others."',
      description: 'Sri Sarada Devi was Sri Ramakrishna’s spiritual companion and first disciple. After his passing, she became the spiritual guide of the Ramakrishna Order. Her life was an extraordinary embodiment of unconditional love, purity, and motherly grace, serving as a beacon of comfort to thousands.',
      color: 'from-vedanta-blue to-[#3a7cae]',
      textColor: 'text-vedanta-blue',
      imageAlt: '[Portrait of Holy Mother]'
    },
    {
      id: 'vivekananda',
      name: 'Swami Vivekananda',
      title: 'The Chief Disciple (1863–1902)',
      quote: '"Arise, awake, and stop not till the goal is reached."',
      description: 'Swami Vivekananda was the chief monastic disciple of Sri Ramakrishna and a world teacher. He introduced Vedanta and Yoga to the Western world at the 1893 Parliament of Religions in Chicago. He founded the Ramakrishna Math and Ramakrishna Mission, emphasizing the practical application of spiritual truths in daily life through service to humanity.',
      color: 'from-vedanta-orange to-vedanta-brown',
      textColor: 'text-vedanta-orange',
      imageAlt: '[Portrait of Swami Vivekananda]'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-16 animate-in fade-in duration-1000 pb-16">
      
      {/* Organic Page Header */}
      <div className="text-center space-y-6 pt-8">
        <h1 className="font-cursive text-6xl text-vedanta-brown drop-shadow-md">Our Teachers</h1>
        
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

      {/* Intro Text */}
      <div className="text-center px-4 md:px-16 relative z-10 mb-20">
        <p className="text-xl text-slate-700 leading-relaxed font-light">
          The Ramakrishna Vedanta Society of the Philippines draws its spiritual inspiration from the lives and teachings of the Holy Trinity of the Ramakrishna Order.
        </p>
      </div>

      {/* Teachers Alternating Layout */}
      <div className="space-y-24 px-4 md:px-8">
        {teachers.map((teacher, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={teacher.id} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center group`}>
              
              {/* Portrait Placeholder with Organic Shape */}
              <div className="w-full md:w-1/3 shrink-0 relative">
                {/* Decorative off-center background drop */}
                <div className={`absolute inset-0 bg-gradient-to-br ${teacher.color} rounded-[3rem] transform ${isEven ? 'rotate-3 group-hover:rotate-6' : '-rotate-3 group-hover:-rotate-6'} transition-transform duration-700 opacity-20`}></div>
                
                {/* Main Image Frame */}
                <div className={`relative aspect-[3/4] bg-white/60 backdrop-blur-sm border-2 border-white/80 p-2 shadow-2xl ${isEven ? 'rounded-tl-[4rem] rounded-br-[4rem] rounded-tr-xl rounded-bl-xl' : 'rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-xl rounded-br-xl'} overflow-hidden transition-all duration-700 group-hover:-translate-y-2`}>
                  <div className={`w-full h-full bg-slate-200 ${isEven ? 'rounded-tl-[3.5rem] rounded-br-[3.5rem] rounded-tr-lg rounded-bl-lg' : 'rounded-tr-[3.5rem] rounded-bl-[3.5rem] rounded-tl-lg rounded-br-lg'} flex items-center justify-center text-slate-400 font-medium relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent"></div>
                    {teacher.imageAlt}
                  </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="w-full md:w-2/3 space-y-6">
                <div>
                  <h2 className="font-cursive text-5xl text-vedanta-brown mb-2">{teacher.name}</h2>
                  <p className={`font-bold tracking-widest uppercase text-sm ${teacher.textColor}`}>{teacher.title}</p>
                </div>
                
                <blockquote className="border-l-4 border-vedanta-orange/30 pl-6 py-2">
                  <p className="font-serif italic text-2xl text-slate-700">{teacher.quote}</p>
                </blockquote>
                
                <p className="font-sans text-slate-600 text-lg leading-relaxed font-light">
                  {teacher.description}
                </p>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}