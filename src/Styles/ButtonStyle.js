import { makeStyles } from "@material-ui/core";

const ButtonStyle = makeStyles({
	primaryBtn: {
		padding: "1.5rem",
		outline: "none",
		fontSize: "2rem",
		textDecoration: "none",
		borderRadius: "3rem",
		borderColor: "blue",
		color: "blue",
		backgroundColor: "white",
		transition: "0.8s",
		"&:hover": {
			backgroundColor: "blue",
			color: "white",
		},
	},
	loginBtn: {
		fontSize: "2rem",
		padding: "1rem",
		borderRadius: "3rem",
		outline: "none",
		background: "none",
		border: "none",
		transition: "0.8s",

		"& [name = icon]": {
			fontSize: "2rem",
			marginRight: "0.5rem",
		},
		"&:hover": {
			backgroundColor: "blue",
			color: "white",
		},
	},
});
export default ButtonStyle;
