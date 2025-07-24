import express from 'express';
import cors from 'cors';
import http from 'http';
import { APIRouter } from './api/router.js';
import { CONFIG } from './config.js';

const app = express()
const port = CONFIG.SERVER_PORT
const server = http.createServer(app);

app.use(cors({
    credentials: true,
    origin(requestOrigin, callback) {
        callback(null, requestOrigin);
    }
}));

app.use(APIRouter);

server.listen(port, () => {
    console.log(`App listening on port ${port}`)
});
