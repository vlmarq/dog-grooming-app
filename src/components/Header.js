import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../images/zen-pet-spa.svg";
import "../styles/Header.css";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
	return (
		<Navbar className="py-0" bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="/">
					<img className="logo" src={Logo} alt="Zen Pet Spa logo" />
				</Navbar.Brand>
				<Navbar.Toggle
					className="navbar-dark"
					aria-controls="basic-navbar-nav"
				/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto w-100 d-flex">
						<LinkContainer to="/">
							<Nav.Link className="active">Home</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/services">
							<Nav.Link>Services</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/appointments">
							<Nav.Link>Appointments</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/contact">
							<Nav.Link>Contact us</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/products">
							<Nav.Link>Products</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Header;
