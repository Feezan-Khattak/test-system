import { makeStyles } from "@material-ui/core";

const InputFieldStyle = makeStyles({
	box: {
		textAlign: "center",
		position: "relative",
		marginTop: "2rem",
		marginBottom: "2rem",
		"& input": {
			width: "100%",
			autocomplete: "off",
			outline: "none",
			padding: "1rem",
			fontSize: "1.4rem",
			border: "0px",
			borderBottom: "2px solid",

			"&:focus ~ span": {
				fontSize: "1rem",
				color: "gray",
				transform: "translateY(-3px)",
			},
			"&:valid ~ span": {
				fontSize: "1rem",
				transform: "translateY(-3px)",
			},
		},
		"& span": {
			fontSize: "1.4rem",
			position: "absolute",
			left: "0px",
			padding: "1px 0px",
			pointerEvent: "none",
			transition: "0.5s",
		},
	},
});

export default InputFieldStyle;
