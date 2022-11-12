import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useGlobalContext } from "../context";
import Choice from "./Choice";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
const choices = [
  {
    color: "hsl(229deg 85% 63%)",
    shadowColor: "hsl(229deg 65% 46%)",
    name: "paper",
    img: paper,
  },
  {
    color: "hsl(39deg 84% 51%)",
    shadowColor: "hsl(28deg 75% 45%)",
    name: "scissors",
    img: scissors,
  },
  {
    color: "hsl(349deg 68% 53%)",
    shadowColor: "hsl(348deg 74% 35%)",
    name: "rock",
    img: rock,
  },
];

const checkStatus = (choice1, choice2) => {
  const wins = ["paper,rock", "rock,scissors", "scissors,paper"];
  if (choice1 === choice2) {
    return "draw";
  } else if (wins.includes(`${choice1},${choice2}`)) {
    return "win";
  } else {
    return "lose";
  }
};

const placholderAnimation = keyframes`
    0%,100% {
        opacity: .5;
    }
    50% {
        opacity: .2;
    }
`;

const Container = styled.div`
  height: calc(100vh - 170px);
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  .wrapper {
    width: fit-content;
    margin: 0 auto;
    display: flex;
    gap: 100px;
    align-items: stretch;
    .choice-wrapper {
      .choice {
        position: relative;
        margin: 0 auto;
      }
      h3 {
        color: #fff;
        font-size: 25px;
        text-transform: uppercase;
        letter-spacing: 2px;
        text-align: center;
        margin-bottom: 50px;
      }
      .placeholder {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 0.4);
        animation: ${placholderAnimation} 1s infinite;
      }
      .choice::before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 50%;
        box-shadow: none;
      }
      .choice.win::before {
        transition: 0.3s;
        box-shadow: 0 0 0 40px rgb(255 255 255 / 6%),
          0 0 0 80px rgb(255 255 255 / 4%), 0 0 0 130px rgb(255 255 255 / 2%);
      }
    }
  }
  .result {
    display: flex;

    flex-direction: column;
    justify-content: center;
    h2 {
      color: #fff;
      font-size: 45px;
      text-transform: uppercase;
      letter-spacing: 3px;
      text-align: center;
      &.win {
        color: #28a745;
      }
      &.lose {
        color: #dc3545;
      }
      &.draw {
        color: #ffc107;
      }
    }
    button {
      background-color: #fff;
      border-radius: 5px;
      font-size: 16px;
      text-transform: uppercase;
      letter-spacing: 2px;
      padding: 10px;
      width: 200px;
      border: none;
      outline: none;
      margin-top: 30px;
      cursor: pointer;
      font-weight: bold;
      font-family: inherit;
      box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
    }
  }
  .result.mobile {
    height: 100px;
    h2 {
      font-size: 35px;
    }
    button {
      width: 150px;
      margin: 0 auto;
      margin-top: 15px;
    }
  }
  @media screen and (max-width: 768px) {
    .wrapper {
      padding: 0 15px;
      width: 100%;
      gap: 20px;
      justify-content: space-between;
      .choice-wrapper {
        display: flex;
        flex-direction: column-reverse;
        h3 {
          margin-top: 35px;
          font-size: 14px;
          white-space: nowrap;
        }
        .placeholder {
          width: 130px;
          height: 130px;
        }
        .choice.win::before {
          transition: 0.3s;
          box-shadow: 0 0 0 20px rgb(255 255 255 / 6%),
            0 0 0 50px rgb(255 255 255 / 4%), 0 0 0 80px rgb(255 255 255 / 2%);
        }
      }
    }
  }
`;

function ResultArea() {
  const { choice, setChoice, setScore } = useGlobalContext();
  const [houseChoice, setHouseChoice] = useState();
  const [status, setStatus] = useState(null);

  useEffect(() => {
    setHouseChoice(null);
    setTimeout(() => {
      // Pick Random Choice
      const randomChoice = choices[Math.floor(Math.random() * choices.length)];
      setHouseChoice(randomChoice);
    }, Math.random() * 3 + 2000);
  }, []);

  useEffect(() => {
    // Check Who Win
    if (!houseChoice) return;

    const status = checkStatus(choice.name, houseChoice.name);
    if (status === "win") {
      console.log(`setting score`, status);
      setScore((score) => score + 1);
    }
    setStatus(status);
  }, [houseChoice]);

  const playAgain = () => {
    setChoice(null);
  };

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  return (
    <Container>
      <div className="wrapper">
        <div className="choice-wrapper">
          <h3>you picked</h3>
          <Choice {...choice} className={status === "win" ? "win" : ""} />
        </div>
        {!!status && !isMobile && (
          <div className="result">
            <h2 className={status}>
              {status === "draw" ? "draw" : `you ${status}`}
            </h2>
            <button type="button" onClick={playAgain}>
              play again
            </button>
          </div>
        )}
        <div className="choice-wrapper">
          <h3>the house picked</h3>
          {houseChoice ? (
            <Choice
              {...houseChoice}
              className={status === "lose" ? "win" : ""}
            />
          ) : (
            <div className="placeholder"></div>
          )}
        </div>
      </div>
      {!!status && isMobile && (
        <div className="result mobile">
          <h2 className={status}>
            {status === "draw" ? "draw" : `you ${status}`}
          </h2>
          <button type="button" onClick={playAgain}>
            play again
          </button>
        </div>
      )}
    </Container>
  );
}

export default ResultArea;
