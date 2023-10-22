async function fetchText(type) {
  let response = await fetch("movies.tsv");
  //console.log(response.status); // 200
  //console.log(response.statusText); // OK
  if (response.status === 200) {
    let content = await response.text();
    if (type == "byYear") {
      var div = document.getElementById("yearid");
      div.innerHTML += "Movies by Year\n";
      let output = this.asciiLib.getByYear(content);
      div.innerHTML += output.split("\n").reverse().join("\n");
    } else {
      var div = document.getElementById("ratingid");
      div.innerHTML += "Movies by Rating\n";
      let output = this.asciiLib.getByRating(content);
      div.innerHTML += output.split("\n").reverse().join("\n");
    }
  }
}
