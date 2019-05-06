import  Animal  from "./Animal.js";

export default class Bee extends Animal {
    
    constructor(age) {
        super(age);
    }

    fly() {
        console.log("whoohooo");
    }
}
