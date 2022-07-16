import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router";

const Home = () => {
	const navigate = useNavigate();
	return (
		<>
			<Navbar />
			<div className="background-image">
				<div className="vector"></div>
				<div className="text">
					<h4 style={{ fontStyle: "italic", color: "aliceblue" }}>CHOOSE YOUR OUTFITS FOR THE FUTURE</h4>
					<h1 className="tagline">ALL Your</h1>
					<h3 className="tagline">STYLES ARE HERE</h3>
					<p style={{ fontSize: 12, fontWeight: 300 }}>
						Use our monthly calender option to set your outfits for the upcoming days, week, month ....Plan Your Outfits with us It’s Super simple . Just take a snap of your dress and
						accesceries. select thr date and upload.
					</p>
					<input id="real-file" hidden="hidden" />

					<button
						className="btn"
						id="btnFile"
						onClick={() => {
							navigate("/Hack-The-Runway-mlh/outfit");
						}}
					>
						ADD OUTFITS&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-chevron-right"></i>
					</button>

					<div className="flex-container">
						<div>
							<i className="fa-2x fa-brands fa-instagram"></i>
						</div>
						<div style={{ marginTop: 47 }}>
							<i className="fa-2x fa-brands fa-facebook"></i>
						</div>
						<div>
							<i className="fa-2x fa-brands fa-telegram"></i>
						</div>
					</div>
				</div>
				<div className="div_back">
					<img src={require("../../assets/img/back_phone.png")} style={{ width: 500, height: 800 }} />
				</div>
				<div className="div1">
					<img src={require("../../assets/img/jacket.png")} style={{ width: 300, height: 300 }} />
				</div>
				<div className="div2">
					<img src={require("../../assets/img/shoes.png")} width="150" height="150" />
				</div>
				<div className="div3">
					<img src={require("../../assets/img/watch.png")} width="150" height="150" />
				</div>
				<div className="div4">
					<img src={require("../../assets/img/women.png")} width="280" height="280" />
				</div>
			</div>
		</>
	);
};

export default Home;
