// import React from 'react';

// // Define the shape of our book data
// interface Book {
//   id: string;
//   title: string;
//   author: string;
//   category: string;
// }

// export default function BookSales() {
//   const books: Book[] = [
//     { id: '1', title: 'The Gospel of Sri Ramakrishna', author: 'Mahendranath Gupta', category: 'Core Text' },
//     { id: '2', title: 'Raja Yoga', author: 'Swami Vivekananda', category: 'Philosophy' },
//     { id: '3', title: 'Bhagavad Gita: The Song of God', author: 'Translated by Swami Prabhavananda', category: 'Scripture' },
//     { id: '4', title: 'Sri Ramakrishna: The Great Master', author: 'Swami Saradananda', category: 'Biography' },
//     { id: '5', title: 'Karma Yoga', author: 'Swami Vivekananda', category: 'Philosophy' },
//     { id: '6', title: 'Meditation and Its Methods', author: 'Swami Vivekananda', category: 'Practice' },
//   ];

//   return (
//     <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-700">
      
//       {/* Page Header */}
//       <div className="text-center space-y-4">
//         <h1 className="font-cursive text-5xl text-vedanta-blue drop-shadow-sm">Book Sales</h1>
//         <div className="h-1 w-24 bg-gradient-to-r from-transparent via-vedanta-orange to-transparent mx-auto rounded-full"></div>
//       </div>

//       {/* Info Banner */}
//       <div className="bg-gradient-to-r from-vedanta-blue to-[#3a7cae] text-white rounded-3xl p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
//         <div className="max-w-2xl">
//           <h2 className="text-2xl font-bold mb-2">Vedanta Literature</h2>
//           <p className="text-blue-100 leading-relaxed">
//             The Society maintains a bookshop offering a wide selection of books on Ramakrishna-Vivekananda literature, Vedanta philosophy, Yoga, and major world religions. 
//           </p>
//         </div>
//         <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-2xl text-center shrink-0">
//           <p className="text-sm uppercase tracking-widest font-semibold text-blue-200 mb-1">To Purchase</p>
//           <a href="mailto:info.rvsp@gmail.com" className="text-yellow-400 font-bold hover:text-yellow-300 hover:underline">info.rvsp@gmail.com</a>
//         </div>
//       </div>

//       {/* Book Catalog Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {books.map((book) => (
//           <div key={book.id} className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full">
            
//             {/* Book Cover Placeholder */}
//             <div className="aspect-[3/4] w-full bg-slate-200 rounded-xl mb-6 relative overflow-hidden flex items-center justify-center">
//               {/* Gradient overlay on hover */}
//               <div className="absolute inset-0 bg-gradient-to-t from-vedanta-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
//               <span className="text-slate-400 font-medium group-hover:opacity-0 transition-opacity">[Cover Image]</span>
              
//               {/* Hover Text */}
//               <span className="absolute bottom-6 left-0 right-0 text-center text-white font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
//                 Inquire for Price
//               </span>
//             </div>

//             {/* Book Details */}
//             <div className="flex-grow flex flex-col">
//               <span className="text-xs font-bold text-vedanta-orange uppercase tracking-wider mb-2">{book.category}</span>
//               <h3 className="text-xl font-bold text-slate-800 mb-1 leading-tight">{book.title}</h3>
//               <p className="text-slate-500 text-sm mt-auto">{book.author}</p>
//             </div>
//           </div>
//         ))}
//       </div>
      
//     </div>
//   );
// }

import React from 'react';

// Define the shape of our book data
interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
}

export default function BookSales() {
  const books: Book[] = [
    { id: '1', title: 'The Gospel of Sri Ramakrishna', author: 'Mahendranath Gupta', category: 'Core Text' },
    { id: '2', title: 'Raja Yoga', author: 'Swami Vivekananda', category: 'Philosophy' },
    { id: '3', title: 'Bhagavad Gita: The Song of God', author: 'Translated by Swami Prabhavananda', category: 'Scripture' },
    { id: '4', title: 'Sri Ramakrishna: The Great Master', author: 'Swami Saradananda', category: 'Biography' },
    { id: '5', title: 'Karma Yoga', author: 'Swami Vivekananda', category: 'Philosophy' },
    { id: '6', title: 'Meditation and Its Methods', author: 'Swami Vivekananda', category: 'Practice' },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-700">
      
      {/* Page Header */}
      <div className="text-center space-y-4">
        <h1 className="font-cursive text-5xl text-vedanta-blue drop-shadow-sm">Book Sales</h1>
        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-vedanta-orange to-transparent mx-auto rounded-full"></div>
      </div>

      {/* Info Banner */}
      <div className="bg-gradient-to-r from-vedanta-blue to-[#3a7cae] text-white rounded-3xl p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold mb-2">Vedanta Literature</h2>
          <p className="text-blue-100 leading-relaxed">
            The Society maintains a bookshop offering a wide selection of books on Ramakrishna-Vivekananda literature, Vedanta philosophy, Yoga, and major world religions. 
          </p>
        </div>
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-2xl text-center shrink-0">
          <p className="text-sm uppercase tracking-widest font-semibold text-blue-200 mb-1">To Purchase</p>
          <a href="mailto:info.rvsp@gmail.com" className="text-yellow-400 font-bold hover:text-yellow-300 hover:underline">info.rvsp@gmail.com</a>
        </div>
      </div>

      {/* Book Catalog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book) => (
          <div key={book.id} className="bg-white/60 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full">
            
            {/* Monastic Saffron Gradient Border Wrapper */}
            <div className="p-1 rounded-2xl bg-gradient-to-b from-vedanta-orange to-vedanta-brown mb-6 transition-transform duration-300 group-hover:scale-[1.02] shadow-md">
              
              {/* Inner Image Placeholder */}
              <div className="aspect-[3/4] w-full bg-slate-200 rounded-xl relative overflow-hidden flex items-center justify-center border-2 border-white/40">
                
                {/* Saffron Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-vedanta-brown/90 via-vedanta-orange/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                
                <span className="text-slate-500 font-medium group-hover:opacity-0 transition-opacity z-0">[Cover Image]</span>
                
                {/* Hover Text */}
                <span className="absolute bottom-6 left-0 right-0 text-center text-white font-bold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 z-20 drop-shadow-md">
                  Inquire for Price
                </span>
              </div>
            </div>

            {/* Book Details */}
            <div className="flex-grow flex flex-col">
              <span className="text-xs font-bold text-vedanta-orange uppercase tracking-wider mb-2">{book.category}</span>
              <h3 className="text-xl font-bold text-slate-800 mb-1 leading-tight">{book.title}</h3>
              <p className="text-slate-500 text-sm mt-auto">{book.author}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}