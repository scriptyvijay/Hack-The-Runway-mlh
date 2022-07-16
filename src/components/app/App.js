import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../views/home/Home";
import Outfit from "../../views/outfit/Outfit";
import ChangeOutfit from "../changeOutfit/ChangeOutfit";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/Hack-The-Runway-mlh/" element={<Home />} />
				<Route path="/Hack-The-Runway-mlh/outfit" element={<Outfit />} />
				<Route path="/Hack-The-Runway-mlh/outfit/change" element={<ChangeOutfit />} />
			</Routes>
		</Router>
	);
};

export default App;
