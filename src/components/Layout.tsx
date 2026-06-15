import { Link } from 'react-router-dom';
import { type ReactNode,useState } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const aboutLinks = [
    { name: 'Vedanta', path: '/about/vedanta' },
    { name: 'Our Teachers', path: '/about/teachers' },
    { name: 'Our History', path: '/about/history' },
    { name: 'Our Mission', path: '/about/mission' },
    { name: 'Members & Volunteers', path: '/about/members' },
    { name: 'Q & A', path: '/about/qa' }
  ];

  const activityLinks = [
    { name: 'Spiritual Programs', path: '/activities/spiritual-programs' },
    { name: 'Book Sales', path: '/activities/books' },
    { name: 'Summary of Past Events', path: '/activities/events' }
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

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
        <div className="container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center gap-4">

          {/* Brand/Logo */}
          <Link to="/" className="flex items-center space-x-3 sm:space-x-4 group cursor-pointer min-w-0" onClick={closeMobileMenu}>
            
            {/* Logo Image Placeholder */}
            <div className="h-12 w-12 sm:h-16 sm:w-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-vedanta-orange/40 overflow-hidden shrink-0 group-hover:border-yellow-400 transition-colors duration-300">
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
            <div className="min-w-0">
              <h1 className="text-lg sm:text-2xl md:text-3xl font-serif text-white drop-shadow-md tracking-wide leading-tight">
                The Ramakrishna Vedanta
              </h1>
              <h2 className="text-xs sm:text-sm md:text-base font-serif italic text-yellow-100/90 tracking-wide sm:tracking-widest mt-0.5 leading-tight">
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
        {aboutLinks.map((sub, i) => (
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
        {activityLinks.map((sub, i) => (
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

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="md:hidden inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white shadow-sm transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>


        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-white/10 bg-vedanta-blue/95 px-4 pb-5 pt-2 shadow-2xl">
            <div className="space-y-1 text-sm font-semibold tracking-wide">
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="block rounded-lg px-4 py-3 text-white hover:bg-white/10 hover:text-yellow-200"
              >
                HOME
              </Link>

              <div className="px-4 pt-3 pb-1 text-xs font-bold uppercase tracking-widest text-yellow-100/80">
                About Us
              </div>
              {aboutLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMobileMenu}
                  className="block rounded-lg px-4 py-3 text-amber-50/90 hover:bg-white/10 hover:text-yellow-200"
                >
                  {link.name}
                </Link>
              ))}

              <div className="px-4 pt-3 pb-1 text-xs font-bold uppercase tracking-widest text-yellow-100/80">
                Our Activities
              </div>
              {activityLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMobileMenu}
                  className="block rounded-lg px-4 py-3 text-amber-50/90 hover:bg-white/10 hover:text-yellow-200"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="block rounded-lg px-4 py-3 text-white hover:bg-white/10 hover:text-yellow-200"
              >
                CONTACT US
              </Link>
              <Link
                to="/donate"
                onClick={closeMobileMenu}
                className="block rounded-lg px-4 py-3 text-white hover:bg-white/10 hover:text-yellow-200"
              >
                DONATE
              </Link>
            </div>
          </nav>
        )}
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
