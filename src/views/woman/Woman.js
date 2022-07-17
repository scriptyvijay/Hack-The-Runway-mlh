import "./outfit.css";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router";

const Outfit = () => {
	const [selected, setSelected] = useState(new Date(new Date("07/16/2012").toDateString()));
	const [DateToggle, setDateToggle] = useState(false);
	const [genderToggle, setGenderToggle] = useState(false);
	const [index, setIndex] = useState(selected.getDate());
	const navigate = useNavigate();
	return (
		<>
			<div className="outfit">
				<Navbar />
				<div>
					<div className="choose-bar">
						<div
							className="date-toggle"
							onClick={() => {
								setDateToggle(!DateToggle);
							}}
						>
							Date
						</div>

						<div>
							<div className="genderSelection">
								<span
									onClick={() => {
										navigate("/outfit/men");
										setGenderToggle(!genderToggle);
									}}
								>
									Men
								</span>
								|
								<span
									onClick={() => {
										setGenderToggle(!genderToggle);
									}}
								>
									Woman
								</span>
							</div>
						</div>
					</div>
					<div className="container-model">
						<div className="model">
							<AiOutlineLeft
								className="icon"
								onClick={() => {
									setIndex(index - 1);
								}}
							/>
							{genderToggle ? (
								<img src={require(`../../assets/img/men/${selected.getDate()}.png`)} className="outfit-model" />
							) : (
								<img src={require(`../../assets/img/woman/${selected.getDate() || index}.png`)} className="outfit-model" />
							)}
							<AiOutlineRight
								className="icon"
								onClick={() => {
									setIndex(index + 1);
								}}
							/>
							<div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
								<button className="buttonBuy">Buy Now</button>
								<button className="buttonChange">Change Outfit</button>
							</div>
						</div>
						<div></div>
					</div>
					{DateToggle && <DayPicker mode="single" selected={selected} onSelect={setSelected} className="calenderToggle" />}
					<div className="calender">
						<DayPicker mode="single" selected={selected} onSelect={setSelected} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Outfit;
