import React from "react";
import { Card, Box, Button, Typography } from "@mui/material";
import ArnetImage from "../routes/arnet-client/arnet-cover.png";
import ForbroImage from "../routes/forbro-client/forbro-cover.png";
import { Link } from "react-router-dom";

const MarsutexHome = () => {
	return (
		<Box
			className="w-full h-screen absolute z-0 inset-0 bg-center flex flex-col items-center justify-center gap-6"
			style={{ background: "#2B2D42" }}
		>
			<Typography
				sx={{
					fontSize: { sm: "100px", xs: "50px" },
					fontWeight: 600,
					color: "#FFFFFF",
				}}
			>
				Marsutex S.A
			</Typography>
			<Typography
				sx={{
					fontSize: { sm: "40px", xs: "30px" },
					fontWeight: 500,
					color: "#FFFFFF",
					marginBottom: "12px",
				}}
			>
				Visita Nuestras Marcas
			</Typography>
			<div className="flex flex-row gap-6 w-full items-center justify-center">
				<Card
					className="flex flex-col items-center justify-center p-12 gap-2 "
					sx={{
						background: "#C9184A",
						width: { sm: "250px", xs: "200px" },
						height: { sm: "300px", xs: "200px" },
						opacity: 0.9,
					}}
				>
					<div className="flex flex-grow items-center justify-center">
						<img src={ArnetImage} alt="arnet" width="250px" />
					</div>
					<div className="flex flex-col flex-grow justify-end">
						<Button variant="contained" sx={{ background: "#D90429" }}>
							<Link to="/arnet"> Ver Mas</Link>
						</Button>
					</div>
				</Card>
				<Card
					className="flex flex-col items-center justify-center p-12 gap-2"
					sx={{
						background: "#EDF2F4",
						width: { sm: "250px", xs: "200px" },
						height: { sm: "300px", xs: "200px" },
						opacity: 0.9,
					}}
				>
					<div className="flex flex-grow items-center justify-center">
						<img src={ForbroImage} alt="forbro" width="500px" height="auto" />
					</div>
					<div className="flex flex-col flex-grow justify-end">
						<Button
							to="/forbro"
							variant="contained"
							sx={{ background: "#D90429" }}
						>
							<Link to="/forbro"> Ver Mas</Link>
						</Button>
					</div>
				</Card>
			</div>
		</Box>
	);
};

export default MarsutexHome;
