import { services } from "../../utils/servicesData";

const AreaServices: React.FC = () => {
    return (
        <section className="min-h-screen relative flex justify-center items-center bg-heath-950">
            <div className="absolute inset-0 border-t-4 lg:border-r-4 border-harvest-gold-400 pointer-events-none mt-[48px] lg:mt-[64px] lg:mr-[96px]"></div>

            <div className="flex flex-col justify-center items-center mt-30 my-30 gap-15">
                <h1 className="text-3xl lg:text-4xl font-bold text-harvest-gold-400 text-center font-secondary-alike">
                    ÁREAS DE PRÁCTICA
                </h1>
                
                {/* Services Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-15 lg:gap-25 lg:gap-y-30 ">
                    {services.map((service) => (
                        <div key={service.id} className="flex flex-col items-center text-center">
                            {/* Icon */}
                            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 mb-4 md:mb-6 flex items-center justify-center">
                                <img 
                                    src={service.icon} 
                                    alt={service.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            
                            {/* Title */}
                            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-harvest-gold-400 mb-3 md:mb-4 font-terciary-raleway">
                                {service.name}
                            </h2>
                            
                            {/* Items */}
                            <ul className="list-disc space-y-1 md:space-y-2">
                                {service.items.map((item, index) => (
                                    <li key={index} className="text-start text-sm md:text-base text-harvest-gold-400 font-secondary-alike">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                
                {/* Bottom Text */}
                <div className="px-4 md:px-8">
                    <p className="lg:text-base text-sm text-justify text-harvest-gold-400 italic font-secondary-alike leading-relaxed">
                        <span className="font-bold">Nota: </span> Cada área abarca una variedad más amplia de servicios jurídicos especializados, 
                        ajustados a las necesidades específicas de nuestros clientes.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AreaServices;