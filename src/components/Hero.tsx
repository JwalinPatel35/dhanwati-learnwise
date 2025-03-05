
import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative pt-28 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 inset-0 bg-gradient-to-b from-dhanvati-50/50 to-transparent -z-10"></div>
      <div className="absolute top-20 left-1/4 w-72 h-72 rounded-full bg-clay-200/30 blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-1/4 w-80 h-80 rounded-full bg-dhanvati-200/30 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-dhanvati-100 text-dhanvati-700 text-sm font-medium">
            {t('app.tagline')}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-balance">
            {t('hero.heading')}
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 text-balance">
            {t('hero.subheading')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 font-medium rounded-xl bg-dhanvati-600 text-white hover:bg-dhanvati-700 shadow-sm hover:shadow transition-all focus-ring">
              {t('hero.cta')}
            </button>
            
            <button className="px-8 py-3 font-medium rounded-xl border border-gray-300 hover:border-gray-400 transition-colors focus-ring">
              {t('languages.select')}
            </button>
          </div>
        </div>
        
        {/* Floating devices mockup */}
        <div className="relative mt-16 md:mt-24 max-w-5xl mx-auto animate-slide-in-up animation-delay-200">
          <div className="relative z-10 rounded-2xl overflow-hidden shadow-strong">
            <img 
              src="https://images.unsplash.com/photo-1606788075764-3e1093d85743?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
              alt="Dhanvati platform on desktop" 
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black/10"></div>
          </div>
          
          {/* Floating mobile mockup */}
          <div className="absolute -bottom-10 -right-10 md:right-10 z-20 w-[180px] md:w-[220px] rounded-3xl overflow-hidden shadow-strong border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1587614298142-38264b33a456?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
              alt="Dhanvati on mobile"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
