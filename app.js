const adviceNumber = document.querySelector('.adviceNumber');
const adviceText = document.querySelector('.advice');
const diceButton = document.querySelector('.dice');

// api url
const api_url =
	"https://api.adviceslip.com/advice";

// Defining async function
async function getapi(url) {
	
	// Storing response
	const response = await fetch(url);
	
	// Storing data in form of JSON
	var data = await response.json();
	console.log(data);

	show(data);
}

// Calling that async function
getapi(api_url);


// Function to define innerHTML for HTML table
function show(data) {
    let adviceA = data;
    console.log(adviceA.slip.advice);
    adviceNumber.innerHTML = `Advice # ${adviceA.slip.id}`;
    adviceText.innerHTML = `"${adviceA.slip.advice}"`;
}

diceButton.addEventListener('click', e => {
    getapi(api_url);
});