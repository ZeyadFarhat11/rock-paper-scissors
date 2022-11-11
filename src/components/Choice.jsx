import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";

const Container = styled.div`
  width: 220px;
  height: 220px;
  border-radius: 50%;
  padding: 30px;
  cursor: pointer;
  transition: 0.3s;
  ${(props) =>
    props.hover
      ? `&:hover {
    box-shadow: 0 3px rgba(0, 0, 0, 0.3) !important;
    transform: translateY(10px);
  }`
      : null}
  .inner {
    background-color: #fff;
    border-radius: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 7px inset hsl(228deg 22% 78%);
  }
  img {
    width: 70px;
  }
`;

function Choice({ color, shadowColor, name, img, hover }) {
  const { setChoice } = useGlobalContext();

  return (
    <Container
      className="choice"
      style={{
        backgroundColor: color,
        boxShadow: `0 10px ${shadowColor}, 0 13px rgba(0, 0, 0, 0.3)`,
      }}
      hover={hover}
      onClick={() =>
        setChoice({
          name,
          color,
          shadowColor,
          img,
        })
      }
    >
      <div className="inner">
        <img src={img} alt={name} />
      </div>
    </Container>
  );
}

export default Choice;
