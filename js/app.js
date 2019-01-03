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
let hungerText = $('#hunger');
let sleepinessText = $('#sleepiness');
let boredomText = $('#boredom');
let ageText = $('#age');

let newHunger = zatchi.hunger;
let newSleepiness = zatchi.sleepiness;
let newBoredom = zatchi.boredom;
let newAge = zatchi.age;

const game = {
	startGame() {
		// name your pet!
		// display (pet's name) + (statistics)
		// call all methods
		this.zatchiHunger();
		this.zatchiSleepiness();
		this.zatchiBoredom();
		this.zatchiAge();
	},
	// newHunger.setInterval(zatchiHunger, 120000);
	zatchiHunger() {
		newHunger = setInterval(function () {
			zatchi.hunger++;
			if (zatchi.hunger === 10) {
				clearInterval(newHunger);
				alert('Your pet died!');
			} else {
				hungerText.text(`HUNGER: ${zatchi.hunger}`);
			}
		}, 20000)
	},

	zatchiSleepiness() {
		newSleepiness = setInterval(function () {
			zatchi.sleepiness++;
			if (zatchi.sleepiness === 10) {
				clearInterval(newSleepiness);
				alert('Your pet died!');
			} else {
				sleepinessText.text(`SLEEPINESS: ${zatchi.sleepiness}`);
			}
		}, 40000)
	},

	zatchiBoredom() {
		newBoredom = setInterval(function () {
			zatchi.boredom++;
			if (zatchi.boredom === 10) {
				clearInterval(newBoredom);
				alert('Your pet died!');
			} else {
				boredomText.text(`BOREDOM: ${zatchi.boredom}`)
			}
		}, 100000)
	},

	zatchiAge() {
		newAge = setInterval(function () {
			zatchi.age++;
			ageText.text(`AGE: ${zatchi.age}`)
		}, 600000)
	}
}

game.startGame();

















