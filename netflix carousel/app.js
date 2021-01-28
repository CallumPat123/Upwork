function getJson(){
  fetch('csvjson.json')
    .then(res=>res.json())
    .then(function(data){ 
      getMovies(data, "Popular")
      getMovies(data, "Kids Movies")
    })
    .catch(err=>console.log(err))
}

function getMovies(data, genre){
      let count = 0;
      let output ='';
      console.log(genre)
      data.forEach(function(movie){
        if(movie.Genre_Name===genre){
          if(count==15){
            return;
          } else {
            output += `\
            <a href="${movie.Url}">
              <div id="movie-item">
                <img src=${movie.Poster}></img>
                <p>${movie.Title}</p>
              </div>
            </a>
            `;
          }
          count++;
        }
      })
      document.getElementById(genre).innerHTML = output;
}

getJson();