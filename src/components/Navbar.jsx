import React, { useState, useEffect } from "react";
import { FaPhone } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Rileva lo scroll per cambiare lo stile della navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Funzione per gestire lo smooth scroll
  const handleSmoothScroll = (e, target) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (target === "#" || target === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a 
            href="#"
            onClick={(e) => handleSmoothScroll(e, "#")}
            className="flex flex-col cursor-pointer group"
          >
            <span className={`text-2xl font-light tracking-tight transition-colors ${
              isScrolled ? "text-stone-800" : "text-stone-800"
            }`}>
              Dr.ssa Elena Marchetti
            </span>
            <span className={`text-xs tracking-wide transition-colors ${
              isScrolled ? "text-emerald-700" : "text-emerald-700"
            }`}>
              Psicologa & Psicoterapeuta
            </span>
          </a>

          {/* Menu Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <a 
              href="#chi-sono"
              onClick={(e) => handleSmoothScroll(e, "#chi-sono")}
              className={`font-medium transition-colors hover:text-emerald-700 ${
                isScrolled ? "text-stone-700" : "text-stone-700"
              }`}
            >
              Chi Sono
            </a>
            <a 
              href="#servizi"
              onClick={(e) => handleSmoothScroll(e, "#servizi")}
              className={`font-medium transition-colors hover:text-emerald-700 ${
                isScrolled ? "text-stone-700" : "text-stone-700"
              }`}
            >
              Servizi
            </a>
            <a 
              href="#approccio"
              onClick={(e) => handleSmoothScroll(e, "#approccio")}
              className={`font-medium transition-colors hover:text-emerald-700 ${
                isScrolled ? "text-stone-700" : "text-stone-700"
              }`}
            >
              Approccio
            </a>
            <a 
              href="#contatti"
              onClick={(e) => handleSmoothScroll(e, "#contatti")}
              className="px-6 py-2.5 bg-emerald-700 text-white rounded-lg font-medium hover:bg-emerald-800 transition-all duration-300 hover:shadow-lg flex items-center gap-2"
            >
              <FaPhone className="text-sm" />
              Contatti
            </a>
          </div>

          {/* Hamburger Menu Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-stone-100 transition-colors"
            aria-label="Menu"
          >
            <svg 
              className={`w-6 h-6 transition-colors ${
                isScrolled ? "text-stone-800" : "text-stone-800"
              }`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white rounded-xl shadow-xl border border-stone-100">
            <div className="flex flex-col space-y-1 px-4">
              <a 
                href="#chi-sono"
                onClick={(e) => handleSmoothScroll(e, "#chi-sono")}
                className="py-3 px-4 text-stone-700 font-medium hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
              >
                Chi Sono
              </a>
              <a 
                href="#servizi"
                onClick={(e) => handleSmoothScroll(e, "#servizi")}
                className="py-3 px-4 text-stone-700 font-medium hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
              >
                Servizi
              </a>
              <a 
                href="#approccio"
                onClick={(e) => handleSmoothScroll(e, "#approccio")}
                className="py-3 px-4 text-stone-700 font-medium hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
              >
                Approccio
              </a>
              <a 
                href="#contatti"
                onClick={(e) => handleSmoothScroll(e, "#contatti")}
                className="mt-2 py-3 px-4 bg-emerald-700 text-white font-medium rounded-lg hover:bg-emerald-800 transition-colors text-center flex items-center justify-center gap-2"
              >
                <FaPhone className="text-sm" />
                Contatti
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 