// @refresh reload
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import "./index.css";

// pages
import Home from "./pages/home";
import LifeSkills from "./pages/life-skills";
import LookingForWork from "./pages/looking-for-work";
import GapYear from "./pages/gap-year";

// components
import NavBar from "./components/nav-bar";
import Footer from "./components/footer";

const Base = ({ children }) => {
	return (
		<>
			{/* Displaying the navbar and footer on every web page */}
			<NavBar />
			<main className="flex justify-center items-center gap-5 h-full w-full bg">
				{children}
			</main>
			<Footer />
		</>
	);
};

render(
	() => (
		<Router root={Base}>
			{/* Setting each of the (file) paths for each page */}
			<Route path="/" component={Home} />
			<Route path="/life-skills" component={LifeSkills} />
			<Route path="/looking-for-work" component={LookingForWork} />
			<Route path="/gap-year" component={GapYear} />
		</Router>
	),
	document.getElementById("root")
);
