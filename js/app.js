const personName = getName('Enter the person name ');

function getPersonAge() {
	let age = parseInt(prompt('Enter the person age '));
	if (age < 18 || age > 100 || isNaN(age)) {
	alert('You are not allowed to drive ');
};
	return age;
}

const personAge = getPersonAge();

const currentPerson = new Person(personName, personAge);
currentPerson.showPersonData();

const carModel = getName('Enter the car model ');

function getCarAge() {
	let age = parseInt(prompt('Enter the year of the car production '));
	if (age < 1950 || age > 2020 || isNaN(age)) {
	alert('It is not the year of production ');
};
	return age;
}

const carAge = getCarAge();

const currentCar = new Car(carModel, carAge);
currentCar.showCarData();

const currentOwner = new Car(carModel, carAge, currentPerson);
currentOwner.showCarOwner();