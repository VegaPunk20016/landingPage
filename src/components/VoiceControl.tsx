import { Mic, Volume2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const transactions = [
  "Ingreso de salario $15,000",
  "Gasto en supermercado $850",
  "Ingreso por freelance $3,500",
  "Gasto en gasolina $600",
  "Gasto en restaurante $450",
  "Ingreso de bono $2,000",
  "Gasto en Netflix $199",
  "Ingreso de venta $1,200",
  "Gasto en Uber $250",
  "Gasto en farmacia $380"
];

export function VoiceControl() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const waveCount = 15;
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % transactions.length);
    }, 3000); // Cambia cada 3 segundos
    
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="relative rounded-3xl p-6 backdrop-blur-sm"
      style={{
        background: 'linear-gradient(145deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%)',
        border: '1px solid rgba(137, 197, 109, 0.2)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(137, 197, 109, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
      }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center gap-4 w-64">
        {/* Microphone Circle */}
        <motion.div
          className="relative w-20 h-20 rounded-full flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #89C56D 0%, #7AB05D 100%)',
            boxShadow: '0 8px 24px rgba(137, 197, 109, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
          }}
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              '0 8px 24px rgba(137, 197, 109, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              '0 10px 30px rgba(137, 197, 109, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
              '0 8px 24px rgba(137, 197, 109, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Pulsing ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              border: '2px solid rgba(137, 197, 109, 0.5)'
            }}
            animate={{
              scale: [1, 1.4, 1.4],
              opacity: [0.5, 0, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut"
            }}
          />
          
          <Mic className="w-9 h-9 text-white" strokeWidth={2.5} />
        </motion.div>

        {/* Listening Text */}
        <div className="flex items-center gap-2">
          <Volume2 className="w-4 h-4 text-[#89C56D]" />
          <motion.span
            className="text-[#89C56D] text-sm"
            style={{
              textShadow: '0 0 15px rgba(137, 197, 109, 0.8), 0 0 30px rgba(137, 197, 109, 0.4)'
            }}
            animate={{
              opacity: [1, 0.6, 1]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Escuchando...
          </motion.span>
        </div>

        {/* Voice Input Text with Animation */}
        <div className="h-12 flex items-center justify-center w-full">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentIndex}
              className="text-white text-center"
              style={{
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)'
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              "{transactions[currentIndex]}"
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Audio Wave Visualization */}
        <div className="flex items-center justify-center gap-1 h-12">
          {Array.from({ length: waveCount }).map((_, index) => {
            const isCenter = Math.abs(index - waveCount / 2) < 2;
            const height = isCenter ? 100 : 30 + Math.random() * 70;
            
            return (
              <motion.div
                key={index}
                className="w-1 rounded-full"
                style={{
                  background: 'linear-gradient(180deg, #89C56D 0%, #7AB05D 100%)',
                  boxShadow: '0 0 8px rgba(137, 197, 109, 0.6)'
                }}
                initial={{ height: '20%' }}
                animate={{
                  height: [`${height}%`, `${30 + Math.random() * 70}%`, `${height}%`]
                }}
                transition={{
                  duration: 0.8 + Math.random() * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.05
                }}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
