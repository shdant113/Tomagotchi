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
let val = ($('#input-space').val());

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
		let hungerIncrease = setInterval(function () {
			newHunger++;
			hungerText.text(`Hunger: ${newHunger}`)
			if (newHunger === 10) {
				clearInterval(hungerIncrease);
				alert('Your pet died!');
			}
		}, 20000)
	},

	zatchiSleepiness() {
		let sleepinessIncrease = setInterval(function () {
			newSleepiness++;
			sleepinessText.text(`Sleepiness: ${newSleepiness}`);
			if (newSleepiness === 10) {
				clearInterval(sleepinessIncrease);
				alert('Your pet died!');
			}
		}, 40000)
	},

	zatchiBoredom() {
		let boredomIncrease = setInterval(function () {
			newBoredom++;
			boredomText.text(`Boredom: ${newBoredom}`);
			if (newBoredom === 10) {
				clearInterval(boredomIncrease);
				alert('Your pet died!');
			}
		}, 50000)
	},
 
	zatchiAge() {
		let ageIncrease = setInterval(function () {
			newAge++;
			ageText.text(`Age: ${newAge}`);
			if (newAge === 5) {
				if (confirm(`Would you like to morph your pet?`)) {
					$('#zatchi').attr('src', 'https://vignette.wikia.nocookie.net/tamagotchi/images/7/7e/Bill_tah.png/revision/latest/scale-to-width-down/50?cb=20150402023101');
				} else {
					// do not morph
				}
			}
			if (newAge === 10) {
				if (confirm(`Would you like to morph ${val}?`)) {
					$('#zatchi').attr('src', 'https://vignette.wikia.nocookie.net/tamagotchi/images/4/47/Charitchi_tah.png/revision/latest/scale-to-width-down/50?cb=20140429220545');
				} else {
					// do not morph
				}
			}
			if (newAge === 15) {
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
	if (zatchi.hunger > 0) {
		zatchi.hunger--;
		hungerText.text(`Hunger: ${zatchi.hunger}`);
		$('#zatchi').velocity('callout.tada');
	} else {
		if (val !== '') {
			$('#prompt').text(`${val} is full!`);
		} else {
			$('#prompt').text(`Your pet is full!`);
		}
	}
});

$('#sleepinessButton').on('click', (e) => {
	if (zatchi.sleepiness > 0) {
		zatchi.sleepiness--;
		sleepinessText.text(`Sleepiness: ${zatchi.sleepiness}`);
		// background-color: gray;
		// $('body').css('background-color','gray');
		$('#zatchi').velocity('transition.whirlOut');
		$('#zatchi').velocity('transition.swoopIn');
	} else {
		if (val !== '') {
			$('#prompt').text(`${val} doesn't want to sleep anymore!`);
		} else {
			$('#prompt').text(`Your pet doesn't want to sleep anymore!`);
		}
	}
});

$('#boredomButton').on('click', () => {
	if (zatchi.boredom > 0) {
		zatchi.boredom--;
		boredomText.text(`Boredom: ${zatchi.boredom}`);
		$('#zatchi').velocity("callout.bounce");
		$('#zatchi').velocity('callout.shake');
	} else {
		if (val !== '') {
			$('#prompt').text(`${val} doesn't need to play anymore!`);
		} else {
			$('#prompt').text(`Your pet doesn't need to play anymore!`);
		}
	}
});

$('form').on('submit', (e) => {
	let val = ($('#input-space').val());
	if (val !== '') {
		$('h1').text(`Your pet, ${val}`);
		$('#hungerButton').text(`Feed ${val}!`);
		$('#boredomButton').text(`Play with ${val}!`);
		$('#sleepinessButton').text(`Put ${val} to bed!`);
		$('#zatchi').velocity('transition.whirlIn');
	} else {
		val = 'your pet';
	}
	e.preventDefault();
});

$('#reset').on('click', () => {
	zatchi.hunger = 5;
	hungerText.text(`Hunger: ${zatchi.hunger}`);
	zatchi.sleepiness = 5;
	sleepinessText.text(`Sleepiness: ${zatchi.sleepiness}`);
	zatchi.boredom = 5;
	boredomText.text(`Boredom: ${zatchi.boredom}`);
	zatchi.age = 0;
	ageText.text(`Age: ${zatchi.age}`);
})













