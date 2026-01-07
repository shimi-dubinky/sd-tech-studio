import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Star, MessageCircle, BrainCircuit, 
  Code2, Cpu, CheckCircle2 
} from 'lucide-react';
import Contact from './Contact';
import ServiceModal from './ServiceModal';

const phone = "0503413689";
const baseWhatsapp = `https://wa.me/972${phone.substring(1)}`;

export default function App() {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { 
      icon: Code2, 
      title: "Web Engineering", 
      text: "פיתוח אתרי תדמית יוקרתיים ומערכות מבוססות React בסטנדרט הנדסי.",
      fullDescription: "אנחנו לא בונים 'דפים', אנחנו בונים תשתית. אתרים מבוססי SPA המבטיחים חוויית משתמש רציפה, מהירות טעינה אפסית וארכיטקטורת קוד שמאפשרת גדילה עסקית.",
      examples: [
        { name: "Corporate Image Sites", desc: "אתרי תדמית יוקרתיים לעסקים וארגונים עם דגש על מיתוג טכנולוגי וביצועי Lighthouse מקסימליים." },
        { name: "Single Page Applications (SPA)", desc: "ממשקי משתמש מורכבים ומהירים ללא ריענון דף, המבוססים על React & Vite." },
        { name: "Custom Admin Dashboards", desc: "מערכות ניהול פנימיות מותאמות אישית לניהול נתונים, משתמשים ותהליכים עסקיים." },
        { name: "API & System Integration", desc: "חיבור עמוק של האתר למערכות חיצוניות (CRM, סליקה, מסדי נתונים) בצורה מאובטחת." }
      ]
    },
    { 
      icon: Cpu, 
      title: "אוטומציה וסקריפטים", 
      text: "הפיכת משימות ידניות משעממות לתהליכים שרצים מעצמם 24/7.",
      fullDescription: "הכוח האמיתי של העסק שלך נמצא בזמן שמתפנה לך. סקריפטים חכמים ב-Python יכולים לחסוך לך עשרות שעות עבודה בשבוע ולמנוע טעויות אנוש יקרות.",
      examples: [
        { name: "סנכרון לידים אוטומטי", desc: "חיבור בין דפי נחיתה ישירות לוואטסאפ ול-Google Sheets ללא מגע יד." },
        { name: "עיבוד דאטה ודוחות", desc: "סקריפטים שמושכים נתונים ממערכות שונות ומייצרים דוח רווחיות יומי למייל." },
        { name: "אוטומציה של שירות", desc: "שליחת הודעות מעקב ללקוחות לאחר רכישה או תזכורות אוטומטיות לתשלומים." },
        { name: "Web Scraping", desc: "איסוף נתונים אוטומטי מאתרים (מתחרים, מחירים, נדל\"ן) לתוך קובץ מסודר." }
      ]
    },
    { 
      icon: BrainCircuit, 
      title: "בינה מלאכותית (AI)", 
      text: "הטמעת 'מוח' טכנולוגי בעסק שמבין נתונים ומקבל החלטות.",
      fullDescription: "אני לא בונה את ה-ChatGPT הבא, אני רותם את הבינה המלאכותית כדי שהעסק שלך יפסיק רק 'לאסוף נתונים' ויתחיל 'להבין אותם'.",
      examples: [
        { name: "צ'אטבוט מומחה (RAG)", desc: "בוט שמכיר את כל מסמכי העסק שלך ועונה ללקוחות בדיוק לפי הנהלים שלך." },
        { name: "סיווג תוכן חכם", desc: "מערכת שקוראת אימיילים או הודעות ומסווגת אותם לפי דחיפות ונושא באופן אוטומטי." },
        { name: "ניתוח רגשות לקוח", desc: "סריקה של אלפי תגובות ברשתות והבנה מיידית אם הקהל מרוצה או כועס." },
        { name: "חילוץ מידע ממסמכים", desc: "הפיכת קבצי PDF או קבלות סרוקות לטבלאות דאטה מסודרות תוך שניות." }
      ]
    }
  ];

  const products = [
    {
      title: "Launch (תדמית)",
      subtitle: "נוכחות מקצועית ומהירה",
      price: "3,500",
      oldPrice: "4,800",
      features: ["עיצוב פרימיום מבוסס תבנית", "מהירות טעינה Vite/React", "חיבור לוואטסאפ ולידים", "ללא ייעוץ קריאייטיב מורחב", "הזנת תוכן על ידי הלקוח"],
      recommended: false
    },
    {
      title: "Business (צמיחה)",
      subtitle: "האתר שהופך להיות השותף שלך",
      price: "7,800",
      oldPrice: "9,500",
      features: ["עיצוב Custom (וייב אישי)", "אסטרטגיה וכתיבה שיווקית", "אוטומציית לידים בסיסית", "אופטימיזציה מלאה ל-SEO", "ליווי טכנולוגי צמוד"],
      recommended: true
    },
    {
      title: "Enterprise (מלא)",
      subtitle: "Business OS מותאם אישית",
      price: "16,000",
      oldPrice: "22,000",
      features: ["פיתוח Full-Stack מאפס", "שילוב יכולות AI בעסק", "מסדי נתונים MongoDB", "אוטומציות Python מורכבות", "ליווי אסטרטגי לטווח ארוך"],
      recommended: false
    }
  ];

  return (
    <div className="min-h-screen bg-dark text-white font-sans overflow-x-hidden" dir="rtl">
      <nav className="fixed top-0 w-full z-50 glass-panel py-4 px-6 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter text-gradient">SD TECH</div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#services" className="hover:text-indigo-400 transition text-white/70">שירותים</a>
          <a href="#pricing" className="hover:text-indigo-400 transition text-white/70">חבילות</a>
          <a href="#contact-section" className="hover:text-indigo-400 transition text-white/70">יצירת קשר</a>
        </div>
        <a href={baseWhatsapp} target="_blank" rel="noopener noreferrer" className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-full text-sm font-bold transition shadow-lg shadow-indigo-500/20">
          התחל פרויקט
        </a>
      </nav>

      <section className="relative pt-48 pb-32 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/10 blur-[150px] rounded-full -z-10"></div>
        <div className="max-w-6xl mx-auto text-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-400 text-[10px] font-bold tracking-widest uppercase mb-10">
              <Star size={12} fill="currentColor" /> מבצע השקה לזמן מוגבל <Star size={12} fill="currentColor" />
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-10 leading-[1.1] tracking-tight">
              הנדסת תוכנה. עיצוב פרימיום. <br />
              <span className="text-gradient">פתרון טכנולוגי שלם.</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-14 leading-relaxed font-light">
              <strong className="text-white font-semibold text-white">שמעון דובינקי</strong> — מומחה פיתוח המשלב חוויית משתמש High-End עם מערכות חכמות מבוססות נתונים ואוטומציה.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="#pricing" className="btn-primary text-lg px-12 py-4">
                צפה בחבילות <ArrowLeft size={18} className="mr-2" />
              </a>
              <a href={baseWhatsapp} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-all flex items-center gap-2 font-medium">
                <MessageCircle size={20} className="text-green-500" /> ייעוץ מהיר בוואטסאפ
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="py-24 px-6 border-t border-white/5 bg-black/20">
        <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">הערך הטכנולוגי</h2>
            <p className="text-gray-500">פתרונות מותאמים אישית לשיפור יעילות ונוכחות דיגיטלית.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -5 }}
              onClick={() => setSelectedService(s)}
              className="p-8 glass-panel rounded-[2.5rem] border-white/5 hover:border-indigo-500/30 transition-all text-right cursor-pointer group"
            >
              <s.icon className="text-indigo-500 mb-6 group-hover:scale-110 transition-transform" size={32} />
              <h4 className="text-xl font-bold mb-3 text-white">{s.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{s.text}</p>
              <div className="text-indigo-400 text-xs font-bold flex items-center gap-2">
                קרא עוד וראה דוגמאות <ArrowLeft size={14} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">השקעה טכנולוגית חכמה</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto font-light">כל פרויקט מבוצע בסטנדרט הנדסי מלא עם דגש על צמיחת העסק.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((p, i) => {
             const msg = encodeURIComponent(`שלום שמעון, אני מתעניין בחבילת ה-${p.title}. אשמח לקבוע שיחת אפיון.`);
             return (
                <div key={i} className={`relative p-8 rounded-[2rem] glass-panel flex flex-col ${p.recommended ? 'border-indigo-500/50 border-2 shadow-2xl scale-105 z-10' : 'border-white/5'}`}>
                   {p.recommended && <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase">מומלץ לעסקים בצמיחה</div>}
                   <h3 className="text-xl font-bold mb-1 text-white">{p.title}</h3>
                   <p className="text-gray-400 text-xs mb-6">{p.subtitle}</p>
                   <div className="flex items-baseline gap-2 mb-8"><span className="text-4xl font-black text-white">₪{p.price}</span><span className="text-lg text-gray-500 line-through">₪{p.oldPrice}</span></div>
                   <ul className="space-y-4 mb-10 flex-grow">
                      {p.features.map((f, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm italic">
                          <CheckCircle2 size={16} className="text-indigo-400 shrink-0 mt-0.5" />
                          <span>{f}</span>
                        </li>
                      ))}
                   </ul>
                   <a href={`${baseWhatsapp}?text=${msg}`} target="_blank" rel="noopener noreferrer" className={p.recommended ? 'btn-primary w-full text-center py-4' : 'w-full py-4 text-center rounded-full font-bold bg-white/5 hover:bg-white/10 border border-white/10 transition text-white'}>אני רוצה את המבצע</a>
                </div>
             );
          })}
        </div>
      </section>

      <Contact />

      <footer className="py-20 px-6 bg-black text-center border-t border-white/5">
          <p className="text-gray-600 text-[10px] font-mono tracking-[0.4em] uppercase">© {new Date().getFullYear()} SHIMON DUBINKY // ENGINEERED SOLUTIONS</p>
      </footer>

      <ServiceModal 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)} 
        service={selectedService} 
      />
    </div>
  );
}