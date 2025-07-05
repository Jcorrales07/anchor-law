// src/components/layout/Header.tsx
import React, { useState, forwardRef } from 'react';
import { ChevronUp, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

import "../../styles/logo-animations.css"

const navigationItems = [
    { label: 'INICIO', href: '/' },
    { label: 'NOSOTROS', href: '/nosotros' },
    { label: 'SERVICIOS', href: '/servicios' },
    { label: 'CONTÁCTANOS', href: '/contactanos' }
];

const Header = forwardRef<HTMLElement>((props, ref) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (href: string) => location.pathname === href;

    return (
        <header ref={ref} className="bg-heath-950 relative flex flex-row min-h-screen justify-center items-center">

            <span className="absolute inset-0 border-t-4 lg:border-r-4 border-harvest-gold-400 pointer-events-none mt-[48px] lg:mt-[64px] lg:mr-[96px]"></span>

            <div className="flex flex-col items-center mb-8">
                <div className='hidden lg:inline'>
                    <img
                        src="/images/logo/AL2PC.png"
                        alt="Anchor Law - Logo para computadoras"
                        className='xl:w-5xl lg:w-3xl logo-entrance'
                    />
                    <nav className="absolute lg:left-77 lg:top-104 xl:left-120 xl:top-121 2xl:left-252 2xl:top-190 space-x-12">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                className={`font-secondary-alike text-lg font-medium transition-colors duration-300 ${isActive(item.href)
                                    ? 'text-grandis-300'
                                    : 'text-harvest-gold-400 hover:text-grandis-300'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className='lg:hidden flex flex-col items-end'>
                    <img
                        src="/images/logo/A1Movil.png"
                        alt="Anchor Law - Logo para celulares"
                        className='w-72 logo-entrance'
                    />
                    <button
                        className="text-harvest-gold-400 hover:text-grandis-300 transition-all duration-300 mt-3"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ?
                            <ChevronUp size={32} className="transition-transform duration-300" /> :
                            <Menu size={32} className="transition-transform duration-300" />
                        }
                    </button>

                    {/* Mobile Navigation Inline - Se despliega debajo de la flecha */}
                    <div className={`w-full max-w-md transition-all duration-500 ease-in-out overflow-hidden
                                    ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                                    `}>
                        <nav className="text-end">
                            {navigationItems.map((item, index) => (
                                <Link
                                    key={item.href}
                                    to={item.href}
                                    className={`block font-terciary-raleway text-[18px] font-medium 
                                                transition-all duration-300 py-2
                                                transform
                                                ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                                                ${isActive(item.href)
                                            ? 'text-grandis-300'
                                            : 'text-harvest-gold-400 hover:text-grandis-300'
                                        }
                                            `}
                                    style={{
                                        transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms'
                                    }}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
});

Header.displayName = 'Header';

export default Header;