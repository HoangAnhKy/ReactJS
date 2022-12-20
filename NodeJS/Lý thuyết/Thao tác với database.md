[docs](https://mongoosejs.com/docs/)

# [Sử dụng Moongoose](https://github.com/Automattic/mongoose)

-   Là trình điều khiển, giúp cho nodejs với mongodb làm việc mượt mà hơn bởi vì mongodb không cố định dữ liệu được lưu

## Cài đặt thư viện

-   Cài đặt mongoose để connect dữ liệu

```sh
 npm install mongoose
```

-   Cài plugin slug để tạo slug

```sh
 npm i mongoose-slug-generator --save
```

    - chỉ cần khai báo vào models, sau đó thêm 1 trường dữ liệu slug.

    ```js
    const mongoose = require('mongoose');
    mongoose.plugin(slug);

    // khởi tạo slug
    slug: { type: String, slug: "{tên trường muốn lấy}", unique: true}
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

const Course = new Schema(
    {
        name: { type: String, maxLength: 255 }, // cấu hình chi tiết
        description: { type: String },
        img: { type: String, maxLength: 255 },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Course', Course);
```

-   sau khi exports chúng ta chỉ cần khai báo lại file models ở nơi cần dùng tới là được

## Một số thao tác bên controller

### lấy và trả về dữ liệu

-   Cách 1

```js
const Course = require('../models/Course');
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
const Course = require('../models/Course');
class SiteController {
    index(req, res, next) {
        Course.find({})
            .then((course) => {
                const Course = course.map((cs) => cs.toObject());
                res.json(course);
            })
            .catch((error) => next(error));
    }
}
```

### Thêm mới dữ liệu

```js
const Course = require('../models/Course');
class SiteController {
    create(req, res, next) {
        const formData = req.body;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch((error) => next(error));
    }
}
```

### Cập nhật dữ liệu

```js
const Course = require('../models/Course');
class SiteController {
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/'))
            .catch((error) => next(error));
    }
}
```

### Xóa bỏ dữ liệu

```js
const Course = require('../models/Course');
class SiteController {
    destroy(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/'))
            .catch((error) => next(error));
    }
}
```
