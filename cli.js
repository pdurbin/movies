let fs = require('fs');
let filename = 'movies.tsv';
let content = fs.readFileSync(process.cwd() + '/' + filename).toString();
const utilities = require('./asciiLib');
console.log(utilities.getByYear(content));
