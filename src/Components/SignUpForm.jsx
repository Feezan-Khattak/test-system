import React, { useState } from "react";
import LoginSignUpStyle from "../Styles/LoginSignUpStyle";
import ButtonStyle from "../Styles/ButtonStyle";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import LockRoundedIcon from "@material-ui/icons/LockRounded";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PasswordMatching from "../GeneralMethods/PasswordMatching";

const SignUpForm = (props) => {
	// states
	const [data, setData] = useState({
		userName: "",
		password: "",
		confirmPassword: "",
	});

	// Styles
	const loginSignUpStyle = LoginSignUpStyle();
	const buttonStyle = ButtonStyle();

	// Functions
	const inputChangeEvent = (event) => {
		const { name, value } = event.target;
		setData((preData) => {
			return {
				...preData,
				[name]: value,
			};
		});
	};

	// Form Submit Action
	const formSubmitEvent = (event) => {
		event.preventDefault();
		const ifMatch = PasswordMatching(data.password, data.confirmPassword);
		if (ifMatch) {
			alert(
				`UserName: ${data.userName}\nPassword: ${data.password}\nConfirmPassword: ${data.confirmPassword}`
			);
		} else {
			alert("password Not Matching.");
		}
	};

	// Main Return Statement
	return (
		<div className={loginSignUpStyle.mainContainer}>
			<div className={loginSignUpStyle.formHead}>
				<PersonAddIcon name="headIcon" />
				<hr />
			</div>
			<div className={loginSignUpStyle.formBody}>
				<form onSubmit={formSubmitEvent}>
					<div className={loginSignUpStyle.box}>
						<PersonRoundedIcon style={{ fontSize: "3rem" }} />
						<input
							type="text"
							name="userName"
							value={data.userName}
							onChange={inputChangeEvent}
							placeholder="Enter UserName"
							required
						/>
					</div>
					<div className={loginSignUpStyle.box}>
						<LockRoundedIcon style={{ fontSize: "3rem" }} />
						<input
							type="password"
							name="password"
							value={data.password}
							onChange={inputChangeEvent}
							placeholder="Type your password"
							required
						/>
					</div>

					<div className={loginSignUpStyle.box}>
						<LockRoundedIcon style={{ fontSize: "3rem" }} />
						<input
							type="password"
							name="confirmPassword"
							value={data.confirmPassword}
							onChange={inputChangeEvent}
							placeholder="Confirm your password"
							required
						/>
					</div>

					<button className={buttonStyle.loginBtn}>
						<PersonAddIcon name="icon" />
						SignUp
					</button>
				</form>
				<p>
					Already have Account <span onClick={props.switchLayout}>Login</span>
				</p>
			</div>
		</div>
	);
};

export default SignUpForm;
