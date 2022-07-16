import "../../views/home/home.css";

const navbar = () => {
	return (
		<div>
			<nav className="navbar">
				<div className="brand-title">
					<i className="fas fa-calendar-alt">&nbsp;&nbsp;</i>STYLE LOFT
				</div>
				<a href="#" className="toggle-button">
					<span className="bar"></span>
					<span className="bar"></span>
					<span className="bar"></span>
				</a>
				<div className="navbar-links">
					<ul>
						<li>
							<a href="/Hack-The-Runway-mlh/">Home</a>
						</li>
						<li>
							<a href="#">Calendar</a>
						</li>
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default navbar;
