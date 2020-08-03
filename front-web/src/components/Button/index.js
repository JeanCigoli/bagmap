import React from "react";

import {
  Container,
  BtnPrimary,
  BtnSecondary,
  ButtonRoute as BtnRoute,
  ButtomPoint as BtnPoint,
} from "./styled";

export const ButtonPrimary = (props) => {
  const { text, background, icon, color } = props;

  return (
    <Container>
      <BtnPrimary background={background} color={color} {...props}>
        {text}
        {icon}
      </BtnPrimary>
    </Container>
  );
};

export const ButtonSecondary = (props) => {
  const { text, background, icon, color } = props;

  return (
    <Container>
      <BtnSecondary background={background} color={color} {...props}>
        {text}
        {icon}
      </BtnSecondary>
    </Container>
  );
};

export const ButtonRoute = (props) => {
  const { text, background, icon, color } = props;

  return (
    <Container>
      <BtnRoute background={background} color={color} {...props}>
        <span>{icon}</span>
        <h3>{text}</h3>
      </BtnRoute>
    </Container>
  );
};

export const ButtonPoint = (props) => {
  const { text, background, icon, color } = props;

  return (
    <Container>
      <BtnPoint background={background} color={color} {...props}>
        <h3>{text}</h3>
        <span>{icon}</span>
      </BtnPoint>
    </Container>
  );
};
