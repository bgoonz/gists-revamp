'use strict';
class Person {
  constructor({ 
      firstName: this.firstName = '<FIRSTNAME_UNKNOWN>',
      lastName: this.lastName = '<LASTNAME_UNKNOWN>'
    } = {}) {}
  printName() {
    console.log(this.lastName, ',', this.firstName);
  }
}

var person;
person = new Person({
  firstName: 'Alex'
})
person.printName();
person = new Person;
person.printName();