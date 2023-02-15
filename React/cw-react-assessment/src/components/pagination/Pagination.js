import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<nav
			style={{
				display: "flex",
				justifyContent: "center",
				marginTop: "20px",
				marginLeft: "10px",
			}}
		>
			<ul className="pagination">
				{pageNumbers.map((number) => (
					<li key={number} className="page-item">
						<a
							onClick={() => paginate(number)}
							href="!#"
							className="page-link"
							style={{
								backgroundColor: "#fee920",
								color: "#111",
								border: "1px solid #111",
							}}
						>
							{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Pagination;
