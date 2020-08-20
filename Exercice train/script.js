let nonTraction = 200;
let position = 0;
let animation ;
let mouvement = 0;
let trainInterval = setInterval(accelerer, nonTraction - mouvement);

let stop = document.getElementById('btnStopper');
stop.addEventListener("click", stopperTrain);

let train = document.getElementById("train");
train.addEventListener("click", accelerer)

function accelerer()
{
	function frame()
	{
		positionActuelle = document.getElementById("train").style.left;
		testerPosition(positionActuelle);
		document.getElementById("train").style.left = position++ + "px";
	}

	if (mouvement < 200 ) {
		mouvement++;
	}

	clearInterval(trainInterval);
	trainInterval = setInterval(accelerer, nonTraction - mouvement);
	frame();
}

function testerPosition(positionActuelle)
{
	if (parseInt(positionActuelle) + 100 > 360 ) {
		clearInterval(trainInterval);
		alert("Et merde ! C'est raté !");
	}
}

function stopperTrain()
{
	clearInterval(trainInterval);
}