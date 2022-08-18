import { ADD_ACTION, REMOVE_ACTION, SET_JOB, SET_PRICE } from "./action";

export const initState = {
    job: "",
    price: "",
    jobs: [],
};

const reducer = (state, action) => {
    let newArray;
    switch (action.type) {
        case ADD_ACTION:
            newArray = {
                ...state,
                jobs: [
                    ...state.jobs,
                    {
                        job: state.job,
                        price: state.price,
                    },
                ],
            };
            break;
        case REMOVE_ACTION:
            newArray = {
                ...state,
                jobs: [...action.value],
            };
            break;
        case SET_JOB:
            newArray = {
                ...state,
                job: action.value,
            };
            break;
        case SET_PRICE:
            newArray = {
                ...state,
                price: +action.value,
            };
            break;
        default:
            throw new Error(`Invalid action ${action}`);
    }
    return newArray;
};
export const set_input = (e, action) => {
    return {
        value: e,
        type: action,
    };
};

export const Delete = (e) => {
    return {
        value: e,
        type: REMOVE_ACTION,
    };
};

export default reducer;
