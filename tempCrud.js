// const {MongoClient} = require('mongodb');

// async function main() {
// 	const uri = `mongodb+srv://stephanusbotha21:Alvgz6amVt382kCh@testmicroservicecluster.sz3htkg.mongodb.net/?retryWrites=true&w=majority`;

//     const client = new MongoClient(uri);

    

//     try {
//         await client.connect();
    
//         await listDatabases(client);
     
//     } catch (e) {
//         console.error(e);
//     } finally {
//         await client.close();
//     }

//     console.log(client);

// }

// main().catch(console.error);


// async function listDatabases(client){
//     databasesList = await client.db().admin().listDatabases();
 
//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };


const { MongoClient } = require('mongodb');

async function main() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/drivers/node/ for more details
     */
    const uri = `mongodb+srv://stephanusbotha21:Alvgz6amVt382kCh@testmicroservicecluster.sz3htkg.mongodb.net/?retryWrites=true&w=majority`;
 
    /**
     * The Mongo Client you will use to interact with your database
     * See https://mongodb.github.io/node-mongodb-native/3.6/api/MongoClient.html for more details
     * In case: '[MONGODB DRIVER] Warning: Current Server Discovery and Monitoring engine is deprecated...'
     * pass option { useUnifiedTopology: true } to the MongoClient constructor.
     * const client =  new MongoClient(uri, {useUnifiedTopology: true})
     */
    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        await deleteListingsScrapedBeforeDate(client, new Date("2019-02-15"));

    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

main().catch(console.error);

async function deleteListingsScrapedBeforeDate(client, date) {
    const result = await client.db("sample_airbnb").collection("listingsAndReviews")
        .deleteMany({ "last_scraped": { $lt: date } });
    console.log(`${result.deletedCount} document(s) was/were deleted.`);
}