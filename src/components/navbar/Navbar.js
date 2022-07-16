import React from "react";

const navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-black">
				<a className="navbar-brand" href="#">
					Navbar
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
			</nav>
		</div>
	);
};

export default navbar;