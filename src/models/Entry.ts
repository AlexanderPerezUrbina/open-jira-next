import { Entry } from '@/interfaces';
import mongoose, { Model, Schema } from 'mongoose';

const schema = new Schema({
    description: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Number,
    },
    status: {
        type: String,
        enum: {
            values: ['pending', 'in-progress', 'finished'],
            message: '{VALUE} no es un estado permitido',
        },
    },
});

const model: Model<Entry> =
    mongoose.models.Entry || mongoose.model('Entry', schema);

export default model;
