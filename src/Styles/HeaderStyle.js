import { makeStyles } from "@material-ui/core";
import headerImage from "../Images/headerBackground.jpg";

const HeaderStyle = makeStyles({
	mainHeaderDiv: {
		height: "75vh",
		backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("${headerImage}")`,
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
	},
	centerContent: {
		textAlign: "center",
		position: "absolute",
		top: "40%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		"& h1": {
			fontSize: "4rem",
			textTransform: "capitalize",
			color: "white",
		},
		"& p": {
			padding: "0.5rem",
			margin: "1rem",
			color: "white",
			fontSize: "2rem",
			textAlign: "center",
		},
	},
});
export default HeaderStyle;
