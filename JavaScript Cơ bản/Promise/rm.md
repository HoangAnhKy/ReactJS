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

```js
function asyncAjax(url) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: url,
            type: 'GET',
            dataType: 'json',
            beforeSend: function () {},
            success: function (data) {
                resolve(data); // Resolve promise and when success
            },
            error: function (err) {
                reject(err); // Reject the promise and go to catch()
            },
        });
    });
}

try {
    const result = await asyncAjax('your url');
} catch (e) {
    console.log(e);
}
```

-   ứng dụng của async await

```js
function resolveAfter2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    const result = await resolveAfter2Seconds();
    console.log(result);
    console.log('calling');
    // Expected output: "resolved"
}

asyncCall();
```
