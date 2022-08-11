import { db } from '@/database';
import { Entry as IEntry } from '@/interfaces';
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
