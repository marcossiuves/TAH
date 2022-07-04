import { useState } from 'react';
import StandardInput from '../Components/StandardInput';
import './Styles/LoginPageCss.css';
import 'react-toastify/dist/ReactToastify.css';
import { login } from '../services/Services';
import { useNavigate } from 'react-router';


const LoginPage = () => {
  const [loginPayload, setLoginPayload] = useState({});

  const handleChange = (field, value) => {
    setLoginPayload({ ...loginPayload, [field]: value })
  }

  let navigate = useNavigate();

  const authenticate = () => {
    login(loginPayload).then(response => { if (response == 200) { navigate('/selecionar-prova') } })
  }


  return (
    <div className="father">
      <div className="main-login">
        <p className="branch"> TAH </p>
        <p className="sign"> Login </p>
        <form className="form1">
          <StandardInput
            styles="login-input"
            name="registration"
            placeHolder="Usuario"
            type="text"
            onChange={handleChange}
            values={null}
          />
          <StandardInput
            styles="login-input"
            name="password"
            placeHolder="Senha"
            type="password"
            onChange={handleChange}
            values={null}
          />
        </ form>
        <button className="submit" onClick={authenticate}> Login </button>
        <br />
        <button className="submit" onClick={() => navigate("/create-account")}> Criar conta </button>
        <p className="forgot"> Esqueci minha senha. </p>
        <br />
      </div>
      <br />
    </div >
  )
}


export default LoginPage;
