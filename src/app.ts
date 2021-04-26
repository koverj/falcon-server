import { Server } from './server';
import { connection } from './connection';

const app = new Server;
connection.then(async conn => {
    app.start();
})
