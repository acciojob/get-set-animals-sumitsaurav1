//complete this code
class Animal {
	constructor(species){
		this._species=species;
	}
	get species(){
		return this._species;
	}
	makeSound(){
		console.log("sound makes animal")
	}
}

class Dog extends Animal {
	constructor(species){
		super(species);
	}
	bark(){
		console.log("woof")
	}
}

class Cat extends Animal {
	constructor(species){
		super(species);
	}
	purr(){
		console.log("purr");
	}
}
const dog = new Dog("pitbul");
const cat = new Cat("cat");
dog.bark();
cat.purr();
// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
