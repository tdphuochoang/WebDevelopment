import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faXmark,
	faMagnifyingGlass,
	faArrowDownWideShort,
	faArrowUpWideShort,
} from "@fortawesome/free-solid-svg-icons";
import "./Table.scss";
import starwars from "../../APIs/starwars";

const Table = ({ data, currentPosts, setData, loading }) => {
	const [sortBy, setSortBy] = useState("Name");
	const [starShips, setStarShips] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	//Obtain starship data from starship API
	useEffect(() => {
		starwars.getStarships().then((response) => {
			console.log("Starships", response);
			setStarShips(response);
		});
	}, []);

	const sectionName = [
		["Name", "name"],
		["Gender", "gender"],
		["Eye Color", "eye_color"],
		["Hair Color", "hair_color"],
		["Height", "height"],
		["Mass", "mass"],
		["Skin Color", "skin_color"],
		["Birth Year", "birth_year"],
		["Starships", "starships"],
	];

	//Sort the table based on section
	const sortTable = (str) => {
		let temp = [...str];
		return temp.sort((a, b) => {
			//Check and sort if the data are numbers
			if (!isNaN(a[sortBy]) && !isNaN(b[sortBy])) {
				return Number(a[sortBy]) - Number(b[sortBy]);
				//Sort by alphabet if the data are letters
			} else {
				if (a[sortBy] === b[sortBy]) {
					return 0;
				} else if (a[sortBy] > b[sortBy]) {
					return 1;
				}
			}

			return -1;
		});
	};

	//Remove character
	const removeItem = (name) => {
		if (window.confirm("Are you sure you wanted to remove this character?")) {
			const filteredCharacter = data.filter((item) => item.name !== name);
			setData(filteredCharacter);
		}
	};

	//Filter starship data for each character
	const filterStarShip = (starships) => {
		const starShipName = [];
		for (let i = 0; i < starships.length; i++) {
			const temp = starShips.filter((item) => item.url === starships[i]);
			temp.length && starShipName.push(temp[0].name);
		}

		return starShipName;
	};

	//get search term from search box
	const getSearchTerm = (e) => {
		searchHandler(e.target.value);
	};

	//Handle search term
	const searchHandler = (searchTerm) => {
		setSearchTerm(searchTerm);
		if (searchTerm !== "") {
			const newCharacterList = data.filter((character) => {
				return Object.values(character)
					.join(" ")
					.toLowerCase()
					.includes(searchTerm.toLowerCase());
			});
			setSearchResults(newCharacterList);
		} else {
			setSearchResults(data);
		}
	};

	return (
		<div className="tableContainer">
			<div className="searchBox">
				<input
					placeholder="Search Character..."
					value={searchTerm}
					onChange={getSearchTerm}
				/>
				<FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} />
			</div>
			{loading ? (
				<p>Loading...</p>
			) : (
				<table className="mainTable">
					<thead>
						<tr>
							{sectionName.map((section, index) => (
								<th key={index} onClick={() => setSortBy(section[1])}>
									<span>
										{section[0]}
										<FontAwesomeIcon
											style={{ marginLeft: "10px" }}
											icon={
												sortBy === section[1]
													? faArrowDownWideShort
													: faArrowUpWideShort
											}
										/>
									</span>
								</th>
							))}

							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{searchTerm.length !== 0 && searchResults.length === 0 ? (
							<p className="noData">No data matches your search</p>
						) : (
							currentPosts &&
							(searchTerm.length < 1
								? sortTable(currentPosts)
								: searchResults
							).map((item, index) => (
								<tr key={index}>
									<td>{item.name}</td>
									<td>{item.gender}</td>
									<td>{item.eye_color}</td>
									<td>{item.hair_color}</td>
									<td>{item.height}</td>
									<td>{item.mass}</td>
									<td>{item.skin_color}</td>
									<td>{item.birth_year}</td>
									<td>
										<ul>
											{item.starships.length
												? filterStarShip(item.starships).map(
														(starShip, index) => <li key={index}>{starShip}</li>
												  )
												: "n/a"}
										</ul>
									</td>
									<td>
										<FontAwesomeIcon
											className="delete"
											icon={faXmark}
											style={{ color: "red" }}
											onClick={() => removeItem(item.name)}
										/>
									</td>
								</tr>
							))
						)}
					</tbody>
				</table>
			)}
		</div>
	);
};

export default Table;
