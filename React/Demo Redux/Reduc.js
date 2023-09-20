import { createStore } from 'https://cdn.skypack.dev/redux';
/////////////////////////  Start Create Redux ///////////////////////////////
// const createStore = (reduce) => {
//     let state = reduce(undefined, {});
//     let subscriber = [];
//     return {
//         getState : function () {
//             return state;
//         },
//         dispatch : function (action){
//             state = reduce(state, action)
//             subscriber.forEach(subscriber => subscriber())
//         },
//         subscribe : function (action){
//             subscriber.push(action);
//         }
//     }
// }
/////////////////////////  End Create Redux ///////////////////////////////

let initState = 0;

const handleUp = 'handle_up';
const handleDown = 'handle_down';

const reduce = (state = initState, action = {}) => {
    switch (action.type) {
        case handleUp:
            state += action.value;
            return state;
        case handleDown:
            state -= action.value;
            return state
        default:
            return state;
    }
}

const store = window.store = createStore(reduce);
const btn_up = document.getElementById('Up');
const btn_down = document.getElementById('Down');

const Up = (value) => {
    return {
        type: handleUp,
        value
    }
}

const Down = (value) => {
    return {
        type: handleDown,
        value
    }
}

btn_up.addEventListener('click', () => {
    store.dispatch(Up(10));
});

btn_down.addEventListener('click', () => {
    store.dispatch(Down(10));
});

// render number
const render = () => {
    document.getElementById('render').innerText = store.getState();
}
const render2 = () => {
    document.getElementById('render2').innerText = store.getState();
}

store.subscribe(render)
// store.subscribe(render2)
render();
// render2();