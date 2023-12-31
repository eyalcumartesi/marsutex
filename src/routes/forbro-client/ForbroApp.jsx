import React from "react";
import Home from "../../containers/Home";
import ForBroNavbar from "./ForBroNavbar";
import { Box, Container } from "@mui/material";
import imageCover from "./forbro-cover.png";
import HeroImage from "./hero-image.jpeg";

function ForbroApp() {
	return (
		<Box>
			<ForBroNavbar />
			<Container>
				<Home name={"FORBRO"} image={imageCover} heroImage={HeroImage} />
			</Container>
		</Box>
	);
}

export default ForbroApp;
