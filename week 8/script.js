class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
  }
}

// Create an instance of the Person class
let person1 = new Person("Alana", 20);
person1.greet();  // Output: Hello, my name is Alana and I am 20

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);  // Call the parent class (Person) constructor
    this.jobTitle = jobTitle;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age}, and I work as a ${this.jobTitle}`);
  }
}

// Create an instance of the Employee class
let employee1 = new Employee("Alana", 20, "Police Officer");
employee1.greet();  // Output: Hello, my name is Alana, I am 20, and I work as a Police Officer
