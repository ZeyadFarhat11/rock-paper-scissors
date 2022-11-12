import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../context";

const Container = styled.div`
  width: 200px;
  height: 200px;
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
    width: 65px;
  }
  @media screen and (max-width: 992px) {
    width: 190px;
    height: 190px;
  }
  @media screen and (max-width: 768px) {
    width: 130px;
    height: 130px;
    padding: 15px;
    img {
      width: 50px;
    }
  }
`;

function Choice({ color, shadowColor, name, img, hover, className }) {
  const { setChoice } = useGlobalContext();

  return (
    <Container
      className={className + " choice"}
      style={{
        backgroundColor: color,
        boxShadow: `0 8px ${shadowColor}, 0 11px rgba(0, 0, 0, 0.3)`,
      }}
      hover={hover}
      onClick={() => {
        if (!hover) return;
        setChoice({
          name,
          color,
          shadowColor,
          img,
        });
      }}
    >
      <div className="inner">
        <img src={img} alt={name} />
      </div>
    </Container>
  );
}

export default Choice;
