# [Sử dụng Moongoose](https://github.com/Automattic/mongoose)

-   Là trình điều khiển, giúp cho nodejs với mongodb làm việc mượt mà hơn bởi vì mongodb không cố định dữ liệu được lưu

## Cài đặt thư viện

```sh
 npm install mongoose
```

## Cấu hình khai báo thư viện mongoose

-   Tạo file `config/db/index.js` có exports dữ liệu connect ra để dễ lấy ra sử dụng lại bên index tổng

```js
const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/School'); //'mongodb://localhost/my_database'
        console.log('success');
    } catch (err) {
        console.log('error');
    }
}

module.exports = { connect };
```

-   `index tổng`

```js
//...
const db = require('./config/db');
db.connect();
```

## Cấu hình cứng dữ liệu khởi tạo trên mongodb

```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxLength: 255 }, // cấu hình chi tiết
    description: { type: String },
    img: { type: String, maxLength: 255 },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
```

-   sau khi exports chúng ta chỉ cần khai báo lại file models ở nơi cần dùng tới là được

## Một số thao tác bên controller

### Tìm kiếm và trả về dữ liệu

-   Cách 1

```js
class SiteController {
    index(req, res, next) {
        Course.find({}, (err, course) => {
            if (!err) {
                const data = { course: course };
                res.json(course);
            } else {
                res.status(400).json({ error: 'ERROR!!!' });
            }
        });
    }
}
```

-   Cách 2

```js
class SiteController {
    index(req, res, next) {
        Course.find({})
            .then((course) => res.json(course))
            .catch((error) => next(error));
    }
}
```
