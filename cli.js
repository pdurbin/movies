let fs = require('fs');
let filename = 'movies.tsv';
let content = fs.readFileSync(process.cwd() + '/' + filename).toString();
const utilities = require('./asciiLib');
const myArgs = process.argv.slice(2);
switch (myArgs[0]) {
  case 'rating':
    console.log(utilities.getByRating(content));
    break;
  case 'year':
    console.log(utilities.getByYear(content));
    break;
  default:
    console.log(utilities.getByYear(content));
}
