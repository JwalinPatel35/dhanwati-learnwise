
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
  category: 'investing' | 'saving' | 'insurance' | 'government-schemes';
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
      gujarati: 'પૈસા બચાવવાનું શરૂ કરવાનું, બજેટ બનાવવાનું અને નાણાકીય લક્ષ્યો સેટ કરવાનું શીખો.',
      marathi: 'पैसे वाचवणे सुरू करणे, बजेट तयार करणे आणि आर्थिक उद्दिष्टे निश्चित करणे कसे शिका.',
    },
    image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    level: 'beginner',
    lessonCount: 5,
    category: 'saving',
    duration: 60,
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
      hindi: 'जानें कि म्यूचुअल फंड क्या हैं, वे कैसे काम करते हैं, और उनमें निवेश कैसे शुरू करें।',
      gujarati: 'જાણો કે મ્યુચ્યુઅલ ફંડ્સ શું છે, તે કેવી રીતે કામ કરે છે, અને તેમાં રોકાણ કેવી રીતે શરૂ કરવું.',
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
      gujarati: 'મહિલાઓ માટે સરકારી યોજનાઓ',
      marathi: 'महिलांसाठी सरकारी योजना',
    },
    description: {
      english: 'Explore government-backed financial schemes specifically designed for women in India.',
      hindi: 'भारत में विशेष रूप से महिलाओं के लिए डिज़ाइन की गई सरकारी वित्तीय योजनाओं के बारे में जानें।',
      gujarati: 'ભારતમાં ખાસ કરીને મહિલાઓ માટે ડિઝાઇન કરાયેલી સરકારી નાણાકીય યોજનાઓ વિશે જાણો.',
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
      english: 'Understand the basics of insurance, types of policies, and how to choose what's right for you.',
      hindi: 'बीमा की मूल बातें, पॉलिसियों के प्रकार, और आपके लिए सही चुनाव कैसे करें, यह समझें।',
      gujarati: 'વીમાની મૂળભૂત બાબતો, પોલિસીઓના પ્રકારો, અને તમારા માટે શું યોગ્ય છે તે કેવી રીતે પસંદ કરવું તે સમજો.',
      marathi: 'विम्याची मूलतत्त्वे, पॉलिसींचे प्रकार आणि तुमच्यासाठी योग्य काय आहे हे कसे निवडावे हे समजून घ्या.',
    },
    image: 'https://images.unsplash.com/photo-1597271479291-37763318c60d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    level: 'beginner',
    lessonCount: 7,
    category: 'insurance',
    duration: 100,
  },
];
