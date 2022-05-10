import React, { useState } from "react";
import Button from "../Components/Button";
import "./Styles/FaqPageStyles.css"



const FaqPage = () => {
	const [faq, setFaq] = useState("")

	return (
		<div className="main-question">
			<h1>FAQ</h1>

			<b> Não consigo me cadastrar. </b>
			<b> Não consigo enviar uma pergunta. </b>
			<b> Minha pergunta não aparece. </b>
			<b> Não consigo acessar o simulado </b>
			<textarea
				className="question-field"
				placeholder="Outras..."
				name="outras"
				maxLength={2000}
				// @ts-ignore
				resize="none"
				onChange={e => setFaq(e.target.value)}
			/>
			<button className="submit" onClick={() => console.log(faq)}> Enviar Duvida </button>
		</div>
	)
}

export default FaqPage;