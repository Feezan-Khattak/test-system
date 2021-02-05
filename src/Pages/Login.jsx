import React, { useState } from "react";
import LoginForm from "../Components/LoginForm";
import SignUpForm from "../Components/SignUpForm";

const Login = (props) => {
	// states
	const [flag, setFlag] = useState(true);

	// Function
	const switchLayout = () => {
		setFlag(!flag);
	};

	// Main Return Statement
	return (
		<>
			{flag ? (
				<LoginForm switchLayout={switchLayout} />
			) : (
				<SignUpForm switchLayout={switchLayout} />
			)}
		</>
	);
};

export default Login;
