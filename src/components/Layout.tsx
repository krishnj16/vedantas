// import { Link } from 'react-router-dom';

// import React, { ReactNode } from 'react';

// interface LayoutProps {
//   children: ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   return (
//     <div className="min-h-screen flex flex-col font-sans text-gray-800">
      
//       {/* GLOBAL HEADER */}
//       <header className="bg-vedanta-blue text-white shadow-md relative z-10">
//         {/* Top Yellow Bar */}
//         <div className="flex justify-end pr-8 pt-2">
//           <div className="flex space-x-2 text-sm">
//             <span className="bg-yellow-400 text-vedanta-blue px-4 py-1 font-bold rounded-sm flex items-center">
//               (02) 86314114
//             </span>
//             <button className="bg-yellow-400 text-vedanta-blue px-4 py-1 font-bold rounded-sm hover:bg-yellow-500 transition-colors">
//               Login
//             </button>
//           </div>
//         </div>

//         <div className="container mx-auto px-4 pb-3 flex justify-between items-end">
//           <div className="flex items-center space-x-4">
//              {/* Logo Placeholder */}
//             <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center text-vedanta-blue text-xs font-bold shadow-inner">
//               LOGO
//             </div>
//             <div className="leading-tight">
//               <h1 className="text-2xl font-bold tracking-wide">The Ramakrishna Vedanta</h1>
//               <h2 className="text-xl font-light">Society of the Philippines</h2>
//             </div>
//           </div>
          
//           {/* Main Navigation */}
//           <nav className="flex space-x-6 font-semibold text-sm">
//             <Link to="/" className="hover:text-yellow-300 transition-colors pb-1 border-b-2 border-transparent hover:border-yellow-300">HOME</Link>
//             <div className="relative group cursor-pointer pb-1 border-b-2 border-transparent hover:border-yellow-300 hover:text-yellow-300">
//               <span>ABOUT US</span>
//               {/* Note: We will add the hover dropdown menu logic here later */}
//             </div>
//             <div className="relative group cursor-pointer pb-1 border-b-2 border-transparent hover:border-yellow-300 hover:text-yellow-300">
//               <span>OUR ACTIVITIES</span>
//               {/* Note: We will add the hover dropdown menu logic here later */}
//             </div>
//             <Link to="/contact" className="hover:text-yellow-300 transition-colors pb-1 border-b-2 border-transparent hover:border-yellow-300">CONTACT US</Link>
//             <Link to="/donate" className="hover:text-yellow-300 transition-colors pb-1 border-b-2 border-transparent hover:border-yellow-300">DONATE</Link>
//           </nav>
//         </div>
//       </header>

//       {/* MAIN CONTENT AREA */}
//       <main className="flex-grow container mx-auto px-4 py-6 flex relative">
        
//         {/* Left Floral Graphic Column */}
//         <div className="w-20 hidden md:block mr-8 flex-shrink-0">
//           <div className="h-full w-full bg-gray-300 rounded-md overflow-hidden border border-gray-400/30 flex flex-col items-center justify-center text-gray-500 text-xs">
//              <p>Floral Graphic</p>
//              <p>(Place image here)</p>
//           </div>
//         </div>

//         {/* Dynamic Page Content Injector */}
//         <div className="flex-grow pb-16">
//           {children}
//         </div>

//         {/* Scroll to Top Button */}
//         <button 
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           className="fixed bottom-8 right-8 bg-vedanta-blue text-white rounded-full p-4 shadow-lg hover:bg-blue-800 transition-colors z-50 flex items-center justify-center"
//           aria-label="Scroll to top"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
//             <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
//           </svg>
//         </button>
//       </main>

//       {/* GLOBAL FOOTER */}
//       <footer className="bg-vedanta-blue text-white py-4 text-center text-sm shadow-inner mt-auto">
//         <p>Copyright © The Ramakrishna Vedanta Society of the Philippines, Inc.</p>
//       </footer>

//     </div>
//   );
// };

// export default Layout;

// import { Link } from 'react-router-dom';

// import React, { ReactNode } from 'react';

// interface LayoutProps {
//   children: ReactNode;
// }

// const Layout: React.FC<LayoutProps> = ({ children }) => {
//   return (
//     <div className="min-h-screen flex flex-col font-sans text-slate-800 selection:bg-vedanta-blue selection:text-white">
      
//       {/* 2026 HEADER: Sticky, Glassmorphism, Sleek */}
//       <header className="sticky top-0 z-50 bg-vedanta-blue/90 backdrop-blur-lg text-white shadow-xl border-b border-white/10 transition-all duration-300">
        
//         {/* Top Utility Bar */}
//         <div className="bg-black/20 text-xs py-1.5">
//           <div className="container mx-auto px-6 flex justify-end items-center space-x-4">
//             <span className="flex items-center gap-1 font-medium tracking-wide opacity-90">
//               <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
//               (02) 86314114
//             </span>
//             <button className="bg-yellow-400 hover:bg-yellow-300 text-vedanta-blue px-4 py-1 rounded-full font-bold transition-all transform hover:scale-105 shadow-sm">
//               Login
//             </button>
//           </div>
//         </div>

//         {/* Main Navigation Area */}
//         <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          
//           {/* Brand/Logo */}
//           <div className="flex items-center space-x-4 group cursor-pointer">
//             <div className="h-14 w-14 bg-gradient-to-br from-white to-gray-200 rounded-full flex items-center justify-center text-vedanta-blue text-[10px] font-black shadow-lg border-2 border-white/20 group-hover:rotate-12 transition-transform duration-500">
//               LOGO
//             </div>
//             <div>
//               <h1 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">The Ramakrishna Vedanta</h1>
//               <h2 className="text-lg font-light tracking-wide text-blue-100">Society of the Philippines</h2>
//             </div>
//           </div>
          
//           {/* Modern Nav Links with animated underlines */}
//           <nav className="hidden md:flex space-x-8 font-medium text-sm tracking-wide">
//             {['HOME', 'ABOUT US', 'OUR ACTIVITIES', 'CONTACT US', 'DONATE'].map((item, idx) => (
//               <div key={idx} className="relative group cursor-pointer py-1">
//                 <span className="hover:text-yellow-300 transition-colors duration-300">{item}</span>
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
//               </div>
//             ))}
//           </nav>
//         </div>
//       </header>

//       {/* MAIN CONTENT AREA */}
//       {/* We use a max-w-7xl constraint to keep it elegant on huge modern monitors */}
//       <main className="flex-grow container mx-auto max-w-7xl px-4 py-12 flex gap-8 relative">
        
//         {/* Modernized Left Accent (Replacing the blocky gray placeholder) */}
//         <div className="w-12 hidden lg:flex flex-col items-center pt-8 flex-shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-500">
//           <div className="h-64 w-1 bg-gradient-to-b from-vedanta-blue/50 to-transparent rounded-full mb-4"></div>
//           <p className="[writing-mode:vertical-lr] text-sm font-semibold tracking-widest text-vedanta-blue">EST. 2001</p>
//         </div>

//         {/* Page Content */}
//         <div className="flex-grow pb-16">
//           {children}
//         </div>

//         {/* Floating Action Button (Smoother & Modern) */}
//         <button 
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           className="fixed bottom-8 right-8 bg-gradient-to-r from-vedanta-blue to-blue-800 text-white rounded-full p-4 shadow-2xl hover:shadow-blue-900/50 hover:-translate-y-2 transition-all duration-300 z-50 group border border-white/10"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 11l7-7 7 7M5 19l7-7 7 7" />
//           </svg>
//         </button>
//       </main>

//       {/* MODERN FOOTER */}
//       <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-white/5 mt-auto relative overflow-hidden">
//         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-vedanta-blue to-transparent"></div>
//         <p className="hover:text-white transition-colors duration-300 cursor-default">
//           Copyright © {new Date().getFullYear()} The Ramakrishna Vedanta Society of the Philippines, Inc.
//         </p>
//       </footer>

//     </div>
//   );
// };

// export default Layout;


import { Link } from 'react-router-dom';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-800 selection:bg-vedanta-blue selection:text-white">

      {/* 2026 HEADER: Sticky, Glassmorphism, Sleek */}
      <header className="sticky top-0 z-50 bg-vedanta-blue/90 backdrop-blur-lg text-white shadow-xl border-b border-white/10 transition-all duration-300">

        {/* Top Utility Bar */}
        <div className="bg-black/20 text-xs py-1.5">
          <div className="container mx-auto px-6 flex justify-end items-center space-x-4">
            <span className="flex items-center gap-1 font-medium tracking-wide opacity-90">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              (02) 86314114
            </span>

            <button className="bg-yellow-400 hover:bg-yellow-300 text-vedanta-blue px-4 py-1 rounded-full font-bold transition-all transform hover:scale-105 shadow-sm">
              Login
            </button>
          </div>
        </div>

        {/* Main Navigation Area */}
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">

          {/* Brand/Logo */}
          <Link to="/" className="flex items-center space-x-4 group cursor-pointer">
            
            {/* Logo Image Placeholder */}
            <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-vedanta-orange/40 overflow-hidden shrink-0 group-hover:border-yellow-400 transition-colors duration-300">
              {/* Replace 'logo.png' with your actual file name once it's in the public folder */}
              <img 
                src="/logo.png" 
                alt="RVSP Logo" 
                className="w-full h-full object-contain p-1 group-hover:scale-105 transition-transform duration-500" 
                onError={(e) => {
                  // This just shows the old text if the image isn't found yet
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement?.insertAdjacentHTML('beforeend', '<span class="text-[10px] font-black text-vedanta-blue">LOGO</span>');
                }}
              />
            </div>
            
            {/* Cultural & Spiritual Typography */}
            <div>
              <h1 className="text-2xl md:text-3xl font-serif text-white drop-shadow-md tracking-wide">
                The Ramakrishna Vedanta
              </h1>
              <h2 className="text-sm md:text-base font-serif italic text-yellow-100/90 tracking-widest mt-0.5">
                Society of the Philippines
              </h2>
            </div>

          </Link>

          {/* Modern Nav Links with animated underlines (Now fully clickable!) */}
          {/* Modern Nav Links with Glassmorphic Dropdowns */}
          
{/* Modern Nav Links with Monastic Saffron Dropdowns */}
<nav className="hidden md:flex space-x-8 font-medium text-sm tracking-wide">

  {/* Standard Link: HOME */}
  <Link to="/" className="relative group cursor-pointer py-2 block">
    <span className="hover:text-yellow-300 transition-colors duration-300">
      HOME
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
  </Link>

  {/* Dropdown: ABOUT US */}
  <div className="relative group cursor-pointer py-2">
    <span className="hover:text-yellow-300 transition-colors duration-300 flex items-center gap-1">
      ABOUT US
      <svg
        className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </span>

    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full rounded-full"></span>

    {/* Saffron Dropdown Menu */}
    <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left group-hover:scale-100 scale-95 z-50">
      <div className="bg-gradient-to-b from-vedanta-orange to-vedanta-brown/95 backdrop-blur-md border-t-2 border-t-yellow-400 rounded-b-2xl shadow-2xl shadow-orange-900/40 overflow-hidden py-2 border border-white/10">
        {[
          { name: 'Vedanta', path: '/about/vedanta' },
          { name: 'Our Teachers', path: '/about/teachers' },
          { name: 'Our History', path: '/about/history' },
          { name: 'Our Mission', path: '/about/mission' },
          { name: 'Members & Volunteers', path: '/about/members' },
          { name: 'Q & A', path: '/about/qa' }
        ].map((sub, i) => (
          <Link
            key={i}
            to={sub.path}
            className="block px-5 py-3 text-amber-50/90 hover:bg-black/20 hover:text-yellow-200 transition-all duration-300 text-sm font-medium border-l-4 border-transparent hover:border-yellow-400 hover:pl-6"
          >
            {sub.name}
          </Link>
        ))}
      </div>
    </div>
  </div>

  {/* Dropdown: OUR ACTIVITIES */}
  <div className="relative group cursor-pointer py-2">
    <span className="hover:text-yellow-300 transition-colors duration-300 flex items-center gap-1">
      OUR ACTIVITIES
      <svg
        className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </span>

    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full rounded-full"></span>

    {/* Saffron Dropdown Menu */}
    <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left group-hover:scale-100 scale-95 z-50">
      <div className="bg-gradient-to-b from-vedanta-orange to-vedanta-brown/95 backdrop-blur-md border-t-2 border-t-yellow-400 rounded-b-2xl shadow-2xl shadow-orange-900/40 overflow-hidden py-2 border border-white/10">
        {[
          { name: 'Spiritual Programs', path: '/activities/spiritual-programs' },
          { name: 'Book Sales', path: '/activities/books' },
          { name: 'Summary of Past Events', path: '/activities/events' }
        ].map((sub, i) => (
          <Link
            key={i}
            to={sub.path}
            className="block px-5 py-3 text-amber-50/90 hover:bg-black/20 hover:text-yellow-200 transition-all duration-300 text-sm font-medium border-l-4 border-transparent hover:border-yellow-400 hover:pl-6"
          >
            {sub.name}
          </Link>
        ))}
      </div>
    </div>
  </div>

  {/* Standard Link: CONTACT US */}
  <Link to="/contact" className="relative group cursor-pointer py-2 block">
    <span className="hover:text-yellow-300 transition-colors duration-300">
      CONTACT US
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
  </Link>

  {/* Standard Link: DONATE */}
  <Link to="/donate" className="relative group cursor-pointer py-2 block">
    <span className="hover:text-yellow-300 transition-colors duration-300">
      DONATE
    </span>
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full rounded-full"></span>
  </Link>

</nav>



        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="flex-grow container mx-auto max-w-7xl px-4 py-12 flex gap-8 relative">

        {/* Modernized Left Accent */}
        <div className="w-12 hidden lg:flex flex-col items-center pt-8 flex-shrink-0 opacity-40 hover:opacity-100 transition-opacity duration-500">
          <div className="h-64 w-1 bg-gradient-to-b from-vedanta-blue/50 to-transparent rounded-full mb-4"></div>
          <p className="[writing-mode:vertical-lr] text-sm font-semibold tracking-widest text-vedanta-blue">
            EST. 2001
          </p>
        </div>

        {/* Page Content */}
        <div className="flex-grow pb-16">
          {children}
        </div>

        {/* Floating Action Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-vedanta-blue to-blue-800 text-white rounded-full p-4 shadow-2xl hover:shadow-blue-900/50 hover:-translate-y-2 transition-all duration-300 z-50 group border border-white/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 group-hover:animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 11l7-7 7 7M5 19l7-7 7 7"
            />
          </svg>
        </button>
      </main>

      {/* MODERN FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-white/5 mt-auto relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-vedanta-blue to-transparent"></div>

        <p className="hover:text-white transition-colors duration-300 cursor-default">
          Copyright © {new Date().getFullYear()} The Ramakrishna Vedanta Society
          of the Philippines, Inc.
        </p>
      </footer>

    </div>
  );
};

export default Layout;
