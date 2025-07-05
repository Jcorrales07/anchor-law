import React, { useRef, useEffect } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Services from '../components/sections/Services';
import Hero from '../components/sections/Hero';
import LegalConsultationForm from '../components/forms/LegalConsultationForm';
import { useHeaderHeight } from '../contexts/HeaderHeightContext';

const HomePage: React.FC = () => {
  const headerRef = useRef<HTMLElement>(null);
  const { setHeaderHeight } = useHeaderHeight();

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        setHeaderHeight(height);
        console.log('Header height updated:', height); // Para debugging
      }
    };

    // Actualizar altura al cargar
    updateHeaderHeight();

    // Actualizar altura al redimensionar ventana
    window.addEventListener('resize', updateHeaderHeight);
    
    // También actualizar después de que las imágenes se carguen
    window.addEventListener('load', updateHeaderHeight);
    
    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
      window.removeEventListener('load', updateHeaderHeight);
    };
  }, [setHeaderHeight]);

  return (
    <>
      <Header ref={headerRef} />
      <Hero />
      <Services />
      <LegalConsultationForm />
      <Footer />
    </>
  );
};

export default HomePage;