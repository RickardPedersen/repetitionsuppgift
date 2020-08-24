import model from '../models/commentsModel.mjs';
console.log('commentsController körs')

function getCommentsController() {
    console.log("testing")
    model.getCommentsModel()
}

function getSingleCommentController() {

}

function postCommentController() {

}

function deleteCommentController() {

}

function patchCommentController() {

}

export default { getCommentsController, getSingleCommentController, postCommentController, deleteCommentController, patchCommentController}
