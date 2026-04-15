async function searchMovie() {
  let query = document.getElementById("searchInput").value;

  if (query === "") return;

  let url = `https://www.omdbapi.com/?s=${query}&apikey=564727fa`;

  let res = await fetch(url);
  let data = await res.json();

  let container = document.getElementById("movieContainer");
  container.innerHTML = "";

  if (data.Search) {
    data.Search.forEach(movie => {
      let div = document.createElement("div");
      div.classList.add("movie");

      div.innerHTML = `
        <img src="${movie.Poster}">
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>
      `;

      container.appendChild(div);
    });
  } else {
    container.innerHTML = "<h2>No movies found 😢</h2>";
  }
}