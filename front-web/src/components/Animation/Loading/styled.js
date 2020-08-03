import styled from "styled-components";
import { theme } from "../../../style/global";

export const ContainerMain = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 500px;
  background: rgba(255,255,255, 0.8);
`;

export const Container = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  place-content: center;
  overflow: hidden;
  background: rgba(44, 124, 133, 0.8);
  border-radius: 30px;

  .item {
    width: 56%;
    overflow: visible;
    stroke: #fff;
    stroke-width: 2;
    stroke-linejoin: round;
    stroke-linecap: round;
  }
`;
