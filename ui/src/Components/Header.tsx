import React from "react";
import styled from "styled-components";

type HeaderProps = {
  className?: string;

}

const Header = ({ className }: HeaderProps) => {

  return (
    <div className={className}>
      <h1> Hello World</h1>
    </div>
  )
}

export default styled(Header)`
`;