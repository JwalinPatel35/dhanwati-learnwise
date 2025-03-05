
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

export function Header() {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-dhanvati-500 to-dhanvati-700 flex items-center justify-center">
            <span className="text-white font-bold">D</span>
            <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-leaf-500 rounded-full border-2 border-white"></span>
          </div>
          <span className="font-display font-bold text-xl">{t('app.name')}</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#courses" className="text-sm font-medium text-foreground/80 hover:text-foreground smooth-animate focus-ring">
            Courses
          </a>
          <a href="#why" className="text-sm font-medium text-foreground/80 hover:text-foreground smooth-animate focus-ring">
            Why Dhanvati
          </a>
          <a href="#community" className="text-sm font-medium text-foreground/80 hover:text-foreground smooth-animate focus-ring">
            Community
          </a>
          <a href="#about" className="text-sm font-medium text-foreground/80 hover:text-foreground smooth-animate focus-ring">
            About
          </a>
          <LanguageSelector />
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-gray-100 smooth-animate focus-ring"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-0 z-50 bg-white transform ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out pt-24 px-6`}>
          <div className="flex flex-col gap-6">
            <a 
              href="#courses" 
              className="text-lg font-medium py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Courses
            </a>
            <a 
              href="#why" 
              className="text-lg font-medium py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why Dhanvati
            </a>
            <a 
              href="#community" 
              className="text-lg font-medium py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Community
            </a>
            <a 
              href="#about" 
              className="text-lg font-medium py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <div className="py-4">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
