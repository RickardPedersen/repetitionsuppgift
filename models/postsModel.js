const db = require('../database/database');

console.log('postmodel')

function getPostsModel(req, res){

    console.log("aktiverade getPostsModel")
    
    db.find({}, (err, doc) => {

    });
}

function getSinglePostModel(){
    console.log("aktiverade getSinglePostModel")

    db.find({_id}, (err, doc) => {
        if(!err) {
            console.log("Inserted" + doc);
        } else {
            console.log("Error!" + err)
        }
    }); 
}

function postPostModel(blogPost){
    console.log("aktiverade postPostModel")

    // db.insert(blogPost, (err, doc) => {
    //     if(!err) {
    //         console.log("Inserted" + doc);
    //     } else {
    //         console.log("Error!" + err)
    //     }
    // });
    return new Promise((resolve, reject) => {
        db.insert(blogPost, (err, newDoc) => {
            if(!err) {
                console.log(newDoc)
                resolve(newDoc);
            } else {
                reject(err);
            }       
        })
    })
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

module.exports = {
    getPostsModel,
    getSinglePostModel,
    postPostModel,
    deletePostModel,
    patchPostModel
}