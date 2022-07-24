const contestants = document.querySelectorAll('.contestant')

Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

function checkForRose(click){
	if(click.target.classList.contains('rose')){
		document.querySelector('#nikki').classList.toggle('hidden')
	}else{
		alert("Wrong!");
	}
}

//Check which contestant has the rose

//If the right person has it, show their picture

//If the wrong person is selected, alert "Wrong!"

let homeWorld = "Earth"

let currentVisitor = "Mark"


