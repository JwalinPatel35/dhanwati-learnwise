
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Users, BookOpen } from 'lucide-react';

export function WhyDhanvati() {
  const { t } = useLanguage();

  return (
    <section id="why" className="py-20 px-4 md:px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-gradient">
            {t('why.heading')}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          {/* Reason 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-shadow duration-300">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-dhanvati-50 text-dhanvati-600 mb-6">
              <Sparkles size={24} />
            </div>
            <h3 className="text-xl font-display font-bold mb-3">
              {t('why.reason1.title')}
            </h3>
            <p className="text-gray-600">
              {t('why.reason1.desc')}
            </p>
          </div>
          
          {/* Reason 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-shadow duration-300">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-clay-50 text-clay-600 mb-6">
              <BookOpen size={24} />
            </div>
            <h3 className="text-xl font-display font-bold mb-3">
              {t('why.reason2.title')}
            </h3>
            <p className="text-gray-600">
              {t('why.reason2.desc')}
            </p>
          </div>
          
          {/* Reason 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-shadow duration-300">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-leaf-50 text-leaf-600 mb-6">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-display font-bold mb-3">
              {t('why.reason3.title')}
            </h3>
            <p className="text-gray-600">
              {t('why.reason3.desc')}
            </p>
          </div>
        </div>
        
        {/* Mobile Experience Feature */}
        <div className="mt-24 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
              {t('mobile.title')}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {t('mobile.desc')}
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-dhanvati-600 text-white flex items-center justify-center text-xs mt-0.5">✓</span>
                <span className="ml-3 text-gray-700">Simple, jargon-free content</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-dhanvati-600 text-white flex items-center justify-center text-xs mt-0.5">✓</span>
                <span className="ml-3 text-gray-700">Learn at your own pace</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-dhanvati-600 text-white flex items-center justify-center text-xs mt-0.5">✓</span>
                <span className="ml-3 text-gray-700">Save lessons for offline access</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-dhanvati-600 text-white flex items-center justify-center text-xs mt-0.5">✓</span>
                <span className="ml-3 text-gray-700">Text-to-speech for all content</span>
              </li>
            </ul>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative max-w-[300px]">
              <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl border-2 border-dashed border-dhanvati-300 -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-full h-full rounded-3xl border-2 border-dashed border-clay-300 -z-10"></div>
              <div className="relative rounded-3xl overflow-hidden border-8 border-white shadow-strong">
                <img 
                  src="https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?w=600&auto=format&fit=crop&q=80&ixlib=rb-4.0.3"
                  alt="Dhanvati mobile interface" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
