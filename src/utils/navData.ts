interface NavItems {
    id: string;
    label: string;
    path: string;
}

export const navItems: NavItems[] = [
    { label: 'INICIO', id: 'home', path: '/' },
    { label: 'NOSOTROS', id: 'about', path: '/nosotros' },
    { label: 'SERVICIOS', id: 'services', path: '/servicios' },
    { label: 'CONTÁCTANOS', id: 'contact', path: '/contactanos' }
];