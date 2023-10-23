async function fetchText(type) {
  let response = await fetch("movies.tsv");
  //console.log(response.status); // 200
  //console.log(response.statusText); // OK
  if (response.status === 200) {
    let content = await response.text();
    let div = document.getElementById("content");
    if (type == "byLatest") {
      div.innerHTML += "Movies by Last Watched\n";
      let output = this.asciiLib.getByLatest(content);
      //div.innerHTML += output.split("\n").reverse().join("\n");
      div.innerHTML += output.split("\n").join("\n");
    } else if (type == "byYear") {
      div.innerHTML += "Movies by Year\n";
      let output = this.asciiLib.getByYear(content);
      div.innerHTML += output.split("\n").reverse().join("\n");
    } else {
      div.innerHTML += "Movies by Rating\n";
      let output = this.asciiLib.getByRating(content);
      div.innerHTML += output.split("\n").reverse().join("\n");
    }
  }
}
