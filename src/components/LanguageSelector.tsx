
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

type LanguageOption = {
  id: 'english' | 'hindi' | 'gujarati' | 'marathi';
  label: string;
  nativeName: string;
};

const languages: LanguageOption[] = [
  { id: 'english', label: 'English', nativeName: 'English' },
  { id: 'hindi', label: 'Hindi', nativeName: 'हिंदी' },
  { id: 'gujarati', label: 'Gujarati', nativeName: 'ગુજરાતી' },
  { id: 'marathi', label: 'Marathi', nativeName: 'मराठी' },
];

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(lang => lang.id === language);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-full border border-gray-200 hover:border-gray-300 transition-all"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span>{currentLanguage?.nativeName}</span>
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg shadow-medium bg-white border border-gray-100 py-1 z-10 animate-slide-in-up origin-top-right">
          <div className="py-1">
            {languages.map((option) => (
              <button
                key={option.id}
                type="button"
                className={`flex items-center justify-between w-full px-4 py-2 text-sm ${
                  language === option.id ? 'bg-dhanvati-50 text-dhanvati-700' : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => {
                  setLanguage(option.id);
                  setIsOpen(false);
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium">{option.nativeName}</span>
                  <span className="text-xs text-gray-500">({option.label})</span>
                </div>
                {language === option.id && <Check size={16} className="text-dhanvati-600" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
