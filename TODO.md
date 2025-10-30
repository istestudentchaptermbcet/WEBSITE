# Mobile Responsiveness and Font Issues Fix

## Tasks
- [x] Import missing Google Fonts (Orbitron, Audiowide, Exo 2, Space Grotesk, Cal Sans)
- [x] Adjust font sizes for mobile devices in team pages
- [x] Test mobile layout and font rendering
- [ ] Verify responsive breakpoints work correctly

## Information Gathered
- Custom fonts defined in tailwind.config.cjs but not imported in index.css
- Large font sizes (text-6xl md:text-7xl) may not scale well on mobile
- Some pages use font-[Orbitron], font-[Audiowide], etc., but fonts aren't loaded
- Responsive classes are present but may need adjustment for mobile

## Plan
1. Add Google Fonts imports for all custom fonts used in the project
2. Reduce font sizes on mobile for better readability
3. Ensure proper responsive scaling
4. Test on mobile devices/simulator

## Dependent Files
- iste-sc-mbcet/src/index.css (add font imports)
- iste-sc-mbcet/src/pages/JoinUs.jsx (adjust font sizes)
- iste-sc-mbcet/src/pages/Team*.jsx files (adjust font sizes)
- iste-sc-mbcet/src/components/WelcomeAnimation.jsx (adjust font sizes)

## Followup Steps
- Test on mobile device or browser dev tools mobile view
- Verify fonts load correctly
- Check layout doesn't break on small screens
