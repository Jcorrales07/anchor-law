import { Link, useNavigate } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

const ErrorPage: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-heath-950 relative flex flex-col justify-center items-center">

            {/* Líneas decorativas */}
            <div className="absolute inset-0 pointer-events-none z-10">
                {/* Línea superior */}
                <div className="absolute top-0 bottom-0 right-24 border-l-4 border-harvest-gold-400"></div>

                {/* Línea inferior */}
                <div className="absolute top-0 bottom-0 left-24 border-l-4 border-harvest-gold-400"></div>
            </div>

            {/* Contenido principal */}
            <div className="relative text-tuna-900 flex flex-col justify-center items-center z-20 text-center px-4 max-w-2xl mx-auto">

                {/* Logo/Icono */}
                <div className="mb-8 mx-auto">
                    <img
                        src="/images/logo/LogowoText.png"
                        alt="Anchor Law - Logo para computadoras"
                        className='w-24'
                    />
                </div>

                {/* Título principal */}
                <h1 className="font-primary-playfair font-bold text-6xl lg:text-8xl text-harvest-gold-400 mb-4">
                    404
                </h1>

                {/* Subtítulo */}
                <h2 className="font-primary-playfair font-semibold text-2xl lg:text-3xl text-harvest-gold-400 mb-6">
                    Página No Encontrada
                </h2>

                {/* Mensaje descriptivo */}
                <p className="font-secondary-alike text-harvest-gold-400 text-base lg:text-lg opacity-90 mb-8 leading-relaxed">
                    Lo sentimos, la página que buscas no se encuentra disponible. 
                    <br className="hidden sm:block" />
                    Es posible que haya sido movida o no exista.
                </p>

                {/* Mensaje legal elegante */}
                <div className="mb-10">
                    <p className="font-secondary-alike text-harvest-gold-400 text-sm lg:text-base opacity-75 italic">
                        "En Anchor Law, cada camino tiene una solución legal."
                    </p>
                </div>

                {/* Botones de acción */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

                    {/* Botón volver al inicio */}
                    <Link
                        to="/"
                        className="inline-flex items-center gap-3 bg-harvest-gold-400 text-heath-950 font-secondary-alike font-semibold px-6 py-3 rounded-lg hover:bg-grandis-300 transition-all duration-300 shadow-lg hover:shadow-xl group"
                    >
                        <Home size={20} className="group-hover:scale-110 transition-transform" />
                        Ir al Inicio
                    </Link>

                    {/* Botón volver atrás */}
                    <button
                        onClick={() => navigate(-1)}
                        className="inline-flex items-center gap-3 border-2 border-harvest-gold-400 text-harvest-gold-400 font-secondary-alike font-semibold px-6 py-3 rounded-lg hover:bg-harvest-gold-400 hover:text-heath-950 transition-all duration-300 group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        Regresar
                    </button>
                </div>

                {/* Enlaces adicionales */}
                <div className="mt-12">
                    <p className="font-secondary-alike text-harvest-gold-400 text-sm opacity-75 mb-4">
                        ¿Necesitas ayuda legal?
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        <Link
                            to="/servicios"
                            className="text-harvest-gold-400 hover:text-grandis-300 transition-colors underline decoration-harvest-gold-400 hover:decoration-grandis-300"
                        >
                            Ver Servicios
                        </Link>
                        <span className="text-harvest-gold-400 opacity-50">•</span>
                        <Link
                            to="/contactanos"
                            className="text-harvest-gold-400 hover:text-grandis-300 transition-colors underline decoration-harvest-gold-400 hover:decoration-grandis-300"
                        >
                            Contáctanos
                        </Link>
                        <span className="text-harvest-gold-400 opacity-50">•</span>
                        <Link
                            to="/nosotros"
                            className="text-harvest-gold-400 hover:text-grandis-300 transition-colors underline decoration-harvest-gold-400 hover:decoration-grandis-300"
                        >
                            Conoce el Equipo
                        </Link>
                    </div>
                </div>
            </div>

            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-harvest-gold-400 rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-harvest-gold-400 rounded-full"></div>
                <div className="absolute top-3/4 left-1/3 w-16 h-16 border border-harvest-gold-400 rounded-full"></div>
            </div>
        </div>
    );
}

export default ErrorPage;