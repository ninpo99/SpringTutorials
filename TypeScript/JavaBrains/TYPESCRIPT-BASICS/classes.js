var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
var aPerson = new Person("Frank", "Piper");
console.log(aPerson.getFullName());
aPerson.firstName = "Koushak";
aPerson.lastName = "Patel";
console.log(aPerson);
console.log(aPerson.getFullName());
