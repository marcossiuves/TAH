import React, { useEffect, useState } from "react";
import FeedBackCard from "../Components/FeedBackCard";
import { fetchAllExams } from "../services/Services";
import './Styles/FeedBackPageStyles.css'


const FeedBackPage = () => {
	const [tests, setTests] = useState([])

	const getTestes = async () => {
		setTests(await fetchAllExams());
	}

	useEffect(() => {
		getTestes();
	}, [])

	return (

		<div className="main">
			<div className="turmas">
				<div className="grid-container">
					{tests.map(test => (
						// @ts-ignore
						<FeedBackCard key={test.id_exam} id={test.id_exam} theme={test.title} title={test.subject} questions={test.question_amount} />
					))}
				</div>
			</div>
		</div >
	)
}
export default FeedBackPage;
