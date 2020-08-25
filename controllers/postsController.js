const model = require('../models/postsModel');

console.log('postsController körs')


function getPostsController(req, res){

    // model.
    console.log("getPostsController körs")
    model.getPostsModel()
    res.send("getPostsController körs")

}
function getSinglePostController(){

    // model.

}
async function postPostController(req, res){
    try {
        const blogPost = {
            title: req.body.title,
            content: req.body.content,
        }
    
        await model.postPostModel(blogPost);
    
        
        res.json("Lade till " + blogPost)
    } catch (error) {
        console.log({error: error.message})
        res.json({error: error.message})

    }
    

}
function deletePostController(){

    // model.

}
function patchPostController(){

    // model.

}

module.exports = {
    getPostsController,
    getSinglePostController,
    postPostController,
    deletePostController,
    patchPostController
}