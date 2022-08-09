import { useState } from "react";

function Todo_List_useState() {
    const [jobs, setJobs] = useState(
        JSON.parse(sessionStorage.getItem("job")) ?? []
    );
    const [nameJobs, setNameJobs] = useState("");
    const [id, setId] = useState(1);
    const handleSubmid = () => {
        setId(id + 1);
        setJobs((prevJob) => {
            const newJob = {
                id: id,
                job: nameJobs,
            };
            const newJobs = [...prevJob, newJob];
            sessionStorage.setItem("job", JSON.stringify(newJobs));
            return newJobs;
        });
        setNameJobs("");
    };
    const handleDelete = (id) => {
        setJobs((jobs) => {
            const newJobs = jobs.filter((item) => item.id !== id);
            sessionStorage.setItem("job", JSON.stringify(newJobs));
            return newJobs;
        });
    };
    return (
        <div style={{ padding: 20, fontSize: 20 }}>
            <div>
                <input
                    value={nameJobs}
                    onChange={(e) => setNameJobs(e.target.value)}
                />
                <button
                    onClick={() => {
                        handleSubmid();
                    }}>
                    Add
                </button>
            </div>
            <ul>
                {jobs.map((job) => (
                    <li key={job.id}>
                        {job.job}
                        <button
                            onClick={() => {
                                handleDelete(job.id);
                            }}
                            style={{ margin: "0 5px", fontSize: 20 }}>
                            delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo_List_useState;
