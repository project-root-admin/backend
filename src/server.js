const { ApolloServer } = require('apollo-server'); 
const typeDefs = require('./api/schema/schema'); 
const resolvers = require('./api/resolvers/userResolver'); 
require('dotenv').config();
const { connectToDatabase } = require('./api/dataSources/database');


// Connect to MongoDB
connectToDatabase();

// Create Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start the server
const port = process.env.PORT || 5000;
console.log(process.env.PORT)
server.listen(port).then(({ url }) => { console.log(`Server ready at ${url}`); });