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

const mongoOptions = 
{
    poolSize : 100,
    wtimeout : 2500,
    connectTimeoutMS: 10000,
    useNewUrlParser : true,
    useUnifiedTopology : true,
};

const client = new MongoClient(uri, mongoOptions);

//let _db;

client.on("serverClosed", (event) =>
{
    console.log("received serverClosed");
    console.log(JSON.stringify(event, null, 2));
});

// connect to mongodb cluster and return the database
// if is connected, just return the database
const mongoDBConnection = async (app) =>
{
    try
    {
        if (client.isConnected())
        {
            //_db = client.db("DB");
            return client.db("DB");
        }

        await client.connect();
        if(app) app.use(passport.initialize());
        //_db = client.db("DB");
        return client.db("DB");
    } catch (err)
    {
        return Promise.reject(err);
    }
};

//const dbObj = () => _db;

module.exports = { mongoDBConnection,};

// let client;

// module.exports.connect = async () =>
// {
//     try{
//         client = await MongoClient.connect(uri, { useNewUrlParser: true });
//     } catch(e)
//     {
//         console.log("Could not connect to mongoDB");
//     }
// }

// module.exports.get = () =>
// {
//     client;
// }

// module.exports.close = () =>
// {
//     client.close();
// }

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

// module.exports.user = client.db("DB").collection("user");