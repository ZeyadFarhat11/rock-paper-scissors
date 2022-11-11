import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import { Close } from "./Icons";
import img from "../images/image-rules.svg";

const RulesContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .overlay {
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 5;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .wrapper {
    position: relative;
    z-index: 10;
    background-color: #fff;
    padding: 40px;
    border-radius: 10px;
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h2 {
        color: ${(props) => props.theme.darkText};
        text-transform: uppercase;
        font-size: 35px;
      }
      button {
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        opacity: 0.25;
        transition: 0.1s;
        &:hover {
          opacity: 1;
        }
      }
    }
    img {
      margin-top: 50px;
    }
  }
`;

function Rules() {
  const { setRulesIsOpen } = useGlobalContext();
  return (
    <>
      <RulesContainer>
        <div className="overlay" onClick={() => setRulesIsOpen(false)}></div>
        <div className="wrapper">
          <header>
            <h2>rules</h2>
            <button type="button">
              <Close />
            </button>
          </header>
          <img src={img} alt="rules" />
        </div>
      </RulesContainer>
    </>
  );
}

export default Rules;