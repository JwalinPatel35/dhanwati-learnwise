
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from '../components/LanguageSelector';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const loginTranslations = {
  english: {
    title: 'Login to Dhanvati',
    description: 'Enter your credentials to access your account',
    email: 'Email',
    password: 'Password',
    login: 'Login',
    noAccount: "Don't have an account?",
    signup: 'Sign up',
    error: 'Invalid email or password',
    emailPlaceholder: 'Enter your email',
    passwordPlaceholder: 'Enter your password'
  },
  hindi: {
    title: 'धनवती में लॉगिन करें',
    description: 'अपने खाते तक पहुंचने के लिए अपना विवरण दर्ज करें',
    email: 'ईमेल',
    password: 'पासवर्ड',
    login: 'लॉगिन',
    noAccount: 'खाता नहीं है?',
    signup: 'साइन अप करें',
    error: 'अमान्य ईमेल या पासवर्ड',
    emailPlaceholder: 'अपना ईमेल दर्ज करें',
    passwordPlaceholder: 'अपना पासवर्ड दर्ज करें'
  },
  gujarati: {
    title: 'ધનવતીમાં લોગિન કરો',
    description: 'તમારા એકાઉન્ટને ઍક્સેસ કરવા માટે તમારી વિગતો દાખલ કરો',
    email: 'ઇમેઇલ',
    password: 'પાસવર્ડ',
    login: 'લોગિન',
    noAccount: 'એકાઉન્ટ નથી?',
    signup: 'સાઇન અપ કરો',
    error: 'અમાન્ય ઇમેઇલ અથવા પાસવર્ડ',
    emailPlaceholder: 'તમારો ઇમેઇલ દાખલ કરો',
    passwordPlaceholder: 'તમારો પાસવર્ડ દાખલ કરો'
  },
  marathi: {
    title: 'धनवतीमध्ये लॉगिन करा',
    description: 'तुमच्या खात्यात प्रवेश करण्यासाठी तुमचे तपशील प्रविष्ट करा',
    email: 'ईमेल',
    password: 'पासवर्ड',
    login: 'लॉगिन',
    noAccount: 'खाते नाही?',
    signup: 'साइन अप करा',
    error: 'अवैध ईमेल किंवा पासवर्ड',
    emailPlaceholder: 'तुमचा ईमेल प्रविष्ट करा',
    passwordPlaceholder: 'तुमचा पासवर्ड प्रविष्ट करा'
  }
};

const Login = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const t = loginTranslations[language] || loginTranslations.english;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast.error(t.error);
      return;
    }
    
    setIsLoading(true);
    
    try {
      // In a real app, this would call an authentication API
      setTimeout(() => {
        // Simulate successful login for demo purposes
        localStorage.setItem('isLoggedIn', 'true');
        toast.success('Logged in successfully');
        navigate('/');
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      toast.error(t.error);
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4">
        <LanguageSelector />
      </div>
      
      <div className="w-full max-w-md">
        <Card className="border-gray-200 shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center text-dhanvati-700">{t.title}</CardTitle>
            <CardDescription className="text-center">{t.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">{t.email}</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder={t.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">{t.password}</Label>
                <Input 
                  id="password" 
                  type="password" 
                  placeholder={t.passwordPlaceholder}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-dhanvati-600 hover:bg-dhanvati-700" disabled={isLoading}>
                {isLoading ? 'Loading...' : t.login}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-gray-600">
              {t.noAccount} <Link to="/signup" className="text-dhanvati-600 hover:underline">{t.signup}</Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
