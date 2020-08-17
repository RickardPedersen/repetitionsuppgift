const express = require('express')
const app = express()
const port = 8888

app.use(express.json());

var Datastore = require('nedb'), db = new Datastore({filename : 'users'});


db.loadDatabase();

app.get('/', (req, res) => {
    db.find({}, function (err,docs){ console.log(docs); });

    res.send('Hello World!')
});

app.post('/post', (req, res) => {
    //console.log(req.body);

    db.insert(req.body, function (err, newDoc) {   
        console.log(newDoc)
    })

   res.send('Hello World!')
});

app.put('/edit/:id', (req, res) => {
    db.update({_id : req.params.id}, req.body, {}, function (err, docs) {   
        console.log(docs)
    });

    res.send('Hello World!')
});

app.delete('/delete/:id', (req, res) => {
    db.remove ({_id : req.params.id}, {});
    res.send('Hello World!')
});


app.listen(port, () => console.log(`Server started on port ${port}`))
