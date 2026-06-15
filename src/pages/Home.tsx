// export default function Home() {
//   return (
//     <div className="space-y-6">
      
//       {/* Top Banners */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Special Announcements */}
//         <div className="rounded-xl overflow-hidden shadow-sm">
//           <div className="bg-vedanta-blue text-white px-6 py-3">
//             <h2 className="font-cursive text-3xl">Special announcements</h2>
//           </div>
//           <div className="bg-blue-500/20 px-6 py-4 text-vedanta-blue font-semibold text-lg">
//             No information encoded yet.
//           </div>
//         </div>

//         {/* Thought of the week */}
//         <div className="rounded-xl overflow-hidden shadow-sm">
//           <div className="bg-vedanta-orange text-white px-6 py-3">
//             <h2 className="font-cursive text-3xl">Thought of the week</h2>
//           </div>
//           <div className="bg-vedanta-brown text-white px-6 py-4 font-semibold text-lg">
//             No information encoded yet.
//           </div>
//         </div>
//       </div>

//       {/* Main Content Area */}
//       <div className="flex flex-col md:flex-row gap-6 items-start mt-6">
        
//         {/* Left Text Box */}
//         <div className="flex-grow bg-transparent border-2 border-vedanta-blue rounded-xl p-6 text-gray-800 text-sm leading-relaxed shadow-sm">
//           <p className="mb-4">
//             Our Society, located in the very heart of Metro Manila amidst peaceful surroundings, is an oasis of tranquillity away from the hustle bustle of city life and perfectly suited for contemplation, meditation and self-analysis.
//           </p>
//           <p className="mb-6">
//             Except when local restrictions are in place, such as during health quarantines, our doors are open to everyone who has a serious interest in participating in the following spiritual activities:
//           </p>

//           <div className="grid grid-cols-[100px_1fr] gap-2 mb-6">
//             <div className="font-semibold">Weekdays:</div><div></div>
//             <div>5:30 AM</div><div>Meditation</div>
//             <div>6:30 AM</div><div>Vedic Mantram chanting, recitation from the Bhagavad Gita and Stotrams dedicated to various deities on different days - a sacred journey of devotion</div>
//             <div>5:30 PM</div><div>Evening Vesper (Arati)<br/>Reading from "The Gospel of Sri Ramakrishna"<br/>Meditation</div>
//           </div>

//           <p className="mb-6">
//             Anyone wishing to visit our Centre for personal meditation, for private meetings with Swami Shrivasananda, our Society's spiritual minister, or for book purchases, or others, is kindly requested to make an appointment beforehand by calling the following numbers or emailing: <strong>info.rvsp@gmail.com</strong>
//           </p>

//           <div className="grid grid-cols-[80px_1fr] gap-1 mb-6">
//             <div>Landline:</div><div>02 86314114</div>
//             <div>Mobile:</div><div>0917 6385070</div>
//           </div>

//           <p className="mb-2">Calls should be made between 8:00AM and 12:00PM, and 2:30 to 5:00PM and 7:30 to 9:00 PM.</p>
//           <p className="mb-4">Personal visits should take place between 9:00 and 11:00AM and 2:30 to 5:30PM (4:00PM on Sundays) if not joining the evening Vesper.</p>
//           <p className="mb-2">Visitors are encouraged to call the Centre beforehand to make sure that the resident monk is in the premises when they come.</p>
//           <p className="mb-8">Visitors are expected to dress with propriety and to maintain the decorum customary to a place of worship.</p>

//           <blockquote className="italic text-center mt-8">
//             "Religion is realization, not talk, not doctrine, not theories, however beautiful they may be. It is being and becoming, not hearing or acknowledging; it is the whole soul becoming changed into what it believes."
//             <footer className="mt-2">- Swami Vivekananda -</footer>
//           </blockquote>
//         </div>

//         {/* Right Image Gallery */}
//         <div className="w-full md:w-64 flex flex-col gap-4 flex-shrink-0">
//           <div className="w-full h-40 bg-gray-300 rounded-lg shadow-md flex items-center justify-center text-sm text-gray-500 border border-gray-400">
//             [Gate Image]
//           </div>
//           <div className="w-full h-40 bg-gray-300 rounded-lg shadow-md flex items-center justify-center text-sm text-gray-500 border border-gray-400">
//             [Service Image]
//           </div>
//           <div className="w-full h-40 bg-gray-300 rounded-lg shadow-md flex items-center justify-center text-sm text-gray-500 border border-gray-400">
//             [Library Image]
//           </div>
//           <div className="w-full h-64 bg-gray-300 rounded-lg shadow-md flex items-center justify-center text-sm text-gray-500 border border-gray-400">
//             [Shrine Image]
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

export default function Home() {
  return (
    <div className="space-y-10">
      
      {/* 2026 BANNERS: Gradients, Soft Shadows, Rounded Geometry */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Special Announcements Card */}
        <div className="group rounded-3xl overflow-hidden shadow-xl shadow-blue-900/10 border border-white/40 bg-white/50 backdrop-blur-md hover:shadow-2xl transition-all duration-500">
          <div className="bg-gradient-to-r from-vedanta-blue to-[#3a7cae] px-8 py-5">
            <h2 className="font-cursive text-4xl text-white drop-shadow-sm group-hover:scale-[1.02] transition-transform origin-left">Special announcements</h2>
          </div>
          <div className="px-8 py-6 text-slate-600 font-medium flex items-center gap-3">
            <span className="flex h-3 w-3 rounded-full bg-blue-400/50"></span>
            No information encoded yet.
          </div>
        </div>

        {/* Thought of the week Card */}
        <div className="group rounded-3xl overflow-hidden shadow-xl shadow-orange-900/10 border border-white/40 bg-white/50 backdrop-blur-md hover:shadow-2xl transition-all duration-500">
          <div className="bg-gradient-to-r from-vedanta-orange to-[#e58a47] px-8 py-5">
            <h2 className="font-cursive text-4xl text-white drop-shadow-sm group-hover:scale-[1.02] transition-transform origin-left">Thought of the week</h2>
          </div>
          <div className="px-8 py-6 text-slate-600 font-medium flex items-center gap-3">
            <span className="flex h-3 w-3 rounded-full bg-orange-400/50"></span>
            No information encoded yet.
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA: Glassmorphism Card + Image Grid */}
      <div className="flex flex-col lg:flex-row gap-10 items-start">
        
        {/* Left Content Card (Glass Effect over Peach Background) */}
        <div className="flex-grow bg-white/60 backdrop-blur-xl border border-white/60 rounded-[2rem] p-8 md:p-12 text-slate-700 text-base leading-relaxed shadow-2xl shadow-blue-900/5 relative overflow-hidden">
          
          {/* Subtle background decoration */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/40 rounded-full blur-3xl pointer-events-none"></div>

          <p className="mb-6 text-lg font-light text-slate-800">
            Our Society, located in the very heart of Metro Manila amidst peaceful surroundings, is an <span className="font-medium text-vedanta-blue">oasis of tranquillity</span> away from the hustle bustle of city life and perfectly suited for contemplation, meditation and self-analysis.
          </p>
          <p className="mb-10 text-slate-600">
            Except when local restrictions are in place, our doors are open to everyone who has a serious interest in participating in the following spiritual activities:
          </p>

          {/* Modern Schedule UI */}
          <div className="mb-12 bg-white/50 rounded-2xl p-6 border border-white/60 shadow-sm">
            <h3 className="text-sm font-bold tracking-widest text-vedanta-blue uppercase mb-6 border-b border-blue-100 pb-2">Weekday Schedule</h3>
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="bg-vedanta-blue/10 text-vedanta-blue font-bold px-3 py-1 rounded-lg text-sm shrink-0 mt-1">5:30 AM</div>
                <div className="font-medium text-slate-800">Meditation</div>
              </div>
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="bg-vedanta-blue/10 text-vedanta-blue font-bold px-3 py-1 rounded-lg text-sm shrink-0 mt-1">6:30 AM</div>
                <div className="text-slate-600 leading-snug">Vedic Mantram chanting, recitation from the Bhagavad Gita and Stotrams dedicated to various deities on different days <span className="italic text-slate-400">— a sacred journey of devotion.</span></div>
              </div>
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="bg-vedanta-orange/10 text-vedanta-orange font-bold px-3 py-1 rounded-lg text-sm shrink-0 mt-1">5:30 PM</div>
                <div className="text-slate-600 leading-snug space-y-1">
                  <p className="font-medium text-slate-800">Evening Vesper (Arati)</p>
                  <p>Reading from "The Gospel of Sri Ramakrishna"</p>
                  <p>Meditation</p>
                </div>
              </div>
            </div>
          </div>

          <p className="mb-8 p-4 bg-blue-50/50 rounded-xl border border-blue-100/50 text-slate-700">
            Anyone wishing to visit our Centre for personal meditation, private meetings with our spiritual minister, or book purchases, is kindly requested to make an appointment beforehand by emailing: <a href="mailto:info.rvsp@gmail.com" className="text-vedanta-blue font-bold hover:underline decoration-2 underline-offset-4">info.rvsp@gmail.com</a>
          </p>

          <blockquote className="relative p-8 mt-12 bg-gradient-to-br from-vedanta-brown/5 to-transparent rounded-2xl border border-vedanta-brown/10">
            <svg className="absolute top-4 left-4 w-10 h-10 text-vedanta-brown/10" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            <p className="italic text-slate-700 relative z-10 text-lg leading-relaxed text-center font-serif">
              "Religion is realization, not talk, not doctrine, not theories, however beautiful they may be. It is being and becoming, not hearing or acknowledging; it is the whole soul becoming changed into what it believes."
            </p>
            <footer className="mt-4 text-center font-bold text-vedanta-brown tracking-wide text-sm uppercase">
              — Swami Vivekananda
            </footer>
          </blockquote>
        </div>

        {/* Right Image Gallery (2026 Hover Interactions) */}
        <div className="w-full lg:w-72 flex flex-col gap-6 flex-shrink-0">
          {[
            { label: 'Ashram Gates', height: 'h-48' },
            { label: 'Inner Sanctum', height: 'h-48' },
            { label: 'Library Collection', height: 'h-48' },
            { label: 'Outdoor Shrine', height: 'h-72' }
          ].map((img, i) => (
            <div key={i} className={`group relative ${img.height} w-full rounded-2xl overflow-hidden shadow-lg border-2 border-white/50 bg-slate-200 cursor-pointer`}>
              {/* Image Placeholder Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 group-hover:scale-110 transition-transform duration-700 ease-in-out"></div>
              
              {/* Overlay Label */}
              <div className="absolute inset-0 bg-gradient-to-t from-vedanta-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                <span className="text-white font-medium text-sm tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {img.label}
                </span>
              </div>
              
              {/* Temporary Text (Remove when you add real <img> tags) */}
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium text-sm group-hover:opacity-0 transition-opacity">
                [Add Photo Here]
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}