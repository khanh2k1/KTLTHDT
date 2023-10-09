
const { mongoConfig } = require('../config/env')


const config = {
    MONGO_URI: `mongodb://${mongoConfig.host}:${mongoConfig.port}/${mongoConfig.database}?maxPoolSize=${mongoConfig.maxPoolSize}` 
    || 'mongodb://127.0.0.1:27017/social-network?maxPoolSize=10',
    // MONGO_URI: 'mongodb://127.0.0.1:27017/social-network?maxPoolSize=10'
}


module.exports = config