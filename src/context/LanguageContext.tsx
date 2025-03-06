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
    
    // Community page translations
    'nav.community': 'Community',
    'community.heading': 'Join Our Financial Learning Community',
    'community.subheading': 'Get expert advice, ask questions, and learn from others on their financial journey',
    'community.joinDiscussions': 'Join Discussions',
    'community.exploreQuestions': 'Explore Questions',
    'community.expertDiscussions': 'Expert-Led Discussions',
    'community.questionsAnswers': 'Questions & Answers',
    'community.searchPlaceholder': 'Search questions...',
    'community.startNew': 'Start New Discussion',
    'viewAll': 'View All',
    'loadMore': 'Load More',
    'answeredOn': 'Answered on',
    
    // Course page translations
    'course.backToCourses': 'Back to courses',
    'course.lessons': 'lessons',
    'course.minutes': 'min',
    'course.keyTakeaway': 'Key Takeaway',
    'course.nextTopic': 'Next Topic',
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
    
    // Community page translations
    'nav.community': 'समुदाय',
    'community.heading': 'हमारे वित्तीय सीखने के समुदाय से जुड़ें',
    'community.subheading': 'विशेषज्ञ सलाह प्राप्त करें, प्रश्न पूछें और दूसरों से उनकी वित्तीय यात्रा पर सीखें',
    'community.joinDiscussions': 'चर्चाओं में शामिल हों',
    'community.exploreQuestions': 'प्रश्नों का अन्वेषण करें',
    'community.expertDiscussions': 'विशेषज्ञ-नेतृत्व वाली चर्चाएँ',
    'community.questionsAnswers': 'प्रश्न और उत्तर',
    'community.searchPlaceholder': 'प्रश्न खोजें...',
    'community.startNew': 'नई चर्चा शुरू करें',
    'viewAll': 'सभी देखें',
    'loadMore': 'और लोड करें',
    'answeredOn': 'इस दिन उत्तर दिया गया',
    
    // Course page translations
    'course.backToCourses': 'पाठ्यक्रमों पर वापस जाएं',
    'course.lessons': 'पाठ',
    'course.minutes': 'मिनट',
    'course.keyTakeaway': 'मुख्य सीख',
    'course.nextTopic': 'अगला विषय',
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
    
    // Community page translations
    'nav.community': 'સમુદાય',
    'community.heading': 'અમારા નાણાકીય શિક્ષણ સમુદાયમાં જોડાઓ',
    'community.subheading': 'નિષ્ણાત સલાહ મેળવો, પ્રશ્નો પૂછો, અને અન્ય લોકો પાસેથી તેમની નાણાકીય યાત્રા પર શીખો',
    'community.joinDiscussions': 'ચર્ચાઓમાં જોડાઓ',
    'community.exploreQuestions': 'પ્રશ્નોનું અન્વેષણ કરો',
    'community.expertDiscussions': 'નિષ્ણાત-નેતૃત્વ ચર્ચાઓ',
    'community.questionsAnswers': 'પ્રશ્નો અને જવાબો',
    'community.searchPlaceholder': 'પ્રશ્નો શોધો...',
    'community.startNew': 'નવી ચર્ચा શરૂ કરો',
    'viewAll': 'બધા જુઓ',
    'loadMore': 'વધુ લોડ કરો',
    'answeredOn': 'આ દિવસે જવાબ આપ્યો',
    
    // Course page translations
    'course.backToCourses': 'અભ્યાસક્રમો પર પાછા જાઓ',
    'course.lessons': 'પાઠ',
    'course.minutes': 'મિનિટ',
    'course.keyTakeaway': 'મુખ્ય શીખ',
    'course.nextTopic': 'આગલો વિષય',
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
    
    // Community page translations
    'nav.community': 'समुदाय',
    'community.heading': 'आमच्या आर्थिक शिक्षण समुदायात सामील व्हा',
    'community.subheading': 'तज्ञ सल्ला मिळवा, प्रश्न विचारा आणि इतरांकडून त्यांच्या आर्थिक प्रवासावर शिका',
    'community.joinDiscussions': 'चर्चांमध्ये सामील व्हा',
    'community.exploreQuestions': 'प्रश्न एक्सप्लोर करा',
    'community.expertDiscussions': 'तज्ञ-नेतृत्व चर्चा',
    'community.questionsAnswers': 'प्रश्न आणि उत्तरे',
    'community.searchPlaceholder': 'प्रश्न शोधा...',
    'community.startNew': 'नवीन चर्चा सुरू करा',
    'viewAll': 'सर्व पहा',
    'loadMore': 'अधिक लोड करा',
    'answeredOn': 'या दिवशी उत्तर दिले',
    
    // Course page translations
    'course.backToCourses': 'अभ्यासक्रमांकडे परत जा',
    'course.lessons': 'धडे',
    'course.minutes': 'मिनिटे',
    'course.keyTakeaway': 'महत्त्वाचा संदेश',
    'course.nextTopic': 'पुढील विषय',
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
