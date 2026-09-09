
import { useEffect, useState } from 'react';
import { getSpiritualPrograms, type SpiritualProgram } from '../sanity/content';

export default function SpiritualPrograms() {
  const [cmsPrograms, setCmsPrograms] = useState<SpiritualProgram[]>([]);

  useEffect(() => {
    void getSpiritualPrograms().then(setCmsPrograms);
  }, []);

  const fallbackPrograms: SpiritualProgram[] = [
    { id: 'gospel-class', category: 'Weekly Class', title: 'The Gospel of Sri Ramakrishna', description: 'Join us every Sunday morning for an in-depth reading and discussion of “The Gospel of Sri Ramakrishna”. These sessions explore the profound yet accessible teachings of the Master.', recurrence: 'Sundays, 10:00 AM – 11:30 AM' },
    { id: 'lectures-retreats', category: 'Monthly Event', title: 'Special Lectures & Retreats', description: 'Periodically, the Society hosts half-day retreats or special lectures by visiting monks. These events provide an opportunity for intensive meditation and focused spiritual study.', recurrence: 'Announced in advance' },
  ];
  const programs = cmsPrograms.length ? cmsPrograms : fallbackPrograms;
  const formatDateTime = (value?: string) => value ? new Intl.DateTimeFormat('en-PH', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date(value)) : '';
  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in duration-700">
      
      {/* Page Header */}
      <div className="text-center space-y-4">
        <h1 className="font-cursive text-5xl text-vedanta-blue drop-shadow-sm">Spiritual Programs</h1>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-vedanta-orange to-transparent mx-auto rounded-full"></div>
      </div>

      <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 text-center text-slate-700 border border-white/50 shadow-sm max-w-3xl mx-auto">
        <p>
          Beyond our daily schedule, the Society organizes special classes, lectures, and retreats to deepen our spiritual understanding and practice. All are welcome to attend.
        </p>
      </div>

      {/* Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {programs.map((program, index) => {
          const schedule = program.recurrence || (program.startDateTime ? `${formatDateTime(program.startDateTime)}${program.endDateTime ? ` – ${formatDateTime(program.endDateTime)}` : ''}` : 'Announced in advance');
          return <div key={program.id} className="bg-white/70 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group">
            <div className="flex items-center gap-3 mb-6">
              <span className={`${index % 2 ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'} text-xs font-bold px-3 py-1 rounded-full tracking-wider uppercase`}>{program.category}</span>
              <h2 className="text-2xl font-bold text-slate-800">{program.title}</h2>
            </div>
            <div className="aspect-video w-full bg-slate-200 rounded-2xl mb-6 flex items-center justify-center text-slate-400 overflow-hidden group-hover:bg-slate-300 transition-colors">
              {program.imageUrl ? <img src={program.imageUrl} alt={program.imageAlt || program.title} className="h-full w-full object-cover" /> : '[Program Image]'}
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">{program.description}</p>
            <div className="flex items-center gap-3 text-sm font-semibold text-slate-700 bg-white/50 p-4 rounded-xl border border-white">
              <svg className={`w-5 h-5 ${index % 2 ? 'text-vedanta-blue' : 'text-vedanta-orange'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              {schedule}
            </div>
          </div>;
        })}
      </div>
    </div>
  );
}
