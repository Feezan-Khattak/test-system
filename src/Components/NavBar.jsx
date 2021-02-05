import React from "react";
import { NavLink } from "react-router-dom";
import NavStyle from "../Styles/NavStyle";
import NavLinkStyle from "../Styles/NavLinkStyle";

const NavBar = () => {
	const navLinkStyle = NavLinkStyle();
	const classes = NavStyle();
	return (
		<nav className={classes.mainNavDiv}>
			<h1>
				<NavLink to="/" className={classes.logo}>
					Testto
				</NavLink>
			</h1>
			<div className={classes.navDiv}>
				<NavLink
					className={navLinkStyle.linkStyle}
					activeClassName={navLinkStyle.activeLinkStyle}
					exact
					to="/">
					Home
				</NavLink>
				<NavLink
					className={navLinkStyle.linkStyle}
					activeClassName={navLinkStyle.activeLinkStyle}
					exact
					to="/feature">
					Feature
				</NavLink>
				<NavLink
					className={navLinkStyle.linkStyle}
					activeClassName={navLinkStyle.activeLinkStyle}
					exact
					to="/About">
					About
				</NavLink>
				<NavLink
					className={navLinkStyle.linkStyle}
					activeClassName={navLinkStyle.activeLinkStyle}
					exact
					to="/buildtest">
					BuildTest
				</NavLink>
				<NavLink
					className={navLinkStyle.linkStyle}
					activeClassName={navLinkStyle.activeLinkStyle}
					exact
					to="/Contact">
					Contact
				</NavLink>
				<NavLink
					className={navLinkStyle.linkStyle}
					activeClassName={navLinkStyle.activeLinkStyle}
					exact
					to="/Login">
					Login
				</NavLink>
			</div>
		</nav>
	);
};
export default NavBar;
