import react, { useState } from 'react';
import axios from 'axios';
import StandardInput from '../Components/StandardInput';
import './Styles/LoginPageCss.css';


const LoginPage = () => {
  const [loginPayload, setLoginPayload] = useState({});


  const handleChange = (field, value) => {
    setLoginPayload({ ...loginPayload, [field]: value })
  }

  const authenticate = () => {
    console.log(loginPayload)
  }

  return (
    <div className="father">
      <div className="main-login">
        <p className="branch"> TAH </p>
        <p className="sign"> Login </p>
        <form className="form1">
          <StandardInput
            style="login-input"
            name="usuario"
            placeHolder="Usuario"
            type="text"
            onChange={handleChange}
          />
          <StandardInput
            style="login-input"
            name="senha"
            placeHolder="Senha"
            type="password"
            onChange={handleChange}
          />
        </ form>
        <button className="submit" onClick={authenticate}> Login </button>
        <br />
        <p className="forgot"> Esqueci minha senha. </p>
        <br />
      </div>
      <br />
    </div>
  )
}


export default LoginPage;
