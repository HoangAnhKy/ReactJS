# Join bảng trong NodeJS

- Để có thể join bảng chúng ta dùng `populate`

```js
// example connect User with Course
async get(req, res) {
        try {
            let result = await user.find().populate('Course').exec();
            return res.status(200).json(result);
        } catch (e) {
            return res.status(500).json(e.message);
        }
    }


/* result
    [
        {
            "_id": "6667c71520bf35295ffc4bde",
            "name": "KDev 2",
            "name_course": "ReactJS",
            "createdAt": "2024-06-11T03:40:05.734Z",
            "updatedAt": "2024-06-11T03:40:05.734Z",
            "Course": {
                "_id": "6667c70320bf35295ffc4bdc",
                "name": "ReactJS",
                "datetime": "2024-06-11T03:39:01.165Z"
            },
            "id": "6667c71520bf35295ffc4bde"
        }
    ]
*/
```
- Khởi tạo khai báo kết nối ở bên `Schema`

```js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name: String,
    name_course: String
}, {
    versionKey: false,
    timestamps: true
});

// Định nghĩa virtual populate để định nghĩa một mối quan hệ không dựa trên _id.
User.virtual('Course', {
    ref: 'Course', // Model tham chiếu
    localField: 'name_course',  // Trường trong UserSchema
    foreignField: 'name',  // Trường trong courseSchema
    justOne: true,  // Chỉ lấy một tài liệu (không phải mảng)
});

// Đảm bảo rằng các dữ liệu sẽ được hiện thị bao gồm khi chúng ta chuyển đổi các tài liệu sang Object hoặc JSON.
User.set('toObject', { virtuals: true });
User.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', User);
```