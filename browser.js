async function fetchText() {
  let response = await fetch('movies.tsv');
  //console.log(response.status); // 200
  //console.log(response.statusText); // OK
  if (response.status === 200) {
    let content = await response.text();
    var div = document.getElementById('yearid');
    div.innerHTML += 'Movies by Year\n';
    let output = this.asciiLib.getByYear(content);
    div.innerHTML += output
      .split('\n')
      .reverse()
      .join('\n');
  }
}

fetchText();
