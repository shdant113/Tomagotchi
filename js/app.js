// console.log(tomagatchi);

// Create class Tomagatchi
class Tomagatchi {
	constructor(hunger, sleepiness, boredom) {
		this.hunger = hunger;
		this.sleepiness = sleepiness;
		this.boredom = boredom;
	}
}

let zatchi = new Tomagatchi();

zatchi = {
	hunger: 0,
		// increase hunger by 1 every 2 minutes
	sleepiness: 0,
		// increase sleepiness by 1 every 3 minutes
	boredom: 0,
		// increase boredom by 1 every 6 minutes
	age: 0
		// increase age by 1 every 10 minutes
}
	
let newHunger = zatchi.hunger;
let newSleepiness = zatchi.sleepiness;
let newBoredom = zatchi.boredom;
let newAge = zatchi.age;

// newHunger.setInterval(zatchiHunger, 120000);
function zatchiHunger() {
	newHunger = setInterval(zatchi.hunger++, 120000);
	if (zatchi.hunger === 10) {
		clearInterval(newHunger);
	}
}

function zatchiSleepiness() {
	newSleepiness = setInterval(zatchi.sleepiness++, 180000);
	if (zatchi.sleepiness === 10) {
		clearInterval(newSleepiness);
	}
}

function zatchiBoredom() {
	newBoredom = setInterval(zatchi.boredom++, 360000);
	if (zatchi.boredom === 10) {
		clearInterval(newBoredom);
	}
}

function zatchiAge() {
	newAge = setInterval(zatchi.age++, 600000);
}

















