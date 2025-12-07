import { motion } from 'framer-motion';

const HeroSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  const letterContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // ✅ Infinite blinking (starts after appearing)
  const blinkingLetterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        onComplete: () => {}, // Needed for initial appearance
      }
    },
    blink: {
      opacity: [1, 0.2, 1, 0.4, 1],
      transition: {
        duration: .4,
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "loop"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.0, ease: "easeOut" }
    }
  };

  const portfolioText = "PORTFOLIO";

  return (
   <motion.section
      className="relative h-screen flex items-center justify-center bg-[#111111] text-white font-sans p-4 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_60%)] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(255,255,255,0.05)_0%,transparent_70%)] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"></div>

      {/* Main content wrapper - This centers everything */}
      <div className="relative w-full h-full max-w-7xl flex justify-center items-center z-10">
        
        {/* === Container for TEXT elements === */}
        <div className="relative">
          <motion.h1
            className="font-black text-gray-200 tracking-[-0.05em] select-none flex text-[clamp(2.5rem,22vw,17rem)]"
            variants={letterContainerVariants}
          >
            {portfolioText.split('').map((letter, index) => {
              const isBlinking = letter === 'I';
              return (
                <motion.span
                  key={index}
                  className="inline-block"
                  variants={isBlinking ? blinkingLetterVariants : letterVariants}
                  animate={isBlinking ? ["visible", "blink"] : "visible"}
                  initial="hidden"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              );
            })}
          </motion.h1>

          <motion.h2
            variants={subtitleVariants}
            className="absolute top-[18%] left-[2%] text-[clamp(0.75rem,3.5vw,2.5rem)] font-semibold tracking-[0.2em] text-gray-300 whitespace-nowrap"
          >
            WEB DEVELOPER
          </motion.h2>

          <motion.p
            variants={subtitleVariants}
            className="absolute bottom-[10%] right-[5%] text-[clamp(0.75rem,3.5vw,2.5rem)] font-semibold tracking-[0.15em] text-gray-300 whitespace-nowrap"
          >
            ROLAND ORTIZ
          </motion.p>
        </div>

        <motion.div
          variants={imageVariants}
          // Your positioning is UNCHANGED. Only the width is made responsive.
          className="absolute top-23 left-30 -translate-x-1/2 -translate-y-1/2 w-[clamp(150px,40vw,440px)]">
          <img
            src="/roland.png"
            alt="Portrait of Roland Ortiz"
            className="w-full h-auto"
          />
        </motion.div>

      </div>
    </motion.section>
  );
};

export default HeroSection;
