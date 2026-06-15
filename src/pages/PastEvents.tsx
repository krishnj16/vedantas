import React from 'react';

// Define the shape of our data
interface PastEvent {
  id: string;
  date: string;
  description: string;
  link: string;
}

export default function PastEvents() {
  // The data array (Primed for a future Supabase database connection!)
  const events: PastEvent[] = [
    { id: '1', date: '1 Mar. 2026', description: 'Distribution of milk powder and food distribution to indigent children of the Barangay Horseshoe', link: '#' },
    { id: '2', date: '22 Feb. 2026', description: 'Birthday celebration of Sri Ramakrishna', link: '#' },
    { id: '3', date: '7 Feb. 2026', description: 'Distribution of milk powder to indigent children of the Barangay Horseshoe', link: '#' },
    { id: '4', date: '17 Jan. 2026', description: 'Distribution of milk powder to indigent children of the Barangay Horseshoe', link: '#' },
    { id: '5', date: '11 Jan. 2026', description: 'Birthday celebration of Revered Swami Vivekanandaji Maharaj', link: '#' },
    { id: '6', date: '2 Jan. 2026', description: 'Birthday celebration of Revered Swami Turiyanandaji Maharaj', link: '#' },
    { id: '7', date: '26 Dec. 2025', description: 'Talk by Swami Shrivasananda at Cribs foundation', link: '#' },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      
      {/* Page Header */}
      <div className="text-center space-y-4">
        <h1 className="font-cursive text-5xl text-vedanta-blue drop-shadow-sm">Summary of Past Events</h1>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-vedanta-orange to-transparent mx-auto rounded-full"></div>
      </div>

      {/* Intro Text Card */}
      <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 text-center text-slate-700 border border-white/50 shadow-sm max-w-3xl mx-auto">
        <p className="mb-2">
          In the list below, we have summarized some of our Society's past events in chronological order. By clicking an event you can access its relevant photos, videos, and audio records.
        </p>
        <p className="text-sm font-medium text-vedanta-blue">
          This summary lists the most recent past events on top.
        </p>
      </div>

      {/* The 2026 Glassmorphic Data Table */}
      <div className="bg-white/60 backdrop-blur-xl rounded-[2rem] border border-white/60 shadow-xl shadow-blue-900/5 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            
            {/* Table Header */}
            <thead>
              <tr className="bg-gradient-to-r from-vedanta-blue to-[#3a7cae] text-white">
                <th className="px-8 py-5 font-semibold text-sm tracking-widest uppercase rounded-tl-[2rem]">Date</th>
                <th className="px-8 py-5 font-semibold text-sm tracking-widest uppercase">Description</th>
                <th className="px-8 py-5 font-semibold text-sm tracking-widest uppercase text-center rounded-tr-[2rem]">Action</th>
              </tr>
            </thead>
            
            {/* Table Body */}
            <tbody className="text-slate-700">
              {events.map((event, index) => (
                <tr 
                  key={event.id} 
                  className={`group transition-all duration-300 hover:bg-white/80 ${index !== events.length - 1 ? 'border-b border-slate-200/50' : ''}`}
                >
                  <td className="px-8 py-6 whitespace-nowrap font-medium text-slate-800">
                    {event.date}
                  </td>
                  <td className="px-8 py-6 leading-relaxed pr-12">
                    {event.description}
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex justify-center">
                      <a 
                        href={event.link}
                        className="flex items-center gap-2 bg-vedanta-blue/10 text-vedanta-blue hover:bg-vedanta-blue hover:text-white font-bold py-2.5 px-6 rounded-full transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-lg"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        VIEW
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}