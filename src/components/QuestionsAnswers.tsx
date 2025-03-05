
import React from 'react';
import { ThumbsUp, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface QnAItemProps {
  id: string;
  question: {
    english: string;
    hindi: string;
    gujarati: string;
    marathi: string;
  };
  answer: {
    english: string;
    hindi: string;
    gujarati: string;
    marathi: string;
  };
  expert: {
    name: string;
    title: string;
  };
  likes: number;
  date: string;
}

const qnaItems: QnAItemProps[] = [
  {
    id: 'q1',
    question: {
      english: 'How can I start saving money when I have a limited income?',
      hindi: 'सीमित आय होने पर मैं पैसे बचाना कैसे शुरू कर सकती हूँ?',
      gujarati: 'મર્યાદિત આવક હોય ત્યારે હું પૈસા બચાવવાનું કેવી રીતે શરૂ કરી શકું?',
      marathi: 'मर्यादित उत्पन्न असताना मी पैसे वाचवायला कसे सुरुवात करू?',
    },
    answer: {
      english: 'Start with small amounts that you can consistently set aside, like 5-10% of your income. Try the 50/30/20 rule: 50% for necessities, 30% for wants, and 20% for savings. Even saving ₹100 per week adds up over time.',
      hindi: 'छोटी राशि से शुरुआत करें जिसे आप नियमित रूप से अलग रख सकें, जैसे अपनी आय का 5-10%। 50/30/20 नियम आज़माएं: 50% ज़रूरतों के लिए, 30% इच्छाओं के लिए, और 20% बचत के लिए। हर हफ्ते ₹100 की बचत भी समय के साथ जुड़ जाती है।',
      gujarati: 'નાની રકમથી શરૂઆત કરો જે તમે સાતત્યપૂર્ણ રીતે બાજુએ રાખી શકો, જેમ કે તમારી આવકનો 5-10%. 50/30/20 નિયમ અજમાવો: 50% જરૂરિયાતો માટે, 30% ઇચ્છાઓ માટે, અને 20% બચત માટે. દર અઠવાડિયે ₹100 બચાવવાથી પણ સમય જતાં વધારો થાય છે.',
      marathi: 'छोट्या रकमेपासून सुरुवात करा जी तुम्ही सातत्याने बाजूला ठेवू शकता, जसे की तुमच्या उत्पन्नाचे 5-10%. 50/30/20 नियम वापरून पहा: 50% गरजांसाठी, 30% इच्छांसाठी आणि 20% बचतीसाठी. दर आठवड्याला ₹100 साठवले तरीही कालांतराने ते वाढते.',
    },
    expert: {
      name: 'Nisha Gupta',
      title: 'Personal Finance Advisor',
    },
    likes: 42,
    date: '2023-11-05',
  },
  {
    id: 'q2',
    question: {
      english: 'What government schemes are best for a single mother with two children?',
      hindi: 'दो बच्चों वाली एकल माँ के लिए कौन सी सरकारी योजनाएँ सबसे अच्छी हैं?',
      gujarati: 'બે બાળકો સાથેની એકલ માતા માટે કઈ સરકારી યોજનાઓ શ્રેષ્ઠ છે?',
      marathi: 'दोन मुलांसह एकल आईसाठी कोणत्या सरकारी योजना सर्वोत्तम आहेत?',
    },
    answer: {
      english: 'Look into Sukanya Samriddhi Yojana for your daughters, PM Vaya Vandana Yojana for your retirement, and Pradhan Mantri Suraksha Bima Yojana for insurance. Also consider applying for the Support for Training and Employment Programme (STEP) if you want to develop skills for better employment.',
      hindi: 'अपनी बेटियों के लिए सुकन्या समृद्धि योजना, अपनी सेवानिवृत्ति के लिए पीएम वय वंदना योजना, और बीमा के लिए प्रधान मंत्री सुरक्षा बीमा योजना पर विचार करें। यदि आप बेहतर रोजगार के लिए कौशल विकसित करना चाहती हैं, तो प्रशिक्षण और रोजगार कार्यक्रम (STEP) के लिए समर्थन के लिए आवेदन करने पर भी विचार करें।',
      gujarati: 'તમારી પુત્રીઓ માટે સુકન્યા સમૃદ્ધિ યોજના, તમારા નિવૃત્તિ માટે પીએમ વય વંદના યોજના, અને વીમા માટે પ્રધાનમંત્રી સુરક્ષા બીમા યોજના જુઓ. જો તમે સારી રોજગારી માટે કૌશલ્યો વિકસાવવા માંગતા હો, તો તાલીમ અને રોજગાર કાર્યક્રમ (STEP) માટે સપોર્ટ માટે અરજી કરવાનું પણ ધ્યાનમાં લો.',
      marathi: 'तुमच्या मुलींसाठी सुकन्या समृद्धी योजना, तुमच्या निवृत्तीसाठी पीएम वय वंदना योजना आणि विम्यासाठी प्रधानमंत्री सुरक्षा विमा योजना पहा. तसेच, जर तुम्हाला चांगल्या रोजगारासाठी कौशल्ये विकसित करायची असतील तर प्रशिक्षण आणि रोजगार कार्यक्रमासाठी समर्थन (STEP) साठी अर्ज करण्याचा विचार करा.',
    },
    expert: {
      name: 'Rajesh Kumar',
      title: 'Government Schemes Specialist',
    },
    likes: 37,
    date: '2023-10-18',
  }
];

export const QuestionsAnswers = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold">
              {t('community.questionsAnswers')}
            </h2>
            
            <div className="relative">
              <input
                type="text"
                placeholder={t('community.searchPlaceholder')}
                className="pl-10 pr-4 py-2 rounded-full border border-border bg-white focus-ring w-full md:w-64"
              />
              <Search className="absolute left-3 top-2.5 text-muted-foreground" size={18} />
            </div>
          </div>
          
          <div className="space-y-8">
            {qnaItems.map(item => (
              <div key={item.id} className="bg-white rounded-xl p-6 border border-border">
                <div className="mb-4">
                  <h3 className="text-lg font-medium mb-2">{item.question[language]}</h3>
                </div>
                
                <div className="pl-4 border-l-2 border-leaf-500 mb-6">
                  <p className="text-muted-foreground">{item.answer[language]}</p>
                  
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-sm">
                      <span className="font-medium text-foreground">{item.expert.name}</span>
                      <span className="text-muted-foreground ml-2">• {item.expert.title}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-dhanvati-500 smooth-animate">
                        <ThumbsUp size={16} />
                        <span>{item.likes}</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="text-sm text-muted-foreground">
                  {t('answeredOn')} {new Date(item.date).toLocaleDateString()}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <button className="border border-dhanvati-200 bg-white hover:border-dhanvati-300 text-dhanvati-700 px-6 py-3 rounded-full font-medium transition-colors">
              {t('loadMore')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
