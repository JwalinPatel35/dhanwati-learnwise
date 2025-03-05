
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'english' | 'hindi' | 'gujarati' | 'marathi';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

// Simple translations object (would be replaced with a more robust i18n solution in a real app)
const translations: Record<Language, Record<string, string>> = {
  english: {
    'app.name': 'Dhanvati',
    'app.tagline': 'Financial education for every woman',
    'hero.heading': 'Learn financial skills at your own pace',
    'hero.subheading': 'Simple, easy-to-understand courses in your language',
    'hero.cta': 'Start Learning',
    'courses.heading': 'Featured Courses',
    'languages.select': 'Select Language',
    'why.heading': 'Why Dhanvati?',
    'why.reason1.title': 'Learn in Your Language',
    'why.reason1.desc': 'Content available in multiple Indian languages',
    'why.reason2.title': 'Simple & Accessible',
    'why.reason2.desc': 'Designed for all levels of digital literacy',
    'why.reason3.title': 'Expert-Led Content',
    'why.reason3.desc': 'Created by financial professionals',
    'more': 'Learn More',
    'mobile.title': 'Take your learning anywhere',
    'mobile.desc': 'Access courses on any device, anytime',
  },
  hindi: {
    'app.name': 'धनवती',
    'app.tagline': 'हर महिला के लिए वित्तीय शिक्षा',
    'hero.heading': 'अपनी गति से वित्तीय कौशल सीखें',
    'hero.subheading': 'आपकी भाषा में सरल, आसानी से समझने योग्य पाठ्यक्रम',
    'hero.cta': 'अभी शुरू करें',
    'courses.heading': 'विशेष पाठ्यक्रम',
    'languages.select': 'भाषा चुनें',
    'why.heading': 'धनवती क्यों?',
    'why.reason1.title': 'अपनी भाषा में सीखें',
    'why.reason1.desc': 'कई भारतीय भाषाओं में उपलब्ध सामग्री',
    'why.reason2.title': 'सरल और सुलभ',
    'why.reason2.desc': 'सभी स्तर की डिजिटल साक्षरता के लिए डिज़ाइन किया गया',
    'why.reason3.title': 'विशेषज्ञ-नेतृत्व वाली सामग्री',
    'why.reason3.desc': 'वित्तीय पेशेवरों द्वारा बनाई गई',
    'more': 'और जानें',
    'mobile.title': 'अपना सीखना कहीं भी ले जाएं',
    'mobile.desc': 'किसी भी डिवाइस पर, कभी भी पाठ्यक्रम एक्सेस करें',
  },
  gujarati: {
    'app.name': 'ધનવતી',
    'app.tagline': 'દરેક મહિલા માટે નાણાકીય શિક્ષણ',
    'hero.heading': 'તમારી ગતિએ નાણાકીય કૌશલ્યો શીખો',
    'hero.subheading': 'તમારી ભાષામાં સરળ, સમજવામાં સરળ અભ્યાસક્રમો',
    'hero.cta': 'શીખવાનું શરૂ કરો',
    'courses.heading': 'ફીચર્ડ કોર્સીસ',
    'languages.select': 'ભાષા પસંદ કરો',
    'why.heading': 'શા માટે ધનવતી?',
    'why.reason1.title': 'તમારી ભાષામાં શીખો',
    'why.reason1.desc': 'ઘણી ભારતીય ભાષાઓમાં ઉપલબ્ધ સામગ્રી',
    'why.reason2.title': 'સરળ અને સુલભ',
    'why.reason2.desc': 'ડિજિટલ સાક્ષરતાના તમામ સ્તરો માટે ડિઝાઇન કરેલ',
    'why.reason3.title': 'નિષ્ણાત-સંચાલિત સામગ્રી',
    'why.reason3.desc': 'નાણાકીય વ્યાવસાયિકો દ્વારા બનાવવામાં આવી છે',
    'more': 'વધુ જાણો',
    'mobile.title': 'તમારું શિક્ષણ ક્યાંય લઈ જાઓ',
    'mobile.desc': 'કોઈપણ ઉપકરણ પર, કોઈપણ સમયે અભ્યાસક્રમો ઍક્સેસ કરો',
  },
  marathi: {
    'app.name': 'धनवती',
    'app.tagline': 'प्रत्येक महिलेसाठी आर्थिक शिक्षण',
    'hero.heading': 'स्वतःच्या गतीने आर्थिक कौशल्ये शिका',
    'hero.subheading': 'तुमच्या भाषेत सोपे, सहज समजण्यासारखे अभ्यासक्रम',
    'hero.cta': 'शिकायला सुरुवात करा',
    'courses.heading': 'ठळक अभ्यासक्रम',
    'languages.select': 'भाषा निवडा',
    'why.heading': 'धनवती का?',
    'why.reason1.title': 'तुमच्या भाषेत शिका',
    'why.reason1.desc': 'अनेक भारतीय भाषांमध्ये उपलब्ध सामग्री',
    'why.reason2.title': 'सोपे आणि सुलभ',
    'why.reason2.desc': 'सर्व स्तरांच्या डिजिटल साक्षरतेसाठी डिझाइन केलेले',
    'why.reason3.title': 'तज्ञ-नेतृत्व सामग्री',
    'why.reason3.desc': 'वित्तीय व्यावसायिकांनी तयार केलेली',
    'more': 'अधिक जाणून घ्या',
    'mobile.title': 'तुमचे शिक्षण कुठेही घेऊन जा',
    'mobile.desc': 'कोणत्याही डिव्हाइसवर, कधीही अभ्यासक्रम अॅक्सेस करा',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('english');

  useEffect(() => {
    // Load language preference from localStorage on mount
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && Object.keys(translations).includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Save language preference to localStorage
  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
