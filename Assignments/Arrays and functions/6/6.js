'use strict';

const movies = [];

let keepGoing = true;

do {
  const title = prompt('Enter the title of the movie:');
  const rating = prompt('Enter the rating for the movie (1-5):');
  const movie = {title, rating};
  movies.push(movie);
  const confirmation = confirm('Would you like to continue?');
  if (confirmation === false) {
    keepGoing = false;
  }
} while (keepGoing);

function sortMovies(a, b) {
  const compare = b.rating - a.rating;
  return compare;
}

movies.sort(sortMovies);

console.log(movies);

for (let movie of movies) {
  const td1 = document.createElement('td');
  td1.innerText = movie.title;

  const td2 = document.createElement('td');
  td2.innerText = movie.rating;

  const tr = document.createElement('tr');
  tr.append(td1);
  tr.append(td2);

  document.getElementById('target').append(tr);
}

const favorite = movies[0];
document.getElementById('fav').innerText = favorite.title;
