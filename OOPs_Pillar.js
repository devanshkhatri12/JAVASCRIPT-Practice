// Encapsulation:This helps protect the stored data and ensures that the internal state of the object remains secure " like storing your belongings in a box."

class first  {
    constructor(userName , userAge)
    {
        this.userName = userName
        this.userAge = userAge
    }

    // private
    displayInfo(){
        return `${this.userName} is ${this.userAge} years Old.`;
    }

    // so called private
    _checkAge(){
        return this.userAge >= 18 ? 'an adult' : 'an younger'
    }

    // private
    #checkAge(){
        return this.userAge >= 18 ? 'an adult ' : 'an younger'
    }


    displayStatus1(){
        return `${this.userName} is ${this._checkAge()}`;
    }

    displayStatus2()
    {
        return  `${this.userName} is ${this.#checkAge()}`;
    }

}
const firstClass = new first('devansh', 21)
console.log(firstClass.displayInfo())
console.log(firstClass.displayStatus1())
console.log(firstClass.displayStatus2())
console.log(firstClass._checkAge())
// console.log(firstClass.#checkAge())                  syntax error bcz of private field must declared in enclosing class
console.log('\n')







// Inheritance :  This makes it easier to reuse code and create class hierarchies.

class Animal {
    constructor(animalName)
    {
        this.animalName = animalName
    }

    makeSound()
    {
        return `${this.animalName} make a sound`;
    }

}

class Dog extends Animal{
    makeSound(){
        return `${this.animalName} barks`
    }
}

class Cat extends Animal{
    makeSound(){
        return `${this.animalName} meow`
    }
}

const myAnimal = new Animal('Wild animal')
const myDog = new Dog('sheruu')
const myCat = new Cat('Lalli')

console.log(myDog.makeSound())
console.log(myAnimal.makeSound())
console.log(myCat.makeSound())
console.log('\n')




// Polymorphism : the ability of different objects to respond to the same method in different ways. & This allows methods with the same name to have different behaviors depending on the type of object.

class shape {
    area(){
        return 0;
    }
}


class Rectangle extends shape {
    constructor(width , height){
        super();
        this.width = width
        this.height = height
    }

    area()
    {
        return `Area of rectangle is ${this.width * this.height}`
    }
}


class Circle extends shape {
    constructor(radius){
        super();
        this.radius = radius
    }

    area()
    {
        return `Area of circle is ${Math.PI * Math.pow(this.radius, 2)}`;
    }
}

const shapes = [(new Rectangle(2,4)) , (new Circle(3))];

shapes.forEach(shape => {
    console.log(shape.area());
})
console.log('\n')








// Abstraction : this allows you to use objects without needing to understand all the intricacies of how they work

function person(fname, lname) {
    let firstname = fname;
    let lastname = lname;

    let getDetails_noaccess = function () {
        return (`First name is: ${firstname} Last 
            name is: ${lastname}`);
    }

    this.getDetails_access = function () {
        return (`First name is: ${firstname}
Last name is: ${lastname}\n`);
    }
}
let person1 = new person('Mukul', 'Latiyan');
console.log(person1.firstname);
console.log(person1.getDetails_noaccess);
console.log(person1.getDetails_access());