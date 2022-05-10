import React from "react";
import './Styles/StandardInputStyle.css';


const StandardInput = ({ name, styles, type, placeHolder, onChange, values }) => {


  return (
    <div>
      <input
        className={styles}
        name={name}
        placeholder={placeHolder}
        type={type}
        onChange={(event) => onChange(event.target.name, event.target.value)}
      />
    </div>
  )
}

export default StandardInput;