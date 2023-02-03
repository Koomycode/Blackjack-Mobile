// Button Click Effect
const btn = document.querySelectorAll(".btn");
function activeLink() {
	btn.forEach((item) => item.classList.remove("active"));
	this.classList.add("active");
}
btn.forEach((item) => item.addEventListener("click", activeLink));

// Game Code
const title = document.getElementById("title");
const cardEl = document.getElementById("cards");
const sumEl = document.getElementById("sum");
const startBtn = document.getElementById("start");
const drawBtn = document.getElementById("draw");

let sum = 0;
let firstCard = 0;
let secondCard = 0;
let newCard = 0;
let message = "";
let cards = [];
let isAlive = false;
let hasBlackjack = false;
let canStart = true;

function getRandom() {
	let randomNum = Math.floor(Math.random() * 13) + 1;

	if (randomNum > 10) {
		return 10;
	} else if (randomNum === 1) {
		return 11;
	} else {
		return randomNum;
	}
}

function renderGame() {
	if (sum < 21) {
		message = "Draw one more card?";
		canStart = false;
	} else if (sum === 21) {
		message = "Congartulation you've got a blackjack!";
		canStart = true;
		hasBlackjack = true;
	} else {
		message = "you're out of the game, you lose";
		isAlive = false;
		canStart = true;
	}

	sumEl.textContent = ": ";
	sumEl.textContent += sum;
	title.textContent = message;
	cardEl.textContent = ": ";
	for (let i = 0; i < cards.length; i++) {
		cardEl.textContent += cards[i] + " . ";
	}
}

startBtn.addEventListener("click", function() {
	if (canStart) {
		firstCard = getRandom();
		secondCard = getRandom();
		sum = firstCard + secondCard;
		cards = [firstCard, secondCard];
		hasBlackjack = false;
		isAlive = true;
		renderGame();
	}
});

drawBtn.addEventListener("click", function() {
	if (isAlive && hasBlackjack === false) {
		newCard = getRandom();
		cards.push(newCard);
		sum += newCard;
		renderGame();
	}
});
