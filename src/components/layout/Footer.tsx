// src/components/layout/Footer.tsx
import React from 'react';

const socialLinks = [
    {
        name: 'LinkedIn',
        href: 'http://www.linkedin.com/in/anchor-law-hn',
        icon: '/images/services/linkedin.svg'
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/anchorlaw.hn?igsh=MWJlazFkbTBwNjh2Mg==',
        icon: '/images/services/instagram.svg'
    },
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/share/1DxBj9vxMH/',
        icon: '/images/services/facebook.svg'
    },
    {
        name: 'WhatsApp',
        href: 'https://wa.me/50411112222',
        icon: '/images/services/whatsapp.svg'
    }
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-heath-950 relative flex flex-row justify-center items-center">

            {/* Líneas decorativas */}
            <div className="absolute inset-0 pointer-events-none z-10">
                {/* MÓVIL: Solo línea superior */}
                <div className="lg:hidden absolute top-0 left-0 right-0 h-1 bg-harvest-gold-400"></div>

                {/* DESKTOP: Líneas en L */}
                <div className="hidden lg:block">
                    {/* Línea vertical derecha */}
                    <div className="absolute top-0 right-24 bottom-16 w-1 bg-harvest-gold-400"></div>
                    {/* Línea horizontal inferior */}
                    <div className="absolute bottom-16 left-0 right-24 h-1 bg-harvest-gold-400"></div>
                </div>
            </div>

            {/* Contenido del footer */}
            <div className="relative z-0 py-10 lg:pt-[104px] lg:pb-[143px] ">

                {/* MÓVIL: Layout vertical */}
                <div className="lg:hidden flex justify-between items-center gap-6">
                    {/* Logo móvil centrado */}
                    <img
                        src="/images/logo/LogowoText.png"
                        alt="Anchor Law - Logo móvil"
                        className="w-10"
                    />

                    {/* Contact Info móvil */}
                    <div className="text-center">
                        <div className="space-y-2 text-[12px]">
                            <p className="font-secondary-alike text-harvest-gold-400">
                                +504 1111 2222
                            </p>
                            <a
                                href="mailto:info@anchorlaw.hn"
                                className="block font-secondary-alike text-harvest-gold-400 hover:text-grandis-300 transition-colors"
                            >
                                info@anchorlaw.hn
                            </a>
                        </div>
                    </div>

                    {/* Social Links móvil */}
                    <div className="flex justify-center space-x-3">
                        {socialLinks.map((social) => {
                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-harvest-gold-400 hover:text-grandis-300 hover:scale-110 transition-all duration-300 p-2 rounded-lg border border-harvest-gold-400 hover:bg-harvest-gold-400 hover:bg-opacity-10"
                                    aria-label={social.name}
                                >
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* DESKTOP: Layout horizontal */}
                <div className="hidden lg:flex flex-row items-center justify-between gap-8">
                    {/* Logo desktop */}
                    <img
                        src="/images/logo/AL2PC.png"
                        alt="Anchor Law - Logo para computadoras"
                        className="w-48 lg:w-56 xl:w-72 2xl:w-[351px]"
                    />

                    {/* Contact Info desktop */}
                    <div className="text-center flex-1 mx-8 lg:mx-12">
                        <div className="space-y-1">
                            <p className="font-secondary-alike text-harvest-gold-400 text-base">
                                +504 1111 2222
                            </p>
                            <a
                                href="mailto:info@anchorlaw.hn"
                                className="block font-secondary-alike text-harvest-gold-400 text-base hover:text-grandis-300 transition-colors"
                            >
                                info@anchorlaw.hn
                            </a>
                        </div>
                    </div>

                    {/* Social Links desktop */}
                    <div className="flex justify-end space-x-2 lg:space-x-3 xl:space-x-4">
                        {socialLinks.map((social) => {
                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-harvest-gold-400 hover:text-grandis-300 hover:scale-110 transition-all duration-300 p-2 rounded-lg border border-harvest-gold-400 hover:bg-harvest-gold-400 hover:bg-opacity-10"
                                    aria-label={social.name}
                                >
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;