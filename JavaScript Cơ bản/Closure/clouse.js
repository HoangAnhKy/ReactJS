function createCouter() {
    let counter = 0;
    function increase() {
        return ++counter;
    }
    return increase;
}

const counter1 = createCouter();
console.log(counter1());
console.log(counter1());
console.log(counter1());

class createCouter1 {
    #counter = 0;
    constructor(counter = 0) {
        this.#counter = counter;
    }

    get_counter() {
        return this.#counter;
    }
    increase() {
        return ++this.#counter;
    }
}

const counter2 = new createCouter1();
console.log(counter2.counter);
console.log(counter2.increase());
console.log(counter2.increase());
