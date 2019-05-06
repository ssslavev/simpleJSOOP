export default class Animal {
    constructor(age) {
        if(new.target===Animal) {
        console.log("You can not make instance of this class");    
        }
        this.age = age;
    }

    sleep() {
        console.log("zzzzzz");
    }
}

