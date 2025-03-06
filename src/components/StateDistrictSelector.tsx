
import React, { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

interface StateDistrictSelectorProps {
  language: 'english' | 'hindi' | 'gujarati' | 'marathi';
  onStateChange: (state: string) => void;
  onDistrictChange: (district: string) => void;
  onCityChange: (city: string) => void;
}

type Language = 'english' | 'hindi' | 'gujarati' | 'marathi';

const translations = {
  english: {
    selectState: 'Select State',
    selectDistrict: 'Select District',
    selectCity: 'Select City',
    state: 'State',
    district: 'District',
    city: 'City'
  },
  hindi: {
    selectState: 'राज्य चुनें',
    selectDistrict: 'जिला चुनें',
    selectCity: 'शहर चुनें',
    state: 'राज्य',
    district: 'जिला',
    city: 'शहर'
  },
  gujarati: {
    selectState: 'રાજ્ય પસંદ કરો',
    selectDistrict: 'જિલ્લો પસંદ કરો',
    selectCity: 'શહેર પસંદ કરો',
    state: 'રાજ્ય',
    district: 'જિલ્લો',
    city: 'શહેર'
  },
  marathi: {
    selectState: 'राज्य निवडा',
    selectDistrict: 'जिल्हा निवडा',
    selectCity: 'शहर निवडा',
    state: 'राज्य',
    district: 'जिल्हा',
    city: 'शहर'
  }
};

// Sample data for Indian states and districts
const stateDistrictData: Record<string, string[]> = {
  'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik'],
  'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Gandhinagar'],
  'Karnataka': ['Bangalore', 'Mysore', 'Hubli', 'Mangalore', 'Belgaum'],
  'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem'],
  'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Agra', 'Varanasi', 'Prayagraj'],
  'Delhi': ['New Delhi', 'North Delhi', 'South Delhi', 'East Delhi', 'West Delhi'],
  'West Bengal': ['Kolkata', 'Howrah', 'Durgapur', 'Asansol', 'Siliguri'],
  'Rajasthan': ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota', 'Ajmer']
};

// Sample city data
const districtCityData: Record<string, string[]> = {
  'Mumbai': ['Andheri', 'Bandra', 'Dadar', 'Juhu', 'Colaba'],
  'Pune': ['Kothrud', 'Hinjewadi', 'Shivajinagar', 'Hadapsar', 'Aundh'],
  'Ahmedabad': ['Navrangpura', 'Satellite', 'Bopal', 'Paldi', 'Maninagar'],
  'Bangalore': ['Koramangala', 'Whitefield', 'Indiranagar', 'HSR Layout', 'Jayanagar'],
  'Chennai': ['Adyar', 'T. Nagar', 'Anna Nagar', 'Velachery', 'Mylapore'],
  'Lucknow': ['Hazratganj', 'Gomti Nagar', 'Aliganj', 'Indira Nagar', 'Mahanagar'],
  'New Delhi': ['Connaught Place', 'Chanakyapuri', 'Lajpat Nagar', 'Karol Bagh', 'Saket'],
  'Kolkata': ['Park Street', 'Salt Lake', 'Ballygunge', 'Howrah', 'New Town'],
  'Jaipur': ['Malviya Nagar', 'Mansarovar', 'Vaishali Nagar', 'C-Scheme', 'Jagatpura']
};

export const StateDistrictSelector: React.FC<StateDistrictSelectorProps> = ({ 
  language, 
  onStateChange, 
  onDistrictChange,
  onCityChange
}) => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [districts, setDistricts] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  
  const t = translations[language as Language] || translations.english;
  
  // Update districts when state changes
  useEffect(() => {
    if (selectedState) {
      setDistricts(stateDistrictData[selectedState] || []);
      setSelectedDistrict('');
      setSelectedCity('');
    } else {
      setDistricts([]);
    }
  }, [selectedState]);
  
  // Update cities when district changes
  useEffect(() => {
    if (selectedDistrict) {
      setCities(districtCityData[selectedDistrict] || []);
      setSelectedCity('');
    } else {
      setCities([]);
    }
  }, [selectedDistrict]);
  
  const handleStateChange = (value: string) => {
    setSelectedState(value);
    onStateChange(value);
  };
  
  const handleDistrictChange = (value: string) => {
    setSelectedDistrict(value);
    onDistrictChange(value);
  };
  
  const handleCityChange = (value: string) => {
    setSelectedCity(value);
    onCityChange(value);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="space-y-2">
        <Label htmlFor="state">{t.state}</Label>
        <Select value={selectedState} onValueChange={handleStateChange}>
          <SelectTrigger id="state">
            <SelectValue placeholder={t.selectState} />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(stateDistrictData).map((state) => (
              <SelectItem key={state} value={state}>{state}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="district">{t.district}</Label>
        <Select value={selectedDistrict} onValueChange={handleDistrictChange} disabled={!selectedState}>
          <SelectTrigger id="district">
            <SelectValue placeholder={t.selectDistrict} />
          </SelectTrigger>
          <SelectContent>
            {districts.map((district) => (
              <SelectItem key={district} value={district}>{district}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="city">{t.city}</Label>
        <Select value={selectedCity} onValueChange={handleCityChange} disabled={!selectedDistrict}>
          <SelectTrigger id="city">
            <SelectValue placeholder={t.selectCity} />
          </SelectTrigger>
          <SelectContent>
            {cities.map((city) => (
              <SelectItem key={city} value={city}>{city}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
