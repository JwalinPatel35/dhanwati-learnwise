
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { Course } from '../lib/courseData';

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const { language, t } = useLanguage();
  
  const getLevelClass = (level: string) => {
    switch(level) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-blue-100 text-blue-800';
      case 'advanced': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-soft hover:shadow-medium hover-scale">
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title[language as keyof typeof course.title]}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${getLevelClass(course.level)}`}>
            {course.level.charAt(0).toUpperCase() + course.level.slice(1)}
          </span>
          
          <div className="flex items-center text-sm text-gray-500">
            <Clock size={14} className="mr-1" />
            <span>{course.duration} min</span>
          </div>
        </div>
        
        <h3 className="font-display font-bold text-xl mb-2">
          {course.title[language as keyof typeof course.title]}
        </h3>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {course.description[language as keyof typeof course.description]}
        </p>
        
        <div className="flex justify-between items-center pt-3 border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-500">
            <BookOpen size={14} className="mr-1" />
            <span>{course.lessonCount} Lessons</span>
          </div>
          
          <button className="flex items-center gap-1 text-sm font-medium text-dhanvati-600 hover:text-dhanvati-700 transition-colors">
            {t('more')}
            <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
}
