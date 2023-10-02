const fs = require('fs');
const path = require('path');



  let resolvers = {Query :{}, Mutation:{}};

  function readFiles(dir) {
    const files = fs.readdirSync(dir);
  
    files.forEach((file, idx) => {
      const filePath = path.join(dir, file);
     console.log(`resolver ${idx}`, resolvers)
      if (fs.statSync(filePath).isDirectory()) {
        // Recursively read files in subdirectories
        console.log('directory : ', filePath)
  
        readFiles(filePath);
      } else {
        // Get the file extension
        console.log('file : ', filePath)
  
  
        // Check if it's a Resolver file
        const isResolverFile = file.endsWith('Resolver.js');
        if (isResolverFile) {
          // Import the module
          const module = require(filePath);
  
          switch (true) {
            case file.endsWith('QueryResolver.js'):
              console.log('Query File');
              Object.assign(resolvers.Query, module.Query);
              break;

            case file.endsWith('MutationResolver.js'):
              console.log('Mutation File');
              Object.assign(resolvers.Mutation, module.Mutation);
              break;
              
            default:
              console.log('Normal Resolver File');
              Object.assign(resolvers, module);
              break;
          }
        }
      }
  
  
    });
  
  }
  
  
  // Read files in the current directory recursively
  
  readFiles(__dirname);
  
 
module.exports = resolvers
