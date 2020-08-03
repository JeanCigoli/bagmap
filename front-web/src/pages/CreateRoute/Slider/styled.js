import styled from "styled-components";
import { theme, device } from "style/global";

export const ContainerSlider = styled.div`
width: 100%;
min-height: 350px;
overflow: hidden;

.card-container {
  width: 100%;
  height: 300px;
}

@media ${device.mobileL} {
  padding: 5px;
}
`;

export const Button = styled.button`
width: 50px;
height: 50px;
background-color: ${theme.colors.mediumMain};
border: 0px;
border-radius: 15px;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0.5px 0.5px 15px ${theme.colors.mediumGrey};
cursor: pointer;

:hover {
  transform: scale(1.05);
}

svg {
  color: ${theme.colors.white};
  font-size: ${theme.fontSizes.nav};
}
`;
