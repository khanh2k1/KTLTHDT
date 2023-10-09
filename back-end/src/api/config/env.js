
require('dotenv').config()


const mongoConfig = {
    host: process.env.host || "127.0.0.1",
    port: process.env.port || '27017',
    database: process.env.database || 'social-network',
    maxPoolSize: 10
}

const port = process.env.port_web_server || 9999

module.exports = { mongoConfig, port }