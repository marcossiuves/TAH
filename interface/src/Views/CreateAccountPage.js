import React, { useState } from "react";
import Button from "../Components/Button";
import StandardInput from "../Components/StandardInput";
import "./Styles/CreateAccountPageStyle.css"
import { login } from '../services/Services';
import { useNavigate } from 'react-router';


const CreateAccountPage = () => {
	const [loginPayload, setLoginPayload] = useState({});


	const handleChange = (field, value) => {
		setLoginPayload({ ...loginPayload, [field]: value })
	}

	let navigate = useNavigate();

	const authenticate = () => {
		console.log(loginPayload)
		login(loginPayload)
		// loginProcess(loginPayload)
		// criarUsuario(loginPayload)
	}


	return (
		<div className="father">
			<div className="main-login">
				<p className="branch"> TAE </p>
				<p className="sign"> Cadastro </p>
				<form className="form1">
					<StandardInput
						styles="login-input"
						name={"Nome"}
						placeHolder={"Nome"}
						type="text"
						onChange={null}
						values={null}
					/>
					<StandardInput
						styles="login-input"
						name={"Universidade"}
						placeHolder={"Universidade"}
						type="text"
						onChange={null}
						values={null}
					/>
					<StandardInput
						styles="login-input"
						name={"Matricula"}
						placeHolder={"Matricula"}
						type="text"
						onChange={null}
						values={null}
					/>
					<StandardInput
						styles="login-input"
						name={"Email"}
						placeHolder={"Email"}
						type="text"
						onChange={null}
						values={null}
					/>
					<StandardInput
						styles="login-input"
						name={"Nome de usuario"}
						placeHolder={"Nome de usuario"}
						type="text"
						onChange={null}
						values={null}
					/>

				</ form>
				<button className="submit" onClick={authenticate}> Cadastrar </button>
				<br />
			</div>
			<br />
		</div >
	)
};
export default CreateAccountPage;


