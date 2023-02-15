import React, { useState, useEffect } from "react";
import starwars from "../APIs/starwars";
import Table from "./table/Table";
import Pagination from "./pagination/Pagination";
import "./mainFunctional.scss";
import Navbar from "./navbar/Navbar";

function MainFunctional() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const postsPerPage = 5;

	useEffect(() => {
		setLoading(true);
		starwars.getPeople().then((response) => {
			console.log("response", response);
			setData(response);
			setLoading(false);
		});
	}, []);

	//Get current posts
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

	//Switch page
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<div className="mainContainer">
			<Navbar />
			<Table
				data={data}
				currentPosts={currentPosts}
				setData={setData}
				loading={loading}
			/>
			<Pagination
				postsPerPage={postsPerPage}
				totalPosts={data.length}
				paginate={paginate}
			/>
		</div>
	);
}

export default MainFunctional;
