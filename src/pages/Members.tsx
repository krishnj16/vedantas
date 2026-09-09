
import { useEffect, useState } from 'react';
import { getMembersPage, type MembersPage } from '../sanity/content';

export default function Members() {
  const [membersPage, setMembersPage] = useState<MembersPage | null>(null);
  useEffect(() => { void getMembersPage().then(setMembersPage); }, []);
  return (
    <div className="max-w-4xl mx-auto space-y-16 animate-in fade-in duration-1000 pb-20">
      
      {/* Organic Page Header */}
      <div className="text-center space-y-6 pt-8">
        <h1 className="font-cursive text-6xl text-vedanta-brown drop-shadow-md">Members & Volunteers</h1>
        
        {/* Cultural Flourish Divider */}
        <div className="flex justify-center items-center gap-4 text-vedanta-orange/60">
          <span className="w-24 h-px bg-gradient-to-r from-transparent to-vedanta-orange"></span>
          <span className="font-serif text-2xl">~ 🪷 ~</span>
          <span className="w-24 h-px bg-gradient-to-l from-transparent to-vedanta-orange"></span>
        </div>
      </div>

      {/* Karma Yoga Quote */}
      <div className="text-center px-4 md:px-16 relative z-10 mb-12">
        <p className="text-xl md:text-2xl text-vedanta-blue font-serif italic leading-relaxed">
          “{membersPage?.quote || 'Unselfishness is God. One may live on a throne, in a golden palace, and be perfectly unselfish; and then he is in God.'}”
        </p>
        <p className="mt-4 font-bold text-vedanta-brown tracking-widest text-sm uppercase">
          — {membersPage?.quoteAttribution || 'Swami Vivekananda'}
        </p>
      </div>

      {/* Editorial Content Block */}
      <div className="bg-[#fdfcf9] rounded-sm p-8 md:p-14 shadow-lg shadow-orange-900/5 relative group border border-slate-200">
        
        {/* Traditional Inner Border */}
        <div className="absolute inset-2 border border-vedanta-brown/10 pointer-events-none"></div>
        
        <div className="relative z-10 space-y-12">
          
          {/* Membership Section */}
          <section className="text-center md:text-left">
            <h2 className="font-cursive text-4xl text-vedanta-orange mb-6 text-center">{membersPage?.membershipTitle || 'Becoming a Member'}</h2>
            <div className="font-serif text-lg text-slate-700 leading-relaxed space-y-4 px-2">
              {(membersPage?.membershipContent?.length ? membersPage.membershipContent : [
                'Membership in the Ramakrishna Vedanta Society of the Philippines is open to all who sincerely wish to deepen their spiritual lives and are in sympathy with the ideals of the Ramakrishna Order.',
                'Members form the core spiritual family of the ashram. They participate actively in the Society’s programs, uphold its principles in their daily lives, and contribute to its maintenance through regular donations or service.'
              ]).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
          </section>

          <div className="flex justify-center text-vedanta-brown/20">
            <span className="text-2xl">❧</span>
          </div>

          {/* Volunteers Section */}
          <section className="text-center md:text-left">
            <h2 className="font-cursive text-4xl text-vedanta-blue mb-6 text-center">{membersPage?.volunteerTitle || 'Karma Yoga: The Path of Service'}</h2>
            <div className="font-serif text-lg text-slate-700 leading-relaxed space-y-4 px-2">
              {(membersPage?.volunteerContent?.length ? membersPage.volunteerContent : [
                'Volunteering at the Society is practiced as Karma Yoga—the yoga of selfless action. Every act of service, whether sweeping the ashram grounds, arranging flowers for the shrine, or assisting with charitable relief distributions, is viewed as an act of worship.',
                'We welcome volunteers from all walks of life. By dedicating your time and skills without the desire for personal reward, you purify the mind and move closer to spiritual realization.'
              ]).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
          </section>
          
        </div>
      </div>

      {/* Call to Action Banner */}
      <div className="text-center px-4">
        <p className="text-lg text-slate-600 font-serif italic mb-4">
          To inquire about membership or volunteer opportunities, please contact us:
        </p>
        <a href={`mailto:${membersPage?.contactEmail || 'info.rvsp@gmail.com'}`} className="inline-block bg-white border border-vedanta-orange/30 text-vedanta-brown font-serif text-lg px-8 py-3 rounded-full shadow-sm hover:shadow-md hover:border-vedanta-orange transition-all duration-300">
          {membersPage?.contactEmail || 'info.rvsp@gmail.com'}
        </a>
      </div>

    </div>
  );
}
