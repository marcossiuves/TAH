import React, { Children } from "react";
import "./Styles/ButtonStyles.css";

const Button = ({ onClick, children }) => {

	return (
		<button
			className="custom-button"
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default Button;