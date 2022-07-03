import React from "react";
import './Styles/StandardInputStyle.css';


const IdStandardInput = ({ name, styles, type, placeHolder, onChange, values }) => {


	return (
		<div>
			<input
				className={styles}
				name={name}
				placeholder={placeHolder}
				type={type}
				onChange={(event) => onChange(event.target.name, parseInt(event.target.value))}
			/>
		</div>
	)
}

export default IdStandardInput;