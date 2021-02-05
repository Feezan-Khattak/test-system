import { makeStyles } from "@material-ui/core";

const ContactStyle = makeStyles({
	formTitle: {
		margin: "4rem auto",
		textAlign: "center",
		"& > h1": {
			textAlign: "center",
			fontSize: "3rem",
		},
		"& > p": {
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

		"& textArea": {
			width: "100%",
			height: "105px",
			padding: "1rem",
			fontSize: "1.4rem",
			borderWidth: "2px",
			outline: "none",
			borderRadius: "1rem",
			marginBottom: "1rem",
			resize: "none",
		},
	},
});
export default ContactStyle;
