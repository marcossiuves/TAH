import React, { useState } from "react";
import Button from "../Components/Button";
import StandardInput from "../Components/StandardInput";
import "./Styles/CreateAccountPageStyle.css"
import { createUser } from '../services/Services';
import { useNavigate } from 'react-router';


const CreateAccountPage = () => {
	const [loginPayload, setLoginPayload] = useState({});


	const handleChange = (field, value) => {
		setLoginPayload({ ...loginPayload, [field]: value })
	}

	let navigate = useNavigate();

	const authenticate = (userType) => {

		const finalPayload = { ...loginPayload, id_user_type: userType }
		createUser(finalPayload).then(res => navigate('/'))
	}

	return (
		<div className="father">
			<div className="main-login">
				<p className="branch"> TAE </p>
				<p className="sign"> Cadastro </p>
				<form className="form1">
					<StandardInput
						styles="login-input"
						name={"email"}
						placeHolder={"Email"}
						type="text"
						onChange={handleChange}
						values={null}
					/>
					<StandardInput
						styles="login-input"
						name={"registration"}
						placeHolder={"Usuario"}
						type="text"
						onChange={handleChange}
						values={null}
					/>
					<StandardInput
						styles="login-input"
						name={"password"}
						placeHolder={"Senha"}
						type="password"
						onChange={handleChange}
						values={null}
					/>

				</ form>
				<button className="submit" onClick={() => authenticate(1)}> Cadastrar como professor </button>
				<br />
				<button className="submit" onClick={() => authenticate(2)}> Cadastrar como aluno </button>
				<br />
			</div>
			<br />
		</div >
	)
};
export default CreateAccountPage;


