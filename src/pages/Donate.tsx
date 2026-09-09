
import { useEffect, useState } from 'react';
import { getDonationPage, type DonationPage } from '../sanity/content';

export default function Donate() {
  const [donationPage, setDonationPage] = useState<DonationPage | null>(null);

  useEffect(() => {
    void getDonationPage().then(setDonationPage);
  }, []);

  const photos = donationPage?.heroImages ?? [];
  const cards = [
    { label: 'Swami Vivekananda', className: 'w-24 h-32 bg-white/20 backdrop-blur-sm border-2 border-white/50 rounded-t-full rounded-b-xl text-white/70 text-xs p-2 shadow-lg group-hover:-translate-y-2 delay-75' },
    { label: 'Sri Ramakrishna', className: 'w-32 h-40 bg-white/30 backdrop-blur-md border-2 border-white rounded-t-[3rem] rounded-b-xl text-white font-bold p-2 shadow-xl group-hover:-translate-y-4' },
    { label: 'Holy Mother', className: 'w-24 h-32 bg-white/20 backdrop-blur-sm border-2 border-white/50 rounded-t-full rounded-b-xl text-white/70 text-xs p-2 shadow-lg group-hover:-translate-y-2 delay-150' },
  ];
  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in slide-in-from-bottom-4 duration-700">
      
      {/* The 2026 Hero Banner */}
      <div className="relative w-full h-64 rounded-[2rem] overflow-hidden shadow-2xl shadow-orange-900/20 border border-white/40 flex items-center justify-center group">
        {/* Background gradient mimicking the legacy yellow/maroon split */}
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400 via-yellow-500 to-[#7a1b1b]"></div>
        
        {/* Ornamental overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-black"></div>
        
        {/* Image Placeholders (The Trio) */}
        <div className="relative z-10 flex gap-6 items-end justify-center h-full pb-4">
          {cards.map((card, index) => {
            const photo = photos[index];
            return (
              <div key={card.label} className={`${card.className} relative overflow-hidden flex items-center justify-center text-center transition-transform duration-500`}>
                {photo?.imageUrl ? <img src={photo.imageUrl} alt={photo.alt || card.label} className="absolute inset-0 h-full w-full object-cover" /> : <span>{card.label}</span>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Content Text Block */}
      <div className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-[2rem] p-10 md:p-14 text-center shadow-xl shadow-blue-900/5 relative">
        
        {/* Decorative Quote Mark */}
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-vedanta-blue text-white rounded-full flex items-center justify-center text-2xl shadow-lg border-4 border-[#fbdca6]">
          ♥
        </div>

        <div className="max-w-2xl mx-auto space-y-6 text-slate-700 leading-relaxed mt-4">
          <p className="text-lg">
            The Ramakrishna Vedanta Society of the Philippines, Inc. is a non-stock, non-profit religious corporation incorporated under the laws of the Philippines with <strong className="text-slate-800">Securities and Exchange Commission No. CN200618682</strong>.
          </p>
          
          <div className="py-4 border-y border-slate-200/60 my-6">
            <p className="text-vedanta-blue font-medium">
              It is accredited with the Philippine Council for NGO Certification (PCNC).
            </p>
          </div>

          <p>
            Our Society is supported by donations from members, devotees and friends. If you wish to be a part of our selfless work for the good of humanity, please send your donations mentioning the purpose.
          </p>
          
          <p className="font-semibold text-slate-800 bg-vedanta-orange/10 py-3 px-6 rounded-xl inline-block">
            All donations will be acknowledged by Official Receipts.
          </p>

          <p className="italic text-slate-500 pt-4">
            We are grateful for your support.
          </p>
        </div>
      </div>

    </div>
  );
}
