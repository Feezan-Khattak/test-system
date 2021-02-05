import { makeStyles } from "@material-ui/styles";
import React from "react";
const Style = makeStyles({
	footer: {
		padding: "2rem",
		textAlign: "center",
		fontSize: "2rem",
		borderTop: "2px solid gray",
	},
});
const Footer = () => {
	const style = Style();
	const year = new Date().getFullYear();
	return (
		<footer className={style.footer}>
			<p>Copyright &copy; {year}</p>
		</footer>
	);
};

export default Footer;
