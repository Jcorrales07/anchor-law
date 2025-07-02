// src/components/sections/HeroSection.tsx
import React from 'react';

import '../../styles/logo-animations.css'

// Calcular número de filas basado en altura de pantalla
const calculateRows = () => {
    if (typeof window !== 'undefined') {
        const screenHeight = window.innerHeight;
        return Math.floor(screenHeight / 80); // Filas de 80px
    }
    return 12; // Fallback por defecto
};

const HeroSection: React.FC = () => {

    const [rows, setRows] = React.useState(calculateRows);

    React.useEffect(() => {
        const handleResize = () => {
            setRows(calculateRows());
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="relative flex flex-row min-h-screen justify-center items-center bg-romance-50">

            {/* Líneas decorativas */}
            <div className="lg:block hidden absolute top-0 right-24 bottom-0 border-r-4 border-heath-950 z-30"></div>

            {/* DESKTOP Layout - Grid dinámico */}
            <div className="hidden lg:block">

                {/* Grid container con filas calculadas dinámicamente */}
                <div
                    className="grid"
                    style={{
                        gridTemplateColumns: 'repeat(18, 80px)',
                        gridTemplateRows: `repeat(${rows}, 80px)`,
                        height: '100vh',
                        width: '1440px', // 18 * 80px
                        // CLAVE: Mantener tamaños fijos
                        // gridAutoRows: '80px',
                        gridAutoColumns: '80px'
                    }}
                >

                    {/* Logo de fondo */}
                    <div
                        className="flex items-center justify-center z-99 logo-slide-down"
                        style={{
                            gridColumn: '2 / 7',
                            gridRow: `2 / 11`,
                            minWidth: 0, // Evita que el contenido expanda la celda
                            minHeight: 0
                        }}
                    >
                        <img
                            src="/images/logo/Logoopaco.png"
                            alt="Logo de Anchor Law Opaco"
                            className="w-[389px] h-[614px] object-cover"
                        />
                    </div>

                    {/* Imagen de abogadas */}
                    <div
                        className="flex items-end justify-center z-20 overflow-hidden"
                        style={{
                            gridColumn: '5 / 13',
                            gridRow: `3 / 15`,
                            minWidth: 0,
                            minHeight: 0
                        }}
                    >
                        <img
                            src="/images/team/3.png"
                            alt="Dos abogadas profesionales de Anchor Law"
                            className="h-full w-auto object-cover mix-blend-multiply"
                            loading="eager"
                        />
                    </div>

                    {/* Texto principal */}
                    <div
                        className="flex items-center justify-start z-99 overflow-hidden"
                        style={{
                            gridColumn: '13 / 19',
                            gridRow: ` 4 / 9`,
                            minWidth: 0,
                            minHeight: 0
                        }}
                    >
                        <h1 className="font-primary-playfair font-bold text-[65px] text-tuna-900 leading-tight whitespace-nowrap">
                            Justicia a tu <br />
                            lado, con un <br />
                            ancla como <br />
                            <p className='underline'>aliado.</p>
                        </h1>
                    </div>

                    {/* Grid visual dinámico */}
                    {/* {Array.from({ length: 18 * rows }, (_, i) => (
                        <div 
                            key={i} 
                            className="border border-black opacity-50 text-xs flex items-center justify-center text-black"
                        >
                            {i + 1}
                        </div>
                    ))} */}
                </div>
            </div>

            {/* MÓVIL Layout - Versión mejorada */}
            <div className="lg:hidden flex flex-col min-h-screen bg-romance-50 relative">

                <div
                    className="absolute bottom-8 right-35 w-full h-full flex items-center justify-center z-99 logo-slide-down pointer-events-none"
                >
                    <img
                        src="/images/logo/Logoopaco.png"
                        alt="Logo de Anchor Law Opaco"
                        className="object-cover w-[337.5px] h-[533.3px]"
                    />
                </div>

                {/* Container principal para centrar contenido */}
                <div className="relative flex-1 flex flex-col justify-center items-center">

                    {/* Texto principal - Centrado arriba */}
                    <div className="text-center mt-[180px] mb-8 sm:mb-12">
                        <h1 className="font-primary-playfair font-bold text-3xl sm:text-4xl md:text-5xl text-tuna-900 leading-tight max-w-sm sm:max-w-md mx-auto">
                            Justicia a tu lado, <br /> con un ancla como<br />aliado.
                        </h1>
                    </div>

                    {/* Imagen de abogadas - Centrada abajo */}
                    <div className="absoul flex justify-center items-end flex-1 ">
                        <img
                            src="/images/team/3.png"
                            alt="Dos abogadas profesionales de Anchor Law"
                            className=" w-[400px]"
                            loading="eager"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;