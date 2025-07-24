import 'dotenv/config'

export const CONFIG = {
    SERVER_PORT: process.env.SERVER_PORT || 3000,
    MONGO_URL: process.env.MONGO_URL,
}
