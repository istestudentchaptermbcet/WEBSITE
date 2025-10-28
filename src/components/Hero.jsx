import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-16 bg-gradient-to-b from-blue-100 to-white"
    >
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold text-blue-600 mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Innovate. Inspire. Impact.
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-gray-600 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Join the ISTE MBCET community and be part of a movement that shapes the
        future of technology and innovation.
      </motion.p>
    </section>
  );
}
