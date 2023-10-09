const { default: mongoose } = require('mongoose');
const config = require('./config')

class DB {
    constructor(conn, dis) {
        this.conn = conn
        this.dis = dis
    }
}

function conn() {
    try {
        // With connection string options
        console.log('::Connecting mongoDB...')
        const uri = config.MONGO_URI;
    
        if (mongoose.connection.readyState === 1) {
            console.log('::Connected mongoDB')
        }
        if (mongoose.connection.readyState === 0) {
            // Kết nối tới db
            mongoose.connect(uri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }).then(() => console.log('::Connected mongoDB'))
        }
    } catch (error) {
        console.log('::Error connect db: ', error)
    }
}

function dis() {
    mongoose.disconnect().then(() => console.log('::Disconnected mongoDB'))
}

const db = new DB(conn, dis)

module.exports = db