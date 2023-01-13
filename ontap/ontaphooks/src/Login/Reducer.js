import * as Action from './Action';

export const initState = { email: '', password: '', checkbox: 0, list: [] };

const Reducer = (state, action) => {
    let newArray = [];
    switch (action.type) {
        case Action.ADD_EMAIL:
            console.warn(state);
            newArray = {
                ...state,
                email: action.value,
            };
            break;
        case Action.ADD_PASSWORD:
            newArray = {
                ...state,
                password: action.value,
            };
            break;
        case Action.CHECKBOX:
            newArray = {
                ...state,
                checkbox: action.value,
            };
            break;
        case Action.LOGIN:
            newArray =
                state.checkbox == 1
                    ? {
                          ...state,
                          list: [
                              ...state.list,
                              {
                                  email: state.email,
                                  password: state.password,
                              },
                          ],
                          email: '',
                          password: '',
                          checkbox: 0,
                      }
                    : (alert('Can not register account! please try again'), state);
            break;
        default:
    }
    console.log(newArray);
    return newArray;
};

export const handleChange = (type, value) => {
    return { type, value };
};

export const handleLogin = () => {
    return { type: Action.LOGIN };
};

export default Reducer;
