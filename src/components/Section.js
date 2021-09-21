import React from "react";
import { Image } from "react-bootstrap";
import "../styles/Section.css";

function Section(props) {
	return (
		<section className={`row d-flex my-5 ${props.flexDirection}`}>
			<div className="col d-flex justify-content-center align-items-center p-0">
				<Image src={props.imgSrc} alt="" width="500px" roundedCircle />
			</div>
			<div className="col d-flex flex-column justify-content-center align-items-center p-0">
				<h2>{props.title}</h2>
				<p className="w-50">{props.description}</p>
			</div>
		</section>
	);
}

export default Section;
