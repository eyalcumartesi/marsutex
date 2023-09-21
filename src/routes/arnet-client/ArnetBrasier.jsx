import React from "react";
import ArnetNavbar from "./ArnetNavbar";
import ProductGrid from "../../containers/ProductGrid";
import { Box, Container } from "@mui/material";

function ArnetBrasier() {
	return (
		<Box>
			<ArnetNavbar />
			<Container>
				<ProductGrid name={"Brasier"} />
			</Container>
		</Box>
	);
}

export default ArnetBrasier;
