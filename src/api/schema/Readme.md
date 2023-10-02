# GraphQL Schema Generation

<mark style="background-color: yellow;">Note: This should not be edited or modified, as they are required for the proper functioning of the application.</mark>

# System Overview
The system dynamically generates the schema definition (typeDefs) for a GraphQL API by reading and importing files recursively from a directory. The directory contains files that define various types, queries, mutations, enums, and input types used in the schema.

## Type Definitions

The initial type definitions include a `Mutation` and `Query` type, each with a single field representing the base types. These will be used as base Mutation and Query type which will be extended by importing additional modules.

```graphql
type Mutation {
  # Mutation base type
  baseMutationType: String
}

type Query {
  # Query base type
  baseQueryType: String
}

## Directory Structure
- /src
  - /api
    - /schema
      - /types
        - /Task
          - Task.js
          - TaskEnumTypeDefs.js
          - TaskInput.js
          - TaskMutation.js
          - TaskQuery.js
        - ...
      - index.js (Schema Generation Function)


In this example, the Task directory contains files related to the Task type, such as Task.js, TaskEnumTypeDefs.js, TaskInput.js, TaskMutation.js, and TaskQuery.js. Similar directories can exist for other types, enums, and inputs.



# Usage
To use the dynamically generated typeDefs in your GraphQL server, you can import it and pass it to the  Apollo Server.

const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./path/to/typeDefs');

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});