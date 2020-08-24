//import db from '../database/database'

function getCommentsModel(){
    console.log("aktiverade getCommentsModel")
/*
    db.find({}, (err,docs) => {

    });*/
}

function getSingleCommentModel(){
    console.log("aktiverade getSingelCommentModel")

    db.find({}, (err,docs) => {
        
    });    
}

function postCommentModelModel(){
    console.log("aktiverade postCommentModel")

    db.insert(blogPost, (err, newDoc) => {

    });
}

function deleteCommentModel(){
    console.log("aktiverade deleteCommentModel")

    db.remove ({_id : _id}, {}, function (err, docs) {
                  
    });
}

function patchCommentModel(){
    console.log("aktiverade patchCommentModel")

    db.update({_id :_id}, blogPost, {}, function (err, docs) {
            
    });
}


export default {getCommentsModel, getSingleCommentModel, postCommentModelModel, deleteCommentModel, patchCommentModel}