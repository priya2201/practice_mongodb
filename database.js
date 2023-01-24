const { MongoClient } = require("mongodb");
const URI = "mongodb+srv://user1:priya1234@cluster0.bjj5ltd.mongodb.net/School_management?retryWrites=true&w=majority"
const dbName = "School_management";


const client = new MongoClient(URI,
  { useNewUrlParser: true });

async function connect() {
  console.log("Connecting to database...");
  try {
    // console.log(URI,dbName);
   let res =  await client.connect();
   

    // Establish and verify connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully",URI);
  } catch (err) {
    console.error("Error: Failed to connect to database");
    console.error(err);
    await client.close();
  }
}

function getConnection() {
  return client;
}

module.exports = { connect, getConnection };