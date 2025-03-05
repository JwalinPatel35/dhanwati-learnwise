
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const CommunityHero = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-b from-muted/50 to-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-6">
            {t('community.heading')}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            {t('community.subheading')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="bg-dhanvati-500 hover:bg-dhanvati-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
              {t('community.joinDiscussions')}
            </button>
            <button className="bg-white border border-dhanvati-200 hover:border-dhanvati-300 text-dhanvati-700 px-6 py-3 rounded-full font-medium transition-colors">
              {t('community.exploreQuestions')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
