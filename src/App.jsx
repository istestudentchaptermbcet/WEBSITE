import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WelcomeAnimation from "./components/WelcomeAnimation";
import Home from "./pages/Home";
import Execom from "./pages/Execom";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Events from "./pages/Events";
import JoinUs from "./pages/JoinUs";
import Gallery from "./pages/Gallery";
import TeamPRMedia from "./pages/TeamPRMedia";
import TeamEventManagement from "./pages/TeamEventManagement";
import TeamContentDocumentation from "./pages/TeamContentDocumentation";
import TeamDesign from "./pages/TeamDesign";
import TeamSponsorship from "./pages/TeamSponsorship";

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showMainContent, setShowMainContent] = useState(false);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
    // Add a small delay before showing main content for smoother transition
    setTimeout(() => {
      setShowMainContent(true);
    }, 300);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen animated-bg particles">
        <AnimatePresence>
          {showWelcome && <WelcomeAnimation onComplete={handleWelcomeComplete} />}
        </AnimatePresence>

        <AnimatePresence>
          {showMainContent && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smooth transition
                staggerChildren: 0.1
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Navbar />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/execom" element={<Execom />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/profile/:email" element={<Profile />} />
                  <Route path="/events" element={<Events />} />
                  <Route path="/join-us" element={<JoinUs />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/team/pr-and-media" element={<TeamPRMedia />} />
                  <Route path="/team/event-management" element={<TeamEventManagement />} />
                  <Route path="/team/content-and-documentation" element={<TeamContentDocumentation />} />
                  <Route path="/team/design" element={<TeamDesign />} />
                  <Route path="/team/sponsorship" element={<TeamSponsorship />} />
                </Routes>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Footer />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}
