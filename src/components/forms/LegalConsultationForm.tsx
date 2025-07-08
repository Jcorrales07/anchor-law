import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ChevronDown, Send, Scale, Users, Building, FileText, Heart, Shield, Calculator, Stethoscope, Search, UserCheck, Globe, Building2, Calendar, HelpCircle } from 'lucide-react';
import { FaTiktok, FaFacebookSquare, FaLinkedin, FaGoogle } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"
import { MdFamilyRestroom } from "react-icons/md";

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface FormData {
    nombre: string;
    apellido: string;
    telefono: string;
    correo: string;
    materia: string;
    consulta: string;
    comoNosConociste: string;
}

const materias = [
    { value: 'Propiedad Intelectual', label: 'Propiedad Intelectual', icon: Scale },
    { value: 'Laboral', label: 'Laboral', icon: Users },
    { value: 'Mercantil', label: 'Mercantil', icon: Building },
    { value: 'Administrativo', label: 'Administrativo', icon: FileText },
    { value: 'Civil', label: 'Civil', icon: Heart },
    { value: 'Familia', label: 'Familia', icon: MdFamilyRestroom },
    { value: 'Penal', label: 'Penal', icon: Shield },
    { value: 'Fiscal', label: 'Fiscal', icon: Calculator },
    { value: 'Sanitario', label: 'Sanitario', icon: Stethoscope }
];

const comoNosConociste = [
    { value: 'Instagram', label: 'Instagram', icon: RiInstagramFill },
    { value: 'Facebook', label: 'Facebook', icon: FaFacebookSquare },
    { value: 'LinkedIn', label: 'LinkedIn', icon: FaLinkedin },
    { value: 'TikTok', label: 'TikTok', icon: FaTiktok },
    { value: 'Google Ads', label: 'Google Ads', icon: FaGoogle },
    { value: 'Referido por conocido', label: 'Referido por conocido', icon: UserCheck },
    { value: 'Búsqueda en Google', label: 'Búsqueda en Google', icon: Search },
    { value: 'Página web', label: 'Página web', icon: Globe },
    { value: 'Directorio profesional', label: 'Directorio profesional', icon: Building2 },
    { value: 'Evento/Conferencia', label: 'Evento/Conferencia', icon: Calendar },
    { value: 'Otro', label: 'Otro', icon: HelpCircle }
];

const LegalConsultationForm: React.FC = () => {
    const [isMateriaDropdownOpen, setIsMateriaDropdownOpen] = useState(false);
    const [isComoNosConocisteDropdownOpen, setIsComoNosConocisteDropdownOpen] = useState(false);
    const [selectedMateria, setSelectedMateria] = useState<any>(null);
    const [selectedComoNosConociste, setSelectedComoNosConociste] = useState<any>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showValidation, setShowValidation] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, },
        watch,
        setValue,
        reset,
        control
    } = useForm<FormData>({
        mode: 'onSubmit', // Cambiar a onSubmit para que solo valide al enviar
        defaultValues: {
            nombre: '',
            apellido: '',
            telefono: '',
            correo: '',
            materia: '',
            consulta: '',
            comoNosConociste: ''
        }
    });

    const watchedFields = watch();

    const isValidPhone = (phone: string) => {
        console.log(phone === '')
        if (!phone) return false;
        // Remover espacios y caracteres especiales para contar solo dígitos
        const digitsOnly = phone.replace(/\D/g, '');
        // Un teléfono válido debe tener al menos 8 dígitos total
        return digitsOnly.length > 3 && digitsOnly.length >= 8;
    };

    const isFormComplete = () => {
        const { nombre, apellido, telefono, correo, consulta, } = watchedFields;

        return (
            nombre && nombre.trim() !== '' &&
            apellido && apellido.trim() !== '' &&
            isValidPhone(telefono) &&
            correo && correo.trim() !== '' &&
            selectedMateria && selectedMateria.value &&
            consulta && consulta.trim() !== '' &&
            selectedComoNosConociste && selectedComoNosConociste.value
        );
    };

    const onSubmit = async (data: FormData) => {
        setIsSubmitting(true);
        setShowValidation(false); // Ocultar validaciones si el envío es exitoso

        try {
            // Aquí irá la lógica de envío (SheetDB + EmailJS)
            console.log('Datos del formulario:', {
                ...data,
            });

            // Simular envío
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Mostrar mensaje de éxito
            alert('¡Formulario enviado con éxito! Nos pondremos en contacto contigo pronto.');

            // Limpiar formulario
            reset();
            setSelectedMateria(null); // Resetear materia
            setSelectedComoNosConociste(null); // Resetear como nos conociste
            setShowValidation(false); // Ocultar validaciones después del reset

        } catch (error) {
            console.error('Error enviando formulario:', error);
            alert('Hubo un error al enviar el formulario. Por favor intenta nuevamente.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const onError = (errors: any) => {
        setShowValidation(true); // Mostrar validaciones solo cuando hay errores
        // Hacer scroll al primer error
        const firstErrorField = Object.keys(errors)[0];
        const element = document.querySelector(`[name="${firstErrorField}"]`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const handleMateriaSelect = (materia: any) => {
        setSelectedMateria(materia);
        setValue('materia', materia.value);
        setIsMateriaDropdownOpen(false);
    };

    const handleComoNosConocisteSelect = (option: any) => {
        setSelectedComoNosConociste(option);
        setValue('comoNosConociste', option.value);
        setIsComoNosConocisteDropdownOpen(false);
    };

    return (
        <div className="min-h-screen  relative bg-romance-50 flex justify-center items-center">
            <div className="lg:block hidden absolute top-0 right-24 bottom-0 border-r-4 border-heath-950 z-30"></div>

            <div className="max-w-2xl mx-auto px-8 py-20">
                <div className="text-center mb-8">
                    <h1 className="font-primary-playfair text-center text-[29px] md:text-4xl font-bold text-gray-800 mb-6">
                        REALIZA TUS CONSULTAS
                    </h1>
                    <p className="font-secondary-alike text-lg text-gray-600 mb-2">
                        ¿Buscas asesoría legal confiable?
                    </p>
                    <p className="text-gray-700 font-secondary-alike text-start text-lg">
                        En <span className="font-semibold text-heath-950">Anchor Law</span> estamos listos para ayudarte.
                        Contáctanos y encuentra en nosotros{' '}
                        <span className="font-semibold">el aliado legal que necesitas.</span>
                    </p>
                </div>

                <div className="space-y-6 font-secondary-alike">
                    {/* Nombre y Apellido */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <input
                                {...register('nombre', {
                                    required: 'El nombre es requerido',
                                    minLength: { value: 2, message: 'El nombre debe tener al menos 2 caracteres' }
                                })}
                                type="text"
                                placeholder="Nombre"
                                className={`w-full px-4 py-3 bg-harvest-gold-400 border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-grandis-300 ${showValidation && errors.nombre ? 'border-red-500 bg-red-50' : 'border-transparent'
                                    }`}
                            />
                            {showValidation && errors.nombre && (
                                <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>
                            )}
                        </div>

                        <div>
                            <input
                                {...register('apellido', {
                                    required: 'El apellido es requerido',
                                    minLength: { value: 2, message: 'El apellido debe tener al menos 2 caracteres' }
                                })}
                                type="text"
                                placeholder="Apellido"
                                className={`w-full px-4 py-3 bg-harvest-gold-400 border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-grandis-300 ${showValidation && errors.apellido ? 'border-red-500 bg-red-50' : 'border-transparent'
                                    }`}
                            />
                            {showValidation && errors.apellido && (
                                <p className="text-red-500 text-sm mt-1">{errors.apellido.message}</p>
                            )}
                        </div>
                    </div>

                    {/* Teléfono */}
                    <div>
                        <Controller
                            name="telefono"
                            control={control}
                            rules={{
                                required: 'El teléfono es requerido',
                                validate: {
                                    hasNumber: (value) => {
                                        if (!value) return 'El teléfono es requerido';
                                        const digitsOnly = value.replace(/\D/g, '');
                                        return digitsOnly.length >= 8 || 'Ingresa un número de teléfono válido';
                                    }
                                }
                            }}
                            render={({ field }) => (
                                <PhoneInput
                                    {...field}
                                    inputProps={{
                                        name: 'telefono',
                                        id: 'telefono'
                                    }}
                                    autoFormat={false}
                                    country={'hn'}
                                    value={field.value}
                                    onChange={(value) => field.onChange(value)}
                                    enableSearch={true}
                                    disableSearchIcon={false}
                                    inputStyle={{
                                        width: '100%',
                                        backgroundColor: '#d1ad73',
                                        // backgroundColor: errors.telefono ? '#d1ad73' : '#fef2f2',
                                        border: showValidation && errors.telefono ? '2px solid #fa5050' : '2px solid transparent',
                                        borderRadius: '0px',
                                        height: '52px',
                                        fontSize: '16px',
                                        fontFamily: 'Alike',
                                        paddingLeft: '65px'
                                    }}
                                    placeholder='+50436973697'
                                    buttonStyle={{
                                        backgroundColor: '#d1ad73',
                                        border: showValidation && errors.telefono ? '2px solid #fa5050' : '2px solid transparent',
                                        borderRight: 'none',
                                        width: '60px',
                                        borderRadius: '0px'
                                    }}
                                    containerStyle={{
                                        width: '100%',
                                    }}
                                    dropdownStyle={{
                                        backgroundColor: '#ffffff',
                                        border: '1px solid #d1d5db',
                                        borderRadius: '8px',
                                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                                        zIndex: 9999
                                    }}
                                    searchStyle={{
                                        backgroundColor: '#f9fafb',
                                        border: '1px solid #d1d5db',
                                        borderRadius: '6px',
                                        padding: '8px 12px',
                                        margin: '10px'
                                    }}
                                    specialLabel=""
                                />
                            )}
                        />
                        {showValidation && errors.telefono && (
                            <p className="text-red-500 text-sm mt-1">{errors.telefono.message}</p>
                        )}
                    </div>


                    {/* Correo electrónico */}
                    <div>
                        <input
                            {...register('correo', {
                                required: 'El correo electrónico es requerido',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: 'Por favor ingresa un correo electrónico válido'
                                }
                            })}
                            type="email"
                            placeholder="Correo electrónico"
                            className={`w-full px-4 py-3 bg-harvest-gold-400 border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-grandis-300 ${showValidation && errors.correo ? 'border-red-500 bg-red-50' : 'border-transparent'
                                }`}
                        />
                        {showValidation && errors.correo && (
                            <p className="text-red-500 text-sm mt-1">{errors.correo.message}</p>
                        )}
                    </div>

                    {/* Materia */}
                    <div className="relative">
                        <input
                            {...register('materia', { required: 'Por favor selecciona una materia' })}
                            type="hidden"
                            value={selectedMateria?.value || ''}
                        />
                        <button
                            type="button"
                            onClick={() => setIsMateriaDropdownOpen(!isMateriaDropdownOpen)}
                            className={`w-full cursor-pointer px-4 py-3 bg-harvest-gold-400 border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-grandis-300 text-left flex items-center justify-between ${showValidation && errors.materia ? 'border-red-500 bg-red-50' : 'border-transparent'
                                }`}
                        >
                            <div className="flex items-center">
                                {selectedMateria ? (
                                    <>
                                        <selectedMateria.icon className="h-5 w-5 mr-2 text-gray-600" />
                                        <span>{selectedMateria.label}</span>
                                    </>
                                ) : (
                                    <span className="text-[#685639]">Materia</span>
                                )}
                            </div>
                            <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isMateriaDropdownOpen ? 'transform rotate-180' : ''}`} />
                        </button>

                        {isMateriaDropdownOpen && (
                            <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 shadow-xl z-50 max-h-60 overflow-y-auto rounded-lg transform transition-all duration-300 ease-out opacity-100 scale-100">
                                {materias.map((materia) => (
                                    <button
                                        key={materia.value}
                                        type="button"
                                        onClick={() => handleMateriaSelect(materia)}
                                        className="cursor-pointer w-full flex items-center px-4 py-3 hover:bg-gray-200 text-left transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                                    >
                                        <materia.icon className="h-5 w-5 mr-3 text-gray-600" />
                                        <span>{materia.label}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                        {showValidation && errors.materia && (
                            <p className="text-red-500 text-sm mt-1">{errors.materia.message}</p>
                        )}
                    </div>

                    {/* Consulta */}
                    <div>
                        <textarea
                            {...register('consulta', {
                                required: 'La consulta es requerida',
                                minLength: { value: 10, message: 'La consulta debe tener al menos 10 caracteres' }
                            })}
                            placeholder="Consulta"
                            rows={4}
                            className={`w-full px-4 py-3 bg-harvest-gold-400 border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-grandis-300 resize-none ${showValidation && errors.consulta ? 'border-red-500 bg-red-50' : 'border-transparent'
                                }`}
                        />
                        {showValidation && errors.consulta && (
                            <p className="text-red-500 text-sm mt-1">{errors.consulta.message}</p>
                        )}
                    </div>

                    {/* ¿Cómo nos conociste? */}
                    <div className="relative">
                        <input
                            {...register('comoNosConociste', { required: 'Por favor selecciona una opción' })}
                            type="hidden"
                            value={selectedComoNosConociste?.value || ''}
                        />
                        <button
                            type="button"
                            onClick={() => setIsComoNosConocisteDropdownOpen(!isComoNosConocisteDropdownOpen)}
                            className={`w-full cursor-pointer px-4 py-3 bg-harvest-gold-400 border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-grandis-300 text-left flex items-center justify-between ${showValidation && errors.comoNosConociste ? 'border-red-500 bg-red-50' : 'border-transparent'
                                }`}
                        >
                            <div className="flex items-center">
                                {selectedComoNosConociste ? (
                                    <>
                                        <selectedComoNosConociste.icon className="h-5 w-5 mr-2 text-gray-600" />
                                        <span>{selectedComoNosConociste.label}</span>
                                    </>
                                ) : (
                                    <span className="text-[#685639]">¿Cómo nos conociste?</span>
                                )}
                            </div>
                            <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isComoNosConocisteDropdownOpen ? 'transform rotate-180' : ''}`} />
                        </button>

                        {isComoNosConocisteDropdownOpen && (
                            <div className="absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 shadow-xl z-50 max-h-60 overflow-y-auto rounded-lg transform transition-all duration-300 ease-out opacity-100 scale-100">
                                {comoNosConociste.map((opcion) => (
                                    <button
                                        key={opcion.value}
                                        type="button"
                                        onClick={() => handleComoNosConocisteSelect(opcion)}
                                        className="w-full cursor-pointer flex items-center px-4 py-3 hover:bg-gray-200 text-left transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                                    >
                                        <opcion.icon className="h-5 w-5 mr-3 text-gray-600" />
                                        <span>{opcion.label}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                        {showValidation && errors.comoNosConociste && (
                            <p className="text-red-500 text-sm mt-1">{errors.comoNosConociste.message}</p>
                        )}
                    </div>

                    {/* Botón Enviar */}
                    <div className="pt-4">
                        <button
                            type="button"
                            onClick={handleSubmit(onSubmit, onError)}
                            disabled={isSubmitting}
                            className={`w-full md:w-auto px-8 py-3 font-semibold text-black transition-all duration-300 transform ${isFormComplete() && !isSubmitting
                                ? 'bg-harvest-gold-400 hover:bg-grandis-300 hover:scale-105 shadow-lg hover:shadow-xl animate-pulse'
                                : 'bg-gray-400 cursor-not-allowed'
                                }`}
                        >
                            {isSubmitting ? (
                                <div className="flex items-center justify-center">
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                    Enviando...
                                </div>
                            ) : (
                                <div className="flex items-center justify-center">
                                    <Send className="mr-2 h-5 w-5" />
                                    Enviar
                                </div>
                            )}
                        </button>
                    </div>
                </div>

                {/* Nota de confidencialidad */}
                <div className="mt-8">
                    <p className="text-sm font-secondary-alike italic">
                        <strong>Nota:</strong> Valoramos tu confianza. La información que nos proporciones será tratada con estricta
                        confidencialidad y utilizada únicamente para fines de contacto y atención legal.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LegalConsultationForm