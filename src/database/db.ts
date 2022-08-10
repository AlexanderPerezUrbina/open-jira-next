import { log } from '@/helpers';
import mongoose, { ConnectionStates } from 'mongoose';

interface MongoConnectionConfig {
    status: MongoConnectionStatus;
}

type MongoConnectionStatus =
    | 'disconnected'
    | 'connected'
    | 'connecting'
    | 'disconnecting'
    | 'uninitialized';

const toDeclaredMongoState = (state: ConnectionStates) => {
    const mongoStates: { [_key in ConnectionStates]: MongoConnectionStatus } = {
        [ConnectionStates.disconnected]: 'disconnected',
        [ConnectionStates.connected]: 'connected',
        [ConnectionStates.connecting]: 'connecting',
        [ConnectionStates.disconnecting]: 'disconnecting',
        [ConnectionStates.uninitialized]: 'uninitialized',
    };

    return mongoStates[state];
};

const mongoConnection: MongoConnectionConfig = {
    status: 'disconnected',
};

export const connect = async () => {
    if (mongoConnection.status !== 'disconnected') return;

    if (mongoose.connections.length) {
        mongoConnection.status = toDeclaredMongoState(
            mongoose.connections[0].readyState,
        );

        if (mongoConnection.status === 'connected') return;
        await disconnect();
    }

    await mongoose.connect(process.env.MONGO_URL!);
    mongoConnection.status = 'connected';
    log(
        `[MongoDB]: Database ${mongoConnection.status}. ${process.env.MONGO_URL}`,
    );
};

export const disconnect = async () => {
    if (mongoConnection.status === 'disconnected') return;
    await mongoose.disconnect();
    mongoConnection.status = 'disconnected';
    log(
        `[MongoDB]: Database ${mongoConnection.status}. ${process.env.MONGO_URL}`,
    );
};
