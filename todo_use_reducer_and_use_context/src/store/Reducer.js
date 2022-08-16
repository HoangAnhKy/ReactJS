import { Action } from "./index.js";
const initState = {
    jobs: [],
    job: "",
};

const Reducer = (state, action) => {
    switch (action.type) {
        case Action.SET_JOBS:
            return {
                ...state,
                job: action.value,
            };
        case Action.ADD_ACTION:
            return {
                ...state,
                jobs: [...state.jobs, state.job],
            };
        default:
            throw new Error("Invalid action type: " + action.type);
    }
};

const Set_job = (value) => {
    return {
        value,
        type: Action.SET_JOBS,
    };
};
const Add_action = () => {
    return {
        type: Action.ADD_ACTION,
    };
};
export { initState, Set_job, Add_action };
export default Reducer;
