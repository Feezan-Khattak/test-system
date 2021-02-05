import { makeStyles } from "@material-ui/core";

const NavStyle = makeStyles({
	mainNavDiv: {
		width: "90%",
		marginLeft: "auto",
		marginRight: "auto",
		display: "flex",
		justifyContent: "space-between",
		padding: "1rem",
	},
	logo: {
		fontSize: "3rem",
		textDecoration: "none",
		textAlign: "center",
		outline: "none",
		transition: "0.5s",
		color: "#a8399aa9",
		"&:hover": {
			color: "#d408b9",
		},
	},
	navDiv: {
		paddingTop: "1rem",
	},
});

export default NavStyle;
