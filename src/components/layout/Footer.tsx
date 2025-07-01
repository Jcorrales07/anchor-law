// src/components/layout/Footer.tsx
import React from 'react';
import { Linkedin, Instagram, Facebook } from 'lucide-react';

const socialLinks = [
    {
        name: 'LinkedIn',
        href: 'http://www.linkedin.com/in/anchor-law-hn',
        icon: Linkedin
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/anchorlaw.hn?igsh=MWJlazFkbTBwNjh2Mg==',
        icon: Instagram
    },
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/share/1DxBj9vxMH/',
        icon: Facebook
    },
    {
        name: 'WhatsApp',
        href: 'https://wa.me/50411112222',
        icon: () => (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
            </svg>
        )
    }
];

const Footer: React.FC = () => {
    return (
        <footer className="bg-heath-950 relative">

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
            <div className="relative z-0 px-4 py-8 lg:pt-[104px] lg:pb-[143px] lg:mr-[218px] lg:ml-[108px]">
                
                {/* MÓVIL: Layout vertical */}
                <div className="lg:hidden flex flex-col items-center space-y-6">
                    {/* Logo móvil centrado */}
                    <img
                        src="/images/logo/A1Movil.png"
                        alt="Anchor Law - Logo móvil"
                        className="w-32 sm:w-40"
                    />

                    {/* Contact Info móvil */}
                    <div className="text-center">
                        <div className="space-y-2">
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

                    {/* Social Links móvil */}
                    <div className="flex justify-center space-x-3">
                        {socialLinks.map((social) => {
                            const IconComponent = social.icon;
                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-harvest-gold-400 hover:text-grandis-300 hover:scale-110 transition-all duration-300 p-2 rounded-lg border border-harvest-gold-400 hover:bg-harvest-gold-400 hover:bg-opacity-10"
                                    aria-label={social.name}
                                >
                                    <IconComponent size={20} />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* DESKTOP: Layout horizontal */}
                <div className="hidden lg:flex flex-row items-center justify-between">
                    {/* Logo desktop */}
                    <img
                        src="/images/logo/AL2PC.png"
                        alt="Anchor Law - Logo para computadoras"
                        className="w-[351px]"
                    />

                    {/* Contact Info desktop */}
                    <div className="text-center">
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
                    <div className="flex justify-end space-x-4">
                        {socialLinks.map((social) => {
                            const IconComponent = social.icon;
                            return (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-harvest-gold-400 hover:text-grandis-300 hover:scale-110 transition-all duration-300 p-2 rounded-lg border border-harvest-gold-400 hover:bg-harvest-gold-400 hover:bg-opacity-10"
                                    aria-label={social.name}
                                >
                                    <IconComponent size={22} />
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