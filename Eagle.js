import Animal from './Animal.js';

export default class Eagle extends Animal {
    constructor(age) {
        super(age);
    }

    eat() {
        console.log("yummy");
    }

    fly() {
        console.log("whoohooo");
    }
}