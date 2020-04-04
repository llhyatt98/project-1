
// Calculates a random integer
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var num_rolls = 1;

// Changes the image of the dice.
function changeDice() {
	var options = ['dice/die1.gif', 'dice/die2.gif', 'dice/die3.gif',
				   'dice/die4.gif', 'dice/die5.gif', 'dice/die6.gif']

	
	var dice1_val = getRandomInt(6);
	var dice2_val = getRandomInt(6); 

	var dice1 = options[dice1_val];
	var dice2 = options[dice2_val];

	dice1_val += 1
	dice2_val += 1

    document.getElementById("die1").src = dice1;
    document.getElementById("die2").src = dice2;

    var target = document.getElementById("num").value;
    if((parseInt(dice1_val) + parseInt(dice2_val)) == parseInt(target)){
    	displayDiv();
    	console.log("You hit your number in", num_rolls, "rolls.");
    	num_rolls = 1;
    }
    else{
    	num_rolls += 1;
    	console.log("d1 =", dice1_val, "d2 =", dice2_val);
    	document.getElementById("hit_num").style.display = "none";
    }
}

function displayDiv() {
	var div = document.getElementById("hit_num");
	div.style.display = "block";
	if(num_rolls == 1){
		div.innerHTML = "You hit your number in " + num_rolls + " roll.";
	}
	else{
		div.innerHTML = "You hit your number in " + num_rolls + " rolls.";
	}
}
	