import React from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-stone-800 text-stone-300">
    <div className="container mx-auto px-6 lg:px-12 py-16">
      <div className="grid md:grid-cols-3 gap-12 mb-12">
        
        {/* Colonna 1 - Info Studio */}
        <div className="space-y-4">
          <h3 className="text-white text-xl font-medium mb-4">Dr.ssa Elena Marchetti</h3>
          <p className="text-sm leading-relaxed">
            Psicologa Clinica e Psicoterapeuta specializzata in terapia cognitivo-comportamentale. 
            Iscritta all'Ordine degli Psicologi della Lombardia #4782.
          </p>
          <div className="flex gap-4 pt-4">
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-stone-700 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-stone-700 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook className="text-lg" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-stone-700 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="text-lg" />
            </a>
          </div>
        </div>

        {/* Colonna 2 - Link Utili */}
        <div className="space-y-4">
          <h3 className="text-white text-xl font-medium mb-4">Link Utili</h3>
          <nav className="flex flex-col space-y-3">
            <a href="#chi-sono" className="hover:text-emerald-400 transition-colors text-sm">
              Chi Sono
            </a>
            <a href="#servizi" className="hover:text-emerald-400 transition-colors text-sm">
              Servizi Offerti
            </a>
            <a href="#approccio" className="hover:text-emerald-400 transition-colors text-sm">
              Approccio Terapeutico
            </a>
            <a href="#contatti" className="hover:text-emerald-400 transition-colors text-sm">
              Contatti e Appuntamenti
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-emerald-400 transition-colors text-sm">
              Cookie Policy
            </a>
          </nav>
        </div>

        {/* Colonna 3 - Contatti Rapidi */}
        <div className="space-y-4">
          <h3 className="text-white text-xl font-medium mb-4">Contatti</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-emerald-500 mt-1 flex-shrink-0" />
              <div className="text-sm">
                <p>Via Giuseppe Verdi, 42</p>
                <p>20121 Milano (MI)</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaPhone className="text-emerald-500 flex-shrink-0" />
              <a href="tel:+393401234567" className="text-sm hover:text-emerald-400 transition-colors">
                +39 340 123 4567
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-emerald-500 flex-shrink-0" />
              <a href="mailto:info@elenamarchetti.it" className="text-sm hover:text-emerald-400 transition-colors">
                info@elenamarchetti.it
              </a>
            </div>
          </div>
          <div className="pt-4 text-sm">
            <p className="text-white font-medium mb-2">Orari di ricevimento:</p>
            <p>Lun - Ven: 9:00 - 19:00</p>
            <p>Sabato: Su appuntamento</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-stone-700 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Dr.ssa Elena Marchetti - Psicologa e Psicoterapeuta. 
            Tutti i diritti riservati.
          </p>
          <p className="text-stone-400">
            P.IVA: 12345678901
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 