function Car(model, year, owner) {
	this.model = model;
	this.year = year;
	this.owner = owner;

	this.showCarData = function() {
		console.log('Car name: ' + this.model + ', car age: ' + this.year);
	};

	this.showCarOwner = function() {
		console.log('Car owner: ' + this.owner);
	};
}