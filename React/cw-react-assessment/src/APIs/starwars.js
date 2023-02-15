import axios from "axios";

const starwars = {
	getPeople: async () => {
		try {
			const response = await axios.get("https://swapi.dev/api/people");
			return response.data.results;
		} catch (error) {
			return error;
		}
	},
	getPlanets: async () => {
		try {
			const response = await axios.get("https://swapi.dev/api/planets");
			return response.data.results;
		} catch (error) {
			return error;
		}
	},
	// getStarships: async () => {
	// 	// const urls = [
	// 	// 	"https://swapi.dev/api/starships",
	// 	// 	"https://swapi.dev/api/starships/?page=2",
	// 	// 	"https://swapi.dev/api/starships/?page=3",
	// 	// 	"https://swapi.dev/api/starships/?page=4",
	// 	// ];
	// 	try {
	// 		const response = await axios.get("https://swapi.dev/api/starships");
	// 		return response.data.results;
	// 	} catch (error) {
	// 		return error;
	// 	}
	// },
	getStarships: async () => {
		const urls = [
			"https://swapi.dev/api/starships",
			"https://swapi.dev/api/starships/?page=2",
			"https://swapi.dev/api/starships/?page=3",
			"https://swapi.dev/api/starships/?page=4",
		];
		try {
			const [result1, result2, result3, result4] = await Promise.all(
				urls.map((url) => fetch(url).then((res) => res.json()))
			);

			let final = [
				...result1.results,
				...result2.results,
				...result3.results,
				...result4.results,
			];
			return final;
		} catch (error) {
			return error;
		}
	},
};

export default starwars;
