
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface DiscussionProps {
  id: string;
  expert: {
    name: string;
    title: string;
    avatar: string;
  };
  topic: {
    english: string;
    hindi: string;
    gujarati: string;
    marathi: string;
  };
  date: string;
  commentCount: number;
}

const discussions: DiscussionProps[] = [
  {
    id: 'disc-1',
    expert: {
      name: 'Priya Sharma',
      title: 'Financial Advisor',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60',
    },
    topic: {
      english: 'How to start investing with small amounts',
      hindi: 'छोटी राशि से निवेश कैसे शुरू करें',
      gujarati: 'નાની રકમથી રોકાણ કેવી રીતે શરૂ કરવું',
      marathi: 'छोट्या रकमेसह गुंतवणूक कशी सुरू करावी',
    },
    date: '2023-09-15',
    commentCount: 24,
  },
  {
    id: 'disc-2',
    expert: {
      name: 'Anil Desai',
      title: 'Tax Consultant',
      avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=60',
    },
    topic: {
      english: 'Tax saving options for working women',
      hindi: 'कामकाजी महिलाओं के लिए कर बचत विकल्प',
      gujarati: 'કામ કરતી મહિલાઓ માટે કર બચત વિકલ્પો',
      marathi: 'कामकाजी महिलांसाठी कर बचत पर्याय',
    },
    date: '2023-10-02',
    commentCount: 18,
  },
  {
    id: 'disc-3',
    expert: {
      name: 'Meera Patel',
      title: 'Insurance Specialist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60',
    },
    topic: {
      english: 'Health insurance plans for families',
      hindi: 'परिवारों के लिए स्वास्थ्य बीमा योजनाएं',
      gujarati: 'પરિવારો માટે આરોગ્ય વીમા યોજનાઓ',
      marathi: 'कुटुंबांसाठी आरोग्य विमा योजना',
    },
    date: '2023-10-21',
    commentCount: 32,
  }
];

export const ExpertDiscussions = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold">
              {t('community.expertDiscussions')}
            </h2>
            <button className="text-dhanvati-600 hover:text-dhanvati-700 font-medium">
              {t('viewAll')}
            </button>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {discussions.map(discussion => (
              <div 
                key={discussion.id} 
                className="bg-muted/30 rounded-xl p-6 border border-border hover:shadow-soft hover-scale"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={discussion.expert.avatar} 
                    alt={discussion.expert.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{discussion.expert.name}</h3>
                    <p className="text-sm text-muted-foreground">{discussion.expert.title}</p>
                  </div>
                </div>
                
                <h4 className="text-lg font-medium mb-4">
                  {discussion.topic[language]}
                </h4>
                
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <span>{new Date(discussion.date).toLocaleDateString()}</span>
                  <div className="flex items-center gap-1">
                    <MessageCircle size={16} />
                    <span>{discussion.commentCount}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button className="bg-dhanvati-500 hover:bg-dhanvati-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
              {t('community.startNew')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
