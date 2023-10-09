const Account = require('../models/account.js')
const Security = require('../helpers/security.js')
const asyncMiddleware = require('../middlewares/async.middleware.js')
const { error } = require('../responses/error.Response.js')


const accountController = {
    signUp: asyncMiddleware(async (req, res) => {
        const { email, password } = req.body

        await Account.findOne({ email })
            .then(() => {
                res.status(400).json({
                    success: false,
                    message: 'Email already exists'
                })
            })
        const hashPassword = Security.hash(password)
        const newAccount = new Account({ email, hashPassword })
        await newAccount.save().then(() => {
            console.log('::Account created')
            res.status(200).json({
                success: true,
                message: 'Account created'
            })
        }).catch((err) => {
            console.log(err)
            throw new error(500, 'Internal server error')
        })

    }),

    signIn: asyncMiddleware(async (req, res) => {
        const { username, password } = req.body
        await Account.findOne({ username }).then((account) => {

            const isMatch = Security.compare(password, account.password)
            if (isMatch) {
                const token = Security.generateToken(account)
                res.status(200).json({
                    success: true,
                    message: 'Sign in successfully',
                    token
                })
            } else {
                throw new error(400, 'Wrong password or username')
            }
        })
    }), 

    forgotPassword: {
        
    }
}

module.exports = accountController