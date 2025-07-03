// src/components/sections/Services.tsx
import { Link } from 'react-router';
import React from 'react';

interface ServiceArea {
    id: string;
    name: string;
    icon: string;
}

const Services: React.FC = () => {
    const serviceAreas: ServiceArea[] = [
        {
            id: 'civil',
            name: 'CIVIL',
            icon: '/images/services/civil.png' // Ícono de documentos
        },
        {
            id: 'familia',
            name: 'FAMILIA',
            icon: '/images/services/familia.png' // Ícono de personas
        },
        {
            id: 'penal',
            name: 'PENAL',
            icon: '/images/services/penal.png' // Ícono de esposas
        },
        {
            id: 'fiscal',
            name: 'FISCAL',
            icon: '/images/services/fiscal.svg' // Ícono de calculadora
        },
        {
            id: 'admon',
            name: 'ADMIN.',
            icon: '/images/services/admin.svg' // Ícono de columnas/banco
        },
        {
            id: 'mercantil',
            name: 'MERCANTIL',
            icon: '/images/services/mercantil.svg' // Ícono de edificios
        },
        {
            id: 'laboral',
            name: 'LABORAL',
            icon: '/images/services/laboral.png' // Ícono de maletín
        },
        {
            id: 'propiedad',
            name: 'PROP. INT.',
            icon: '/images/services/propiedad intelectual.png' // Ícono TM o texto
        }
    ];

    return (
        <section className="relative flex flex-row min-h-screen justify-center items-center bg-heath-950">

            <div className="lg:block hidden absolute top-0 right-24 bottom-0 border-r-4 border-harvest-gold-400"></div>

            <div className="flex flex-col items-center">

                {/* Título */}
                <h2 className="font-primary-playfair font-bold text-2xl md:text-3xl lg:text-4xl text-harvest-gold-400 text-center mb-12 lg:mb-16">
                    ÁREAS DE PRÁCTICA
                </h2>

                {/* Grid Desktop: 4x2 */}
                <div className="hidden lg:grid lg:grid-cols-4 justify-center gap-12 xl:gap-16 max-w-6xl mx-auto">
                    {serviceAreas.map((area) => (
                        <Link key={area.id}
                            to={'/servicios'}>
                            <div
                                key={area.id}
                                className="min-w-36 flex flex-col items-center text-center group cursor-pointer transition-all duration-300 hover:scale-105"
                            >
                                {/* Ícono */}
                                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <img
                                        src={area.icon}
                                        alt={`Ícono ${area.name}`}
                                        className="h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 object-contain transition-all duration-300"
                                    />
                                </div>

                                {/* Nombre */}
                                <h3 className="font-secondary-alike text-harvest-gold-400 text-base lg:text-lg font-medium group-hover:text-grandis-300 transition-colors duration-300">
                                    {area.name}
                                </h3>
                            </div>
                        </ Link>
                    ))}
                </div>

                {/* Grid Móvil: 2x4 */}
                < div className="lg:hidden grid grid-cols-2 gap-8 sm:gap-10 max-w-md mx-auto" >
                    {
                        serviceAreas.map((area) => (
                            <Link key={area.id}
                                to={'/servicios'}>
                                <div
                                    key={area.id}
                                    className="flex flex-col items-center text-center group cursor-pointer transition-all duration-300 hover:scale-105"
                                >
                                    {/* Ícono */}
                                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <img
                                            src={area.icon}
                                            alt={`Ícono ${area.name}`}
                                            className="w-20 h-20 sm:w-16 sm:h-16 object-contain transition-all duration-300"
                                        />
                                    </div>

                                    {/* Nombre */}
                                    <h3 className="font-secondary-alike text-harvest-gold-400 text-sm sm:text-base font-medium group-hover:text-grandis-300 transition-colors duration-300">
                                        {area.name}
                                    </h3>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;