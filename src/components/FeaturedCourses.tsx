
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CourseCard } from './CourseCard';
import { featuredCourses } from '../lib/courseData';

export function FeaturedCourses() {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    
    const { current } = scrollRef;
    const scrollAmount = 400; // Adjust as needed
    
    if (direction === 'left') {
      current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="courses" className="py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gradient">
            {t('courses.heading')}
          </h2>
          
          <div className="hidden md:flex items-center gap-2">
            <button 
              onClick={() => scroll('left')}
              className="p-2 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-2 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        {/* Desktop Scrollable Courses */}
        <div 
          ref={scrollRef}
          className="hidden md:flex items-stretch gap-6 overflow-x-auto pb-6 snap-x scrollbar-none"
          style={{ scrollbarWidth: 'none' }}
        >
          {featuredCourses.map(course => (
            <div key={course.id} className="min-w-[350px] snap-start">
              <CourseCard course={course} />
            </div>
          ))}
        </div>
        
        {/* Mobile Grid Courses */}
        <div className="md:hidden grid grid-cols-1 gap-6">
          {featuredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
