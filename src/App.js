import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Feature from "./Pages/Feature";
import Error from "./Pages/Error";
import NavBar from "./Components/NavBar";
import Login from "./Pages/Login";
import BuildTest from "./Pages/BuildTest";
import Footer from "./Components/Footer";

function App() {
	return (
		<>
			<NavBar />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/about" component={About} />
				<Route exact path="/feature" component={Feature} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/buildtest" component={BuildTest} />
				<Route component={Error} />
			</Switch>
			{/* <Footer /> */}
		</>
	);
}

export default App;
