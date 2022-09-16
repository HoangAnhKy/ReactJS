var course = ['PHP', 'JS', 'Laravel']

/*
Khi duyệt qua vòng forEach sẽ trả về các phần tử như value, index, array và kèm theo undefined

PHP 0 ['PHP', 'JS', 'Laravel']
JS 1  ['PHP', 'JS', 'Laravel']
Laravel 2 ['PHP', 'JS', 'Laravel']
undefined
*/

course.length = 10

Array.prototype.forEach2 = function(callback) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            console.log(this[index], index, this);
        }
    }
}

course.forEach2(function(value, index, array) {
    console.log(value, index, array);
})

for (var index in course) {
    console.log(course[index])
}