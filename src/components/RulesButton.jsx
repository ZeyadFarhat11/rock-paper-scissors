import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  color: #fff;
  border: 1px solid #fff;
  text-transform: uppercase;
  background-color: transparent;
  padding: 10px 30px;
  letter-spacing: 3px;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s;
  font-weight: bold;
  font-family: inherit;
  font-size: 16px;
  &:hover {
    color: #000;
    background-color: #fff;
  }
  @media screen and (max-width: 768px) {
    right: 50%;
    transform: translateX(50%);
  }
`;

function RulesButton() {
  const { setRulesIsOpen } = useGlobalContext();
  return (
    <Button type="button" onClick={() => setRulesIsOpen(true)}>
      rules
    </Button>
  );
}

export default RulesButton;
