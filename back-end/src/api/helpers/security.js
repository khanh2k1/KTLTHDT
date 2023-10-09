const bcrypt = require('bcrypt');

const security = {
    hash: (pw) => {
        return bcrypt.hashSync(pw, 10);
    }, 
    compare: (data, encrypted) => {
        return bcrypt.compareSync(data, encrypted);
    }
}

module.exports = security;