let names = people.map(personToGetNameFrom => personToGetNameFrom.name);

// ******************

let getName = person => person.name;
let names = people.map(getName);

// ******************

function getName(person) { return person.name; }
let names = people.map(getName);

// *****************

let names = people.map(function getName(person){ return person.name; });

// *****************

let names = people.map(prop("name"));

// **********************************************
// **********************************************
// **********************************************

function getNames(people) { /* ... */ }
let names = getNames(people);

// *****************

let getNames = map(prop("name"));
let names = getNames(people);