import { Download } from 'lucide-react';
import { motion } from 'motion/react';

export function DownloadButton() {
  const handleClick = () => {
    window.open('https://play.google.com/store/apps/details?id=com.finedu.app', '_blank');
  };

  return (
    <motion.button
      className="relative group"
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
        className="relative px-10 py-4 sm:px-12 sm:py-5 md:px-16 md:py-6 rounded-full shadow-xl overflow-hidden"
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
            <Download className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" strokeWidth={2.5} />
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
  );
}
