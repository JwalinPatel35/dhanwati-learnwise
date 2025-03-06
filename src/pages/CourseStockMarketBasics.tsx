
import React from 'react';
import { Header } from '../components/Header';
import { CourseContent } from '../components/CourseContent';
import { LanguageProvider, useLanguage } from '../context/LanguageContext';

const CourseStockMarketBasicsContent = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pb-16">
        <CourseContent courseId="stock-market-basics" />
        
        {/* YouTube Video Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <h2 className="text-2xl font-display font-bold mb-4">
              {language === 'english' ? 'Video Tutorial' :
               language === 'hindi' ? 'वीडियो ट्यूटोरियल' :
               language === 'gujarati' ? 'વિડિઓ ટ્યુટોરિયલ' : 'व्हिडिओ ट्युटोरियल'}
            </h2>
            <p className="text-gray-600 mb-6">
              {language === 'english' ? 'Watch this helpful video for more insights on stock market basics.' :
               language === 'hindi' ? 'स्टॉक मार्केट की बेसिक्स के बारे में अधिक जानकारी के लिए इस उपयोगी वीडियो को देखें।' :
               language === 'gujarati' ? 'સ્ટોક માર્કેટની મૂળભૂત બાબતો વિશે વધુ માહિતી માટે આ ઉપયોગી વિડિઓ જુઓ.' :
               'स्टॉक मार्केट मूलभूत बाबतींवर अधिक माहितीसाठी हे उपयुक्त व्हिडिओ पहा.'}
            </p>
          </div>
          
          <div className="relative w-full pb-[56.25%] overflow-hidden rounded-lg shadow-lg">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/3UF0ymVdYLA" 
              title="Stock Market Basics"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-50 border-t border-gray-100 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-dhanvati-500 to-dhanvati-700 flex items-center justify-center">
                <span className="text-white font-bold">D</span>
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-leaf-500 rounded-full border-2 border-white"></span>
              </div>
              <span className="font-display font-bold text-xl">Dhanvati</span>
            </div>
            
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} Dhanvati. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const CourseStockMarketBasics = () => {
  return (
    <LanguageProvider>
      <CourseStockMarketBasicsContent />
    </LanguageProvider>
  );
};

export default CourseStockMarketBasics;
