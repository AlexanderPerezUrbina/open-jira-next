import { db } from '@/database';
import * as seeders from '@/database/seeders';
import { Entry } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    message: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    if (process.env.NODE_ENV === 'production') {
        return res.status(401).json({
            message: 'Este servicio no esta disponible',
        });
    }

    await db.connect();
    await Entry.deleteMany();
    await Entry.insertMany(seeders.entry);
    await db.disconnect();

    res.status(200).json({ message: 'Proceso realizado correctamente' });
}
