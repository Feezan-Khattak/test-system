import React, { useState } from "react";
import MainDiv from "../Styles/MainDiv";
import InputField from "../Components/InputField";
import ContactStyle from "../Styles/ContactStyle";
import ButtonStyle from "../Styles/ButtonStyle";
import InputFieldStyle from "../Styles/InputFieldStyle";

const Contact = () => {
	// Styles
	const buttonStyle = ButtonStyle();
	const contactStyle = ContactStyle();
	const mainDiv = MainDiv();
	const inputFieldStyle = InputFieldStyle();

	// States
	const [data, setData] = useState({
		fullName: "",
		email: "",
		message: "",
	});

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

	// form submation form
	const contactFormSubmit = (event) => {
		event.preventDefault();
		alert(
			`FullName: ${data.fullName}\nEmail: ${data.email}\nMessage: ${data.message}`
		);
	};

	// Main Return Statement
	return (
		<div className={mainDiv.mainDiv}>
			<div className={contactStyle.formTitle}>
				<h1>Get in Touch</h1>
				<p>
					Please fill out the quick form and we will be in touch with lightening
					speed.
				</p>
			</div>
			<div className={contactStyle.formContainer}>
				<form onSubmit={contactFormSubmit}>
					<div className={inputFieldStyle.box}>
						<input
							type="text"
							name="fullName"
							value={data.fullName}
							onChange={inputChangeEvent}
							required
						/>
						<span>Enter fullName</span>
					</div>
					<div className={inputFieldStyle.box}>
						<input
							type="email"
							name="email"
							value={data.email}
							onChange={inputChangeEvent}
							required
						/>
						<span>Type Your email</span>
					</div>
					<textArea
						name="message"
						value={data.message}
						onChange={inputChangeEvent}
						placeholder="Type Your Message"
						required
					/>
					<button className={buttonStyle.primaryBtn}>Send Message</button>
				</form>
			</div>
		</div>
	);
};
export default Contact;
