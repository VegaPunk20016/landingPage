import { Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { CountdownBanner } from './CountdownBanner';

// Icono de Google Play Store
const PlayStoreIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
  </svg>
);

export function DownloadButton() {
  const [showBanner, setShowBanner] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    if (!showBanner) return;

    const calculateTimeLeft = () => {
      const targetDate = new Date('2025-12-05T00:00:00');
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [showBanner]);

  const handleClick = () => {
    setShowBanner(true);
  };

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-sm">
      {/* Botón principal de descarga */}
      <motion.button
        className="relative group w-full"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleClick}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle, rgba(137, 197, 109, 0.5) 0%, rgba(137, 197, 109, 0.2) 50%, transparent 70%)',
            filter: 'blur(25px)'
          }}
        />

        {/* Main button */}
        <motion.div
          className="relative px-[clamp(2rem,5vw,4rem)] py-[clamp(0.875rem,2vh,1.5rem)] rounded-full shadow-xl overflow-hidden w-full"
          style={{
            background: 'linear-gradient(135deg, #89C56D 0%, #7AB05D 50%, #6B9A4D 100%)',
            boxShadow: '0 10px 40px rgba(137, 197, 109, 0.4), 0 0 0 1px rgba(137, 197, 109, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}
          animate={{
            boxShadow: [
              '0 10px 40px rgba(137, 197, 109, 0.4), 0 0 0 1px rgba(137, 197, 109, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              '0 15px 50px rgba(137, 197, 109, 0.6), 0 0 0 1px rgba(137, 197, 109, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
              '0 10px 40px rgba(137, 197, 109, 0.4), 0 0 0 1px rgba(137, 197, 109, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Animated shine effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            style={{
              transform: 'skewX(-20deg) translateX(-100%)'
            }}
            animate={{
              translateX: ['-100%', '200%']
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeInOut"
            }}
          />

          {/* Button content */}
          <div className="relative flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3">
            <motion.div
              animate={{
                y: [0, -3, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <PlayStoreIcon className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
            </motion.div>
            <span 
              className="text-white text-lg sm:text-xl md:text-2xl tracking-tight"
              style={{
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.2)',
                fontWeight: 600
              }}
            >
              Descargar app
            </span>
          </div>

          {/* Bottom gradient accent */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/15 to-transparent pointer-events-none"
          />
          
          {/* Top highlight */}
          <div 
            className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"
          />
        </motion.div>
      </motion.button>

      {/* Botón secundario "Prueba la aplicación" */}
      <motion.a
        href="/app-release.apk"
        download="FinEdu-App.apk"
        className="relative group cursor-pointer w-full"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {/* Glow effect */}
        <motion.div
          className="absolute -inset-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle, rgba(30, 41, 59, 0.4) 0%, rgba(30, 41, 59, 0.2) 50%, transparent 70%)',
            filter: 'blur(20px)'
          }}
        />

        {/* Main button */}
        <div
          className="relative px-[clamp(2rem,5vw,3.5rem)] py-[clamp(0.75rem,1.5vh,1rem)] rounded-full shadow-lg overflow-hidden w-full"
          style={{
            background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(137, 197, 109, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
          }}
        >
          {/* Button content */}
          <div className="relative flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3">
            <Download className="w-4 h-4 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" strokeWidth={2.5} />
            <span 
              className="text-white text-[clamp(0.875rem,2vw,1.25rem)] tracking-tight"
              style={{
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(255, 255, 255, 0.1)',
                fontWeight: 600
              }}
            >
              Prueba la aplicación
            </span>
          </div>

          {/* Bottom gradient accent */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"
          />
          
          {/* Top highlight */}
          <div 
            className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"
          />
        </div>
      </motion.a>

      {/* Banner de cuenta regresiva */}
      <AnimatePresence>
        {showBanner && (
          <CountdownBanner
            timeLeft={timeLeft}
            onClose={() => setShowBanner(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}