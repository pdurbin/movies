// From https://www.geeksforgeeks.org/how-to-share-code-between-node-js-and-the-browser/
// All the code in this module is enclosed in a closure.
(function (exports) {
  function getByLatest(content) {
    let lines = "";
    var x = content.split("\r\n");
    for (var i = 0; i < x.length; i++) {
      y = x[i].split("\t");
      x[i] = y;
    }
    let byDate = {};
    x.shift(); // remove header ("(Last) Watched")
    for (const row of x) {
      let title = row[1];
      let dateWatched = row[0];
      if (byDate[dateWatched] == undefined) {
        byDate[dateWatched] = [];
      }
      byDate[dateWatched].push(title);
    }
    for (const [date, movies] of Object.entries(byDate)) {
      for (var i = 0; i < movies.length; i++) {
        lines += `${date}\t${movies[i]}\n`;
      }
    }
    lines = lines.replace(/\n+$/, "");
    return lines;
  }
  function getByYear(content) {
    let lines = "";
    var x = content.split("\r\n");
    for (var i = 0; i < x.length; i++) {
      y = x[i].split("\t");
      x[i] = y;
    }
    let byYear = {};
    x.shift(); // remove header ("Year")
    for (const row of x) {
      let year = row[2];
      if (byYear[year] == undefined) {
        byYear[year] = [];
      }
      byYear[year].push("*");
    }
    for (const [year, movies] of Object.entries(byYear)) {
      let stars = "";
      for (var i = 0; i < movies.length; i++) {
        stars += "*";
      }
      lines += `${year} ${stars} ${movies.length}\n`;
    }
    lines = lines.replace(/\n+$/, "");
    return lines;
  }
  function getByRating(content) {
    let lines = "";
    var x = content.split("\r\n");
    for (var i = 0; i < x.length; i++) {
      y = x[i].split("\t");
      x[i] = y;
    }
    let byRating = {};
    x.shift(); // remove header ("Rating")
    for (const row of x) {
      let title = row[1];
      let disc = row[4];
      let rating = parseFloat(row[3]) * 10;
      if (byRating[rating] == undefined) {
        byRating[rating] = [];
      }
      let disc_icon = "";
      if (disc === "DVD") {
        disc_icon = "📀";
      }
      byRating[rating].push(title + " " + disc_icon);
    }
    for (const [rating, movies] of Object.entries(byRating)) {
      let moviesSorted = movies.sort().reverse();
      let stars = "";
      for (var i = 0; i < moviesSorted.length; i++) {
        lines += `${rating / 10}\t${moviesSorted[i]}\n`;
      }
    }
    lines = lines.replace(/\n+$/, "");
    return lines;
  }

  // Export the functions to exports.
  // In node.js this will be the module.exports.
  // In a browser this will be a function in the global object "asciiLib".
  exports.getByLatest = getByLatest;
  exports.getByYear = getByYear;
  exports.getByRating = getByRating;
})(typeof exports === "undefined" ? (this["asciiLib"] = {}) : exports);
