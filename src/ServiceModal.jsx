import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, MessageCircle, Zap, Sparkles } from 'lucide-react';

const phone = "0503413689";
const baseWhatsapp = `https://wa.me/972${phone.substring(1)}`;

const ServiceModal = ({ isOpen, onClose, service }) => {
  if (!service) return null;

  const whatsappLink = `${baseWhatsapp}?text=${encodeURIComponent(`היי שמעון, קראתי על ${service.title} ואשמח לשמוע איך זה יכול להתאים לעסק שלי.`)}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* רקע כהה יותר לדיוק הניגודיות */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-2xl"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25 }}
            // שדרוג Glassmorphism עם צבעי ה-Teal החדשים
            className="relative w-full max-w-3xl bg-zinc-950/50 backdrop-blur-2xl border border-teal-500/20 p-10 md:p-14 rounded-[2.5rem] shadow-2xl shadow-teal-900/20 overflow-y-auto max-h-[90vh]"
            dir="rtl"
          >
            {/* אלמנט תאורה אחורית בצבע החדש */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-electricBlue-500/10 blur-[150px] rounded-full pointer-events-none"></div>
            
            <button 
              onClick={onClose}
              className="absolute top-8 left-8 text-gray-500 hover:text-electricBlue-400 transition-all hover:rotate-90 duration-300"
            >
              <X size={24} />
            </button>

            <div className="flex items-center gap-6 mb-12">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="p-4 bg-gradient-to-br from-teal-500/20 to-electricBlue-500/10 rounded-3xl border border-teal-500/30"
              >
                <service.icon size={40} className="text-electricBlue-400" />
              </motion.div>
              <div>
                <h2 className="text-4xl font-black text-white tracking-tight mb-2">{service.title}</h2>
                <div className="h-1.5 w-24 bg-gradient-to-r from-teal-500 to-electricBlue-500 rounded-full"></div>
              </div>
            </div>

            <p className="text-gray-300 text-lg leading-relaxed mb-12 font-light">
              {service.fullDescription}
            </p>

            <div className="space-y-8 mb-14">
              <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                <Sparkles size={20} className="text-electricBlue-400" />
                <h4 className="text-white font-bold text-xl tracking-wide">מפרט טכנולוגי</h4>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {service.examples.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * idx }}
                    className="group flex items-start gap-4 p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-electricBlue-500/30 transition-all duration-300"
                  >
                    <div className="mt-1 text-teal-400 group-hover:text-electricBlue-400 transition-colors">
                      <CheckCircle2 size={20} />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-white font-bold text-base mb-1">{item.name}</h5>
                      <p className="text-gray-400 text-sm leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.a 
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -10px rgba(6, 182, 212, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              // כפתור גרדיאנט חדש - Teal to Electric Blue
              className="w-full flex items-center justify-center gap-3 py-5 px-8 rounded-2xl font-bold bg-gradient-to-r from-teal-600 to-electricBlue-600 hover:from-teal-500 hover:to-electricBlue-500 text-white text-lg shadow-xl shadow-teal-900/30 transition-all relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[100%] hover:translate-x-[100%] transition-transform duration-1000"></div>
              <MessageCircle size={22} />
              <span className="relative z-10">בוא נדבר על הפתרון הזה</span>
              <Zap size={18} className="animate-pulse relative z-10" />
            </motion.a>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;