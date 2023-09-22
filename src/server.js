const express = require('express')
const { ApolloServer } = require('@apollo/server'); 
const {expressMiddleware} = require('@apollo/server/express4')
const bodyParser = require('body-parser')
const cors = require('cors')
const typeDefs = require('./api/schema/schema'); 
const resolvers = require('./api/resolvers/userResolver'); 
require('dotenv').config();
const { connectToDatabase } = require('./config/database');

// const {addAdditionalKeys} = require('./api/resolvers/addAdditionalKeys')
// Connect to MongoDB
const crypto = require('crypto');

const generateJwtSecretKey = () => {
  // Generate a random secret key
  const secretKey = crypto.randomBytes(32).toString('hex');
  return secretKey;
};

async function startServer() {
await connectToDatabase();

   const app = express();
   
   // Create Apollo Server
   const server = new ApolloServer({ typeDefs, resolvers });
   const port = process.env.PORT || 5000;
   app.use(bodyParser.json());
   app.use(cors());
   await server.start()
   app.use("/graphql", expressMiddleware(server));
   // await addAdditionalKeys()
   app.listen(port, () => { console.log(`Server ready at ${port}`); });

}
startServer();
