import { makeStyles } from "@material-ui/core";

const NavLinkStyle = makeStyles({
	activeLinkStyle: {
		color: "green",
		backgroundColor: "rgb(241, 234, 235)",
		// borderRadius: "5rem",
		// borderBottom: "2px solid black",
	},
	linkStyle: {
		textAlign: "center",
		padding: "1rem",
		fontSize: "2rem",
		textDecoration: "none",
		color: "black",
		outline: "none",
		"&:hover": {
			borderBottom: "2px solid black",
			color: "green",
		},
	},
});

export default NavLinkStyle;
