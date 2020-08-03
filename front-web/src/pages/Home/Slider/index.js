import React, { useState, useEffect } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { ContainerSlider, TitleItem, Button } from './styled';
import Skeleton from '@material-ui/lab/Skeleton';

const Slider = ({ children, text, type, marginTop, reducer }) => {

  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const [cardsRow, setCardsRow] = useState(5);
  const [widthDom, setWidthDom] = useState(window.innerWidth - reducer);

  useEffect(() => {

    if (widthDom >= 1600) {
      setCardsRow(5);
    } else if (widthDom >= 1450) {
      setCardsRow(4);
    } else if (widthDom >= 1050) {
      setCardsRow(3);
    } else if (widthDom >= 700) {
      setCardsRow(2);
    } else if (widthDom < 700) {
      setCardsRow(1);
    }

  }, [widthDom]);

  useEffect(() => {
    setWidthDom(window.innerWidth - reducer);
  }, [window.innerWidth]);

  return (
    <ContainerSlider marginTop={marginTop}>

      <TitleItem>
        <h3 className="title-slider">{text} </h3>

        <div className="border"></div>
      </TitleItem>

      <div className="card-container">

        <ItemsCarousel
          enablePlaceholder
          numberOfPlaceholderItems={cardsRow}
          minimumPlaceholderTime={1000}
          placeholderItem={<Skeleton variant="rect" width={200} height={250} />}
          numberOfCards={cardsRow}
          gutter={15}
          showSlither={true}
          firstAndLastGutter={false}
          freeScrolling={false}
          infiniteLoop={true}

          // Active item configurations
          requestToChangeActive={item => setActiveItemIndex(item)}
          activeItemIndex={activeItemIndex}
          activePosition={'left'}
          alwaysShowChevrons={true}

          chevronWidth={25}
          rightChevron={<Button><FaChevronRight /></Button>}
          leftChevron={<Button><FaChevronLeft /></Button>}
          outsideChevron={false}>

          {
            children
          }

        </ItemsCarousel>

      </div>
    </ContainerSlider>
  );
}

export default Slider;
