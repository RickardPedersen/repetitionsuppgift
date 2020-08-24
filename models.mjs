import nedb from 'nedb';
import ejs from 'ejs';

let db = new nedb({filename : 'users', autoload: true});
db.loadDatabase();

function mainPage () {
    return new Promise((resolve, reject) => {
        db.find({}, (err,docs) => {
            if (!err) {
                resolve(docs);
            } else {
                reject(err);
            }
        });
    });    
}

function addBlogPost(blogPost) {
    return new Promise((resolve, reject) => {
        db.insert(blogPost, (err, newDoc) => {
            if(!err) {
                resolve(newDoc);
            } else {
                reject(err);
            }       
        })
    })
}

function editBlogPost(_id, blogPost) {
    return new Promise((resolve, reject) => {

        db.update({_id :_id}, blogPost, {}, function (err, docs) {
            if (err) {
                reject(err)
            } else {
                resolve(docs)
            }
        });
    });
}

function deleteBlogPost (_id) {
    return new Promise((resolve, reject) => {
        db.remove ({_id : _id}, {}, function (err, docs) {
            if (err) {
                reject(err)
            } else {
                resolve(docs)
            }            
        });
    });
}

function addCommentToBlogPost(_id, comment) {
    return new Promise((resolve, reject) => {
        db.update({ _id: _id }, { $push: { comments: comment } }, {}, function () {
            if (err) {
                reject(err)
            } else {
                resolve(newDoc)
            }
        });
        /*
        db.insert(comment, function (err, newDoc) {   
            if (err) {
                reject(err)
            } else {
                resolve(newDoc)
            }
        })
        */
    });
}

/*
// $push inserts new elements at the end of the array
    db.update({ _id: 'id6' }, { $push: { comments: 'comment' } }, {}, function () {
      // Now the comments array is ['comment1', 'comment2', 'comment']
    });
*/

export {mainPage, ejs, nedb, addBlogPost, editBlogPost, deleteBlogPost, addCommentToBlogPost};