import React from "react";
import Navbar from "../../components/Navbar";

const navItems = [
	{
		name: "Home",
		link: "/forbro",
	},
	{
		name: "Bebe",
		link: "/forbro/baby",
	},
	{
		name: "Hombre",
		link: "/forbro/men",
	},
	{
		name: "Marsutex",
		link: "/",
	},
	{
		name: "Contactanos",
		link: "mailto:ersel@marsutex.com",
	},
];

const ForBroNavbar = () => {
	return <Navbar navItems={navItems} name={"FORBRO"} />;
};

export default ForBroNavbar;
