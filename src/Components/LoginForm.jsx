import React, { useState } from "react";
import LoginSignUpStyle from "../Styles/LoginSignUpStyle";
import ButtonStyle from "../Styles/ButtonStyle";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import LockRoundedIcon from "@material-ui/icons/LockRounded";
import LockOpenTwoToneIcon from "@material-ui/icons/LockOpenTwoTone";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const LoginForm = (props) => {
	// states
	const [data, setData] = useState({
		userName: "",
		password: "",
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

	const formSubmitEvent = (event) => {
		event.preventDefault();
		alert(`UserName: ${data.userName}\nPassword: ${data.password}`);
	};

	// Main Return Statement
	return (
		<div className={loginSignUpStyle.mainContainer}>
			<div className={loginSignUpStyle.formHead}>
				<AccountCircleIcon name="headIcon" />
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

					<button className={buttonStyle.loginBtn}>
						<LockOpenTwoToneIcon name="icon" />
						Login Now
					</button>
				</form>
				<p>
					Don't have Account
					<span onClick={props.switchLayout}>Create One</span>
				</p>
			</div>
		</div>
	);
};

export default LoginForm;
