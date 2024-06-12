# Cách dùng

B1: Khởi tạo `Schema`

``` js ts
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    name_course: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('User', User);
```
B2: Kiểm tra validate tại controller xử lý, lỗi trả về trong catch

```js
async save(req, res) {
    let request = req.body;
    try {
        let user_save = new user(request)
        await user_save.validate(); // call validate
        let new_user = await user_save.save();
        if (user_save === new_user) {
            return res.status(201).json({"msg": "save user success"});
        }
    } catch (e) {
        return res.status(400).json({"msg catch": e.message});
    }
    return res.status(400).json({"msg": "save user error"});
}
```

# **Lưu Ý**

## Chỉnh sửa messenger
 - Mongoose có thể thay thế {VALUE} bằng giá trị được xác thực.

```js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name: {
        type: String,
        required: [true, "Can not empty data"], // custom messenge with array
        trim: true
    },
    name_course: {
        type: String,
        enum: {
            values: ['Laravel', 'CakePHP'],
            message: '{VALUE} is not supported'
        } // custom messenge with object
        trim: true
    }
});


module.exports = mongoose.model('User', User);
```

## khởi tạo validate

```js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: function (value) {
                return value === "is_bug";
            },
            message: props => `${props.path} ${props.value} is bug!` // name laraa is bug!"

        }
    },
    name_course: {
        type: String,
        required: [true, '{VALUE} is required'],
        trim: true
    }
});

module.exports = mongoose.model('User', User);
```