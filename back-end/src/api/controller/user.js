const { User } = require('../models/user');
const asyncMiddleware = require('../middlewares/async.middleware.js')
const { error } = require('../responses/error.Response.js')


const userController = {
    follow: asyncMiddleware(async (req, res) => {

    }), 

    unfollow: asyncMiddleware(async (req, res) => {

    }),

    getFollowers: asyncMiddleware(async (req, res) => {

    }),

    getFollowing: asyncMiddleware(async (req, res) => {

    }),
}