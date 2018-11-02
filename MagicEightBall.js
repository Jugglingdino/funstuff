function BelligerentMagicEightBall() {
	this.answers_array = [
		"Nope", "NO!!!", "Ask Again", "Ask Later",
		"Of Course Not", "Stop Shaking Me!",
		"Just Forget About It", "Sleep On it",
		"Why Not", "Try your Horoscope", 
		"Aren't You Needy", 
		"We've All Got Better Things To Do"
	];

	this.shake = function(){
		var randomNumber = Math.floor(Math.random() * 12);
		var answer = this.answers_array[randomNumber];
		
		console.log(answer);
	}
}


var eightBall = new BelligerentMagicEightBall();

eightBall.shake();
