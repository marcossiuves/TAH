import React from "react";
import "./Styles/FaqPageStyles.css"



const FaqPage = () => {

	return (
		<div className="main-question">
			<h1>FAQ</h1>
			<textarea
				className="question-field"
				placeholder="Enunciado da pergunta..."
				name="enunciado"
				maxLength={2000}
				resize="none"
			/>

		</div>
	)
}

export default FaqPage;