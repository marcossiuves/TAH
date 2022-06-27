import React from "react";
import "./Styles/StandardSelectBoxStyles.css";

const IdStandardSelectBox = ({ field, options, onChange }) => {

	return (

		<select className="custom-select" onChange={event => onChange(field, parseInt(event.target.value))}>
			{options.map((opt) => {
				return <option
					key={opt.id}
					value={opt.id}
				>
					{opt.name}
				</option>
			})}
		</select>

	)
}

export default IdStandardSelectBox;