import { Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import logoImage from 'figma:asset/47eb395303eddfd3aeebbde5cd4a95948f2b9ce0.png';

export function Logo() {
  return (
    <motion.div 
      className="flex items-center gap-2"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src={logoImage}
          alt="FinEdu Logo"
          className="w-full h-full object-contain"
          style={{
            filter: 'drop-shadow(0 4px 20px rgba(137, 197, 109, 0.5))'
          }}
          animate={{
            filter: [
              'drop-shadow(0 4px 20px rgba(137, 197, 109, 0.5))',
              'drop-shadow(0 6px 30px rgba(137, 197, 109, 0.7))',
              'drop-shadow(0 4px 20px rgba(137, 197, 109, 0.5))'
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
      <motion.div
        animate={{ 
          rotate: [0, 15, -15, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Sparkles 
          className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-[#89C56D]"
          style={{
            filter: 'drop-shadow(0 0 8px rgba(137, 197, 109, 0.9)) drop-shadow(0 0 15px rgba(137, 197, 109, 0.6))'
          }}
        />
      </motion.div>
    </motion.div>
  );
}
