import React from "react";
import "./Styles/ProvaCardStyles.css";

const ProvaCard = ({ concluded, grade, id, theme, title }) => {

	return (
		<div className="card">

			<p className="branch" >{theme}</p>
			<textarea className="label" disabled={true} defaultValue={title} />
			{concluded ?
				<p style={{ color: "green" }} className="branch" >Prova já concluida.</p>
				:
				<p style={{ color: 'red' }} className="branch" >Prova em aberto.</p>
			}
			<h4 >Nota: {grade}</h4>
		</div>
	)
}

export default ProvaCard; 