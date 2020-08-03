import styled from "styled-components";
import { theme, device } from "style/global";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media ${device.mobileL} {
    padding: 0px;
  }
`;

export const ContainerSearch = styled.div`
  width: 100%;
  min-height: auto;
  margin: 50px auto;
  padding: 0px 150px;

  @media ${device.mobileL} {
    padding: 0px;
    margin: 30px auto;
    width: 95%;
  }
`;

export const Title = styled.div`
  width: 100%;
  min-height: 90px;
  color: ${theme.colors.darkMain};
  font-weight: bolder;
  display: flex;
  padding-left: 50px;
  align-items: center;
  font-size: ${theme.fontSizes.xLarge};

  @media ${device.mobileL} {
    width: 90%;
    font-size: ${theme.fontSizes.xLarge};
    padding-left: 10px;
    height: 100px;
  }
`;

export const ContainerFlex = styled.div`
  width: 100%;
  min-height: calc(100% - 200px);
  height: auto;
  display: flex;
  flex-direction: column;
  overflow: auto;
  overflow-x: hidden;

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.darkMain};
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.colors.darkMain};
  }

  @media ${device.tablet} {
    flex-direction: column;
    height: auto;

    ::-webkit-scrollbar {
      width: 5px;
    }
  }
`;

export const ContainerDiv = styled.div`
  width: 250px;
  height: 280px;
  border-radius: 25px;
  position: relative;
  min-width: 200px;
  background-color: ${theme.colors.black};
  box-shadow: 0.5px 0.5px 5px ${theme.colors.mediumGrey};
  cursor: pointer;
  overflow: hidden;

  :hover {
    box-shadow: 0.5px 0.5px 15px ${theme.colors.mediumGrey};
    transform: scale(1.002);
  }

  p {
    position: absolute;
    bottom: 15px;
    flex: 1;
    align-self: flex-end;
    padding: 20px;
    font-size: ${theme.fontSizes.smaller};
    font-weight: bold;
    color: ${theme.colors.white};
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    opacity: 0.7;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }

  img:hover {
    -moz-transform: scale(1.05);
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
  }

  div {
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 60px;
    bottom: 60px;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    padding: 0px 10px;
    box-sizing: border-box;

    span {
      min-width: 50px;
      padding: 10px;
      height: 20px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: auto;
      background-color: ${theme.colors.blue};
      color: ${theme.colors.white};
    }

    span + span {
      margin-left: 10px;
    }
  }
`;

export const HomeBanner = styled.div`
  width: 100%;
  min-height: 500px;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;

  div {
    width: 40%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;

    h1 {
      width: 100%;
      color: ${theme.colors.darkMain};
      font-weight: bold;
      margin: 30px 0px;
      font-size: ${theme.fontSizes.xLarge};
    }

    p {
      width: 100%;
      color: ${theme.colors.black};
      font-size: ${theme.fontSizes.small};
      margin-bottom: 100px;
      line-height: 1.5em;
    }

    img {
      width: 450px;
      height: 400px;
    }
  }

  @media ${device.tablet} {
    margin-top: 40px;
    flex-direction: column;
    min-height: fit-content;
    padding: 20px;
    overflow: hidden;

    div {
      width: 100%;
      height: 350px;

      h1 {
        margin: 10px 0px;
        font-size: ${theme.fontSizes.larger};
        line-height: 1.3em;
      }

      p {
        margin-bottom: 20px;
      }

      img {
        width: 100%;
        height: 300px;
      }
    }
  }
`;

export const Portal = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  align-items: center;
  width: 700px;
  max-width: 100vw;
  height: 550px;
  background: ${theme.colors.white};
  box-shadow: 0.5px 0.5px 5px ${theme.colors.mediumGrey};
  border-radius: 10px;
  padding: 20px;
  position: fixed;

  h3 {
    color: ${theme.colors.darkGrey};
    font-size: ${theme.fontSizes.medium};
    line-height: ${theme.lineHeight.large};
    letter-spacing: 0.25px;
    text-align: center;
    margin: 20px 0px;
  }

  p {
    color: ${theme.colors.darkGrey};
    font-size: ${theme.fontSizes.smaller};
    line-height: ${theme.lineHeight.small};
    text-align: center;
  }

  button {
    align-self: flex-end;
    margin-top: 15px;
  }

  @media ${device.mobileL} {
    width: 90%;
    height: 85%;
  }
`;

export const HeaderContent = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  margin-top: 15px;
  justify-content: space-around;

  div {
    width: 45%;
  }
`;

export const Map = styled.div`
  width: 90%;
  min-height: 230px;
  margin: 50px auto;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
  background-color: ${theme.colors.darkOrange};
`;

export const Tour = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 600px;
  margin: 100px 0px;
  height: grid-auto-columns;
  position: relative;

  .container {
    width: 80%;
    height: auto;
    margin: 0 auto;

    h1 {
      font-size: ${theme.fontSizes.larger};
      color: ${theme.colors.darkMain};
      text-align: center;
    }

    h2 {
      font-size: ${theme.fontSizes.large};
      color: ${theme.colors.black};
    }

    p {
      font-size: ${theme.fontSizes.small};
      text-align: center;
      margin-top: 20px;
    }
    span {
      border-bottom: 4px solid orange;
      font-size: ${theme.fontSizes.xSmall};
      margin: 5px 10px;
    }
  }

  .description {
    width: 50%;
    height: 500px;
    overflow: hidden;

    h1 {
      text-align: left;
    }
    p {
      text-align: left;
    }
  }

  .description .Img {
    width: 100%;
    height: 300px;
    margin: 10px auto;
    border-radius: 10px;
  }

  .Img {
    width: 400px;
    height: 250px;
    background-color: ${theme.colors.mediumGrey};
    margin: 0 auto;
  }
`;

export const Places = styled.div`
  width: 100%;
  min-height: 800px;
  display: flex;
  padding: 25px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  .map {
    width: 40%;
    height: 100%;
    background-color: ${theme.colors.orange};
    border-radius: 20px;
    overflow: hidden;
  }

  .places {
    width: 60%;
    height: 100%;
  }
`;

export const Description = styled.div`
  width: 100%;
  min-height: 400px;
  display: flex;
  align-items: center;

  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
  }
`;

export const Cards = styled.div`
  width: 100%;
  min-height: 500px;
  overflow: auto;

  .activities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 40px;
  }

  .activities-grid-item {
    height: 640px;
    padding: 80px;
    color: #fafafa;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
    z-index: 1;
  }

  .cards {
    width: 350px;
    height: 400px;
    background-color: ${theme.colors.blue};
    padding: 30px;
    margin: 0 auto;

    h1 {
      font-size: ${theme.fontSizes.large};
      margin: 10px 0;
      color: ${theme.colors.mediumMain};
    }

    p {
      font-size: ${theme.fontSizes.medium};
      color: ${theme.colors.white};
    }
  }

  /* .activities-grid-item::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      135deg,
      rgba(49, 24, 131, 0.9) 0%,
      rgba(72, 56, 149, 0.8) 100%
    );
    z-index: -1;
  } */

  /* .star-gazing {
    background: url("assets/home.png") center no-repeat;
  }

  .hiking {
    background: url("images/hiking.jpg") center no-repeat;
  }

  .camping {
    background: url("images/camping.jpg") center no-repeat;
  }

  .activities-grid-item i {
    font-size: 4rem;
    color: #eb648c;
  }

  .activities-grid-item h1 {
    font-family: "Aldrich", sans-serif;
    font-size: 1.7rem;
    text-transform: uppercase;
    margin: 2rem 0;
  } */
`;
