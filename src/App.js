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
					<Route
						path="/forbro/*"
						element={
							<Routes>
								<Route path="/" element={<ForbroApp />} />
								<Route path="men" element={<ForBroHombre />} />
								<Route path="baby" element={<ForBroBebe />} />
							</Routes>
						}
					/>
					<Route
						path="/arnet/*"
						element={
							<Routes>
								<Route path="/" element={<ArnetApp />} />
								<Route path="brasier" element={<ArnetBrasier />} />
								<Route path="panties" element={<ArnetPanties />} />
							</Routes>
						}
					/>
					<Route path="/" element={<MarsutexApp />} />
				</Routes>
			</Container>
		</Box>
	);
}

export default App;
