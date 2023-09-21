import React from "react";
import MarsutexApp from "./routes/marsutex-client/MarsutexApp";
import ForbroApp from "./routes/forbro-client/ForbroApp";
import ArnetApp from "./routes/arnet-client/ArnetApp";
import ForBroBebe from "./routes/forbro-client/ForBroBebe";
import ForBroHombre from "./routes/forbro-client/ForBroHombre";
import ArnetBrasier from "./routes/arnet-client/ArnetBrasier";
import ArnetPanties from "./routes/arnet-client/ArnetPanties";
import { Box, Container } from "@mui/material";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<Box className="w-full h-full p-4">
			<Container>
				<Routes>
					<Route path="/" element={<MarsutexApp />} />
					<Route path="/forbro" element={<ForbroApp />} />
					<Route path="/arnet" element={<ArnetApp />} />
					<Route path="/forbro/men" element={<ForBroHombre />} />
					<Route path="/forbro/baby" element={<ForBroBebe />} />
					<Route path="/arnet/brasier" element={<ArnetBrasier />} />
					<Route path="/arnet/panties" element={<ArnetPanties />} />
				</Routes>
			</Container>
		</Box>
	);
}

export default App;
