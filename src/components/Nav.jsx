import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

export default function Nav() {
  const [active, setActive] = useState('home');
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-violet-400 to-cyan-400 origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Floating pill nav */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        className="fixed top-5 left-1/2 -translate-x-1/2 z-50 glass border border-gray-800/80 rounded-full px-2 py-2 shadow-glow-lg"
      >
        <ul className="flex items-center gap-1">
          {links.map((link) => (
            <li key={link.id} className="relative">
              <a
                href={`#${link.id}`}
                className={`relative z-10 block px-4 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors duration-300 ${
                  active === link.id ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                {link.label}
              </a>
              {active === link.id && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-blue-600/90 rounded-full shadow-glow"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>
      </motion.nav>
    </>
  );
}
