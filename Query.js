const database = 'selfInformation';
use(database);
//1.
db.createCollection('demo');
db.createCollection('mySelf');
//2.
db.demo.drop();
//3.
db.mySelf.insertOne({
    "name": "Imran Nazir",
    "home":"Pabna",
    "age":"25",
    "contact":"017XX-XXXXXX"
})
//4.
db.mySelf.deleteOne({
"_id":ObjectId("65199ac745f554e3f98c6177")
})