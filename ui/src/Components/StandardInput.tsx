import react from 'react';
import styled from 'styled-components';

type StandardInputProps = {
  className?: string;
  type?: string;
  placeHolder?: string;
  onChange?: any;

}

const StandardInput = ({ className, type, placeHolder, onChange }: StandardInputProps) => {

  return (
    <div className={className}>
      <input className="un" placeholder={placeHolder} type={type} onChange={(e) => onChange(e.target.value)} />
    </div>
  )
}


export default styled(StandardInput)`
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
`;