```js
async function fetchMovies() {
    try {
        const response = await fetch(api);
        const movies = await response.json();
        return movies;
    } catch (e) {}
}

fetchMovies().then((movies) => {
    console.log(movies);
});
```
