import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";
import logo from "../images/logo.svg";

const NavbarContainer = styled.div`
  padding: 0 15px;
  padding-top: 30px;
  height: 170px;
  .wrapper {
    width: 800px;
    max-width: 100%;
    margin: 0 auto;
    border: 1px solid ${(props) => props.theme.headerBorder};
    border-radius: 5px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
  }
  .score-wrapper {
    background-color: #fff;
    border-radius: 5px;
    color: ${(props) => props.theme.darkText};
    text-align: center;
    width: 100px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .label {
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    .score {
      font-size: 50px;
      font-weight: bold;
    }
  }
  @media screen and (max-width: 768px) {
    .wrapper {
      border-width: 2px;
      align-items: center;
      .logo {
        height: 60px;
      }
      .score-wrapper {
        .label {
          font-size: 12px;
          font-weight: bold;
        }
        .score {
          font-size: 40px;
        }
      }
    }
  }
`;

function Navbar() {
  const { score } = useGlobalContext();
  return (
    <NavbarContainer>
      <div className="wrapper">
        <img src={logo} alt="logo" className="logo" />
        <div className="score-wrapper">
          <span className="label">score</span>
          <span className="score">{score}</span>
        </div>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;
