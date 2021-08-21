import "./App.css";
import HomePage from "./pages/homepage/HomePage";
import { Route, Switch } from "react-router-dom";

const About = () => {
	return <h1>Hats category.</h1>;
};

function App() {
	return (
		<Switch>
			<Route exact path="/">
				<HomePage />
			</Route>
			<Route path="/hats">
				<About />
			</Route>
		</Switch>
	);
}

export default App;
