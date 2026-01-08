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

  useEffect(() => {
    initParticlesEngine(async (engine) => await loadSlim(engine)).then(() => setInit(true));
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    { 
      icon: Code2, title: "הנדסת אתרים", 
      text: "פיתוח מערכות High-End מבוססי React בסטנדרט הנדסי מלא.",
      fullDescription: "אנחנו בונים תשתית דיגיטלית חזקה מבוססת SPA המבטיחה מהירות טעינה אפסית וארכיטקטורה המאפשרת גדילה עסקית עתידית.",
      examples: [
        { name: "Image Systems", desc: "אתרי תדמית יוקרתיים הכוללים מיתוג טכנולוגי וביצועי Lighthouse מקסימליים." },
        { name: "Advanced SPAs", desc: "ממשקי משתמש מהירים ללא ריענון דף, מבוססי Vite & React." },
        { name: "API Integration", desc: "חיבור עמוק ומאובטח של האתר למערכות חיצוניות, מסדי נתונים ו-CRM ארגוניים." }
      ]
    },
    { 
      icon: Cpu, title: "אוטומציה חכמה", 
      text: "טרנספורמציה של תהליכים ידניים למערכות Python אוטונומיות.",
      fullDescription: "שחרור משאבים קריטיים בעסק על ידי החלפת משימות רפטיטיביות בבוטים חכמים וסקריפטים שעובדים 24/7.",
      examples: [
        { name: "Lead Flow Automation", desc: "חיבור מיידי בין דפי נחיתה ומקורות פרסום ל-CRM ולוואטסאפ בזמן אמת." },
        { name: "Data Processing Bots", desc: "עיבוד וניתוח קבצי דאטה גדולים והפקת תובנות אוטומטיות." }
      ]
    },
    { 
      icon: BrainCircuit, title: "פתרונות AI", 
      text: "הטמעת שכבות אינטליגנציה במערכות העסק לניתוח וקבלת החלטות.",
      fullDescription: "שימוש בטכנולוגיות LLM מתקדמות כדי להפוך את המידע העסקי שלך לכלי עבודה חכם שמבין הקשר ומנתח במקומך.",
      examples: [
        { name: "Custom RAG Chatbots", desc: "מנוע AI שמכיר את מסמכי העסק שלך ועונה ללקוחות בדיוק לפי הנהלים שלך." },
        { name: "חילוץ מידע מ-PDF", desc: "קריאה אוטומטית של מסמכים והפיכתם לנתונים דיגיטליים מסודרים בתוך שניות." }
      ]
    }
  ];

  const products = [
    {
      title: "חבילת התנעה", price: "3,500", oldPrice: "4,800", gradient: "from-teal-900/40 to-teal-600/10",
      features: ["פיתוח React מהיר", "עיצוב פרימיום", "חיבור וואטסאפ"], recommended: false
    },
    {
      title: "מנוע צמיחה", price: "7,800", oldPrice: "9,500", gradient: "from-teal-600/30 to-electricBlue-600/30",
      features: ["עיצוב Custom UI", "אסטרטגיה טכנולוגית", "SEO טכני מתקדם"], recommended: true
    },
    {
      title: "פתרון הנדסי מלא", price: "16,000", oldPrice: "22,000", gradient: "from-electricBlue-900/40 to-teal-600/10",
      features: ["Full-Stack App", "פתרונות AI מותאמים", "ניהול MongoDB"], recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans overflow-x-hidden selection:bg-teal-500/30" dir="rtl">
      {init && (
        <Particles id="tsparticles" className="absolute inset-0 z-0" options={{
          fpsLimit: 60, particles: {
            color: { value: "#06b6d4" }, links: { color: "#0d9488", distance: 150, enable: true, opacity: 0.1 },
            move: { enable: true, speed: 0.8 }, number: { value: 45 }, opacity: { value: 0.3 }, size: { value: 1.5 }
          }
        }} />
      )}

      {/* Blobs נושמים - מוחלשים משמעותית כדי לא להפריע לטקסט */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-600/5 rounded-full blur-[120px] animate-blob pointer-events-none"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-electricBlue-600/5 rounded-full blur-[140px] animate-blob pointer-events-none" style={{animationDelay: '2s'}}></div>

      {/* הילת עכבר - רק בדסקטופ */}
      <div className="pointer-events-none fixed inset-0 z-30 opacity-40 transition-opacity duration-500 hidden md:block"
        style={{ background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.12), transparent 80%)` }}
      />

      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-zinc-950/70 border-b border-teal-500/10 py-5 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter cursor-default">
            <span className="bg-gradient-to-r from-teal-400 to-electricBlue-400 bg-clip-text text-transparent">SD Tech</span>
          </div>
          <a href={baseWhatsapp} target="_blank" rel="noopener noreferrer" 
             className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg hover:bg-teal-50 transition-all">
             שיחת אפיון
          </a>
        </div>
      </nav>

      <motion.section style={{ opacity: heroOpacity }} className="relative pt-48 pb-32 px-6 text-center z-10">
        <Tilt tiltMaxAngleX={3} tiltMaxAngleY={3} className="max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-950/50 border border-teal-500/30 text-teal-300 text-[10px] font-bold tracking-widest uppercase mb-10 backdrop-blur-md">
            <Star size={12} className="text-electricBlue-400 animate-pulse" /> מבצע השקה לזמן מוגבל
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter text-white">
            הנדסת תוכנה.<br />
            {/* פתרון "מסגרת קבועה לאותיות" להפרדה מושלמת מהרקע */}
            <span className="bg-gradient-to-r from-teal-300 via-electricBlue-300 to-electricBlue-400 bg-clip-text text-transparent px-2"
                  style={{ 
                    WebkitTextStroke: '1px rgba(255,255,255,0.1)',
                    filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.5))'
                  }}>
             פתרון טכנולוגי שלם.
            </span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-light">
            <span className="text-white font-bold">שמעון דובינקי</span> // מומחה פיתוח המשלב חוויית משתמש פרימיום עם אוטומציה חכמה.
          </p>
          <a href="#pricing" className="bg-white text-black px-10 py-5 rounded-2xl font-bold text-lg hover:bg-teal-50 transition-all inline-flex items-center gap-3 shadow-2xl">גלה את הפתרונות <ArrowLeft /></a>
        </Tilt>
      </motion.section>

      <section id="services" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <Tilt key={i} tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.02}>
              <div onClick={() => setSelectedService(s)} className="h-full p-10 rounded-[2.5rem] border border-teal-500/10 bg-zinc-900/40 backdrop-blur-xl hover:border-electricBlue-500/40 transition-all cursor-pointer group shadow-2xl">
                <div className="inline-flex p-4 bg-teal-500/10 rounded-2xl mb-8 border border-teal-500/20"><s.icon className="text-electricBlue-400" size={32} /></div>
                <h3 className="text-2xl font-black mb-4 text-white tracking-tight">{s.title}</h3>
                <p className="text-zinc-400 mb-8 font-light text-sm leading-relaxed">{s.text}</p>
                <div className="flex items-center gap-2 text-electricBlue-400 font-bold text-[10px] tracking-widest uppercase">חקור את המפרט <ArrowLeft size={16} /></div>
              </div>
            </Tilt>
          ))}
        </div>
      </section>

      <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, i) => {
            const msg = encodeURIComponent(`שלום שמעון, אני מתעניין בחבילת ה-${p.title}.`);
            return (
              <div key={i} className={`relative p-10 rounded-[3rem] bg-gradient-to-br ${p.gradient} backdrop-blur-2xl flex flex-col border ${p.recommended ? 'border-electricBlue-500/50 shadow-2xl md:scale-105 z-20' : 'border-teal-500/10'} transition-all`}>
                {p.recommended && <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-teal-600 to-electricBlue-600 text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-xl">הבחירה המקצועית</div>}
                <h3 className="text-3xl font-black mb-2 tracking-tight">{p.title}</h3>
                <div className="flex flex-col mb-10">
                  <span className="text-5xl font-black text-white">₪{p.price}</span>
                  <span className="text-xl text-zinc-500 line-through opacity-50 font-light">₪{p.oldPrice}</span>
                </div>
                <ul className="space-y-4 mb-12 flex-grow">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-zinc-300 text-sm font-light italic"><CheckCircle2 size={18} className="text-electricBlue-400 shrink-0 mt-0.5" />{f}</li>
                  ))}
                </ul>
                <a href={`${baseWhatsapp}?text=${msg}`} target="_blank" rel="noopener noreferrer" className={`w-full flex justify-center items-center gap-2 py-5 rounded-2xl font-bold transition-all ${p.recommended ? 'bg-gradient-to-r from-fieryOrange-600 to-fieryOrange-500 shadow-xl' : 'bg-white/5 border border-white/10 hover:bg-white/10'}`}>שריין מבצע <Zap size={18}/></a>
              </div>
            );
          })}
        </div>
      </section>

      <footer className="py-20 text-center relative z-10 border-t border-teal-900/30">
        <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.4em]">© {new Date().getFullYear()} Shimon Dubinky // Digital Engineering Solutions</p>
      </footer>

      <ServiceModal isOpen={!!selectedService} onClose={() => setSelectedService(null)} service={selectedService} />
      <Contact />
    </div>
  );
}