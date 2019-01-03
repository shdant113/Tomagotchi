// console.log(tomagatchi);

// Create class Tomagatchi
class Tomagatchi {
	constructor(hunger, sleepiness, boredom, age) {
		this.hunger = hunger;
		this.sleepiness = sleepiness;
		this.boredom = boredom;
		this.age = age;
	}
}

let zatchi = new Tomagatchi();

zatchi = {
	hunger: 0,
	sleepiness: 0,
	boredom: 0,
	age: 0
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

$('#hungerButton').on('click', () => {
	zatchi.hunger--
	hungerText.text(`HUNGER: ${zatchi.hunger}`)
});

$('#sleepinessButton').on('click', () => {
	zatchi.sleepiness--
	sleepinessText.text(`SLEEPINESS: ${zatchi.sleepiness}`)
});

$('#boredomButton').on('click', () => {
	zatchi.boredom--
	boredomText.text(`BOREDOM: ${zatchi.boredom}`)
});















