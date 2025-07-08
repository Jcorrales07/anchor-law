interface ServiceArea {
    id: string;
    icon: string;
    name: string;
    items: string[];
}

export const services: ServiceArea[] = [
    {
        id: 'civil',
        icon: "/images/services/civil.png",
        name: "CIVIL",
        items: [
            "Contratos",
            "Sucesiones",
            "Bienes y propiedad"
        ]
    },
    {
        id: 'familia',
        icon: "/images/services/familia.png",
        name: "FAMILIA",
        items: [
            "Matrimonio",
            "Divorcio",
            "Pensiones alimenticias"
        ]
    },
    {
        id: 'penal',
        icon: "/images/services/penal.png",
        name: "PENAL",
        items: [
            "Denuncias",
            "Querellas",
            "Defensa privada"
        ]
    },
    {
        id: 'fiscal',
        icon: "/images/services/fiscal.svg",
        name: "FISCAL",
        items: [
            "Asesoría tributaria",
            "Impuestos",
            "Trámites"
        ]
    },
    {
        id: 'admin',
        icon: "/images/services/admin.svg",
        name: "ADMIN.",
        items: [
            "Registros sanitarios",
            "Licencias sanitarias",
            "Licencias ambientales"
        ]
    },
    {
        id: 'mercantil',
        icon: "/images/services/mercantil.svg",
        name: "MERCANTIL",
        items: [
            "Contratos mercantiles",
            "Constituciones",
            "Compliance"
        ]
    },
    {
        id: 'laboral',
        icon: "/images/services/laboral.png",
        name: "LABORAL",
        items: [
            "Inscripción de planillas",
            "Contratos laborales",
            "Asesoría laboral"
        ]
    },
    {
        id: 'propiedad',
        icon: "/images/services/propiedad intelectual.png",
        name: "PROP. INT.",
        items: [
            "Derechos de autor",
            "Marcas y patentes",
            "Protección de obras"
        ]
    }
];
