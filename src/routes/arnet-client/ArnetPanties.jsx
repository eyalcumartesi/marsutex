import React from "react";
import ArnetNavbar from "./ArnetNavbar";
import ProductGrid from "../../containers/ProductGrid";
import { Box, Container } from "@mui/material";

function ArnetPanties() {
	return (
		<Box>
			<ArnetNavbar />
			<Container>
				<ProductGrid name={"Panties"} />
			</Container>
		</Box>
	);
}

export default ArnetPanties;
