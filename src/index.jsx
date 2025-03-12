// @refresh reload.
import { render } from "solid-js/web";
import "./index.css";

// Importing Components.
import NavBar from "./components/nav_bar";
import Footer from "./components/footer";

// Importing Pages Routes.
import Routes from "./routes";

// Main App component.
const App = ({ children }) => {
	return (
		<>
			{/* Displaying the navbar and footer on every Page. */}
			<NavBar />
			{/* Setting base styles for each Page. */}
			<main className="flex justify-center items-center gap-4 py-8 h-full w-full *:max-w-5xl text-base-100">
				{children}
			</main>
			<Footer />
		</>
	);
};

// Rendering the SolidJS code onto the DOM with the parent element of "root".
render(() => <Routes root={App} />, document.getElementById("root"));
