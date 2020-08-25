var Datastore = require('nedb-promises')

db = new Datastore({ filename: 'Database', autoload: true });

module.exports = db;