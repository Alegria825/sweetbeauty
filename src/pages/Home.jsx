import { useState } from 'react';
import Hero from '../components/sections/HeroSection';
import ServicesSection from '../components/sections/ServicesSection';
import InfoSection from '../components/sections/InfoSection';
import BookingForm from '../components/sections/BookingForm';

export default function Home() {
  const [preselectedService, setPreselectedService] = useState('');

  const handleSelectService = (serviceTitle) => {
    setPreselectedService(serviceTitle);
    document.getElementById('agendar')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Hero />
      <ServicesSection onSelectService={handleSelectService} />
      <InfoSection />
      <BookingForm preselectedService={preselectedService} />
    </>
  );
}