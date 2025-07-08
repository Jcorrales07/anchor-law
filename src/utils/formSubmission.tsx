// utils/formSubmission.ts
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import type { FormData } from './formData';

export const saveToSheetDB = async (data: FormData): Promise<any> => {
    const response = await fetch(import.meta.env.VITE_SHEETDB_URL, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data: [
                {
                    'fecha': new Date().toLocaleString(),
                    'nombre': data.nombre,
                    'apellido': data.apellido,
                    'teléfono': data.telefono,
                    'email': data.correo,
                    'materia': data.materia,
                    'consulta': data.consulta,
                    'como_nos_conociste': data.comoNosConociste,
                }
            ]
        })
    });

    if (!response.ok) {
        throw new Error(`Error al guardar los datos: ${response.status}`);
    }

    return await response.json();
};

export const sendConfirmationEmail = async (data: FormData): Promise<any> => {
    return await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
            nombre: data.nombre,
            apellido: data.apellido,
            materia: data.materia,
            telefono: data.telefono,
            conociste: data.comoNosConociste,
            consulta: data.consulta,
            email: data.correo,
        },
        import.meta.env.VITE_EMAILJS_PK
    );
};

export const handleFormSubmission = async (
    data: FormData,
    onSuccess: () => void,
    onError: () => void
): Promise<void> => {
    try {
        // Guardar datos con toast de progreso
        await toast.promise(
            saveToSheetDB(data),
            {
                loading: 'Guardando tu consulta...',
                // success: <b>✅ ¡Consulta guardada exitosamente!</b>,
                error: <b>❌ Error al guardar la consulta</b>,
            }
        );

        // Enviar correo de confirmación con toast de progreso
        await toast.promise(
            sendConfirmationEmail(data),
            {
                loading: 'Enviando correo de confirmación...',
                // success: <b>📧 ¡Correo de confirmación enviado!</b>,
                error: <b>⚠️ No se pudo enviar el correo de confirmación</b>,
            }
        );

        // Toast final de éxito personalizado
        setTimeout(() => {
            toast.success(
                <div>
                    <b>🎉 ¡Perfecto, {data.nombre}!</b>
                    <p>Hemos recibido tu consulta sobre: <strong>{data.materia}</strong>. Nos pondremos en contacto contigo pronto!.</p>
                </div>,
                {
                    duration: 10000,
                    style: {
                        background: '#10b981',
                        color: 'white',
                    },
                }
            );
        }, 1000);

        onSuccess();

    } catch (error) {
        console.error('Error enviando formulario:', error);
        toast.error(
            <div>
                <b>❌ Ups, algo salió mal</b>
                <p>No pudimos procesar tu consulta. Por favor, intenta nuevamente o contáctanos directamente.</p>
            </div>,
            {
                duration: 5000,
                style: {
                    background: '#ef4444',
                    color: 'white',
                },
            }
        );
        onError();
    }
};