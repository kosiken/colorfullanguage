const mongoose = require('mongoose')

const Scheema = mongoose.Schema

const Post = new Scheema({
    title:{
        type:String,
        required: true
    },
    body:String,
    author:String,
    categories: [{type:String}],
    comments:[{type:String}],
    created: Date
})

module.exports = mongoose.model('posts', Post)