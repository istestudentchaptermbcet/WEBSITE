module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'royal-navy': '#001F3F',
        'royal-blue': '#003366',
        'elegant-blue': '#004080',
        'royal-gold': '#FFD700',
        'dark-gold': '#B8860B',
        'elegant-white': '#F8F8FF',
        'lavender': '#E6E6FA',
        'gainsboro': '#DCDCDC',
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
        'audiowide': ['Audiowide', 'sans-serif'],
        'exo2': ['Exo 2', 'sans-serif'],
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
        'cal-sans': ['Cal Sans', 'sans-serif'],
        'sterion': ['Sterion', 'sans-serif'],
      },
      animation: {
        'royal-float': 'float 8s ease-in-out infinite',
        'royal-glow': 'royalBorderGlow 3s ease-in-out infinite alternate',
        'royal-pattern': 'royalPatternShift 10s linear infinite',
        'royal-particle': 'royalParticleFloat 25s ease-in-out infinite',
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(135deg, #001F3F 0%, #003366 50%, #FFD700 100%)',
        'gold-gradient': 'linear-gradient(45deg, #FFD700, #B8860B)',
      },
    },
  },
  plugins: [],
};
