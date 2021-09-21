import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/App.css";
import Home from "./views/Home";
import Services from "./views/Home";
import Appointment from "./views/Home";
import Contact from "./views/Home";
import Product from "./views/Home";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route path="/services" component={Services} />
					<Route path="/appointments" component={Appointment} />
					<Route path="/contact" component={Contact} />
					<Route path="/products" component={Product} />
					<Route path="/" component={Home} />
					<Route
						render={function () {
							return <h1>Not found</h1>;
						}}
					/>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
