import React, { useState, useEffect } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { ContainerSlider, TitleItem, Button } from './styled';

const Slider = ({ children, text, type }) => {


  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const [cardsRow, setCardsRow] = useState(2);

  return (
    <ContainerSlider>

      <div className="card-container">

        <ItemsCarousel
          enablePlaceholder
          numberOfPlaceholderItems={5}
          minimumPlaceholderTime={1000}
          placeholderItem={<div style={{ height: 200, background: '#CCC' }}>Placeholder</div>}
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
