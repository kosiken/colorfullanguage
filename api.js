const r = require('express').Router()
const formidable = require('formidable')
const Post = require('./models/Post'),fs= require('jsonfile')


var form = new formidable.IncomingForm()
form.encoding = 'utf-8',
form.uploadDir = "./public"
form.keepExtensions = true
form.maxFieldsSize= 10 * 1024**2
form.multiples = true




r.post('/newPost', (rq, rs) => {
    form.parse(rq,(err, fields, files)=>{
        if (err) throw err
        let categories = []
        Object.keys(fields).forEach(e=>{
            if(/Trivial|Story|Sport|other/.test(e))categories.push(fields[e])
          })
        let {
            title,body
            }= fields,image;
       try{ image = files.file.path.replace('public\\', '') }
       catch(err){
           image ='bgp.jpg'
       }

        Post.addToFile(fs, './public/posts.json', 
        new Post(title,image, body, categories))
        rs.json(fields)

    })
})

r.get('/posts/*', (rq, rs)=> {
   let ans = (Post.FindOne(fs, './public/posts.json',rq.url.replace('/posts/',''))
   )

   typeof ans ==='number'?rs.redirect('/notfound.html'):rs.json(ans)
})

r.post ('/comment', (rq, rs)=> {
    form.parse(rq, (err, fields, files) => {
        let ans = Post.comment(fs, './public/posts.json', rq.query.post, fields)
        rs.json(ans)
    })
})
module.exports = r