import React from "react";
import './Styles/StandardInputStyle.css';


const StandardInput = ({ name, style, type, placeHolder, onChange, values }) => {


  return (
    <div>
      <input
        className={style}
        name={name}
        placeholder={placeHolder}
        type={type}
        onChange={(event) => onChange(event.target.name, event.target.value)}
      />
    </div>
  )
}

export default StandardInput;