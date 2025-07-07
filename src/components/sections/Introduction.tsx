const Introduction: React.FC = () => {
    return (
        <section className="bg-heath-950 relative flex flex-row min-h-screen justify-center items-center">
            <div className="absolute inset-0 border-t-4 lg:border-r-4 border-harvest-gold-400 pointer-events-none mt-[48px] lg:mt-[64px] lg:mr-[96px]"></div>

            {/* Desktop */}
            <div className="lg:flex hidden flex-col gap-y-19">
                <div className="flex items-center justify-center gap-13">
                    <div className="min-w-[190px]"></div>

                    <h1 className="w-full font-primary-playfair text-harvest-gold-400 text-6xl">
                        ANCHOR LAW
                    </h1>
                </div>

                <div className="flex items-center justify-center gap-13">
                    <img src="/images/logo/LogowoText.png" alt="Logo de Anchor Law" className="w-[190px]" />


                    <p className="text-2xl text-harvest-gold-400 font-secondary-alike">
                        En Anchor Law ofrecemos asesoría estratégica,
                        <br /> representación confiable y soluciones legales
                        <br /> adaptadas a tus necesidades.

                        <br />
                        <br />

                        Nuestro equipo trabaja con rigor, ética y
                        <br /> cercanía para proteger tus derechos y
                        <br /> acompañarte en cada paso del proceso legal.
                    </p>

                </div>
            </div>

            {/* Movil */}
            <div className="lg:hidden flex flex-col items-center lg:items-start gap-6 px-10 max-w-[700px]">
                <img src="/images/logo/A1Movil.png" alt="Logo de Anchor Law" className="w-[290.6px]" />

                <p className="text-base text-left text-harvest-gold-400 font-secondary-alike leading-relaxed">
                    En Anchor Law ofrecemos asesoría estratégica,
                    representación confiable y soluciones legales
                    adaptadas a tus necesidades.
                    <br />
                    <br />
                    Nuestro equipo trabaja con rigor, ética y cercanía
                    para proteger tus derechos y acompañarte en
                    cada paso del proceso legal.
                </p>
            </div>
        </section>
    );
}

export default Introduction;