const Team: React.FC = () => {
    return (
        <div className="relative min-h-screen bg-romance-50 flex flex-col items-center justify-center ">
            <div className="lg:block hidden absolute top-0 right-24 bottom-0 border-r-4 border-heath-950 z-30"></div>
        
            
            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mt-19 mb-15 md:mb-16 text-center font-primary-playfair">
                NUESTRO EQUIPO
            </h1>
            
            {/* Team Members Container */}
            <div className="w-full max-w-6xl">
                {/* Mobile Layout - Stack vertically */}
                <div className="flex flex-col items-center md:hidden space-y-12">
                    {/* Jennifer Canelo */}
                    <div className="flex flex-col">
                        <div className="w-80  bg-gray-200 overflow-hidden shadow-lg mb-6">
                            <img 
                                src="/images/team/1.png" 
                                alt="Abg. Jennifer Canelo"
                                // className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 font-secondary-alike">
                            Abg. Jennifer Canelo
                        </h2>
                    </div>
                    
                    {/* Melany García */}
                    <div className="flex flex-col">
                        <div className="w-80 bg-gray-200 overflow-hidden shadow-lg mb-6">
                            <img 
                                src="/images/team/2.png" 
                                alt="Abg. Melany García"
                                // className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-800 font-secondary-alike">
                            Abg. Melany García
                        </h2>
                    </div>
                </div>
                
                {/* Desktop Layout - Side by side */}
                <div className="hidden md:flex justify-center items-center space-x-8 lg:space-x-12">
                    {/* Jennifer Canelo */}
                    <div className="flex flex-col">
                        <div className="w-80 h-96 lg:w-96 bg-gray-200 overflow-hidden shadow-lg mb-6">
                            <img 
                                src="/images/team/1.png" 
                                alt="Abg. Jennifer Canelo"
                                // className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 font-secondary-alike">
                            Abg. Jennifer Canelo
                        </h2>
                    </div>
                    
                    {/* Melany García */}
                    <div className="flex flex-col">
                        <div className="w-80 h-96 lg:w-96  bg-gray-200 overflow-hidden shadow-lg mb-6">
                            <img 
                                src="/images/team/2.png" 
                                alt="Abg. Melany García"
                                // className="w-full h-full object-cover"
                            />
                        </div>
                        <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 font-secondary-alike">
                            Abg. Melany García
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;