import React from "react";
import BuildTestStyle from "../Styles/BuidTestStyle";
import InputFieldStyle from "../Styles/InputFieldStyle";

const InputField = (props) => {
	const inputFieldStyle = InputFieldStyle();
	return (
		<div className={inputFieldStyle.box}>
			<input
				type={props.types}
				name={props.names}
				value={props.values}
				onChange={props.onChangeEvent}
				required
			/>
			<span>{props.spanText}</span>
		</div>
	);
};

export default InputField;
