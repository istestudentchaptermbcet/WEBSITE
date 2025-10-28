import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full glass shadow-2xl z-50"
      style={{ backgroundColor: 'var(--glass-bg)', borderColor: 'var(--glass-border)' }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link
          to="/"
          className="text-2xl font-bold font-[Orbitron] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 hover:scale-105 transition-transform"
        >
          ISTE MBCET
        </Link>

        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="font-[Exo_2] hover:text-purple-400 transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/execom" className="font-[Exo_2] hover:text-pink-400 transition-colors relative group">
              Execom
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/events" className="font-[Exo_2] hover:text-blue-400 transition-colors relative group">
              Events
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/join-us" className="font-[Exo_2] hover:text-green-400 transition-colors relative group">
              Join Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/gallery" className="font-[Exo_2] hover:text-yellow-400 transition-colors relative group">
              Gallery
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-green-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/login" className="font-[Exo_2] hover:text-red-400 transition-colors relative group">
              Login
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-400 to-yellow-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            className="p-2 rounded-full glass hover:glow transition-all duration-300"
          >
            {isDark ? (
              <SunIcon className="w-6 h-6 text-yellow-400" />
            ) : (
              <MoonIcon className="w-6 h-6 text-purple-400" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
}
