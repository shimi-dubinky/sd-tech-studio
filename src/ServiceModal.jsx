import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, MessageCircle, Zap, Sparkles } from 'lucide-react';

const phone = "0503413689";
const baseWhatsapp = `https://wa.me/972${phone.substring(1)}`;

const ServiceModal = ({ isOpen, onClose, service }) => {
  // ניהול כפתור "חזור" במובייל
  useEffect(() => {
    if (isOpen) {
      window.history.pushState({ modalOpen: true }, "");
      const handlePopState = () => onClose();
      window.addEventListener('popstate', handlePopState);
      return () => window.removeEventListener('popstate', handlePopState);
    }
  }, [isOpen, onClose]);

  if (!service) return null;

  const whatsappLink = `${baseWhatsapp}?text=${encodeURIComponent(`היי שמעון, קראתי על ${service.title} ואשמח לשמוע איך זה יכול להתאים לעסק שלי.`)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl bg-zinc-950/50 backdrop-blur-2xl border border-teal-500/20 p-8 md:p-14 rounded-[2.5rem] shadow-2xl overflow-y-auto max-h-[90vh]"
            dir="rtl"
          >
            <button onClick={onClose} className="absolute top-6 left-6 text-zinc-500 hover:text-white transition-all"><X size={28} /></button>

            <div className="flex items-center gap-5 mb-10">
              <div className="p-3 bg-teal-500/10 rounded-2xl border border-teal-500/20">
                <service.icon size={32} className="text-electricBlue-400" />
              </div>
              <h2 className="text-3xl font-black text-white tracking-tight">{service.title}</h2>
            </div>

            <p className="text-zinc-300 text-lg leading-relaxed mb-10 font-light">{service.fullDescription}</p>

            <div className="space-y-6 mb-12">
              <h4 className="text-white font-bold text-xl border-b border-white/5 pb-3">מה כלול בפתרון?</h4>
              <div className="grid grid-cols-1 gap-4">
                {service.examples.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl border border-white/5">
                    <CheckCircle2 size={20} className="text-teal-400 mt-1 shrink-0" />
                    <div>
                      <h5 className="text-white font-bold text-base mb-1">{item.name}</h5>
                      <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.a 
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              href={whatsappLink} target="_blank" rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-5 px-8 rounded-2xl font-bold bg-gradient-to-r from-teal-600 to-electricBlue-600 text-white text-lg shadow-xl shadow-teal-900/30"
            >
              <MessageCircle size={22} /> בוא נדבר על זה <Zap size={18} className="animate-pulse" />
            </motion.a>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;