-   Dùng như javaScript thuần

-   Muốn Truyền callback qua Props thì ta làm như sau:

    -   tạo function xử lý
    -   truyền giá trị thông qua Props
    -   bên function tạo view thêm function xử lý như sau:
        onClick={() => onClick(course)},
        lúc này nó sẽ callback về function được gọi ở Props và truyền dữ liệu về.
        vd:

    ```sh
        // function tạo view
        function View_course({ course, onClick }) {
                return (
                    <div className="course_item">
                        <img src={course.image_url} />
                        <h2
                            onClick={() => onClick(course)}// c2
                            //c1
                            // onClick={() => {
                            //     alert(course.title);
                            // }}
                        >
                            {course.title}
                        </h2>
                        <p>{course.students_count}</p>
                    </div>
                );
            }

        // function tạo event
        function handleClick(course) {
            console.log(course.title);
        }

        // render dữ liệu
        const app = (
            <div className="course_list">
                {course.map((obj) => {
                    return (
                        <View_course
                            key={obj.id}
                            course={obj}
                            onClick={handleClick}
                        />
                    );
                })}
            </div>
        );
    ```
