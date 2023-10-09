const Post = require('../models/post')
const asyncMiddleware = require('../middlewares/async.middleware.js')
const { error } = require('../responses/error.Response.js')


const postController = {
    getDetailPost: asyncMiddleware(async (req, res) => {}),
    getPosts: asyncMiddleware(async (req, res) => {}),
    createPost: asyncMiddleware(async (req, res) => {}),
    updatePost: asyncMiddleware(async (req, res) => {}),
    deletePost: asyncMiddleware(async (req, res) => {}),
    likePost: asyncMiddleware(async (req, res) => {}),
    unlikePost: asyncMiddleware(async (req, res) => {}),
    commentPost: asyncMiddleware(async (req, res) => {}),
    uncommentPost: asyncMiddleware(async (req, res) => {}),
    getPostsByUser: asyncMiddleware(async (req, res) => {}),
    
}

module.exports = postController