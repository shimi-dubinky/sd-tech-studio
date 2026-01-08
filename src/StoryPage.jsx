import React from 'react';
// הורדנו את האנימציות, השארנו רק עיצוב סטטי לצילום מסך
import { Rocket, Zap, Sparkles, MousePointerClick, Code2 } from 'lucide-react';

export default function StoryPage() {
  return (
    // מיכל ראשי בגודל מסך מלא של טלפון עם הרקע המקורי
    <div className="h-[100dvh] w-full bg-zinc-950 text-white font-sans overflow-hidden relative flex flex-col items-center justify-between py-16 px-6" dir="rtl">
      
      {/* אלמנטים ברקע (Blobs) - סטטיים לצילום */}
      <div className="absolute top-[-10%] left-[-20%] w-[400px] h-[400px] bg-teal-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-20%] w-[400px] h-[400px] bg-electricBlue-600/20 rounded-full blur-[100px] pointer-events-none opacity-70"></div>

      {/* לוגו עליון */}
      <div className="flex flex-col items-center relative z-10 mt-2">
        <div className="text-4xl font-black tracking-[0.15em] uppercase text-white">
          SD TECH
        </div>
        <div className="text-[11px] text-teal-400 tracking-[0.3em] font-bold uppercase mt-1">
          SHIMON DUBINKY
        </div>
      </div>

      {/* תוכן מרכזי - המסר השיווקי החדש */}
      <div className="text-center relative z-10 flex flex-col items-center mt-8">
        {/* תגית עליונה */}
        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal-950/60 border border-teal-500/30 text-teal-300 text-sm font-bold tracking-widest uppercase mb-8 backdrop-blur-md shadow-xl">
          <Sparkles size={16} className="text-electricBlue-400" /> 
          פתרונות דיגיטליים מתקדמים
        </div>

        {/* כותרת ראשית פונה ללקוח */}
        <h1 className="text-5xl font-black mb-6 leading-[1.15] tracking-tighter text-white">
         רוצה שהעסק שלך<br />
          <span className="bg-gradient-to-r from-teal-300 via-electricBlue-300 to-electricBlue-400 bg-clip-text text-transparent px-2"
                style={{ 
                  WebkitTextStroke: '1px rgba(255,255,255,0.1)',
                  filter: 'drop-shadow(0 0 25px rgba(45, 212, 191, 0.4))'
                }}>
          יעבוד חכם יותר?
          </span>
        </h1>

        <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 max-w-[320px] mx-auto mb-10 text-zinc-100 text-sm font-semibold tracking-wide leading-relaxed">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.8)]"></div>
            <span>פיתוח אתרים <span className="text-teal-300 font-black">High-End</span></span>
          </div>
          
          <div className="flex items-center gap-2 whitespace-nowrap">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.8)]"></div>
            <span>אוטומציות עסקיות</span>
          </div>

          <div className="flex items-center gap-2 whitespace-nowrap">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-400 shadow-[0_0_10px_rgba(45,212,191,0.8)]"></div>
            <span>מערכות מותאמות אישית</span>
          </div>
        </div>

        {/* טקסט משני מניע לפעולה */}
        <p className="text-zinc-300 text-xl max-w-[300px] mx-auto mb-12 font-light leading-relaxed">
       הגדילו רווחים עם פתרונות דיגיטליים מתוחכמים ויוקרתיים.
        </p>

        {/* אייקונים ויזואליים לחיזוק המסר */}
        <div className="flex gap-6 opacity-90 mb-8 bg-white/5 p-5 rounded-3xl border border-white/10 shadow-lg">
            <Rocket className="text-teal-400" size={34} />
            <Code2 className="text-zinc-200" size={34} />
            <Zap className="text-electricBlue-400" size={34} />
        </div>
      </div>

      {/* הנעה לפעולה תחתונה - סטטית וברורה */}
      <div className="text-center relative z-10 flex flex-col items-center gap-4 mb-16">
        <p className="text-white text-lg font-bold uppercase tracking-wider drop-shadow-md">
          לחצו על הקישור למטה
        </p>
        {/* אייקון קליק סטטי שמצביע על מקום הקישור בווטסאפ */}
        <MousePointerClick size={42} className="text-teal-400 drop-shadow-neon-glow" />
      </div>
    </div>
  );
}