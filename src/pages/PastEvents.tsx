
import { useEffect, useState } from 'react';
import { getEvents, type PastEvent } from '../sanity/content';

export default function PastEvents() {
  const fallbackEvents: PastEvent[] = [
    { id: '1', date: '2026-03-01', description: 'Distribution of milk powder and food distribution to indigent children of the Barangay Horseshoe' },
    { id: '2', date: '2026-02-22', description: 'Birthday celebration of Sri Ramakrishna' },
  ];
  const [events, setEvents] = useState<PastEvent[]>(fallbackEvents);

  useEffect(() => {
    void getEvents().then((sanityEvents) => {
      if (sanityEvents.length) setEvents(sanityEvents);
    });
  }, []);

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
                <th className="px-8 py-5 font-semibold text-sm tracking-widest uppercase text-center rounded-tr-[2rem]">Photo</th>
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
                    {new Intl.DateTimeFormat('en-PH', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(`${event.date}T00:00:00`))}
                  </td>
                  <td className="px-8 py-6 leading-relaxed pr-12">
                    {event.description}
                  </td>
                  <td className="px-8 py-6">
                    {event.imageUrl ? <img src={event.imageUrl} alt={event.imageAlt || event.description} className="mx-auto h-16 w-24 rounded-lg object-cover" /> : <span className="block text-center text-sm text-slate-400">No photo</span>}
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
