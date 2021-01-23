//------------------------------------------------------------
// database connection
//------------------------------------------------------------

// require mongodb
const {MongoClient} = require("mongodb");

// database user name and pw
var username = "admin";
var password = "admin";

// database uri
var uri = "mongodb+srv://<username>:<password>@cluster0.dzea7.mongodb.net/<dbname>?retryWrites=true&w=majority";

//replace userName and password to database uri
uri = uri.replace("<username>", username);
uri = uri.replace("<password>", password);

const client = new MongoClient(uri);

//create an instance of MogoClient and connect to the cluster
// client.connect(function(err)
// {
//     if(err) throw err
//     console.log("db connect success.");
// });
// async function main()
// {
//     try {
//         //connect to MongoDB Cluster
//         await client.connect();

//         console.log("db connect success.");
//         //database test (list db)
//         //await listDatabases(client);
        
//     } catch (e) {
//         console.log(e);
        
//     } finally {
//         //close the connection when connect error of program exit
//         await client.close();
//     }
    
// }

// //list the database in the MongoDB Cluster
// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };

// main().catch(console.error);
module.exports.client = client;
// module.exports.user = client.db("DB").collection("user");