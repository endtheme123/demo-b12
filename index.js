async function getPokemon() {
	let data = await fetch("https://pokeapi.co/api/v2/pokemon");
	let pokemon = await data.json();
	console.log(pokemon.results);
	let result = "";

	for (let i = 0; i < pokemon.results.length; i++) {
		console.log(pokemon.results[i].name);
		// result = result + `<h3>${pokemon.results[i].name}</h3>`;
		result = result + "<p>" + pokemon.results[i].name + "</p>";
	}
	console.log(result);
	let listPokemon = $("#list");
	listPokemon.html(result);
}

// getPokemon();
async function getAbilities() {
	let dataAbilities = await fetch("https://pokeapi.co/api/v2/pokemon/1/");
	let Abilities = await dataAbilities.json();
	console.log(Abilities);
	let resultAbi = "";

	for (let i = 0; i < Abilities.abilities.length; i++) {
		console.log(Abilities.abilities[i]);
		// result = result + `<h3>${pokemon.results[i].name}</h3>`;
		resultAbi =
			resultAbi +
			"<p>Name:" +
			Abilities.abilities[i].ability.name +
			"</p>" +
			"<p>Url:" +
			Abilities.abilities[i].ability.url +
			"</p>";
	}

	let listPokemon = $("#list");
	listPokemon.html(resultAbi);
}

getAbilities();
