import Datastore from "nedb-promises";

db = new Datastore({ filename: 'Database', autoload: true });

export { db };