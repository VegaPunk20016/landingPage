import { motion } from 'motion/react';
import { Clock, X } from 'lucide-react';

interface CountdownBannerProps {
  timeLeft: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  onClose: () => void;
}

export function CountdownBanner({ timeLeft, onClose }: CountdownBannerProps) {
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div 
        className="relative px-[4vw] md:px-[6vw] py-[2vh] md:py-[3vh]"
        style={{
          background: 'linear-gradient(180deg, rgba(75, 75, 75, 0.98) 0%, rgba(75, 75, 75, 0.95) 100%)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(137, 197, 109, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
        }}
      >
        {/* Glow decorativo */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at top, rgba(137, 197, 109, 0.3) 0%, transparent 70%)'
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div className="relative max-w-7xl mx-auto">
          {/* Close button */}
          <motion.button
            className="absolute -top-[1vh] right-0 md:right-0 p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={2.5} />
          </motion.button>

          {/* Header */}
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-[2vh]">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Clock className="w-5 h-5 md:w-6 md:h-6 text-[#89C56D]" strokeWidth={2.5} />
            </motion.div>
            <h3 
              className="text-white text-[clamp(1rem,3vw,1.5rem)] tracking-tight"
              style={{
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)',
                fontWeight: 600
              }}
            >
              Lanzamiento Oficial
            </h3>
          </div>

          {/* Countdown */}
          <div className="flex items-center justify-center gap-[3vw] md:gap-[2vw]">
            {/* Days */}
            <motion.div
              className="flex flex-col items-center min-w-[15vw] md:min-w-[8vw]"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <motion.div
                className="relative px-[2vw] py-[1.5vh] md:px-[1.5vw] md:py-[2vh] rounded-xl backdrop-blur-sm mb-2"
                style={{
                  background: 'linear-gradient(145deg, rgba(137, 197, 109, 0.25) 0%, rgba(137, 197, 109, 0.15) 100%)',
                  border: '2px solid rgba(137, 197, 109, 0.4)',
                  boxShadow: '0 8px 24px rgba(137, 197, 109, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
                animate={{
                  boxShadow: [
                    '0 8px 24px rgba(137, 197, 109, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                    '0 12px 32px rgba(137, 197, 109, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                    '0 8px 24px rgba(137, 197, 109, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span 
                  className="text-[#89C56D] text-[clamp(2rem,8vw,4rem)] tracking-tighter block"
                  style={{
                    textShadow: '0 0 20px rgba(137, 197, 109, 1), 0 0 40px rgba(137, 197, 109, 0.6), 0 2px 8px rgba(0, 0, 0, 0.8)',
                    fontWeight: 700,
                    lineHeight: 1
                  }}
                >
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
              </motion.div>
              <span 
                className="text-white/90 text-[clamp(0.7rem,2vw,1rem)] uppercase tracking-wider"
                style={{
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)',
                  fontWeight: 600
                }}
              >
                Días
              </span>
            </motion.div>

            {/* Separator */}
            <motion.span
              className="text-[#89C56D] text-[clamp(1.5rem,6vw,3rem)] mb-8"
              style={{
                textShadow: '0 0 20px rgba(137, 197, 109, 0.8)',
                fontWeight: 700
              }}
              animate={{
                opacity: [1, 0.3, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              :
            </motion.span>

            {/* Hours */}
            <motion.div
              className="flex flex-col items-center min-w-[15vw] md:min-w-[8vw]"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <motion.div
                className="relative px-[2vw] py-[1.5vh] md:px-[1.5vw] md:py-[2vh] rounded-xl backdrop-blur-sm mb-2"
                style={{
                  background: 'linear-gradient(145deg, rgba(137, 197, 109, 0.25) 0%, rgba(137, 197, 109, 0.15) 100%)',
                  border: '2px solid rgba(137, 197, 109, 0.4)',
                  boxShadow: '0 8px 24px rgba(137, 197, 109, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                <span 
                  className="text-[#89C56D] text-[clamp(2rem,8vw,4rem)] tracking-tighter block"
                  style={{
                    textShadow: '0 0 20px rgba(137, 197, 109, 1), 0 0 40px rgba(137, 197, 109, 0.6), 0 2px 8px rgba(0, 0, 0, 0.8)',
                    fontWeight: 700,
                    lineHeight: 1
                  }}
                >
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
              </motion.div>
              <span 
                className="text-white/90 text-[clamp(0.7rem,2vw,1rem)] uppercase tracking-wider"
                style={{
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)',
                  fontWeight: 600
                }}
              >
                Horas
              </span>
            </motion.div>

            {/* Separator */}
            <motion.span
              className="text-[#89C56D] text-[clamp(1.5rem,6vw,3rem)] mb-8"
              style={{
                textShadow: '0 0 20px rgba(137, 197, 109, 0.8)',
                fontWeight: 700
              }}
              animate={{
                opacity: [1, 0.3, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.75
              }}
            >
              :
            </motion.span>

            {/* Minutes */}
            <motion.div
              className="flex flex-col items-center min-w-[15vw] md:min-w-[8vw]"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                className="relative px-[2vw] py-[1.5vh] md:px-[1.5vw] md:py-[2vh] rounded-xl backdrop-blur-sm mb-2"
                style={{
                  background: 'linear-gradient(145deg, rgba(137, 197, 109, 0.25) 0%, rgba(137, 197, 109, 0.15) 100%)',
                  border: '2px solid rgba(137, 197, 109, 0.4)',
                  boxShadow: '0 8px 24px rgba(137, 197, 109, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                <span 
                  className="text-[#89C56D] text-[clamp(2rem,8vw,4rem)] tracking-tighter block"
                  style={{
                    textShadow: '0 0 20px rgba(137, 197, 109, 1), 0 0 40px rgba(137, 197, 109, 0.6), 0 2px 8px rgba(0, 0, 0, 0.8)',
                    fontWeight: 700,
                    lineHeight: 1
                  }}
                >
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
              </motion.div>
              <span 
                className="text-white/90 text-[clamp(0.7rem,2vw,1rem)] uppercase tracking-wider"
                style={{
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)',
                  fontWeight: 600
                }}
              >
                Min
              </span>
            </motion.div>

            {/* Separator */}
            <motion.span
              className="text-[#89C56D] text-[clamp(1.5rem,6vw,3rem)] mb-8"
              style={{
                textShadow: '0 0 20px rgba(137, 197, 109, 0.8)',
                fontWeight: 700
              }}
              animate={{
                opacity: [1, 0.3, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.25
              }}
            >
              :
            </motion.span>

            {/* Seconds */}
            <motion.div
              className="flex flex-col items-center min-w-[15vw] md:min-w-[8vw]"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.div
                className="relative px-[2vw] py-[1.5vh] md:px-[1.5vw] md:py-[2vh] rounded-xl backdrop-blur-sm mb-2"
                style={{
                  background: 'linear-gradient(145deg, rgba(137, 197, 109, 0.25) 0%, rgba(137, 197, 109, 0.15) 100%)',
                  border: '2px solid rgba(137, 197, 109, 0.4)',
                  boxShadow: '0 8px 24px rgba(137, 197, 109, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
                }}
              >
                <span 
                  className="text-[#89C56D] text-[clamp(2rem,8vw,4rem)] tracking-tighter block"
                  style={{
                    textShadow: '0 0 20px rgba(137, 197, 109, 1), 0 0 40px rgba(137, 197, 109, 0.6), 0 2px 8px rgba(0, 0, 0, 0.8)',
                    fontWeight: 700,
                    lineHeight: 1
                  }}
                >
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
              </motion.div>
              <span 
                className="text-white/90 text-[clamp(0.7rem,2vw,1rem)] uppercase tracking-wider"
                style={{
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.6)',
                  fontWeight: 600
                }}
              >
                Seg
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
