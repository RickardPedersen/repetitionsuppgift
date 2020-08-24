import model from '../models/postsModel.mjs';

console.log('postsController körs')

function getPostsController(){

    // model.
    console.log("getPostsController körs")
    model.getPostsModel()
    res.json("getPostsController körs")

}
function getSinglePostController(){

    // model.

}
function postPostController(){

    // model.

}
function deletePostController(){

    // model.

}
function patchPostController(){

    // model.

}

export default {getPostsController, getSinglePostController, postPostController, deletePostController, patchPostController}