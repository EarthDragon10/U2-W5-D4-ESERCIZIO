/*
1) Prendere ció che scrivo nell'input e trasformarlo in un elemento di una list-to-do
2) Poter applicare lo stile della scritta input tramite i pulsanti
*/

const list = document.getElementById("do-to-list");

function getAndAddInputToList(event) {
	console.log(event.target);

	let inputText = document.getElementById("input-text");

	if (event.key !== "Enter") {
		// Questa funzione, se non premo Enter, non fa nulla.
		return; // Ritorna subito, esce subito.
	}

	if (inputText.value !== "") {
		let liElement = document.createElement("li");

		liElement.innerText = inputText.value;

		inputText.value = "";

		list.appendChild(liElement);
	}
}

function addInputToList() {
	let inputText = document.getElementById("input-text");
	let liElement = document.createElement("li");

	liElement.innerText = inputText.value;

	inputText.value = "";

	list.appendChild(liElement);
}
