import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./styles/App.css";
import Home from "./views/Home";
import Services from "./views/Services";
import Appointment from "./views/Appointment";
import Contact from "./views/Contact";
import Product from "./views/Product";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Header />
				<Switch>
					<Route exact path="/services">
						<Services />
					</Route>
					<Route exact path="/appointments">
						<Appointment />
					</Route>
					<Route exact path="/contact">
						<Contact />
					</Route>
					<Route exact path="/products">
						<Product />
					</Route>
					<Route exact path="/">
						<Home />
					</Route>
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
