import React from "react";
import "./Styles/StandardSelectBoxStyles.css";

const StandardSelectBox = ({ field, options, onChange }) => {

	return (

		<select className="custom-select" onChange={event => onChange(field, event.target.value)}>
			{options.map((opt) => {
				return <option
					key={opt.id}
					value={opt.name}
				>
					{opt.name}
				</option>
			})}
		</select>

	)
}

export default StandardSelectBox;