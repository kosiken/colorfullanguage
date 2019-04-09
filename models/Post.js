
class Post{
    /**
     *Creates an instance of Post.
     * @param {string} title the title of the post
     * @param {string} image
     * @param {string} body
     * @param {Array<string>} categories
     * @param {Date} created
     * @memberof Post
     */
    constructor(title, image,
  body, categories,  
    created ){
        this.title = title;
        this.image = image;this.categories=categories;
        this.comments = [];
        this.created= created;
        this.body = body;
        this.slug = title.toLowerCase().replace(/\s/g, '-')
    }
/**
 *
 *
 * @static
 * @param {ReadableStream<string>} fs
 * @param {string} path
 * @param {Post} thing
 * @memberof Post
 * @returns {void}
 */
static addToFile(fs, path, thing){
        let deal = fs.readFileSync(path)
        deal.push(thing)
        fs.writeFileSync(path, deal)
        
    }
/**
 *
 *
 * @static
 * @param {ReadableStream} fs
 * @param {string} path
 * @param {string} query
 * @returns {number|Post} 
 * @memberof Post
 */
static FindOne(fs, path, query){
         let ans = fs.readFileSync(path)
        .filter(i=>i.slug===query)[0]

        if(!ans)return 404
        return ans
    }
/**
 * 
 * @param {stream} fs 
 * @param {string} path 
 * @param {string} query 
 * @param {object} obj 
 */
    static comment(fs, path, query, obj) {
        let arr =fs.readFileSync(path)
       let ind =  arr.findIndex(i=>(i.slug === query))
       if(ind>-1){ arr[ind].comments.push(obj)
        fs.writeFileSync(path, arr)
        return {success:true}
        }
        else return 404
    }



}

module.exports = Post
