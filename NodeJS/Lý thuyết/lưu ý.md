# **ForEach trong nodejs**

-   cách dùng

```js
{{#each data}}
<tr>
    <td>{{this.id}}</td>
    <td>{{this.name}}</td>
</tr>
{{/each}}
```

# **Lấy dữ liệu với fetch**

-   nên sài bản 2.0 vì bản đời cao hơn k hỗ trợ

```sh
npm install node-fetch@2
```

# **Viết hàm trong hbs**

```js
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b, // hàm
            //cách dùng sum @index 1 <=> hàm, a , b
        },
    })
);
```

# **Xử dụng helper và tạo helper trong handlebar**

```js

// ...
 // using helper for handlebar
    let hbs = handlebars.create({});
    hbs.handlebars.registerHelper('inc', function(value) {
        return parseInt(value) + 1;
    });
// ...
```
