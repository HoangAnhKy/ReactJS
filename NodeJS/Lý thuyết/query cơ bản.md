# Tìm kiếm find

[find and findOne](#find-findone) với find kiếm tất cả, findOne chỉ tìm kiếm một

[findById](#findbyid) tìm kiếm theo id của dữ liệu

## find, findOne

- `find` Dùng đê tìm kiếm all. `findOne` tìm kiếm một


```js
// tìm kiếm tất cả
await MyModel.find({});

// tìm kiếm tất cả có dữ liệu phù hợp với object
await MyModel.find({ name: 'john', age: { $gte: 18 } }).exec();

// tìm kiếm tất cả có dữ liệu phù hợp với object và chỉ lấy 2 fill name và friends
await MyModel.find({ name: /john/i }, 'name friends').exec();

// tìm kiếm tất cả có dữ liệu phù hợp với object và phân trang. fileOne không có 
await MyModel.find({ name: /john/i }, null, { skip: 10 }).exec();
```
## findById

- Dùng để tìm kiếm id, sử dụng tương đương `findOne({ _id: id })`. Nếu muốn truy vấn theo tài liệu _id, hãy sử dụng findById()thay vì findOne().

vì ngoại trừ cách nó xử lý `undefined`. Nếu bạn sử dụng findOne(), bạn sẽ thấy điều đó `findOne(undefined)` và `findOne({ _id: undefined })` **tương đương với**  `findOne({})` và trả về các tài liệu tùy ý. Tuy nhiên, mongoose dịch `findById(undefined)` sang `findOne({ _id: null })`.


# Làm việc với thêm, xóa, sửa

[save](#save) dùng để lưu trữ dữ liệu

[deleteOne and deleteMany](#delete) dùng để xóa một dữ liệu đối với `deleteOne`, dùng để xóa nhiều dữ liệu với `deleteMany`

[updateOne and updateMany](#update) `updateOne` Dùng để cập nhật một dữ liệu và ngược lại `updateMany` cập nhật nhiều

## save

- ví dụ

```js
async save(req, res) {
        let result = req.body;
        try {
            let course_save = await new course(result);
            let new_course = await course_save.save();
            if (course_save === new_course) {
                return res.status(200).json({"msg": "save course success"});
            }
        } catch (e) {
            return res.status(400).json({"msg": e.message});
        }
        return res.status(400).json({"msg": "save course error"});
    }
```

## delete

```js
async deleteALl(req, res) {

        let key_search = req.params.key_search;

        try {

            let regex = new RegExp(key_search, 'i');
            let data_delete = await course.deleteMany( {name: regex});
            if (data_delete.acknowledged) {
                return res.status(200).json({"msg": "Delete course success"});
            }

        } catch (e) {
            return res.status(400).json({"msg": e.message});
        }

        return res.status(400).json({"msg": "Delete course fail"});
    }
```
## update

```js
async update(req, res) {
        let data_request = req.body
        let key_search = req.params.key_search ?? null;

        try {
            let regex = new RegExp(key_search, 'i');
            let data_update = await course.updateOne({name: regex}, data_request);
            if (data_update.acknowledged) {
                return res.status(200).json({"msg": "update course success"});
            }
        } catch (e) {
            return res.status(400).json({"msg": e.message});
        }

        return res.status(400).json({"msg": "update course fail"});
    }
```

# Lọc trùng distinct

- Lấy các giá trị với field được truyền vào để lấy ra mảng các giá trị đó không trùng nhau.

 ```js
 async get(req, res) {
        try {
            let result = await course.find().distinct('name').exec();
            return res.status(200).json(result);
        } catch (e) {
            return res.status(500).json(e.message);
        }
    }
 ```

# Kiểm tra tồn tại exists

 - Trả về `_id` chỉ khi có ít nhất một bản ghi tồn tại trong cơ sở dữ liệu khớp với giá trị đã cho `filter` và trả về `null` khi ngược lại.

 ```js
await Character.deleteMany({});
await Character.create({ name: 'Jean-Luc Picard' });

await Character.exists({ name: /picard/i }); // { _id: ... }
await Character.exists({ name: /riker/i }); // null
 ```