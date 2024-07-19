'use client'

import { useState, useEffect } from 'react';
import SplashScreen from '@/components/SplashScreen';
import LanguageSelect from '@/app/language_select/page';

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    
    <main className="h-screen">
      {showSplash ? <SplashScreen /> : <LanguageSelect />}
    </main>
  );
}