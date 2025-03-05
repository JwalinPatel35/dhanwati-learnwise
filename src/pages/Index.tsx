
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { FeaturedCourses } from '../components/FeaturedCourses';
import { WhyDhanvati } from '../components/WhyDhanvati';
import { LanguageProvider } from '../context/LanguageContext';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col overflow-hidden">
        <Header />
        <main>
          <Hero />
          <FeaturedCourses />
          <WhyDhanvati />
        </main>
        
        <footer className="bg-gray-50 border-t border-gray-100 py-12 px-4 mt-auto">
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
    </LanguageProvider>
  );
};

export default Index;
