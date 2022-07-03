import React, { useEffect, useState } from "react";
import ProvaCard from "../Components/ProvaCard";
import { fetchAllExams } from "../services/Services";
import './Styles/SelectTestPageStyles.css'


const SelectTestPage = () => {
	const [tests, setTests] = useState([])

	const getTestes = async () => {
		setTests(await fetchAllExams())
	}

	useEffect(() => {
		getTestes();
	}, [])

	return (

		<div className="main">
			{console.log(tests)}
			<div className="turmas">
				<div className="grid-container">
					{tests.map(test => (
						// @ts-ignore
						<ProvaCard id={test.id_exam} theme={test.title} title={test.subject} questions={test.question_amount} />
					))}
				</div>
			</div>
		</div >
	)
}
export default SelectTestPage;
