import { makeStyles } from "@material-ui/core";

const buildTestStyle = makeStyles({
	headingContainer: {
		textAlign: "center",
		margin: "4rem auto",
		"& h1": {
			fontSize: "3rem",
		},
		"& p": {
			fontSize: "2rem",
			color: "gray",
		},
	},
	formContainer: {
		borderRadius: "2rem",
		padding: "3rem",
		width: "60%",
		backgroundColor: "white",
		margin: "5rem auto",
		boxShadow: "5px 5px 20px rgba(102, 101, 101, 0.850)",
	},
});

export default buildTestStyle;
