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

//create an instance of MogoClient and connect to the cluster
async function main()
{
    const client = new MongoClient(uri);

    try {
        //connect to MongoDB Cluster
        await client.connect();

        console.log("db connect success.");
        //database test (list db)
        await listDatabases(client);

        
    } catch (e) {
        console.log(e);
        
    } finally {
        //close the connection when connect error of program exit
        await client.close();
    }
    
}

//list the database in the MongoDB Cluster
async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
