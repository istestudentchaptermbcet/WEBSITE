import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function WelcomeAnimation({ onComplete }) {
  const [showAnimation, setShowAnimation] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => Math.min(prev + 2, 100));
    }, 50);

    const timer = setTimeout(() => {
      setShowAnimation(false);
      setTimeout(() => {
        onComplete();
      }, 300);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showAnimation && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(5px)"
          }}
          transition={{ exit: { duration: 0.6, ease: "easeOut" } }}
          className="fixed inset-0 z-50 bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                               radial-gradient(circle at 75% 75%, #1e40af 2px, transparent 2px)`,
              backgroundSize: '50px 50px'
            }} />
          </div>

          <div className="text-center space-y-12 relative z-10">
            {/* Professional Logo Animation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut"
              }}
              className="space-y-6"
            >
              <motion.h1
                className="text-6xl md:text-8xl font-bold text-slate-800 font-[Poppins] tracking-tight"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.3,
                  duration: 0.8,
                  ease: "easeOut"
                }}
              >
                ISTE
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.6,
                  duration: 0.6,
                  ease: "easeOut"
                }}
                className="text-xl md:text-2xl text-slate-600 font-[Inter] font-medium"
              >
                MBCET Student Chapter
              </motion.p>
            </motion.div>

            {/* Clean Loading Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Professional Loading Text */}
              <motion.div
                animate={{
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-slate-500 font-[Inter] text-lg"
              >
                Loading...
              </motion.div>

              {/* Clean Progress Bar */}
              <div className="space-y-4">
                <motion.div
                  className="w-80 h-1.5 bg-slate-200 rounded-full overflow-hidden"
                  initial={{ opacity: 0, scaleX: 0 }}
                  animate={{ opacity: 1, scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-600 to-blue-700 rounded-full"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </motion.div>

                {/* Progress Percentage */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4 }}
                  className="text-center text-slate-600 font-[Inter] text-sm font-medium"
                >
                  {progress}%
                </motion.div>
              </div>

              {/* Minimal Dots */}
              <motion.div
                className="flex justify-center space-x-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-blue-600 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.1
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
