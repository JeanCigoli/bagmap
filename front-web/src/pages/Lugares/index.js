import React, { useState, useEffect } from "react";
import {
  ContainerDiv,
  Container,
  Title,
  ContainerFlex,
  HomeBanner,
  Places,
  Description,
  Cards,
} from "./styled";
import SliderCarousel from "./Slider";

import places from "assets/Map-light.jpg";

// import MapsHome from "./Maps";
import { Link } from "react-router-dom";
import Footer from "components/Footer";

const Lugares = () => {
  return (
    <Container>
      <Title>BagMap</Title>

      <ContainerFlex>
        <HomeBanner>
          <div>
            <img src={places} alt="Imagem banner" />
          </div>

          <div>
            <h1>
              Nós também amamos viajar e descubrir lugares novos. Por isso,
              aproveite para se aventurar e colecionar o máximo de momentos
              especiais!
            </h1>
            {/* <p>
              Aqui você pode encontrar lugares adicionados pelos próprios
              usuário e ajudar adicionando os lugares que você descobriu.
            </p> */}
          </div>
        </HomeBanner>

        <Places>
          <div className="map"></div>
          <div className="places">
            <SliderCarousel
              text={"Principais lugares adicionados pelos usuário"}
              reducer={500}
              marginTop={"0px"}
            ></SliderCarousel>
            <SliderCarousel
              text={"Populares"}
              reducer={500}
              marginTop={"20px"}
            ></SliderCarousel>
          </div>
        </Places>

        <Description>
          <div className="container">
            <p>EXPERIÊNCIA</p>
            <h1>AO AR LIVRE EMOCIONANTE</h1>
            <p>
              LOREM IPSUM DOLOR SENTE-SE ENTRE OS ELITES CONSECTETUER
              ADIPISCING.
            </p>
          </div>
        </Description>

        <Cards>
          <div class="activities-grid">
            <div class="cards">
              <i class="icon ion-md-star"></i>
              <h1>Star Gazing</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Maecenas porttitor congue massa. Fusce posuere, magna sed
                pulvinar ultricies, purus lectus malesuada libero, sit amet
                commodo magna eros quis urna.
              </p>
            </div>

            <div class="cards">
              <i class="icon ion-md-compass"></i>
              <h1>Hiking</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Maecenas porttitor congue massa. Fusce posuere, magna sed
                pulvinar ultricies, purus lectus malesuada libero, sit amet
                commodo magna eros quis urna.
              </p>
            </div>

            <div class="cards">
              <i class="icon ion-md-bonfire"></i>
              <h1>Camping</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                Maecenas porttitor congue massa. Fusce posuere, magna sed
                pulvinar ultricies, purus lectus malesuada libero, sit amet
                commodo magna eros quis urna.
              </p>
            </div>
          </div>
        </Cards>

        <Footer />
      </ContainerFlex>
    </Container>
  );
};

export default Lugares;
