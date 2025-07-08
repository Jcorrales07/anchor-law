// utils/formValidation.ts
import type { FormData } from './formData';

export const isValidPhone = (phone: string): boolean => {
    if (!phone) return false;
    // Remover espacios y caracteres especiales para contar solo dígitos
    const digitsOnly = phone.replace(/\D/g, '');
    // Un teléfono válido debe tener al menos 8 dígitos total
    return digitsOnly.length > 3 && digitsOnly.length >= 8;
};

export const isFormComplete = (
    watchedFields: Partial<FormData>,
    selectedMateria: any,
    selectedComoNosConociste: any
): boolean => {
    const { nombre, apellido, telefono, correo, consulta } = watchedFields;

    return (
        nombre && nombre.trim() !== '' &&
        apellido && apellido.trim() !== '' &&
        isValidPhone(telefono || '') &&
        correo && correo.trim() !== '' &&
        selectedMateria && selectedMateria.value &&
        consulta && consulta.trim() !== '' &&
        selectedComoNosConociste && selectedComoNosConociste.value
    );
};

export const scrollToFirstError = (errors: any): void => {
    const firstErrorField = Object.keys(errors)[0];
    const element = document.querySelector(`[name="${firstErrorField}"]`);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
};