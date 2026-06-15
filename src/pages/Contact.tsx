
export default function Contact() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in duration-700">
      
      {/* Page Header */}
      <div className="text-center space-y-4">
        <h1 className="font-cursive text-5xl text-vedanta-blue drop-shadow-sm">Our Location</h1>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-vedanta-orange to-transparent mx-auto rounded-full"></div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* Left Column: Details & Directions */}
        <div className="space-y-8">
          {/* Info Card */}
          <div className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl shadow-blue-900/5 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 left-0 w-1 h-full bg-vedanta-blue"></div>
            
            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-vedanta-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              Address
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              The Ramakrishna Vedanta Society of the Philippines is located at:<br/>
              <strong className="text-slate-800">25 Hilltop Street (St. Peter Street), Barangay Horseshoe, Quezon City, 1112 Metro Manila.</strong>
            </p>

            <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-vedanta-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              Contact
            </h2>
            <div className="space-y-2 text-slate-600">
              <p>Email: <a href="mailto:info.rvsp@gmail.com" className="text-vedanta-blue font-bold hover:underline">info.rvsp@gmail.com</a></p>
              <p>Landline: 02 86314114 <span className="text-sm italic text-slate-400">(+63 2 86314114 overseas)</span></p>
            </div>
          </div>

          {/* Directions Text */}
          <div className="bg-vedanta-blue/5 border border-vedanta-blue/10 rounded-2xl p-6 text-sm text-slate-700 leading-relaxed shadow-inner">
            <p className="mb-3">
              The Society can be reached by car from EDSA by turning left (coming from South, if not right coming from North) at P. Tuazon Street, at Cubao Farmer's. Proceed along P. Tuazon until a very distinct landmark is seen, i.e. the "Chocolate Caste".
            </p>
            <p>
              After passing this landmark, St. Peter is the first street to the left. Proceed along St. Peter Street until No. 25 is found (the last house on the right side just before reaching Sacred Heart Street). As an alternative, those entering the main Horseshoe Village entrance along N. Domingo Street may proceed along Horseshoe Drive until they find Hilltop Street.
            </p>
          </div>
        </div>

        {/* Right Column: The Map */}
        <div className="bg-white p-4 rounded-3xl shadow-2xl border border-slate-100 rotate-1 hover:rotate-0 transition-transform duration-500">
          <h3 className="text-center font-bold text-slate-800 mb-4 uppercase tracking-widest text-sm">Vicinity Map</h3>
          {/* Map Placeholder - Ready for a real image or Google Maps iframe */}
          <div className="aspect-square w-full bg-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-400 border-2 border-dashed border-slate-300 relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-tr from-vedanta-blue/5 to-transparent"></div>
            <svg className="w-12 h-12 mb-2 text-slate-300 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
            <span>[Insert Map Image Here]</span>
          </div>
          <p className="text-center text-xs text-slate-500 mt-4 italic">
            Please make an appointment before visiting.
          </p>
        </div>

      </div>
    </div>
  );
}