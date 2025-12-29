import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaRocket, 
  FaChartLine, 
  FaStar, 
  FaHeart, 
  FaBullseye,
  FaCheckCircle,
  FaUserGraduate,
  FaLightbulb,
  FaHandshake,
  FaAward,
  FaClock,
  FaUsers,
  FaTrophy,
  FaQuoteLeft,
  FaDownload,
  FaCalendar,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaArrowRight,
  FaCrown,
  FaGem,
  FaCreditCard,
  FaLock,
  FaShieldAlt
} from 'react-icons/fa';
import BlurText from '../components/ui/blurText';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { immagini } from '../images';

gsap.registerPlugin(ScrollTrigger);

const CoachingPage = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    // Stats counter animation
    const stats = statsRef.current;
    if (stats) {
      const counters = stats.querySelectorAll('.counter');
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        ScrollTrigger.create({
          trigger: counter,
          start: 'top 80%',
          onEnter: () => {
            gsap.to(counter, {
              innerText: target,
              duration: 2,
              snap: { innerText: 1 },
              ease: 'power1.out',
            });
          },
          once: true,
        });
      });
    }
  }, []);

  return (
    <div className="bg-white">
      {/* Navbar with glassmorphism */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-white/95 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-purple-700">
              Marco Ferretti
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#chi-sono" className="text-gray-700 hover:text-purple-600 transition">Chi Sono</a>
              <a href="#metodo" className="text-gray-700 hover:text-purple-600 transition">Metodo</a>
              <a href="#percorsi" className="text-gray-700 hover:text-purple-600 transition">Percorsi</a>
              <a href="#testimonianze" className="text-gray-700 hover:text-purple-600 transition">Testimonianze</a>
              <a href="#blog" className="text-gray-700 hover:text-purple-600 transition">Blog</a>
              <a href="#contatti" className="text-gray-700 hover:text-purple-600 transition">Contatti</a>
              <button className="bg-purple-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-800 transition transform hover:scale-105">
                Prenota Call
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-white">
        {/* Subtle pattern background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(124, 58, 237) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <div className="flex gap-3 flex-wrap">
                <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold flex items-center gap-2">
                  <FaAward /> ICF Certified
                </span>
                <span className="px-4 py-2 bg-amber-100 text-amber-700 rounded-full text-sm font-semibold flex items-center gap-2">
                  <FaTrophy /> 15+ Anni
                </span>
                <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold flex items-center gap-2">
                  <FaUsers /> 500+ Clienti
                </span>
              </div>

              <div>
                <BlurText 
                  text="Trasforma la Tua Carriera in 90 Giorni" 
                  className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight"
                  delay={50}
                />
              </div>

              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Aiuto <span className="font-semibold text-purple-600">manager ambiziosi</span> a ottenere la <span className="font-semibold text-amber-600">promozione che meritano</span> attraverso un metodo comprovato e personalizzato.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-purple-700 text-white px-8 py-5 rounded-full font-semibold text-lg hover:bg-purple-800 transition transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
                  Prenota Call Conoscitiva Gratuita (30 min)
                  <FaArrowRight className="group-hover:translate-x-2 transition" />
                </button>
                <button className="border-2 border-purple-600 text-purple-600 px-8 py-5 rounded-full font-semibold text-lg hover:bg-purple-50 transition flex items-center justify-center gap-2">
                  <FaRocket /> Scopri il Metodo
                </button>
              </div>

              <div className="flex items-center gap-2 text-gray-600">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
                  ))}
                </div>
                <p className="ml-2">
                  <span className="font-semibold text-purple-600">Oltre 500 professionisti</span> già trasformati
                </p>
              </div>
            </div>

            {/* Right image */}
            <div className="hero-image relative">
              <div className="relative">
                <div className="relative bg-white rounded-2xl p-8 ">
                  <img 
                    src={immagini.coach} 
                    alt="Professional Coach" 
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESULTS/SOCIAL PROOF SECTION */}
      <section ref={statsRef} className="py-20 bg-purple-700 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold mb-2">
                <span className="counter" data-target="92">0</span>%
              </div>
              <p className="text-purple-200 text-lg">Clienti raggiungono l'obiettivo</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold mb-2">
                <span className="counter" data-target="15">0</span>+
              </div>
              <p className="text-purple-200 text-lg">Anni di esperienza</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold mb-2">
                <span className="counter" data-target="5000">0</span>+
              </div>
              <p className="text-purple-200 text-lg">Ore di coaching erogate</p>
            </div>
            <div className="text-center">
              <div className="text-6xl font-bold mb-2">
                <span className="counter" data-target="50">0</span>+
              </div>
              <p className="text-purple-200 text-lg">Aziende clienti</p>
            </div>
          </div>
        </div>
      </section>

      {/* CHI AIUTO SECTION */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-16 text-gray-900">
            Sei nel Posto Giusto Se...
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition border border-purple-50 group">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <FaBullseye className="text-3xl text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Ti senti bloccato</h3>
              <p className="text-gray-600 mb-4">
                Ti senti bloccato nella tua carriera e non sai come fare il prossimo passo verso la leadership.
              </p>
              <p className="text-purple-600 font-semibold flex items-center gap-2">
                <FaArrowRight /> Insieme troveremo la tua direzione
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition border border-amber-50 group">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <FaChartLine className="text-3xl text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Vuoi crescere</h3>
              <p className="text-gray-600 mb-4">
                Hai ambizioni ma non hai una strategia chiara per raggiungere i tuoi obiettivi professionali.
              </p>
              <p className="text-amber-600 font-semibold flex items-center gap-2">
                <FaArrowRight /> Creeremo il tuo piano di successo
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition border border-teal-50 group">
              <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <FaLightbulb className="text-3xl text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Cerchi chiarezza</h3>
              <p className="text-gray-600 mb-4">
                Hai molte opzioni ma non sai quale direzione prendere per massimizzare il tuo potenziale.
              </p>
              <p className="text-teal-600 font-semibold flex items-center gap-2">
                <FaArrowRight /> Identificheremo la tua strada
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition border border-rose-50 group">
              <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                <FaTrophy className="text-3xl text-rose-600" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Vuoi eccellere</h3>
              <p className="text-gray-600 mb-4">
                Vuoi passare da buono a eccellente e distinguerti come leader nel tuo settore.
              </p>
              <p className="text-rose-600 font-semibold flex items-center gap-2">
                <FaArrowRight /> Libereremo il tuo potenziale
              </p>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-purple-700 text-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-purple-800 transition transform hover:scale-105 shadow-lg">
              Questo sono io, parliamone
            </button>
          </div>
        </div>
      </section>

      {/* CHI SONO SECTION */}
      <section id="chi-sono" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-purple-600/5 rounded-2xl"></div>
              <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
                <div className="w-full h-96 bg-purple-50 rounded-xl flex items-center justify-center">
                  <FaUserGraduate className="text-9xl text-purple-600 opacity-30" />
                </div>
              </div>
            </div>

            {/* Story */}
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
                La Mia Storia
              </h2>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <span className="font-semibold text-purple-600">15 anni fa</span>, ero esattamente dove sei tu ora. Un professionista ambizioso con tanto potenziale, ma senza una direzione chiara.
                </p>
                
                <p>
                  Dopo anni di tentativi ed errori, ho scoperto che il successo non è questione di talento, ma di <span className="font-semibold text-amber-600">strategia, mindset e azione mirata</span>.
                </p>

                <p>
                  Da allora, ho dedicato la mia vita ad aiutare professionisti come te a <span className="font-semibold text-teal-600">accelerare il loro percorso</span>, evitando gli errori che ho fatto io.
                </p>

                <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-600 italic">
                  <FaQuoteLeft className="text-2xl text-purple-600 mb-4" />
                  <p className="text-xl text-gray-800 font-serif">
                    "Il mio scopo è vedere brillare il potenziale che già vive in te."
                  </p>
                </div>

                <div className="space-y-4 pt-6">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    <FaAward className="text-purple-600" /> Certificazioni e Formazione
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                      <p>International Coach Federation (ICF) - PCC</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                      <p>Master Practitioner in PNL</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                      <p>MBA in Business Strategy</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-rose-600 rounded-full"></div>
                      <p>Certified Leadership Development Coach</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METODO SECTION */}
      <section id="metodo" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Il Mio Metodo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un percorso strutturato e personalizzato in 5 fasi per trasformare la tua carriera
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                number: '01',
                title: 'Analisi e Obiettivi',
                description: 'Definiamo dove sei ora e dove vuoi arrivare. Identifichiamo i tuoi punti di forza, le aree di miglioramento e gli obiettivi chiari e misurabili.',
                icon: FaBullseye,
                bgClass: 'bg-gradient-to-br from-purple-500 to-purple-700',
                iconClass: 'text-purple-600'
              },
              {
                number: '02',
                title: 'Strategia Personalizzata',
                description: 'Creiamo un piano d\'azione su misura per te, basato sul tuo contesto, le tue risorse e i tuoi obiettivi specifici.',
                icon: FaLightbulb,
                bgClass: 'bg-gradient-to-br from-amber-500 to-amber-700',
                iconClass: 'text-amber-600'
              },
              {
                number: '03',
                title: 'Azione e Implementazione',
                description: 'Metti in pratica le strategie con il mio supporto costante. Ogni settimana lavoriamo insieme per superare ostacoli e mantenere il momentum.',
                icon: FaRocket,
                bgClass: 'bg-gradient-to-br from-teal-500 to-teal-700',
                iconClass: 'text-teal-600'
              },
              {
                number: '04',
                title: 'Monitoraggio e Aggiustamenti',
                description: 'Misuriamo i progressi e adattiamo il piano in base ai risultati. La flessibilità è la chiave del successo sostenibile.',
                icon: FaChartLine,
                bgClass: 'bg-gradient-to-br from-rose-500 to-rose-700',
                iconClass: 'text-rose-600'
              },
              {
                number: '05',
                title: 'Consolidamento Risultati',
                description: 'Ancoriamo i risultati raggiunti e creiamo sistemi per mantenere la crescita nel lungo periodo. Il tuo successo è permanente.',
                icon: FaTrophy,
                bgClass: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
                iconClass: 'text-indigo-600'
              }
            ].map((fase, index) => (
              <div key={index} className="relative">
                <div className="flex gap-6 items-start group">
                  {/* Number with line */}
                  <div className="flex flex-col items-center">
                    <div className={`w-20 h-20 rounded-2xl ${fase.bgClass} text-white font-bold text-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition`}>
                      {fase.number}
                    </div>
                    {index < 4 && (
                      <div className="w-1 h-full bg-gradient-to-b from-gray-300 to-transparent mt-4"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition border border-gray-100">
                    <div className="flex items-start gap-4 mb-4">
                      <fase.icon className={`text-4xl ${fase.iconClass}`} />
                      <h3 className="text-3xl font-bold text-gray-900">{fase.title}</h3>
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      {fase.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIZI/PERCORSI SECTION */}
      <section id="percorsi" className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Come Posso Aiutarti
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Scegli il percorso più adatto alle tue esigenze
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* BASE */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-purple-500 transition hover:transform hover:scale-105">
              <div className="text-center mb-6">
                <div className="inline-block p-4 bg-purple-500/20 rounded-2xl mb-4">
                  <FaRocket className="text-4xl text-purple-300" />
                </div>
                <h3 className="text-3xl font-bold mb-2">Sessione Singola</h3>
                <p className="text-purple-200">Per iniziare</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                  <p>1 sessione da 60 minuti</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                  <p>Analisi situazione attuale</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                  <p>Piano d'azione iniziale</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                  <p>Supporto via email 7 giorni</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm text-purple-200 mb-2">Investimento</p>
                <p className="text-4xl font-bold">€150</p>
              </div>

              <button className="w-full bg-white text-purple-900 py-4 rounded-full font-semibold hover:bg-purple-50 transition">
                Prenota Sessione
              </button>
            </div>

            {/* PREMIUM */}
            <div className="bg-purple-700 rounded-2xl p-8 border-2 border-amber-400 relative hover:transform hover:scale-105 transition shadow-xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-amber-400 text-gray-900 px-6 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                  <FaStar /> PIÙ SCELTO
                </span>
              </div>

              <div className="text-center mb-6 mt-4">
                <div className="inline-block p-4 bg-white/20 rounded-2xl mb-4">
                  <FaGem className="text-4xl text-amber-300" />
                </div>
                <h3 className="text-3xl font-bold mb-2">Trasformazione 90</h3>
                <p className="text-purple-200">Il più richiesto</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-300 mt-1 flex-shrink-0" />
                  <p>12 sessioni da 60 minuti (3 mesi)</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-300 mt-1 flex-shrink-0" />
                  <p>Piano strategico personalizzato</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-300 mt-1 flex-shrink-0" />
                  <p>Supporto WhatsApp illimitato</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-300 mt-1 flex-shrink-0" />
                  <p>Materiali e workbook esclusivi</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-300 mt-1 flex-shrink-0" />
                  <p>Assessment professionale completo</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-300 mt-1 flex-shrink-0" />
                  <p>Sessione bonus di follow-up</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm text-purple-200 mb-2">Investimento</p>
                <div className="flex items-end gap-2">
                  <p className="text-4xl font-bold">€1.800</p>
                  <p className="text-lg text-purple-200 line-through mb-1">€2.400</p>
                </div>
                <p className="text-sm text-amber-300">Risparmio €600</p>
              </div>

              <button className="w-full bg-amber-400 text-gray-900 py-4 rounded-full font-semibold hover:bg-amber-300 transition">
                Inizia Ora
              </button>
            </div>

            {/* VIP */}
            <div className="bg-gray-950 rounded-2xl p-8 border-2 border-amber-500 hover:transform hover:scale-105 transition shadow-xl">
              <div className="text-center mb-6">
                <div className="inline-block p-4 bg-amber-500/20 rounded-2xl mb-4">
                  <FaCrown className="text-4xl text-amber-400" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-amber-400">
                  Elite Transformation
                </h3>
                <p className="text-gray-300">Massimi risultati</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-amber-400 mt-1 flex-shrink-0" />
                  <p>24 sessioni da 60 minuti (6 mesi)</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-amber-400 mt-1 flex-shrink-0" />
                  <p>Tutto del pacchetto Premium +</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-amber-400 mt-1 flex-shrink-0" />
                  <p>Accesso prioritario 24/7</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-amber-400 mt-1 flex-shrink-0" />
                  <p>Sessioni video emergenza</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-amber-400 mt-1 flex-shrink-0" />
                  <p>Network esclusivo clienti VIP</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-amber-400 mt-1 flex-shrink-0" />
                  <p>3 sessioni bonus di mantenimento</p>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-amber-400 mt-1 flex-shrink-0" />
                  <p>Garanzia risultati o rimborso 50%</p>
                </div>
              </div>

              <div className="mb-6">
                <p className="text-sm text-gray-400 mb-2">Investimento</p>
                <div className="flex items-end gap-2">
                  <p className="text-4xl font-bold text-amber-400">€3.200</p>
                  <p className="text-lg text-gray-400 line-through mb-1">€4.800</p>
                </div>
                <p className="text-sm text-amber-400">Risparmio €1.600</p>
              </div>

              <button className="w-full bg-amber-500 text-gray-900 py-4 rounded-full font-semibold hover:bg-amber-400 transition">
                Diventa Elite
              </button>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-12 text-purple-200">
            <div className="flex items-center gap-2">
              <FaCreditCard className="text-xl" />
              <span>Pagamenti rateizzabili disponibili</span>
            </div>
            <div className="flex items-center gap-2">
              <FaShieldAlt className="text-xl" />
              <span>Soddisfatti o rimborsati entro 14 giorni</span>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIANZE SECTION */}
      <section id="testimonianze" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Storie di Trasformazione
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quello che i miei clienti hanno raggiunto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Marco R.',
                role: 'Senior Manager',
                company: 'Tech Corp',
                before: 'Bloccato allo stesso ruolo da 4 anni',
                after: 'Promosso a Director in 5 mesi',
                quote: 'Il metodo di Marco mi ha aperto gli occhi su cosa stavo sbagliando. In 90 giorni ho ottenuto la promozione che inseguivo da anni.',
                rating: 5
              },
              {
                name: 'Laura M.',
                role: 'Business Consultant',
                company: 'Freelance',
                before: 'Clienti sporadici, reddito instabile',
                after: 'Portfolio pieno, +150% di fatturato',
                quote: 'Incredibile come un cambio di strategia e mindset possa trasformare completamente un business. Grazie infinite!',
                rating: 5
              },
              {
                name: 'Alessandro T.',
                role: 'HR Director',
                company: 'Fortune 500',
                before: 'Dubbi sulla direzione di carriera',
                after: 'Chiarezza totale e nuovo ruolo executive',
                quote: 'Le sessioni con Marco sono state un investimento che mi ha restituito 100 volte il valore. Consigliatissimo.',
                rating: 5
              },
              {
                name: 'Francesca B.',
                role: 'Marketing Manager',
                company: 'Startup',
                before: 'Sindrome dell\'impostore, insicurezza',
                after: 'Sicurezza, leadership riconosciuta',
                quote: 'Ho imparato a riconoscere il mio valore e a comunicarlo efficacemente. Il team ora mi vede come una vera leader.',
                rating: 5
              },
              {
                name: 'Roberto S.',
                role: 'Sales Director',
                company: 'Multinazionale',
                before: 'Burn-out, pensavo di cambiare settore',
                after: 'Rinnovata passione, migliori risultati',
                quote: 'Stavo per lasciare tutto. Marco mi ha aiutato a ritrovare la passione e ora sono più performante che mai.',
                rating: 5
              },
              {
                name: 'Chiara L.',
                role: 'Executive Coach',
                company: 'Indipendente',
                before: 'Volevo lanciare il mio business',
                after: '15 clienti in 3 mesi, business avviato',
                quote: 'La struttura e il supporto che ho ricevuto sono stati fondamentali per il lancio del mio coaching business.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition border border-gray-100">
                {/* Quote icon */}
                <FaQuoteLeft className="text-3xl text-purple-600 mb-4 opacity-50" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg text-gray-700 mb-6 italic leading-relaxed font-serif">
                  "{testimonial.quote}"
                </p>

                {/* Before/After */}
                <div className="space-y-3 mb-6">
                  <div className="bg-red-50 border-l-4 border-red-400 p-3 rounded">
                    <p className="text-sm font-semibold text-red-800">PRIMA:</p>
                    <p className="text-sm text-red-700">{testimonial.before}</p>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-400 p-3 rounded">
                    <p className="text-sm font-semibold text-green-800">DOPO:</p>
                    <p className="text-sm text-green-700">{testimonial.after}</p>
                  </div>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 text-white flex items-center justify-center font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-purple-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RISORSE GRATUITE SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Inizia Subito il Tuo Percorso
              </h2>
              <p className="text-xl text-gray-600">
                Scarica gratuitamente risorse esclusive per iniziare la tua trasformazione
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Lead Magnet 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border border-gray-200">
                <div className="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center mb-6">
                  <FaDownload className="text-3xl text-teal-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ebook Gratuito
                </h3>
                <p className="text-gray-600 mb-6">
                  "7 Strategie per Accelerare la Tua Carriera nei Prossimi 90 Giorni"
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <FaCheckCircle className="text-teal-600" />
                    <span>45 pagine di strategie concrete</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <FaCheckCircle className="text-teal-600" />
                    <span>Template e worksheet</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <FaCheckCircle className="text-teal-600" />
                    <span>Bonus: checklist settimanale</span>
                  </li>
                </ul>
                <form className="space-y-3">
                  <input 
                    type="text" 
                    placeholder="Il tuo nome" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
                  />
                  <input 
                    type="email" 
                    placeholder="La tua email" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition"
                  />
                  <button className="w-full bg-teal-700 text-white py-4 rounded-xl font-semibold hover:bg-teal-800 transition shadow-md">
                    Scarica Gratis
                  </button>
                </form>
              </div>

              {/* Lead Magnet 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition border border-gray-200">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <FaBullseye className="text-3xl text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Quiz di Autovalutazione
                </h3>
                <p className="text-gray-600 mb-6">
                  "Scopri il Tuo Livello di Leadership e il Percorso Ideale per Te"
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-gray-700">
                    <FaCheckCircle className="text-purple-600" />
                    <span>10 minuti per completarlo</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <FaCheckCircle className="text-purple-600" />
                    <span>Report personalizzato dettagliato</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <FaCheckCircle className="text-purple-600" />
                    <span>Raccomandazioni specifiche</span>
                  </li>
                </ul>
                <form className="space-y-3">
                  <input 
                    type="text" 
                    placeholder="Il tuo nome" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition"
                  />
                  <input 
                    type="email" 
                    placeholder="La tua email" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition"
                  />
                  <button className="w-full bg-purple-700 text-white py-4 rounded-xl font-semibold hover:bg-purple-800 transition shadow-md">
                    Inizia il Quiz
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL CONOSCITIVA SECTION */}
      <section id="contatti" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left - Info */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                  Prenota la Tua Call Conoscitiva Gratuita
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  30 minuti per capire se possiamo lavorare insieme e come posso aiutarti a raggiungere i tuoi obiettivi
                </p>

                <div className="space-y-6 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900">Cosa succede nella call:</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-purple-600">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Analizziamo la tua situazione</h4>
                        <p className="text-gray-600">Dove sei ora e dove vuoi arrivare</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-purple-600">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Identifichiamo gli ostacoli</h4>
                        <p className="text-gray-600">Cosa ti sta bloccando dal raggiungere i tuoi obiettivi</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                        <span className="font-bold text-purple-600">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Creiamo un piano iniziale</h4>
                        <p className="text-gray-600">I primi passi concreti per la tua trasformazione</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                  <div className="flex flex-col gap-2 text-center">
                    <div className="flex items-center justify-center gap-2 text-gray-900">
                      <FaCheckCircle className="text-green-600" />
                      <span className="font-semibold">Nessun impegno</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-900">
                      <FaCheckCircle className="text-green-600" />
                      <span className="font-semibold">Nessun costo</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-900">
                      <FaCheckCircle className="text-green-600" />
                      <span className="font-semibold">Solo valore</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Form */}
              <div className="bg-purple-700 p-8 rounded-2xl shadow-xl border border-purple-600">
                <form className="space-y-5">
                  <div>
                    <label className="text-white font-semibold mb-2 block">Nome Completo *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 text-white rounded-xl border-0 focus:ring-4 focus:ring-white outline-none transition"
                      placeholder="Es: Mario Rossi"
                    />
                  </div>

                  <div>
                    <label className="text-white font-semibold mb-2 block">Email *</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 text-white rounded-xl border-0 focus:ring-4 focus:ring-white outline-none transition"
                      placeholder="mario.rossi@email.com"
                    />
                  </div>

                  <div>
                    <label className="text-white font-semibold mb-2 block">Telefono *</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full px-4 py-3 text-white rounded-xl border-0 focus:ring-4 focus:ring-white outline-none transition"
                      placeholder="+39 123 456 7890"
                    />
                  </div>

                  <div>
                    <label className="text-white font-semibold mb-2 block">Disponibilità *</label>
                    <select 
                      required
                      className="w-full px-4 py-3 text-white rounded-xl border-0 focus:ring-4 focus:ring-white outline-none transition"
                    >
                      <option value="">Seleziona...</option>
                      <option>Mattina (9-12)</option>
                      <option>Pomeriggio (14-18)</option>
                      <option>Sera (18-20)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-white font-semibold mb-2 block">Descrivi brevemente il tuo obiettivo *</label>
                    <textarea 
                      required
                      rows="4"
                      className="w-full px-4 py-3 text-white rounded-xl border-0 focus:ring-4 focus:ring-purple-300 outline-none transition resize-none"
                      placeholder="Es: Vorrei ottenere una promozione a ruolo manageriale entro 6 mesi..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-amber-500 text-gray-900 py-5 rounded-xl font-bold text-lg hover:bg-amber-400 transition transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <FaCalendar /> Prenota la Tua Call Gratuita
                  </button>

                  <p className="text-purple-200 text-sm text-center">
                    Riceverai conferma via email entro 24 ore
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG SECTION */}
      <section id="blog" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Insights & Risorse
            </h2>
            <p className="text-xl text-gray-600">
              Articoli, strategie e consigli per la tua crescita professionale
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: '5 Segnali che È il Momento di Cambiare Carriera',
                excerpt: 'Scopri se è arrivato il momento di fare il grande salto verso una nuova direzione professionale...',
                category: 'Career',
                readTime: '5 min'
              },
              {
                title: 'Come Negoziare un Aumento di Stipendio con Successo',
                excerpt: 'Le strategie provate che i miei clienti usano per ottenere aumenti del 20-40%...',
                category: 'Salary',
                readTime: '7 min'
              },
              {
                title: 'Da Manager a Leader: Il Salto di Qualità',
                excerpt: 'Cosa distingue un ottimo manager da un vero leader? Ecco le competenze chiave...',
                category: 'Leadership',
                readTime: '6 min'
              }
            ].map((article, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition border border-gray-200 group">
                <div className="h-48 bg-purple-600 flex items-center justify-center text-white text-6xl">
                  <FaLightbulb className="group-hover:scale-110 transition" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center gap-1">
                      <FaClock /> {article.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {article.excerpt}
                  </p>
                  <a href="#" className="text-purple-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                    Leggi di più <FaArrowRight />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-white text-purple-600 border-2 border-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-600 hover:text-white transition">
              Vai al Blog Completo
            </button>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-24 bg-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Sei Pronto a Trasformare la Tua Carriera?
          </h2>
          <p className="text-2xl md:text-3xl mb-12 text-purple-100 max-w-4xl mx-auto">
            Il momento migliore per iniziare era ieri. Il secondo momento migliore è <span className="font-bold text-amber-400">ADESSO</span>.
          </p>
          <button className="bg-white text-purple-900 px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-100 transition transform hover:scale-105 inline-flex items-center gap-3">
            <FaRocket className="text-2xl" />
            Prenota la Tua Call Gratuita Ora
            <FaArrowRight />
          </button>
          <div className="mt-6 flex items-center justify-center gap-2 text-purple-200">
            <FaClock className="text-xl" />
            <span>Posti limitati disponibili questo mese</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Chi sono */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                Marco Ferretti
              </h3>
              <p className="text-gray-400 mb-4">
                Coach professionista certificato ICF, specializzato in sviluppo carriera e leadership.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition">
                  <FaLinkedin />
                </a>
                <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition">
                  <FaInstagram />
                </a>
                <a href="#" className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition">
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Servizi */}
            <div>
              <h4 className="text-lg font-bold mb-4">Servizi</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#percorsi" className="hover:text-purple-400 transition">Sessione Singola</a></li>
                <li><a href="#percorsi" className="hover:text-purple-400 transition">Trasformazione 90</a></li>
                <li><a href="#percorsi" className="hover:text-purple-400 transition">Elite Transformation</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Coaching Aziendale</a></li>
              </ul>
            </div>

            {/* Risorse */}
            <div>
              <h4 className="text-lg font-bold mb-4">Risorse</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#blog" className="hover:text-purple-400 transition">Blog</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Ebook Gratuito</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Quiz Leadership</a></li>
                <li><a href="#testimonianze" className="hover:text-purple-400 transition">Testimonianze</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-bold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">
                Ricevi strategie settimanali per la tua crescita
              </p>
              <form className="space-y-2">
                <input 
                  type="email" 
                  placeholder="La tua email" 
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500 outline-none transition"
                />
                <button className="w-full bg-purple-700 py-2 rounded-lg font-semibold hover:bg-purple-800 transition shadow-md">
                  Iscriviti
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2024 Marco Ferretti. Tutti i diritti riservati.
              </p>
              <div className="flex gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-purple-400 transition">Privacy Policy</a>
                <a href="#" className="hover:text-purple-400 transition">Termini e Condizioni</a>
                <a href="#" className="hover:text-purple-400 transition">Cookie Policy</a>
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-6">
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm flex items-center gap-2">
                <FaAward className="text-purple-400" /> ICF Certified
              </span>
              <span className="px-4 py-2 bg-gray-800 rounded-full text-sm flex items-center gap-2">
                <FaCheckCircle className="text-green-400" /> 500+ Clienti
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile CTA Sticky */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
        <button className="w-full bg-purple-700 text-white py-4 rounded-full font-semibold hover:bg-purple-800 transition flex items-center justify-center gap-2">
          <FaCalendar /> Prenota Call Gratuita
        </button>
      </div>

    </div>
  );
};

export default CoachingPage;

