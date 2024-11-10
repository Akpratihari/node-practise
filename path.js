const path=require("path");

// console.log(path.basename(__filename));
// console.log(path.dirname(__filename));  
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));

console.log(path.format(path.parse(__filename)));
console.log(path.resolve("index.js"));
console.log(path.resolve("path.js","./index.js","os.js"));
console.log(path.join(__dirname,"path.js"));