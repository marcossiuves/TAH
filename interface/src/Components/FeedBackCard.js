import React from "react";
import { useNavigate } from "react-router"
import "./Styles/FeedBackCardStyles.css";
import { Route, Link, Routes, useParams } from 'react-router-dom';

const FeedBackCard = ({ id, theme, title, questions }) => {

	let navigate = useNavigate();

	return (
		<div className="card" onClick={() => navigate(`/feedback-prova/${id}`)}>
			<p className="branch" >{theme}</p>
			<textarea className="label" disabled={true} defaultValue={`Tema: ${title}`} />
			<p style={{ color: 'green' }} className="branch" > Numero de questões: {questions}</p>
		</div>
	)
}

export default FeedBackCard; 