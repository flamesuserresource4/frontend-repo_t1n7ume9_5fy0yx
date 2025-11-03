import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Details from './components/Details';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState('dark');

  // Inject Google Fonts (Oswald & Lato) dynamically without editing index.html
  useEffect(() => {
    const preconnect1 = document.createElement('link');
    preconnect1.rel = 'preconnect';
    preconnect1.href = 'https://fonts.googleapis.com';

    const preconnect2 = document.createElement('link');
    preconnect2.rel = 'preconnect';
    preconnect2.href = 'https://fonts.gstatic.com';
    preconnect2.crossOrigin = 'anonymous';

    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Oswald:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';

    document.head.appendChild(preconnect1);
    document.head.appendChild(preconnect2);
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(preconnect1);
      document.head.removeChild(preconnect2);
      document.head.removeChild(link);
    };
  }, []);

  // Theme handling with Tailwind's class strategy
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved);
      document.documentElement.classList.toggle('dark', saved === 'dark');
      return;
    }
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return (
    <div className="min-h-screen bg-white dark:bg-[#0b0c0e] text-[#1d1f24] dark:text-white">
      {/* Hero with Spline cover and quick actions */}
      <Hero theme={theme} onToggleTheme={toggleTheme} />

      {/* Summary */}
      <Summary />

      {/* Details: Experience, Education, Skills, Certifications, Languages, Hobbies, Awards, References */}
      <Details />

      {/* Contact */}
      <Contact />
    </div>
  );
}

export default App;
