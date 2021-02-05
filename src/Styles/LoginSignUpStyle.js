import { makeStyles } from "@material-ui/styles";

const LoginSignUpStyle = makeStyles({
	mainContainer: {
		margin: "4rem auto",
		width: "30%",
		borderRadius: "3rem",
		textAlign: "center",
		boxShadow: "5px 5px 20px rgba(102, 101, 101, 0.350)",
	},
	formHead: {
		padding: "1rem",
		"& [name = headIcon]": {
			fontSize: "18rem",
		},
	},
	formBody: {
		padding: "1rem 2rem",
		"& > p": {
			fontSize: "1rem",
			"& > span": {
				fontSize: "1rem",
				textDecoration: "underline",
				cursor: "pointer",
				"&:hover": {
					color: "blue",
				},
			},
		},
	},
	box: {
		padding: "0.5rem",
		backgroundColor: "rgb(204, 200, 200)",
		display: "flex",
		alignItems: "center",
		borderRadius: "4rem",
		margin: "1rem 0",

		"& input": {
			width: "100%",
			padding: "1rem",
			fontSize: "1.8rem",
			fontWeight: "300",
			color: "#333",
			lineHeight: "1",
			outline: "none",
			background: "none",
			border: "none",
			outline: "none",
			"&:hover": {
				fontWeight: "600",
			},
		},
	},
});

export default LoginSignUpStyle;
