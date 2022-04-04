import React from "react";
import styled from "styled-components";


type RegisterQuestionPageProps = {
  className?: string;

}


const RegisterQuestionPage = ({ className }: RegisterQuestionPageProps) => {

  return (
    <div className={className}>
      <div className="main">
        <h1> Hello World</h1>

      </div>
    </div>
  )
}

export default styled(RegisterQuestionPage)`
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
`;