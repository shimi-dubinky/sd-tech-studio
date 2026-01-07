import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, Star, MessageCircle, BrainCircuit, 
  Code2, Cpu, CheckCircle2, Mail, Zap, Rocket, Sparkles
} from 'lucide-react';
import Tilt from 'react-parallax-tilt';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Contact from './Contact';
import ServiceModal from './ServiceModal';

const phone = "0503413689";
const baseWhatsapp = `https://wa.me/972${phone.substring(1)}`;
const email = "shimi659d@gmail.com";

export default function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [init, setInit] = useState(false);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // אתחול מנוע החלקיקים
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particlesOptions = {
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      events: { onHover: { enable: true, mode: "grab" }, resize: true },
      modes: { grab: { distance: 150, links: { opacity: 0.2 } } },
    },
    particles: {
      color: { value: "#06b6d4" },
      links: { color: "#0d9488", distance: 150, enable: true, opacity: 0.2, width: 1 },
      move: { enable: true, speed: 1, direction: "none", outModes: { default: "bounce" } },
      number: { density: { enable: true, area: 800 }, value: 50 },
      opacity: { value: 0.3 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 2 } },
    },
    detectRetina: true,
  };

  const services = [
    { 
      icon: Code2, title: "Web Engineering", 
      text: "פיתוח מערכות High-End מבוססי React בסטנדרט הנדסי.",
      fullDescription: "אנחנו בונים תשתית דיגיטלית חזקה מבוססת SPA המבטיחים מהירות טעינה אפסית וארכיטקטורה המאפשרת גדילה עסקית עתידית.",
      examples: [
        { name: "Corporate Image Systems", desc: "אתרי תדמית יוקרתיים הכוללים מיתוג טכנולוגי וביצועי Lighthouse מקסימליים." },
        { name: "Single Page Applications", desc: "ממשקי משתמש מהירים ללא ריענון דף, מבוססי Vite & React." },
        { name: "Custom Admin Dashboards", desc: "מערכות ניהול פנימיות מותאמות אישית לניהול נתונים ותהליכים מורכבים." }
      ]
    },
    { 
      icon: Cpu, title: "אוטומציה חכמה", 
      text: "טרנספורמציה של תהליכים ידניים למערכות Python אוטונומיות.",
      fullDescription: "שחרור משאבים בעסק על ידי החלפת משימות רפטיטיביות בבוטים חכמים וסקריפטים שעובדים 24/7 ללא טעויות אנוש.",
      examples: [
        { name: "Lead Flow Automation", desc: "סנכרון מיידי של לידים ממקורות שונים ל-CRM ולוואטסאפ." },
        { name: "Data Processing Bots", desc: "עיבוד וניתוח קבצי דאטה גדולים והפקת תובנות אוטומטיות." }
      ]
    },
    { 
      icon: BrainCircuit, title: "AI & LLM Solutions", 
      text: "הטמעת שכבת אינטליגנציה מלאכותית לקבלת החלטות מבוססת דאטה.",
      fullDescription: "שימוש בטכנולוגיות LLM מתקדמות כדי להפוך את המידע העסקי שלך לכלי עבודה חכם שמבין הקשר ומנתח במקומך.",
      examples: [
        { name: "Custom RAG Chatbots", desc: "עוזרים וירטואליים המאומנים על הידע הספציפי של העסק שלך." },
        { name: "Intelligent Document Processing", desc: "חילוץ תובנות ונתונים ממסמכים לא מובנים כמו חוזים וחשבוניות." }
      ]
    }
  ];

  const products = [
    {
      title: "Launch", subtitle: "תשתית דיגיטלית מקצועית", price: "3,500", oldPrice: "4,800",
      features: ["פיתוח React/Vite מהיר", "עיצוב פרימיום (תבנית)", "אינטגרציית וואטסאפ", "אופטימיזציית ביצועים"],
      recommended: false, gradient: "from-teal-900/40 to-teal-600/10"
    },
    {
      title: "Growth Engine", subtitle: "מערכת לצמיחה עסקית", price: "7,800", oldPrice: "9,500",
      features: ["עיצוב Custom UI/UX", "אסטרטגיה וכתיבה שיווקית", "אוטומציית לידים בסיסית", "SEO טכני מתקדם"],
      recommended: true, gradient: "from-teal-600/30 via-electricBlue-600/30 to-teal-600/30"
    },
    {
      title: "Enterprise OS", subtitle: "פתרון הנדסי מלא", price: "16,000", oldPrice: "22,000",
      features: ["ארכיטקטורת Full-Stack", "פתרונות AI מותאמים", "פיתוח Python מורכב", "ניהול דאטה (MongoDB)"],
      recommended: false, gradient: "from-electricBlue-900/40 to-teal-600/10"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans overflow-x-hidden selection:bg-electricBlue-500/30" dir="rtl">
      {/* רקע חלקיקים */}
      {init && (
        <Particles id="tsparticles" options={particlesOptions} className="absolute inset-0 z-0 pointer-events-none" />
      )}

      {/* אפקט עקיפת עכבר */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 transition duration-300"
        style={{ background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.15), transparent 80%)` }}
      />

      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }} animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 backdrop-blur-xl bg-zinc-950/70 border-b border-teal-500/10 py-5 px-6"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter uppercase">
            <span className="bg-gradient-to-r from-teal-400 via-electricBlue-400 to-teal-400 bg-clip-text text-transparent">SD Tech</span>
          </div>
          <div className="hidden md:flex gap-10 text-sm font-medium">
            <a href="#services" className="hover:text-electricBlue-400 transition-all text-zinc-400">פתרונות</a>
            <a href="#pricing" className="hover:text-electricBlue-400 transition-all text-zinc-400">חבילות</a>
          </div>
          <motion.a 
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
            href={baseWhatsapp} target="_blank" rel="noopener noreferrer" 
            className="bg-gradient-to-r from-teal-600 to-electricBlue-600 text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg shadow-electricBlue-500/20"
          >
            שיחת אפיון
          </motion.a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section style={{ opacity: heroOpacity, scale: heroScale }} className="relative pt-64 pb-40 px-6 text-center z-10">
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} className="max-w-5xl mx-auto">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electricBlue-500/20 blur-[180px] rounded-full animate-pulse -z-10"></div>
          <h1 className="text-6xl md:text-9xl font-black mb-10 leading-[0.9] tracking-tighter">
            הנדסת תוכנה.<br />
            <span className="bg-gradient-to-r from-teal-400 via-electricBlue-400 to-fieryOrange-400 bg-clip-text text-transparent">
             פתרון טכנולוגי שלם.
            </span>
          </h1>
          <p className="text-zinc-400 text-xl md:text-3xl max-w-4xl mx-auto mb-16 font-light leading-relaxed">
            <span className="text-white font-bold">שמעון דובינקי</span> // מומחה פיתוח המשלב חוויית משתמש פרימיום עם אוטומציה חכמה ובינה מלאכותית.
          </p>
          <a href="#pricing" className="bg-white text-black px-14 py-6 rounded-2xl font-bold text-xl hover:bg-teal-50 transition-all inline-flex items-center gap-4 shadow-2xl shadow-white/10">
            גלה את הפתרונות <ArrowLeft size={24}/>
          </a>
        </Tilt>
      </motion.section>

      {/* Services Grid */}
      <section id="services" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Tilt key={i} tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.02}>
              <div 
                onClick={() => setSelectedService(s)}
                className="h-full p-12 rounded-[2.5rem] border border-teal-500/10 bg-zinc-900/40 backdrop-blur-xl hover:border-electricBlue-500/40 transition-all duration-500 cursor-pointer group shadow-2xl shadow-black/20"
              >
                <div className="inline-flex p-5 bg-gradient-to-br from-teal-500/20 to-electricBlue-500/10 rounded-3xl mb-8 border border-teal-500/20">
                  <s.icon className="text-electricBlue-400" size={40} />
                </div>
                <h3 className="text-3xl font-black mb-5 text-white">{s.title}</h3>
                <p className="text-zinc-400 mb-10 font-light leading-relaxed text-lg">{s.text}</p>
                <div className="flex items-center gap-3 text-electricBlue-400 font-bold uppercase tracking-wider text-sm">
                  חקור את המפרט <ArrowLeft size={20} />
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </section>

      {/* Pricing Table */}
      <section id="pricing" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, i) => {
            const msg = encodeURIComponent(`שלום שמעון, אני מתעניין בחבילת ה-${p.title}.`);
            return (
              <Tilt key={i} tiltMaxAngleX={3} tiltMaxAngleY={3}>
                <div className={`relative p-12 rounded-[3rem] bg-gradient-to-br ${p.gradient} backdrop-blur-2xl flex flex-col border ${p.recommended ? 'border-electricBlue-500/50 shadow-2xl md:scale-105 z-20' : 'border-teal-500/10'} transition-all duration-500`}>
                  {p.recommended && (
                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-600 to-electricBlue-600 text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-3 shadow-xl">
                      <Rocket size={16} fill="currentColor" /> הבחירה המקצועית
                    </div>
                  )}
                  <div className="mb-10">
                    <h3 className="text-4xl font-black mb-3 text-white">{p.title}</h3>
                    <p className="text-teal-200 text-base font-medium">{p.subtitle}</p>
                  </div>
                  <div className="flex items-baseline gap-4 mb-12">
                    <span className="text-6xl font-black">₪{p.price}</span>
                    <span className="text-2xl text-zinc-500 line-through decoration-2">₪{p.oldPrice}</span>
                  </div>
                  <ul className="space-y-5 mb-14 flex-grow">
                    {p.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-zinc-300 text-base font-light italic">
                        <CheckCircle2 size={22} className="text-electricBlue-400 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a 
                    href={`${baseWhatsapp}?text=${msg}`} target="_blank" rel="noopener noreferrer"
                    className={`w-full flex justify-center items-center gap-3 py-6 rounded-2xl font-bold text-lg transition-all ${
                      p.recommended ? 'bg-gradient-to-r from-fieryOrange-600 to-fieryOrange-500 text-white shadow-xl' : 'bg-white/5 hover:bg-white/10 border border-white/10 text-white'
                    }`}
                  >
                    שריין את המבצע <Zap size={20}/>
                  </a>
                </div>
              </Tilt>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 text-center relative z-10 border-t border-teal-900/30">
        <p className="text-xs font-mono text-zinc-600 uppercase tracking-[0.3em]">
          © {new Date().getFullYear()} Shimon Dubinky // Engineered Solutions
        </p>
      </footer>

      {/* Modals & Contact */}
      <ServiceModal isOpen={!!selectedService} onClose={() => setSelectedService(null)} service={selectedService} />
      <Contact />
    </div>
  );
}