import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Jumbotron.css";

function Jumbotron() {
	return (
		<>
			<div className="jumbotron row mx-0">
				<div className="col bg-light d-flex flex-column justify-content-center align-items-center ">
					<h1 className="jumbotron__header text-center display-2 text-uppercase">
						Zen Pet Spa
					</h1>
					<p className="px-4 jumbotron__caption">
						Zen Pet Spa is the ultimate pet destination where comfort meets
						community. We are an innovative full-service grooming salon and pet
						spa that is fearted towards all dogs and cats. With modern pet
						grooming and numerous self-wash stations, we're dedicated to
						providing the best experience possible for your pet.
					</p>
				</div>
				<div className="col jumbotron__img"></div>
			</div>
			<div className="row justify-content-center align-items-center py-4 jumbotron__bookNowSection">
				<Button
					className="jumbotron__btn shadow-lg text-uppercase"
					variant="light"
					as={Link}
					to="/appointments"
				>
					Get an appointment
				</Button>
			</div>
		</>
	);
}

export default Jumbotron;
