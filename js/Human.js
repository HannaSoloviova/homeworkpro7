function Person(name, age) {
	this.name = name;
	this.age = age;

	this.showPersonData = function() {
		console.log('Person name: ' + this.name + ', person age: ' + this.age);
	};
}