// console.log(tomagatchi);

class Tomagatchi {
	constructor() {
		this.hunger = 5;
		this.sleepiness = 5;
		this.boredom = 5;
		this.age = 0;
	}
}

// zatchi = {
// 	hunger: 0,
// 	sleepiness: 0,
// 	boredom: 0,
// 	age: 0
// }

let zatchi = new Tomagatchi();

let hungerText = $('#hunger');
let sleepinessText = $('#sleepiness');
let boredomText = $('#boredom');
let ageText = $('#age');

const game = {
	newHunger: zatchi.hunger,
	newSleepiness: zatchi.sleepiness,
	newBoredom: zatchi.boredom,
	newAge: zatchi.age,
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
			// } 
			// if (zatchi.hunger <= -1) {
			// 	alert('Your pet is full!');
			} else {
				hungerText.text(`Hunger: ${zatchi.hunger}`);
			}
		}, 20000)
	},

	zatchiSleepiness() {
		newSleepiness = setInterval(function () {
			zatchi.sleepiness++;
			if (zatchi.sleepiness === 10) {
				clearInterval(newSleepiness);
				alert('Your pet died!');
			// } 
			// if (zatchi.sleepiness <= -1) {
			// 	alert('Your pet is already well rested!')
			} else {
				sleepinessText.text(`Sleepiness: ${zatchi.sleepiness}`);
			}
		}, 40000)
	},

	zatchiBoredom() {
		newBoredom = setInterval(function () {
			zatchi.boredom++;
			if (zatchi.boredom === 10) {
				clearInterval(newBoredom);
				alert('Your pet died!');
			// } 
			// if (zatchi.boredom <= -1) {
			// 	alert('Your pet does not need to play more!')
			} else {
				boredomText.text(`Boredom: ${zatchi.boredom}`);
			}
		}, 50000)
	},
 
	zatchiAge() {
		newAge = setInterval(function () {
			zatchi.age++;
			ageText.text(`Age: ${zatchi.age}`);
			if (zatchi.age === 5) {
				if (confirm(`Would you like to morph your pet?`)) {
					$('#zatchi').attr('src', 'https://vignette.wikia.nocookie.net/tamagotchi/images/7/7e/Bill_tah.png/revision/latest/scale-to-width-down/50?cb=20150402023101');
				} else {
					// do not morph
				}
			}
			if (zatchi.age === 10) {
				if (confirm(`Would you like to morph your pet?`)) {
					$('#zatchi').attr('src', 'https://vignette.wikia.nocookie.net/tamagotchi/images/4/47/Charitchi_tah.png/revision/latest/scale-to-width-down/50?cb=20140429220545');
				} else {
					// do not morph
				}
			}
			if (zatchi.age === 15) {
				if (confirm(`Would you like to morph your pet?`)) {
					$('#zatchi').attr('src', 'https://vignette.wikia.nocookie.net/tamagotchi/images/1/1e/Zuccitchi_tah.png/revision/latest/scale-to-width-down/50?cb=20140605155426');
				} else {
					// do not morph
				}
			}
		}, 25000)
	},
}

game.startGame();

$('#hungerButton').on('click', () => {
	zatchi.hunger--;
	hungerText.text(`Hunger: ${zatchi.hunger}`);
	$('#zatchi').velocity('callout.tada');
});

$('#sleepinessButton').on('click', (e) => {
	if (zatchi.sleepiness > 0) {
		zatchi.sleepiness--;
		sleepinessText.text(`Sleepiness: ${zatchi.sleepiness}`);
		// background-color: gray;
		// $('body').css('background-color','gray');
		$('#zatchi').velocity('transition.whirlOut');
		$('#zatchi').velocity('transition.swoopIn');
	}
});

$('#boredomButton').on('click', () => {
	if (zatchi.boredom > 0) {
		zatchi.boredom--;
		boredomText.text(`Boredom: ${zatchi.boredom}`);
		$('#zatchi').velocity("callout.bounce");
		$('#zatchi').velocity('callout.shake');
	} else {
		$('#prompt').text(`${val} doesn't need to play anymore!`);
	}
});

$('form').on('submit', (e) => {
	let val = ($('#input-space').val());
	$('h1').text(val);
	e.preventDefault();
	$('#hungerButton').text(`Feed ${val}!`);
	$('#boredomButton').text(`Play with ${val}!`);
	$('#sleepinessButton').text(`Put ${val} to bed!`);
	$('#zatchi').velocity('transition.whirlIn');
});

$('#reset').on('click', () => {
	zatchi.hunger = 0;
	hungerText.text(`Hunger: ${zatchi.hunger}`);
	zatchi.sleepiness = 0;
	sleepinessText.text(`Sleepiness: ${zatchi.sleepiness}`);
	zatchi.boredom = 0;
	boredomText.text(`Boredom: ${zatchi.boredom}`);
	zatchi.age = 0;
	ageText.text(`Age: ${zatchi.age}`);
})













