const fs = require('fs');
const path = require('path');

let typeDefs = `
type Mutation {
  #Mutation base type
  baseMutationType: String
}

type Query {
  #Query base type
  baseQueryType: String
}
`;
// Function to read files recursively
function readFiles(dir) {

  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);

    if (fs.statSync(filePath).isDirectory()) {
      // Recursively read files in subdirectories
      readFiles(filePath);
    } else {
      // Get the file extension
      const ext = path.extname(file);

      // Check if it's a JavaScript file
      if (file !== 'index.js' && ext === '.js') {
        // Get the file name without the extension
        const name = path.basename(file, ext);

        // Import the module
        const module = require(filePath);
        
        // Add the module to the typeDefs object
        typeDefs +=  module + '\n';

      }
    }
  });

  return typeDefs
}

readFiles(__dirname);
 

// // Write the typeDefs to the typedef.js file
// fs.writeFile('typedef.js', `
// const typeDefs = \`${typeDefs}\`;
// module.exports = typeDefs;
// `, (err) => {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('typedef.js file created successfully');
//   }
// });




module.exports =  typeDefs;