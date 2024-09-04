import React, { useState } from 'react';
import { Hero, Navbar } from './components';

const App: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <>
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      <Hero language={language} />
    </>
  );
};

export default App;