// utils/formData.ts
import { Scale, Users, Building, FileText, Heart, Shield, Calculator, Stethoscope, Search, UserCheck, Globe, Building2, Calendar, HelpCircle } from 'lucide-react';
import { FaTiktok, FaFacebookSquare, FaLinkedin, FaGoogle } from "react-icons/fa"
import { RiInstagramFill } from "react-icons/ri"
import { MdFamilyRestroom } from "react-icons/md";

export interface FormData {
    nombre: string;
    apellido: string;
    telefono: string;
    correo: string;
    materia: string;
    consulta: string;
    comoNosConociste: string;
}

export const materias = [
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

export const comoNosConociste = [
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