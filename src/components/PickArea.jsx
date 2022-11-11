import React from "react";
import styled from "styled-components";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import triangle from "../images/bg-triangle.svg";
import Choice from "./Choice";

const Container = styled.div`
  .wrapper {
    margin: 0 auto;
    width: fit-content;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    background-repeat: no-repeat;
    background-position: center;
    .choice:last-child {
      grid-column: span 2;
      margin: 0 auto;
    }
  }
  @media screen and (max-width: 768px) {
    .wrapper {
      margin-top: 100px;
      background-size: 200px;
      gap: 25px;
    }
  }
`;

function PickArea() {
  return (
    <Container>
      <div className="wrapper" style={{ backgroundImage: `url(${triangle})` }}>
        <Choice
          color={"hsl(229deg 85% 63%)"}
          shadowColor={"hsl(229deg 65% 46%)"}
          name={"paper"}
          img={paper}
          hover={true}
        />
        <Choice
          color={"hsl(39deg 84% 51%)"}
          shadowColor={"hsl(28deg 75% 45%)"}
          name={"scissors"}
          img={scissors}
          hover={true}
        />
        <Choice
          color={"hsl(349deg 68% 53%)"}
          shadowColor={"hsl(348deg 74% 35%)"}
          name={"rock"}
          img={rock}
          hover={true}
        />
      </div>
    </Container>
  );
}

export default PickArea;
