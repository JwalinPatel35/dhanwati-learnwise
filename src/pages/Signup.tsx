
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from '../components/LanguageSelector';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from 'sonner';
import { StateDistrictSelector } from '@/components/StateDistrictSelector';

const signupTranslations = {
  english: {
    title: 'Create an Account',
    description: 'Enter your information to sign up for Dhanvati',
    name: 'Full Name',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    gender: 'Gender',
    male: 'Male',
    female: 'Female',
    others: 'Others',
    document: 'Identity Document',
    documentHelp: 'Please upload a government-issued ID (Aadhar/PAN/Passport)',
    signup: 'Sign Up',
    haveAccount: 'Already have an account?',
    login: 'Login',
    passwordMismatch: 'Passwords do not match',
    locationInfo: 'Location Information',
    selectState: 'Select State',
    selectDistrict: 'Select District',
    selectCity: 'Select City',
    namePlaceholder: 'Enter your full name',
    emailPlaceholder: 'Enter your email',
    passwordPlaceholder: 'Choose a strong password',
    confirmPasswordPlaceholder: 'Confirm your password'
  },
  hindi: {
    title: 'खाता बनाएँ',
    description: 'धनवती के लिए साइन अप करने के लिए अपनी जानकारी दर्ज करें',
    name: 'पूरा नाम',
    email: 'ईमेल',
    password: 'पासवर्ड',
    confirmPassword: 'पासवर्ड की पुष्टि करें',
    gender: 'लिंग',
    male: 'पुरुष',
    female: 'महिला',
    others: 'अन्य',
    document: 'पहचान दस्तावेज़',
    documentHelp: 'कृपया सरकारी आईडी अपलोड करें (आधार/पैन/पासपोर्ट)',
    signup: 'साइन अप करें',
    haveAccount: 'पहले से खाता है?',
    login: 'लॉगिन करें',
    passwordMismatch: 'पासवर्ड मेल नहीं खाते',
    locationInfo: 'स्थान की जानकारी',
    selectState: 'राज्य चुनें',
    selectDistrict: 'जिला चुनें',
    selectCity: 'शहर चुनें',
    namePlaceholder: 'अपना पूरा नाम दर्ज करें',
    emailPlaceholder: 'अपना ईमेल दर्ज करें',
    passwordPlaceholder: 'एक मजबूत पासवर्ड चुनें',
    confirmPasswordPlaceholder: 'अपने पासवर्ड की पुष्टि करें'
  },
  gujarati: {
    title: 'ખાતું બનાવો',
    description: 'ધનવતી માટે સાઇન અપ કરવા તમારી માહિતી દાખલ કરો',
    name: 'પૂરું નામ',
    email: 'ઈમેલ',
    password: 'પાસવર્ડ',
    confirmPassword: 'પાસવર્ડની પુષ્ટિ કરો',
    gender: 'જાતિ',
    male: 'પુરુષ',
    female: 'સ્ત્રી',
    others: 'અન્ય',
    document: 'ઓળખ દસ્તાવેજ',
    documentHelp: 'કૃપા કરીને સરકારી ID અપલોડ કરો (આધાર/પેન/પાસપોર્ટ)',
    signup: 'સાઇન અપ કરો',
    haveAccount: 'પહેલેથી જ ખાતું છે?',
    login: 'લોગિન કરો',
    passwordMismatch: 'પાસવર્ડ મેળ ખાતા નથી',
    locationInfo: 'સ્થાનની માહિતી',
    selectState: 'રાજ્ય પસંદ કરો',
    selectDistrict: 'જિલ્લો પસંદ કરો',
    selectCity: 'શહેર પસંદ કરો',
    namePlaceholder: 'તમારું પૂરું નામ દાખલ કરો',
    emailPlaceholder: 'તમારો ઈમેલ દાખલ કરો',
    passwordPlaceholder: 'મજબૂત પાસવર્ડ પસંદ કરો',
    confirmPasswordPlaceholder: 'તમારા પાસવર્ડની પુષ્ટિ કરો'
  },
  marathi: {
    title: 'खाते तयार करा',
    description: 'धनवतीसाठी साइन अप करण्यासाठी तुमची माहिती प्रविष्ट करा',
    name: 'पूर्ण नाव',
    email: 'ईमेल',
    password: 'पासवर्ड',
    confirmPassword: 'पासवर्डची पुष्टी करा',
    gender: 'लिंग',
    male: 'पुरुष',
    female: 'स्त्री',
    others: 'इतर',
    document: 'ओळख कागदपत्र',
    documentHelp: 'कृपया सरकारी ID अपलोड करा (आधार/पॅन/पासपोर्ट)',
    signup: 'साइन अप करा',
    haveAccount: 'आधीपासूनच खाते आहे?',
    login: 'लॉगिन करा',
    passwordMismatch: 'पासवर्ड जुळत नाहीत',
    locationInfo: 'स्थानाची माहिती',
    selectState: 'राज्य निवडा',
    selectDistrict: 'जिल्हा निवडा',
    selectCity: 'शहर निवडा',
    namePlaceholder: 'तुमचे पूर्ण नाव प्रविष्ट करा',
    emailPlaceholder: 'तुमचा ईमेल प्रविष्ट करा',
    passwordPlaceholder: 'एक मजबूत पासवर्ड निवडा',
    confirmPasswordPlaceholder: 'तुमच्या पासवर्डची पुष्टी करा'
  }
};

const Signup = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [document, setDocument] = useState<File | null>(null);
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const t = signupTranslations[language] || signupTranslations.english;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setDocument(e.target.files[0]);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !password || !confirmPassword || !gender || !document || !state || !district || !city) {
      toast.error('Please fill in all fields');
      return;
    }
    
    if (password !== confirmPassword) {
      toast.error(t.passwordMismatch);
      return;
    }
    
    setIsLoading(true);
    
    try {
      // In a real app, this would call an API to register the user
      setTimeout(() => {
        // Simulate successful signup for demo purposes
        toast.success('Account created successfully!');
        navigate('/login');
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      toast.error('An error occurred during signup');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="absolute top-4 right-4">
        <LanguageSelector />
      </div>
      
      <div className="w-full max-w-xl mb-8">
        <Card className="border-gray-200 shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center text-dhanvati-700">{t.title}</CardTitle>
            <CardDescription className="text-center">{t.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">{t.name}</Label>
                <Input 
                  id="name" 
                  type="text" 
                  placeholder={t.namePlaceholder}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              
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
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">{t.confirmPassword}</Label>
                  <Input 
                    id="confirmPassword" 
                    type="password" 
                    placeholder={t.confirmPasswordPlaceholder}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label>{t.gender}</Label>
                <RadioGroup value={gender} onValueChange={setGender} className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <Label htmlFor="male" className="cursor-pointer">{t.male}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <Label htmlFor="female" className="cursor-pointer">{t.female}</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="others" id="others" />
                    <Label htmlFor="others" className="cursor-pointer">{t.others}</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-2">
                <Label>{t.locationInfo}</Label>
                <StateDistrictSelector 
                  language={language}
                  onStateChange={setState}
                  onDistrictChange={setDistrict}
                  onCityChange={setCity}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="document">{t.document}</Label>
                <Input 
                  id="document" 
                  type="file" 
                  accept=".pdf,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  required
                />
                <p className="text-xs text-gray-500">{t.documentHelp}</p>
              </div>
              
              <Button type="submit" className="w-full bg-dhanvati-600 hover:bg-dhanvati-700" disabled={isLoading}>
                {isLoading ? 'Processing...' : t.signup}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-gray-600">
              {t.haveAccount} <Link to="/login" className="text-dhanvati-600 hover:underline">{t.login}</Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
