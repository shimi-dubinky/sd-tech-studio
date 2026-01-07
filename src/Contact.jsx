import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail } from 'lucide-react';

const Contact = () => {
  const email = "shimi659d@gmail.com";
  const phone = "0503413689";
  const whatsappLink = `https://wa.me/972${phone.substring(1)}?text=${encodeURIComponent("שלום שמעון, הגעתי מהאתר ואשמח להתייעץ איתך.")}`;

  return (
    <section id="contact-section" className="py-24 px-6 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto glass-panel p-12 rounded-[2rem] text-center border border-white/5 relative overflow-hidden"
      >
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-indigo-500/5 blur-[80px] rounded-full"></div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">יצירת קשר ישיר</h2>
        <p className="text-gray-400 text-lg mb-12 font-light max-w-xl mx-auto">
          זמין עבורך לייעוץ טכנולוגי, אפיון פתרונות AI או פיתוח מערכות מותאמות אישית.
        </p>

        <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary w-full md:w-auto flex items-center justify-center gap-3 px-10 py-4 text-lg shadow-indigo-500/10"
          >
            <MessageCircle size={22} />
            וואטסאפ עסקי
          </a>

          <a 
            href={`mailto:${email}`}
            className="w-full md:w-auto flex items-center justify-center gap-3 px-10 py-4 rounded-full font-bold bg-white/5 hover:bg-white/10 border border-white/10 transition text-white text-lg"
          >
            <Mail size={22} className="text-indigo-400" />
            הודעת אימייל
          </a>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center gap-8 text-gray-500 font-mono text-xs tracking-[0.2em] uppercase">
          <div className="flex items-center gap-2">
            <span className="text-indigo-500/40">DIRECT:</span> {phone}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-indigo-500/40">OFFICE:</span> {email}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;