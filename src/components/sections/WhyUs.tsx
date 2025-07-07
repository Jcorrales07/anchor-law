const reasons = [
    {
        id: 1,
        icon: "/images/icons/diana.png",
        title: "Atención Personalizada",
        description: "Sabemos que cada caso es único. Por eso, te ofrecemos un trato cercano, humano y confidencial, acompañándote en cada etapa del proceso con empatía y claridad."
    },
    {
        id: 2,
        icon: "/images/icons/ajedrez.png",
        title: "Enfoque estratégico",
        description: "No solo respondemos a los problemas, los anticipamos. Diseñamos estrategias legales a tu medida, protegiendo tus intereses tanto a corto como a largo plazo."
    },
    {
        id: 3,
        icon: "/images/icons/validated.png",
        title: "Orientación a resultados",
        description: "Trabajamos para lograr soluciones concretas y efectivas, siempre respetando el debido proceso y los derechos fundamentales de nuestros clientes."
    },
    {
        id: 4,
        icon: "/images/icons/scale.svg",
        title: "Profesionalismo",
        description: "Nuestra reputación se basa en la responsabilidad, la ética y la excelencia con la que asumimos cada caso. Somos un equipo comprometido con quienes confían en nosotros."
    }
];

const WhyUs: React.FC = () => {
    return (
        <section className="bg-romance-50 relative flex flex-row min-h-screen justify-center items-center">
            <div className="absolute inset-0 border-t-4 lg:border-r-4 border-heath-950 pointer-events-none mt-[48px] lg:mt-[64px] lg:mr-[96px]"></div>

            <div className="w-full max-w-6xl px-4 py-8 lg:py-16 mt-20">
                {/* Desktop Layout */}
                <div className="hidden lg:block">
                    {/* Main Title */}
                    <div className="text-center mb-12">
                        <h1 className="text-5xl font-bold text-tuna-900 mb-6 font-primary-playfair">
                            ¿POR QUE ELEGIR ANCHOR LAW?
                        </h1>
                        <p className="text-xl text-tuna-900 font-terciary-raleway">
                            Porque tu tranquilidad es nuestra prioridad.
                        </p>
                    </div>

                    {/* Reasons Grid */}
                    <div className="grid gap-x-16 gap-y-12">
                        {reasons.map((reason) => (
                            <div key={reason.id} className="flex items-start space-x-6">
                                {/* Icon - positioned to show half */}
                                <div className="w-34 flex-shrink-0 overflow-hidden">
                                    <img
                                        src={reason.icon}
                                        alt={reason.title}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <h3 className="text-4xl font-bold text-grandis-300 mb-4 font-primary-playfair">
                                        {reason.title}
                                    </h3>
                                    <p className="text-tuna-900 text-lg w-3/4 leading-relaxed text-justify font-terciary-raleway">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden">
                    {/* Main Title */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-tuna-900 mb-4 font-primary-playfair leading-tight">
                            ¿POR QUE ELEGIR<br />ANCHOR LAW?
                        </h1>
                        <p className="text-base text-tuna-900 font-terciary-raleway px-4">
                            Porque tu tranquilidad es nuestra prioridad.
                        </p>
                    </div>

                    {/* Reasons Stack */}
                    <div className="space-y-8 px-4">
                        {reasons.map((reason) => (
                            <div key={reason.id} className="relative pl-18 flex justify-center items-center">
                                {/* Icon - positioned absolutely */}
                                <div className="absolute sm:-left-[15%] md:-left-[10%] -left-[19%]">
                                    <img
                                        src={reason.icon}
                                        alt={reason.title}
                                        className="w-30 md:w-25 h-full object-contain"
                                    />
                                </div>

                                {/* Content - now takes full width */}
                                <div>
                                    <h3 className="text-2xl font-bold text-grandis-300 mb-3 font-primary-playfair">
                                        {reason.title}
                                    </h3>
                                    <p className="text-base text-tuna-900 leading-relaxed text-justify font-secondary-alike">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;