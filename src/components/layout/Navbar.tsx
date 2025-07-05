import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useHeaderHeight } from '../../contexts/HeaderHeightContext';

const Navbar: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const { headerHeight } = useHeaderHeight();
    
    // Verificar si estamos en la página de inicio
    const isHomePage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            if (isHomePage) {
                // En home: aparece después de la altura real del Header
                setIsVisible(window.scrollY > headerHeight);
            } else {
                // En otras páginas: siempre visible
                setIsVisible(true);
            }
        };

        // Ejecutar inmediatamente para páginas que no sean home
        handleScroll();
        
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage, headerHeight]);

    const handleNavigation = (path: string) => {
        navigate(path);
        setIsMobileMenuOpen(false);
    };

    const navItems = [
        { label: 'INICIO', id: 'home', path: '/' },
        { label: 'NOSOTROS', id: 'about', path: '/nosotros' },
        { label: 'SERVICIOS', id: 'services', path: '/servicios' },
        { label: 'CONTÁCTANOS', id: 'contact', path: '/contactanos' }
    ];

    return (
        <nav className={`h-fit fixed top-0 left-0 right-0 z-50 bg-heath-950 shadow-lg transition-all duration-300 ${
            isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}>
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between lg:justify-end lg:gap-10 lg:px-5">
                    {/* Logo */}
                    <div className="flex items-center p-4 lg:py-4">
                        <button
                            onClick={() => handleNavigation('/')}
                            className="w-8 flex items-center space-x-2 text-white hover:text-red-200 transition-colors duration-200"
                        >
                            <img src="/images/logo/LogowoText.png" alt="Logo de Anchor Law" />
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="flex items-baseline justify-between gap-10 font-secondary-alike">
                            {navItems.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => handleNavigation(item.path)}
                                    className="cursor-pointer text-harvest-gold-400 hover:text-grandis-300 py-2 text-lg font-bold transition-colors duration-200 rounded-md"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-harvest-gold-400 hover:text-grandis-300 p-2 transition-all duration-300"
                        >
                            <div className="relative w-6 h-6 flex justify-center items-center">
                                <Menu 
                                    size={32} 
                                    className={`absolute transition-all duration-300 transform ${
                                        isMobileMenuOpen ? 'rotate-90 opacity-0 scale-75' : 'rotate-0 opacity-100 scale-100'
                                    }`} 
                                />
                                <X 
                                    size={32} 
                                    className={`absolute transition-all duration-300 transform ${
                                        isMobileMenuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-75'
                                    }`} 
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden bg-heath-950 font-secondary-alike font-bold overflow-hidden transition-all duration-500 ease-in-out ${
                isMobileMenuOpen ? 'h-screen opacity-100' : 'h-0 opacity-0'
            }`}>
                <div className={`px-2 pt-2 pb-3 space-y-1 transform transition-all duration-500 ease-in-out ${
                    isMobileMenuOpen ? 'translate-y-0' : '-translate-y-4'
                }`}>
                    {navItems.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => handleNavigation(item.path)}
                            className={`text-harvest-gold-400 hover:text-red-200 hover:bg-red-800 block px-3 py-2 text-base w-full text-right rounded-md transition-all duration-300 ${
                                isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                            }`}
                            style={{
                                transitionDelay: isMobileMenuOpen ? `${index * 100}ms` : '0ms'
                            }}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;