import react, { useState } from 'react';
import styled from 'styled-components';
import StandardInput from '../Components/StandardInput';



type LoginPageProps = {
  className?: string;

}


const LoginPage = ({ className }: LoginPageProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("")


  return (
    <div className={className}>
      <div className="main">
        <p className="branch"> TAH </p>
        <p className="sign"> Login </p>
        <form className="form1">
          <StandardInput
            placeHolder={"Usuario"}
            type={"text"}
            onChange={setUsername}
          />
          <StandardInput
            placeHolder={"Senha"}
            type={"password"}
            onChange={setPassword}
          />
        </ form>
        <button className="submit"> Login </button>
        <br />
        <p className="forgot"> Esqueci minha senha. </p>
        <br />
      </div>
      <br />
    </div>
  )
}


export default styled(LoginPage)`
.main {
  font-family: 'Ubuntu', sans-serif;
  background-color: #FFFFFF;
  width: 400px;
  height: fit-content;
  margin: 7em auto;
  border-radius: 10px;
  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
  position: absolute;
  left: 40%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.sign {
  padding-top: 40px;
  color: #FF7300;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
  font-size: 23px;
  display: flex;
  justify-content: center;
}

.branch {
  padding-top: 40px;
  color: #FF7300;
  font-family: 'Ubuntu', sans-serif;
  font-weight: bold;
  font-size: 23px;
  display: flex;
  justify-content: center;
}

.un {
  width: 76%;
  color: rgb(38, 50, 56);
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
  background: rgba(136, 126, 126, 0.04);
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  outline: none;
  box-sizing: border-box;
  border: 2px solid rgba(0, 0, 0, 0.02);
  margin-bottom: 50px;
  margin-left: 46px;
  text-align: center;
  margin-bottom: 27px;
  font-family: 'Ubuntu', sans-serif;
}

.un:focus, .pass:focus {
  border: 2px solid rgba(0, 0, 0, 0.18) !important;
  
}

.submit {
  display: flex;
  justify-content: center;
  cursor: pointer;
  border-radius: 7px;
  color: #fff;
  background: linear-gradient(to top, #FF8F7C, #ED7966);
  border: 0;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 10px;
  padding-top: 10px;
  font-family: 'Ubuntu', sans-serif;
  font-size: 13px;
  box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);

}


a {
  text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
  color: #E1BEE7;
  text-decoration: none
}

.forgot {
  :hover {
    color: #2e85ff;
    cursor: pointer;
  }
}

@media (max-width: 600px) {
  .main {
      border-radius: 0px;
  }
}
`;