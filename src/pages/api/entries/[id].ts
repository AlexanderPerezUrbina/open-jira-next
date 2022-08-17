import { db } from '@/database';
import { Entry as IEntry } from '@/interfaces';
import { Entry } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { message: string } | IEntry[] | IEntry;

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    switch (req.method) {
        case 'PUT':
            return updateEntry(req, res);
    }
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    const { id } = req.query as { id: string };

    await db.connect();
    const entry = await Entry.findById(id);

    if (!entry) {
        return res.status(400).json({ message: 'Este ID no es valido' });
    }

    const { description = entry.description, status = entry.status } =
        req.body as Pick<IEntry, 'description' | 'status'>;

    const entryUpdated = await Entry.findByIdAndUpdate(
        id,
        {
            description,
            status,
        },
        { runValidators: true, new: true },
    );
    await db.disconnect();

    return res.status(200).json(entryUpdated!);
};
