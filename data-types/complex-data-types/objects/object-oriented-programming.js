// documentation MDN
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS

// ABSTRACTION 
// take the most important data for the program
// create a simple model for a complex task

class Person {
	name: ['firstName', 'lastName'],
	age: 0,
	gender: "",
	interests: [""],
	summary: function personSummary(){
		"[name] is a [gender][age]-year old, who likes [interests]"
	}

}

// INSTANTIATION
// this abstraction creates an instance of the object
// we can create many instances of this abstraction with a constructor method
// this process is called instantiation - the object is instantiated from the class

class Person {
	constructor(name, age, gender, interests, summary)
	name: ['firstName', 'lastName'],
	age: 0,
	gender: "",
	interests: [""],
	summary: function personSummary(){
		"[name] is a [gender][age]-year old, who likes [interests]"
	}
}

// INHERITANCE
// new classes based on other classes inherit the properties of this class

class Person =  new Person

// class person as a new person class can be used as a blue-print
// it inherits the properties as described in the intantiated person class


var personOne = new Person(['Jack' 'Lemmon'], 50, 'male', 
	        ["acting", "juggling", "tap-dancing", "stand-up comedy"], this.personSummary())

var personTwo = (['Janice' 'Joplin'], 25, 'female', 
	        ["singing", "salsa-dancing"], this.personSummary())
