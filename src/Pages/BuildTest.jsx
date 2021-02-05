import React, { useState } from "react";
import MainDiv from "../Styles/MainDiv";
import BuildTestStyle from "../Styles/BuidTestStyle";
import ButtonStyle from "../Styles/ButtonStyle";
import { NavLink, Redirect, Route, Switch, useHistory } from "react-router-dom";
import dashboard from "../Components/Dashboard";
import InputFieldStyle from "../Styles/InputFieldStyle";
import PasswordMatching from "../GeneralMethods/PasswordMatching";

const BuildTest = () => {
	// Styling
	const style = MainDiv();
	const buildTestStyle = BuildTestStyle();
	const inputFieldStyle = InputFieldStyle();
	const button = ButtonStyle();

	// states
	const [data, setData] = useState({
		testName: "",
		password: "",
		confirmPassword: "",
	});

	const [flag, setFlag] = useState(false);

	// if (flag) {
	// 	return (
	// 		<div>
	// 			<dashboard />
	// 		</div>
	// 	);
	// }
	// const history = useHistory();

	// functions
	// input field onChane function
	const inputChangeEvent = (event) => {
		const { name, value } = event.target;
		setData((preVal) => {
			return {
				...preVal,
				[name]: value,
			};
		});
	};

	// Form onSubmit function
	const formSubmitAction = (event) => {
		event.preventDefault();
		const isMatch = PasswordMatching(data.password, data.confirmPassword);
		if (isMatch) {
			alert(
				`Test Name: ${data.testName}\npassword: ${data.password}\nConfirm Password: ${data.confirmPassword}`
			);
		} else {
			alert("Password Not Matching");
		}
		// <Route exact to="/dashboard" component={dashboard} />;
		// alert("Data Submited Successfully");
		// <Redirect to="/dashboard" />;
		// <Switch>
		// 	<Redirect component={dashboard} />;
		// </Switch>;
		// history.push(`${dashboard}`);

		setFlag(true);

		if (flag === true) {
			return (
				<div>
					console.log("Button is clicked");
					<dashboard />;
				</div>
			);
		}
	};

	const NavigateToDashboard = () => {
		console.log("Clicked");
		// <Route component={dashboard} />;
		// <Redirect component={dashboard} />;
		<Redirect to={dashboard} />;
	};

	// return the Jsx
	return (
		<div className={style.mainDiv}>
			<div className={buildTestStyle.headingContainer}>
				<h1>Create Your Own Test</h1>
				<p>Fill out the form and create free test on Testo</p>
				<div className={buildTestStyle.formContainer}>
					<form onSubmit={formSubmitAction}>
						<div className={inputFieldStyle.box}>
							<input
								type="text"
								name="testName"
								value={data.testName}
								onChange={inputChangeEvent}
								required
							/>
							<span>Test Name (e.g Chapter 2)</span>
						</div>
						<div className={inputFieldStyle.box}>
							<input
								type="password"
								name="password"
								value={data.password}
								onChange={inputChangeEvent}
								required
							/>
							<span>Type Password</span>
						</div>
						<div className={inputFieldStyle.box}>
							<input
								type="password"
								name="confirmPassword"
								value={data.confirmPassword}
								onChange={inputChangeEvent}
								required
							/>
							<span>Confirm Password</span>
						</div>
						<div className={inputFieldStyle.box}>
							<button
								className={button.primaryBtn}
								// onClick={() => {
								// 	flag ? null : <dashboard />;
								// }}
							>
								Create Test
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default BuildTest;
