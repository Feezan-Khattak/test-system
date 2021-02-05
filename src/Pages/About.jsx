import React from "react";
import MainDiv from "../Styles/MainDiv";
import { NavLink } from "react-router-dom";
import Card from "../Components/Card";
import aboutData from "../Assets/AboutData";
import CardStyle from "../Styles/CardStyle";
import { makeStyles } from "@material-ui/styles";

const AboutStyle = makeStyles({
	heading: {
		marginTop: "4rem",
		fontSize: "3rem",
		textAlign: "center",
	},
	link: {
		textDecoration: "none",
		color: "pink",
		fontSize: "3rem",
		"&:hover": {
			color: "rgb(255, 148, 166)",
		},
	},
});

const About = () => {
	const aboutStyle = AboutStyle();
	const style = MainDiv();
	const cardStyle = CardStyle();
	return (
		<>
			<div className={style.mainDiv}>
				<h1 className={aboutStyle.heading}>About Me</h1>
				<div className={cardStyle.cardMainDiv}>
					{aboutData.map((value, index) => {
						return (
							<Card title={value.title} desc={value.description} key={index} />
						);
					})}
				</div>

				<h3 className={aboutStyle.heading}>
					<NavLink to="/contact" className={aboutStyle.link}>
						Contact me
					</NavLink>{" "}
					Right Now
				</h3>
			</div>
		</>
	);
};
export default About;
