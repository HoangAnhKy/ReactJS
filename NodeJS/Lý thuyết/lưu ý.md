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

# **Search like trong mongoose**

- phải xử dụng regex để tìm kiếm like giống như trong mysql, sql, ...

```js
  async getOne(req, res, next) {
        let key_search = req.params.key_search;
        let regex = new RegExp(key_search, 'i');

        const condition = [
            {name: regex},
        ];

        try {
            let data = await course.findOne().or(condition) ?? []
            res.status(200).json(data);
        } catch (e) {
            res.status(400).json({"msg": e.message ?? "Error"});
        }
    }
```


