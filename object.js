/*class Martin {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello my name is " 
            + this.name + " and I am " 
            + this.age + "yo.");
    }
}

const person = new Person("Filip", 20);
person.greet();

const person1 = new Person("Martin", 16);
person.greet(); */

class Doggo {
    constructor(name, age, condition, color, breed) {
        this.name = name;
        this.age = age;
        this.condition = condition;
        this.color = color;
        this.breed = breed;
    }

    list() {
        console.log("This dogs name is "
                + this.name + " and he is "
                + this.age + " years old." + " He is "
                + this.breed + "." + " His color is "
                + this.color + " and his condition is " 
                + this.condition + ".")
                
}
}

const doggo = new Doggo("Berry", 2, "good", "light gold", "golden retriever")
doggo.list();