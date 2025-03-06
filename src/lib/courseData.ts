export interface Course {
  id: string;
  title: {
    english: string;
    hindi: string;
    gujarati: string;
    marathi: string;
  };
  description: {
    english: string;
    hindi: string;
    gujarati: string;
    marathi: string;
  };
  image: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  lessonCount: number;
  category: 'investing' | 'saving' | 'insurance' | 'government-schemes' | 'tax';
  duration: number; // in minutes
}

export const featuredCourses: Course[] = [
  {
    id: 'basics-of-saving',
    title: {
      english: 'Basics of Saving',
      hindi: 'बचत की मूल बातें',
      gujarati: 'બચતની મૂળભૂત વાતો',
      marathi: 'बचतीचे मूलभूत',
    },
    description: {
      english: 'Learn how to start saving money, create a budget, and set financial goals.',
      hindi: 'पैसे बचाना शुरू करने, बजट बनाने और वित्तीय लक्ष्य निर्धारित करने का तरीका जानें।',
      gujarati: 'પૈસા બચાવવાનું શરૂ કરવાનું, બજેટ બનાવવાનું અને નાણાકીય લक્ષ્યો સેટ કરવાનું શીખો.',
      marathi: 'पैसे वाचवणे सुरू करणे, बजेट तयार करणे आणि आर्थिक उद्दिष्टे निश्चित करणे कसे शिका.',
    },
    image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    level: 'beginner',
    lessonCount: 5,
    category: 'saving',
    duration: 60,
  },
  {
    id: 'public-provident-fund',
    title: {
      english: 'Public Provident Fund (PPF)',
      hindi: 'लोक सामान्य निधि (PPF)',
      gujarati: 'પબ્લિક પ્રોવિડન્ટ ફંડ (PPF)',
      marathi: 'पब्लिक प्रोविडंट फंड (PPF)',
    },
    description: {
      english: "Learn about the government-backed PPF scheme, its benefits, and how it can help you build long-term wealth.",
      hindi: "सरकारी PPF योजना, उसके लाभों और यह कैसे आपको दीर्घकालिक संपत्ति बनाने में मदद कर सकता है, इसके बारे में जानें।",
      gujarati: "સરકારી PPF યોજના, તેના લાભો અને તે કેવી રીતે તમને લાંબા ગાળાની સંપत્તિ બનાવવામાં મદદ કરી શકે છે તે વિશે જાણો.",
      marathi: "सरकारी PPF योजना, त्याचे फायदे आणि ते कसे दीर्घकालीन संपत्ती निर्माण करण्यास मदत करू शकते याबद्दल शिका.",
    },
    image: 'https://images.unsplash.com/photo-1586034679970-cb7b5fc4928a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    level: 'beginner',
    lessonCount: 4,
    category: 'investing',
    duration: 45,
  },
  {
    id: 'stock-market-basics',
    title: {
      english: 'Stock Market Basics',
      hindi: 'स्टॉक मार्केट की बेसिक्स',
      gujarati: 'સ્ટોક માર્કેટનાં મૂળભૂત જાણકારીઓ',
      marathi: 'स्टॉक मार्केट मूलभूत माहिती',
    },
    description: {
      english: "Learn about stock markets, types of stocks, trading strategies, and common myths about investing in stocks.",
      hindi: "स्टॉक मार्केट, शेयरों के प्रकार, ट्रेडिंग रणनीतियों और स्टॉक में निवेश के बारे में आम मिथकों के बारे में जानें।",
      gujarati: "સ્ટોક માર્કેટ, શેરોના પ્રકાર, ટ્રેડિંગ વ્યૂહરચનાઓ અને સ્ટોક્સમાં રોકાણ વિશેની સામાન્ય માન્યતાઓ વિશે જાણો.",
      marathi: "स्टॉक मार्केट, शेअर्सचे प्रकार, ट्रेडिंग स्ट्रॅटेजीज आणि शेअर्समध्ये गुंतवणूक कशी सुरू करावी हे शिका.",
    },
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    level: 'beginner',
    lessonCount: 6,
    category: 'investing',
    duration: 75,
  },
  {
    id: 'understanding-mutual-funds',
    title: {
      english: 'Understanding Mutual Funds',
      hindi: 'म्यूचुअल फंड को समझना',
      gujarati: 'મ્યુચ્યુઅલ ફંડ્સને સમજવું',
      marathi: 'म्युच्युअल फंड समजून घेणे',
    },
    description: {
      english: 'Learn what mutual funds are, how they work, and how to start investing in them.',
      hindi: 'जानें कि म्यूचुअल फंड क्या हैं, वे कैस��� काम करते हैं, और उनमें निवेश कैसे शुरू करें।',
      gujarati: 'જાણો કે મ્યુચ્યુઅલ ફંડ્સ શું છે, તે કેવી રીતે કામ કરે છે, અને તેમાं રોકાણ કેવી રીતે શરૂ કરવું.',
      marathi: 'म्युच्युअल फंड काय आहेत, ते कसे कार्य करतात आणि त्यांमध्ये गुंतवणूक कशी सुरू करावी हे शिका.',
    },
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    level: 'intermediate',
    lessonCount: 8,
    category: 'investing',
    duration: 120,
  },
  {
    id: 'government-schemes-for-women',
    title: {
      english: 'Government Schemes for Women',
      hindi: 'महिलाओं के लिए सरकारी योजनाएं',
      gujarati: 'મहિલાઓ માટે સરકારી યોજનાઓ',
      marathi: 'महिलांसाठी सरकारी योजना',
    },
    description: {
      english: 'Explore government-backed financial schemes specifically designed for women in India.',
      hindi: 'भारत में विशेष रूप से महिलाओं के लिए डिज़ाइन की गई सरकारी वित्तीय योजनाओं के बांे में जानें।',
      gujarati: 'ભારતમાં ખાસ કરીને મहિલાઓ માટે ડિઝાઇન કરાયેલી સરકारी નાણાકીય યોજનાઓ વિશે જાણો.',
      marathi: 'भारतातील महिलांसाठी विशेषतः डिझाइन केलेल्या सरकारी आर्थिक योजनांचा अन्वेषण करा.',
    },
    image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    level: 'beginner',
    lessonCount: 6,
    category: 'government-schemes',
    duration: 90,
  },
  {
    id: 'insurance-essentials',
    title: {
      english: 'Insurance Essentials',
      hindi: 'बीमा की आवश्यक बातें',
      gujarati: 'વીમા ની જરૂરી બાબતો',
      marathi: 'विम्याची आवश्यक माहिती',
    },
    description: {
      english: "Understand the basics of insurance, types of policies, and how to choose what's right for you.",
      hindi: 'बीमा की मूल बातें, पॉलिसियों के प्रकार, और आपके लिए सही चुनाव कैसे करें, यह समझें।',
      gujarati: 'વીમાની મૂળભૂત બાબતો, પોલિસીઓના પ્રકારો, અને તમારા માટે શું યોग્ય છે તે કેવી રીતે પસંદ કરવું તે સमજો.',
      marathi: 'विम्याची मूलतत्त्वे, पॉलिसींचे प्रकार आणि तुमच्यासाठी योग्य काय आहे हे कसे निवडावे हे समजून घ्या.',
    },
    image: 'https://images.unsplash.com/photo-1597271479291-37763318c60d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    level: 'beginner',
    lessonCount: 7,
    category: 'insurance',
    duration: 100,
  },
  {
    id: 'tax-planning',
    title: {
      english: 'Tax Planning & Saving Money',
      hindi: 'कर योजना और पैसा बचाना',
      gujarati: 'કर આયોજન અને પૈસા બચાવવા',
      marathi: 'कर नियोजन आणि पैसे वाचवणे',
    },
    description: {
      english: 'Learn how to minimize your tax liability legally and make the most of your income through smart financial planning.',
      hindi: 'कानूनी रूप से अपनी कर देयता को कम करने और स्मार्ट वित्तीय योजना से अपनी आय का अधिकतम लाभ उठाने का तरीका जानें।',
      gujarati: 'કાયદેસર રીતે તમારી કર ભરપાઈ ઓછી કરવાની અને સ્માર્ટ નાણાકીય આયોજન દ્વારા તમારી આवકનો મहत્तમ લાभ લેवાની રીત શીખો.',
      marathi: 'कायदेशीर मार्गाने तुमची कर देयता कमी करण्याचे आणि स्मार्ट आर्थिक नियोजनातून तुमच्या उत्पन्नाचा जास्तीत जास्त लाभ घेण्याचे तंत्र शिका.',
    },
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    level: 'intermediate',
    lessonCount: 8,
    category: 'tax',
    duration: 90,
  },
];
