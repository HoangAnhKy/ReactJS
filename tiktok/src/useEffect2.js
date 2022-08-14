import { useEffect, useState } from "react";
const list_course = ["PHP", "JavaScript", "ReactJS"];
function useEffect2() {
    const [course, setCourse] = useState("PHP");

    useEffect(() => {
        const handleCourse = ({ detail }) => {
            console.log(detail);
        };
        window.addEventListener(`lesson-${course}`, handleCourse);
        //Clearup function
        return () => {
            window.removeEventListener(`lesson-${course}`, handleCourse);
        };
    }, [course]);
    return (
        <div>
            {list_course.map((obj) => (
                <button
                    style={{ color: obj === course ? "red" : "black" }}
                    key={obj}
                    onClick={() => {
                        setCourse(obj);
                    }}>
                    {obj}
                </button>
            ))}
        </div>
    );
}
export default useEffect2;
