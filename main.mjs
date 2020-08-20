import express from 'express';
import {mainPage, ejs, nedb, addBlogPost, editBlogPost, deleteBlogPost, addCommentToBlogPost} from "./db/export.mjs"

const app = express()
const port = 8888
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', async(req, res) => {  
    res.render("index", { row: await mainPage() });
});

app.post('/post', async(req, res) => {
    try{
        let blogPost = {
            title: req.body.title,
            content: req.body.content,
            comments: {
                comment: {
                 message: req.body.comment   
                }
            }
        }
        await addBlogPost(blogPost)
        res.redirect('/')
    }catch(error){
        res.json({error: error.message})
    }
});

app.post('/edit', async(req, res) => { //put om man kör postman
    try {
        let blogPostId = req.body._id;
        let blogPost = {
            title: req.body.title,
            content: req.body.content,
        }
        await editBlogPost(blogPostId, blogPost)
        res.redirect('/')
    } catch (error) {
        res.json({error: error.message})
    }
});

app.post('/delete', async(req, res) => {
    try {
        let blogPostId = req.body._id;
        await deleteBlogPost(blogPostId)
        res.redirect('/')
    } catch (error) {
        res.json({error: error.message})
    }
});

app.post('/comment', async(req, res) => {
    try {
        let comment = req.body.comment;
        let _id = req.body._id;
        await addCommentToBlogPost(_id, comment);
        res.redirect('/');
    } catch (error) {
        res.json({error: error.message})
    }
});

app.get('/onePost/:id', (req, res) => {
    db.find({_id: req.params.id}, function (err,docs){ console.log(docs); });
    db.find({postId: req.params.id}, function (err,docs){ console.log(docs); });

    res.send('Hello World!')
});




app.listen(port, () => console.log(`Server started on port ${port}`))
