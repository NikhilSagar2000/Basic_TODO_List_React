import React from 'react';
import styled from 'styled-components';
// import './Button.css';
const Btn = styled.button`
  width: auto;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

@media (max-width: 768px) {
  width: 100%;
}

&:focus {
  outline: none;
}

&:hover,
&:active {
  background: #ac0e77;
  border-color: #ac0e77;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}

`;

const Button = props => {
  return (
    <Btn type={props.type} onClick={props.onClick}>
      {props.children}
    </Btn>
  );
};

export default Button;