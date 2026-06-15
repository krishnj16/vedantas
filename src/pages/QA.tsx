import React from 'react';

export default function QA() {
  const faqs = [
    {
      q: "Do I have to be a Hindu to attend?",
      a: "No. Vedanta teaches the harmony of all religions. People of all faiths—or no formal faith at all—are warmly welcome to attend our classes, lectures, and meditation sessions. You do not need to convert or change your religion to practice Vedanta."
    },
    {
      q: "What should I wear when visiting the Society?",
      a: "We ask that visitors dress modestly out of respect for the monastic environment and the sacred space of the shrine. Comfortable, loose-fitting clothing that covers the shoulders and knees is recommended, especially if you plan to sit for meditation."
    },
    {
      q: "Is there a fee to attend the programs?",
      a: "All of our regular spiritual programs, including Gospel classes and daily Arati (Vesper services), are free and open to the public. The Society is supported entirely by the voluntary, loving contributions of its members and friends."
    },
    {
      q: "How can I learn to meditate?",
      a: "The best way to begin is by attending our regular services to experience the atmosphere of the ashram. For specific instruction, you may request a private appointment with our spiritual minister, who can offer guidance based on your individual temperament."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-16 animate-in fade-in duration-1000 pb-20">
      
      {/* Organic Page Header */}
      <div className="text-center space-y-6 pt-8">
        <h1 className="font-cursive text-6xl text-vedanta-brown drop-shadow-md">Questions & Answers</h1>
        
        {/* Cultural Flourish Divider */}
        <div className="flex justify-center items-center gap-4 text-vedanta-orange/60">
          <span className="w-24 h-px bg-gradient-to-r from-transparent to-vedanta-orange"></span>
          <span className="font-serif text-2xl">~ 🪷 ~</span>
          <span className="w-24 h-px bg-gradient-to-l from-transparent to-vedanta-orange"></span>
        </div>
      </div>

      <div className="text-center px-4 md:px-16 relative z-10 mb-12">
        <p className="text-xl text-slate-700 leading-relaxed font-serif italic text-vedanta-blue">
          Common inquiries regarding our philosophy, practices, and visiting the Society.
        </p>
      </div>

      {/* Q&A List */}
      <div className="space-y-12 px-4 md:px-8">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-[#fdfcf9] rounded-sm p-8 md:p-10 shadow-md shadow-orange-900/5 relative group border border-slate-200">
            
            {/* Subtle left accent line */}
            <div className="absolute top-8 bottom-8 left-0 w-1 bg-gradient-to-b from-vedanta-orange/40 to-transparent"></div>
            
            <h3 className="font-cursive text-3xl text-vedanta-brown mb-4 pl-4">
              {faq.q}
            </h3>
            
            <p className="font-serif text-lg text-slate-700 leading-relaxed pl-4">
              {faq.a}
            </p>
          </div>
        ))}
      </div>

      {/* Further Inquiries */}
      <div className="text-center mt-16 px-4">
        <div className="inline-block border-y border-vedanta-brown/20 py-8 px-12">
          <p className="font-serif text-slate-600 italic mb-2">Have a question not listed here?</p>
          <a href="/contact" className="font-bold text-vedanta-blue hover:text-vedanta-orange transition-colors duration-300">
            Reach out to us via our Contact Page
          </a>
        </div>
      </div>

    </div>
  );
}