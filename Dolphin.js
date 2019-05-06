import  Animal  from "./Animal.js";

export default class Dolphin extends Animal {
    constructor(age) {
        super(age);
    }

    swim() {
        console.log("splah");
    }
}