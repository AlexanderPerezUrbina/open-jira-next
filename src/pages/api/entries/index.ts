import { db } from '@/database';
import { Entry as IEntry, EntryStatus } from '@/interfaces';
import { Entry } from '@/models';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { message: string } | IEntry[] | IEntry;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    switch (req.method) {
        case 'GET':
            return getEntries(res);

        case 'POST':
            return storeEntries(req, res);

        default:
            return res.status(400).json({
                message: 'This endpoint in not available',
            });
    }
}

const getEntries = async (res: NextApiResponse<Data>) => {
    await db.connect();
    const entries = await Entry.find().sort({ createdAt: 'ascending' });
    await db.disconnect();

    return res.status(200).json(entries);
};

const storeEntries = async (
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) => {
    const { description, status } = req.body as {
        description: string;
        status?: EntryStatus;
    };

    await db.connect();

    const entry = new Entry({
        createdAt: Date.now(),
        description,
        status: status || 'pending',
    });

    entry.save();

    await db.disconnect();

    res.status(201).json(entry);
};
