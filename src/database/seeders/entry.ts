import { Entry } from '@/interfaces';
import { Seed } from '@/types/utilities';

const data: Seed<Entry> = [
    {
        createdAt: Date.now(),
        description: 'Pendiente: aishdishd',
        status: 'pending',
    },
    {
        createdAt: Date.now() - 86400000,
        description: 'En Progreso: aishdishd',
        status: 'in-progress',
    },
    {
        createdAt: Date.now() - 172800000,
        description: 'Completado: aishdishd',
        status: 'finished',
    },
];

export default data;
