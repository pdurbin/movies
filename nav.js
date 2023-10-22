document.addEventListener("DOMContentLoaded", function () {
  // nav
  var nav = document.getElementById("nav");
  const navDiv = document.createElement("div");
  // home
  const home = document.createElement("span");
  home.innerHTML = '<a href="/">' + "Home" + "</a> ";
  nav.append(home);
  // ratings
  const ratings = document.createElement("span");
  ratings.innerHTML = '<a href="/ratings">' + "Ratings" + "</a> ";
  nav.append(ratings);
  // by year
  const byYear = document.createElement("span");
  byYear.innerHTML = '<a href="/byyear">' + "By Year" + "</a> ";
  nav.append(byYear);

  // slug
  const path = window.location.pathname.split("/");
  var slug = path[1];
  console.log("slug from path is " + slug);
  if (slug === "") {
    //console.log("home");
  } else if (slug === "byyear") {
    fetchText("byYear");
  } else if (slug === "ratings") {
    fetchText("rating");
  } else {
    //console.log("unknown slug");
  }
});
