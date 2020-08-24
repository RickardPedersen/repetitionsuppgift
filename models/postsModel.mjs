//import db from '../database/database'

console.log('postmodel')

function getPostsModel(){
    console.log("aktiverade getPostsModel")
    /*
    db.find({}, (err,docs) => {

    });*/
}

function getSinglePostModel(){
    console.log("aktiverade getSinglePostModel")

    db.find({_id}, (err,docs) => {
        
    }); 
}

function postPostModel(){
    console.log("aktiverade postPostModel")

    db.insert(blogPost, (err, newDoc) => {

    });
}

function deletePostModel(){
    console.log("aktiverade deletePostModel")

    db.remove ({_id : _id}, {}, function (err, docs) {
                  
    });
}

function patchPostModel(){
    console.log("aktiverade patchPostModel")

    db.update({_id :_id}, blogPost, {}, function (err, docs) {
            
    });
}

export default {getPostsModel, getSinglePostModel, postPostModel, deletePostModel, patchPostModel}