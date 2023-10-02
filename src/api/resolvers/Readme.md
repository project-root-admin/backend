## Resolvers Documentation

### File Structure

The `index.js` file serves as the entry point for the resolvers in this directory. The file uses the `readFiles` function to recursively read all resolver files within the directory and its subdirectories.

### Resolver Naming Convention

Resolver files should follow a specific naming convention to be automatically imported and merged into the `resolvers` object. The naming convention for resolver files is as follows:

- Query resolvers should be named as `<someName>QueryResolver.js`.
- Mutation resolvers should be named as `<someName>MutationResolver.js`.
- Other resolvers that don't fall into the above categories can be named as `<someName>Resolver.js`.

### Resolver Implementation

Each resolver file should export an object containing the resolver functions corresponding to a specific GraphQL type. The structure of the resolver file should be as follows:


### Query resolver

const <someName>QueryResolver = {
Query: {
     // Query resolver functions
     // ...
  },
}

module.exports = <someName>QueryResolver

### Mutatiln resolver

const <someName>MutationResolver = {
Mutation: {
     // Mutation resolver functions
     // ...
  },
}
module.exports = <someName>MutationResolver


### Other resolver Files

const <someName>Resolver = {
ModelName: {
     // resolver functions
     // ...
  },
}
module.exports = <someName>Resolver
