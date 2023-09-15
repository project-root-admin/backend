const express = require('express')
const { ApolloServer } = require('@apollo/server'); 
const {expressMiddleware} = require('@apollo/server/express4')
const bodyParser = require('body-parser')
const cors = require('cors')
const typeDefs = require('./api/schema/schema'); 
const resolvers = require('./api/resolvers/userResolver'); 
require('dotenv').config();
const { connectToDatabase } = require('./config/database');


// Connect to MongoDB
connectToDatabase();


async function startServer() {
   const app = express();
   
   // Create Apollo Server
   const server = new ApolloServer({ typeDefs, resolvers });
   const port = process.env.PORT || 5000;
   app.use(bodyParser.json());
   app.use(cors());
   await server.start()
   app.use("/graphql", expressMiddleware(server));
   app.listen(port, () => { console.log(`Server ready at ${port}`); });

}
startServer();
