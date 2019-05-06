import Animal from './Animal.js';

export default class Lion extends Animal {
        constructor(age) {
            super(age);
        }

        roar() {
            console.log("wrrrrr");
        }

        eat() {
            console.log("yummy");
        }
}