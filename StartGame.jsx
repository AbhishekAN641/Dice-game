import React from "react";
import styled from "styled-components";
import { Button } from "../styled/Button";
import NumberSelector from "./NumberSelector";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <div>
        <img src="/images/dices.png" alt="dice" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>PLAY NOW</Button>
      </div>
    </Container>
  );
};
export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  justify-content: space-between; /* keeps dice on left, text+button on right */
  height: 100vh;
  margin: 0 auto;
  align-items: center;

  .content {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 20px;
    width: fit-content;
  }

  .content h1 {
    font-size: 96px;
    font-weight: bold;
    white-space: nowrap;
  }
`;
