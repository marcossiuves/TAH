import React, { Children } from "react";
import "./Styles/ButtonStyles.css";

const Button = ({ onClick, children, styleType }) => {

	return (
		<button
			className={styleType}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default Button;