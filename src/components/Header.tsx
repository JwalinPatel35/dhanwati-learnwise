
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();
  
  // Check if user is logged in (in a real app, this would use a proper auth system)
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/';
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-100 px-4 lg:px-6 py-3">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-dhanvati-500 to-dhanvati-700 flex items-center justify-center">
              <span className="text-white font-bold">D</span>
              <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-leaf-500 rounded-full border-2 border-white"></span>
            </div>
            <span className="font-display font-bold text-xl">{t('app.name')}</span>
          </Link>

          <div className="flex-1 hidden lg:flex justify-center">
            <ul className="flex space-x-8">
              <li>
                <Link 
                  to="/" 
                  className={`text-gray-700 hover:text-dhanvati-600 font-medium transition-colors ${
                    location.pathname === '/' ? 'text-dhanvati-600' : ''
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/community" 
                  className={`text-gray-700 hover:text-dhanvati-600 font-medium transition-colors ${
                    location.pathname === '/community' ? 'text-dhanvati-600' : ''
                  }`}
                >
                  {t('nav.community')}
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <LanguageSelector />
            </div>
            
            {isLoggedIn ? (
              <Button
                variant="outline"
                onClick={handleLogout}
                className="hidden lg:flex"
              >
                Logout
              </Button>
            ) : (
              <div className="hidden lg:flex items-center gap-2">
                <Link to="/login">
                  <Button variant="outline">Login</Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-dhanvati-600 text-white hover:bg-dhanvati-700">Sign Up</Button>
                </Link>
              </div>
            )}

            <button className="lg:hidden" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden fixed inset-0 z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="bg-white h-full w-full flex flex-col">
          <div className="flex justify-between items-center p-4 border-b">
            <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
              <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-dhanvati-500 to-dhanvati-700 flex items-center justify-center">
                <span className="text-white font-bold">D</span>
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-leaf-500 rounded-full border-2 border-white"></span>
              </div>
              <span className="font-display font-bold text-xl">{t('app.name')}</span>
            </Link>
            <button onClick={closeMenu}>
              <XIcon size={24} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/" 
                  onClick={closeMenu}
                  className={`text-lg font-medium block py-2 ${
                    location.pathname === '/' ? 'text-dhanvati-600' : 'text-gray-700'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/community" 
                  onClick={closeMenu}
                  className={`text-lg font-medium block py-2 ${
                    location.pathname === '/community' ? 'text-dhanvati-600' : 'text-gray-700'
                  }`}
                >
                  {t('nav.community')}
                </Link>
              </li>
              
              {isLoggedIn ? (
                <li>
                  <button
                    onClick={() => { handleLogout(); closeMenu(); }}
                    className="text-lg font-medium block py-2 text-gray-700"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <>
                  <li>
                    <Link
                      to="/login"
                      onClick={closeMenu}
                      className="text-lg font-medium block py-2 text-gray-700"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      onClick={closeMenu}
                      className="text-lg font-medium block py-2 text-gray-700"
                    >
                      Sign Up
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className="p-4 border-t">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </header>
  );
}
