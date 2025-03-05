
import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { featuredCourses } from '../lib/courseData';
import { courseContentData } from '../lib/courseContentData';

interface CourseContentProps {
  courseId: string;
}

export function CourseContent({ courseId }: CourseContentProps) {
  const { language } = useLanguage();
  
  // Find course details from the featuredCourses data
  const courseDetails = featuredCourses.find(course => course.id === courseId);
  
  // Get course content based on courseId
  const courseContent = courseContentData[courseId];
  
  if (!courseDetails || !courseContent) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <p className="text-2xl text-gray-600">Course not found</p>
        <Link to="/" className="mt-4 inline-flex items-center text-dhanvati-600 hover:text-dhanvati-700">
          <ArrowLeft size={16} className="mr-2" /> Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Back button */}
      <div className="mb-8">
        <Link to="/" className="inline-flex items-center text-dhanvati-600 hover:text-dhanvati-700">
          <ArrowLeft size={16} className="mr-2" /> Back to courses
        </Link>
      </div>
      
      {/* Course header */}
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-2">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
            {courseDetails.level.charAt(0).toUpperCase() + courseDetails.level.slice(1)}
          </span>
          <span className="text-sm text-gray-500">
            {courseDetails.lessonCount} lessons • {courseDetails.duration} min
          </span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
          {courseDetails.title[language as keyof typeof courseDetails.title]}
        </h1>
        
        <p className="text-xl text-muted-foreground">
          {courseDetails.description[language as keyof typeof courseDetails.description]}
        </p>
      </div>
      
      {/* Course content */}
      <div className="mt-8 prose prose-dhanvati max-w-none">
        {/* Render course content based on selected language */}
        <div dangerouslySetInnerHTML={{ 
          __html: courseContent[language as keyof typeof courseContent] 
        }} />
      </div>
    </div>
  );
}
