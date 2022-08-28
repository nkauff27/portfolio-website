console.log("Hi, my name is Nicole, welcome to my portfolio site")



var ages = [15, 20, 25, 30];

for (var i=0; i < ages.length; i++) {
    console.log(ages[i]);
}

function validate(userInput) {
	console.log(userInput);
	if(userInput===""){
		alert("Whoops, this field cannot be blank!");
		return false;
	}
	else if(userInput==="Bobby"){
		window.alert("Input cannot be 'Bobby', try again!");
		return false;
	}
	else if(userInput.length>20){
		window.alert("Input cannot be longer than 20 characters, try again!");
		return false;			
		}
	else{
		console.log(userInput);
		window.alert("Thanks for your submission!");
		return;			
		}
	}

function menuToggle() {
    var x = document.getElementById('myNavtoggle');
    if (x.className === 'navtoggle') {
        x.className += ' responsive';
    } else {
        x.className = 'navtoggle';
    }
}

document.querySelector('.btn').addEventListener('click', (evt) => {
    evt.target.classList.add('loading')
  
    setTimeout(() => {
      evt.target.classList.remove('loading')
    }, 3000);
  })