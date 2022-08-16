import { UseStore, Reducer } from "./store";
import "./App.css";

function Pararap() {
    const [state, dispatch] = UseStore();
    const { jobs, job } = state;
    return (
        <div className="App">
            <input
                value={job}
                type="text"
                placeholder="Name"
                onChange={(e) => dispatch(Reducer.Set_job(e.target.value))}
            />
            <button onClick={() => dispatch(Reducer.Add_action())}>Add</button>
            <div>
                <ul>
                    {jobs.map((obj, i) => (
                        <li key={i}>{obj}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Pararap;
