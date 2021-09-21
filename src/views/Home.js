import React from "react";
import Jumbotron from "../components/Jumbotron";
import Section from "../components/Section";
import Frenchie from "../images/frenchie-optimized.jpg";
import CatInPink from "../images/cat-in-pink-optimized.jpg";

function Home() {
	const groomingSection = {
		title: "Grooming",
		description:
			"Pamper your furry baby to the maximum with this super treatment that includes: deep shampoo, special shampoo, conditioner, grinding nails, cleaning ears, intimate, hair cut, keratin, blueberry facial, bandana or bow and cologne. Our service includes: non anesthetic dental clinic remove plaque avoid bad odor and promote healthy mouth.",
	};

	const boardingSection = {
		title: "Boarding",
		description:
			"Your furry at home! Without cages, and with the same affection and care as in your home. The best option for pet accommodation. Our passion for your pet, comes from being pet owners ourselves. We understand the importance of giving your pet the same love you give him or her.  Look at us as an extension of you. We do what you want with your pet– cuddles in bed? Sure! You don’t want him on the couch– we will stay true to your training! Rest assured you set the tone and we follow–the one thing however that your pet will ALWAYS receive is LOTS of love and attention!",
	};

	return (
		<>
			<Jumbotron />
			<Section
				flexDirection={"flex-row"}
				imgSrc={Frenchie}
				title={groomingSection.title}
				description={groomingSection.description}
			/>
			<Section
				flexDirection={"flex-row-reverse"}
				imgSrc={CatInPink}
				title={boardingSection.title}
				description={boardingSection.description}
			/>
		</>
	);
}

export default Home;
