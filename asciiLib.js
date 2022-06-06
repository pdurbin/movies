// From https://www.geeksforgeeks.org/how-to-share-code-between-node-js-and-the-browser/
// All the code in this module is enclosed in a closure.
(function(exports) {
  function getByYear(content) {
    let lines = '';
    var x = content.split('\r\n');
    for (var i = 0; i < x.length; i++) {
      y = x[i].split('\t');
      x[i] = y;
    }
    let byYear = {};
    x.shift(); // remove header ("Year")
    for (const row of x) {
      let year = row[2];
      if (byYear[year] == undefined) {
        byYear[year] = [];
      }
      byYear[year].push('*');
    }
    for (const [year, movies] of Object.entries(byYear)) {
      let stars = '';
      for (var i = 0; i < movies.length; i++) {
        stars += '*';
      }
      lines += `${year} ${stars} ${movies.length}\n`;
    }
    lines = lines.replace(/\n+$/, '');
    return lines;
  }

  // Export the function to exports.
  // In node.js this will be the module.exports.
  // In a browser this will be a function in the global object "asciiLib".
  exports.getByYear = getByYear;
})(typeof exports === 'undefined' ? (this['asciiLib'] = {}) : exports);
