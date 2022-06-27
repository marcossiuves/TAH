import React from "react";
import { useNavigate } from "react-router"
import "./Styles/ProvaCardStyles.css";
import { Route, Link, Routes, useParams } from 'react-router-dom';

const ProvaCard = ({ concluded, grade, id, theme, title }) => {

	let navigate = useNavigate();

	return (
		<div className="card" onClick={() => navigate(`/test/${id}`)}>

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