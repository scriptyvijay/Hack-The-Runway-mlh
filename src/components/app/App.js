import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../views/home/Home";
import Outfit from "../../views/outfit/Outfit";
import ChangeOutfit from "../changeOutfit/ChangeOutfit";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/outfit" element={<Outfit />} />
				<Route path="/outfit/change" element={<ChangeOutfit />} />
			</Routes>
		</Router>
	);
};

export default App;
