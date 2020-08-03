import React from "react";

import { Container, Places } from "./styled";

export const ButtonPrimary = (props) => {
  const { text, background, icon, color } = props;

  return (
    <Container>
      <Places background={background} color={color} {...props}>
        {text}
        {icon}
      </Places>
    </Container>
  );
};
