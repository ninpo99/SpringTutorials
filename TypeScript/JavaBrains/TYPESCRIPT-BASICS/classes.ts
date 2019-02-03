class Person {
    firstName : string;
    lastName : string;

    constructor(firstName : string, lastName : string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
        return this.firstName + " " + this.lastName;
    }
}

var aPerson  = new Person("Frank", "Piper");
console.log(aPerson.getFullName());
aPerson.firstName = "Koushak";
aPerson.lastName = "Patel";
console.log(aPerson);
console.log(aPerson.getFullName());