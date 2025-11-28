import { Download, Check, Zap } from 'lucide-react';
import { Logo } from './components/Logo';
import { DownloadButton } from './components/DownloadButton';
import { VoiceControl } from './components/VoiceControl';
import { motion } from 'motion/react';
import heroImage from 'figma:asset/a758189618ffffa8d3e8ac06348262d011e44d99.png';

export default function App() {
  return (
    <div className="relative w-full min-h-screen md:h-screen overflow-y-auto md:overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="FinEdu Hero"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-[#4B4B4B] via-[#4B4B4B]/70 md:via-[#4B4B4B]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#4B4B4B]/30 via-transparent to-[#4B4B4B]/20" />
      </div>

      {/* Decorative green glow */}
      <motion.div 
        className="absolute top-20 left-10 md:left-40 w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(137, 197, 109, 0.2) 0%, transparent 70%)'
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <header className="px-4 sm:px-6 md:px-12 py-3 md:py-5">
          <Logo />
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col md:flex-row items-start md:items-start justify-between px-4 sm:px-6 md:px-12 max-w-7xl w-full pt-4 md:pt-12 pb-6 md:pb-0 gap-6 md:gap-0">
          <div className="max-w-2xl w-full">
            {/* Question */}
            <motion.p 
              className="text-white/95 text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4 max-w-2xl leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.7), 0 0 20px rgba(255, 255, 255, 0.1)'
              }}
            >
              ¿Qué tienes que hacer para<br/>
              organizar tus finanzas?
            </motion.p>

            {/* Hero Headline */}
            <motion.h1 
              className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 md:mb-6 leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <motion.span
                className="block"
                animate={{
                  textShadow: [
                    '0 4px 12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(137, 197, 109, 0.15)',
                    '0 4px 12px rgba(0, 0, 0, 0.8), 0 0 60px rgba(137, 197, 109, 0.3)',
                    '0 4px 12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(137, 197, 109, 0.15)'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{
                  textShadow: '0 4px 12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(137, 197, 109, 0.15)'
                }}
              >
                ¡Hablar!
              </motion.span>
              <span 
                className="block"
                style={{
                  textShadow: '0 4px 12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(137, 197, 109, 0.15)'
                }}
              >
                Nosotros
              </span>
              <span 
                className="block"
                style={{
                  textShadow: '0 4px 12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(137, 197, 109, 0.15)'
                }}
              >
                hacemos el resto.
              </span>
            </motion.h1>

            {/* Features */}
            <motion.div
              className="space-y-2 md:space-y-2.5"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#89C56D]" strokeWidth={3} />
                <motion.span 
                  className="text-[#89C56D] text-base md:text-lg"
                  style={{
                    textShadow: '0 0 20px rgba(137, 197, 109, 1), 0 0 40px rgba(137, 197, 109, 0.6), 0 2px 6px rgba(0, 0, 0, 0.8)',
                    fontWeight: 600
                  }}
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(137, 197, 109, 1), 0 0 40px rgba(137, 197, 109, 0.6), 0 2px 6px rgba(0, 0, 0, 0.8)',
                      '0 0 30px rgba(137, 197, 109, 1), 0 0 60px rgba(137, 197, 109, 0.8), 0 2px 6px rgba(0, 0, 0, 0.8)',
                      '0 0 20px rgba(137, 197, 109, 1), 0 0 40px rgba(137, 197, 109, 0.6), 0 2px 6px rgba(0, 0, 0, 0.8)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Tus números claros.
                </motion.span>
              </motion.div>
              
              <motion.div 
                className="flex items-center gap-2"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#89C56D]" strokeWidth={3} />
                <motion.span 
                  className="text-[#89C56D] text-base md:text-lg"
                  style={{
                    textShadow: '0 0 20px rgba(137, 197, 109, 1), 0 0 40px rgba(137, 197, 109, 0.6), 0 2px 6px rgba(0, 0, 0, 0.8)',
                    fontWeight: 600
                  }}
                  animate={{
                    textShadow: [
                      '0 0 20px rgba(137, 197, 109, 1), 0 0 40px rgba(137, 197, 109, 0.6), 0 2px 6px rgba(0, 0, 0, 0.8)',
                      '0 0 30px rgba(137, 197, 109, 1), 0 0 60px rgba(137, 197, 109, 0.8), 0 2px 6px rgba(0, 0, 0, 0.8)',
                      '0 0 20px rgba(137, 197, 109, 1), 0 0 40px rgba(137, 197, 109, 0.6), 0 2px 6px rgba(0, 0, 0, 0.8)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  Tus decisiones más fáciles.
                </motion.span>
              </motion.div>
            </motion.div>

            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 md:gap-2.5 px-4 md:px-5 py-2 md:py-2.5 rounded-full backdrop-blur-sm mt-4 md:mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              style={{
                background: 'linear-gradient(135deg, rgba(137, 197, 109, 0.25) 0%, rgba(137, 197, 109, 0.15) 100%)',
                border: '2px solid rgba(137, 197, 109, 0.6)',
                filter: 'drop-shadow(0 0 20px rgba(137, 197, 109, 0.7))',
                boxShadow: '0 0 30px rgba(137, 197, 109, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Zap className="w-4 h-4 md:w-5 md:h-5 text-[#89C56D]" fill="#89C56D" strokeWidth={2} />
              </motion.div>
              <span 
                className="text-[#89C56D] text-sm md:text-base"
                style={{
                  textShadow: '0 0 25px rgba(137, 197, 109, 1), 0 0 50px rgba(137, 197, 109, 0.8), 0 2px 6px rgba(0, 0, 0, 0.9)',
                  fontWeight: 700,
                  letterSpacing: '0.02em'
                }}
              >
                IA que entiende tu voz
              </span>
            </motion.div>
          </div>

          {/* CTA Button - Right Side on desktop, below on mobile */}
          <motion.div
            className="flex flex-col items-center md:items-center gap-4 md:gap-6 w-full md:w-auto mt-auto md:mt-0 pb-4 md:pb-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <DownloadButton />
            
            {/* Voice Control Component */}
            <VoiceControl />
          </motion.div>
        </main>
      </div>
    </div>
  );
}
