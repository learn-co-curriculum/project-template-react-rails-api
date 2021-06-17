import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://www.gannett-cdn.com/-mm-/ca435d2faae4b5411fb87860ad8747ab8564f19d/c=0-202-5249-3168/local/-/media/2018/06/05/OHGroup/Newark/636637932251968602-01-new-sct060418-myers.JPG?width=660&height=373&fit=crop&format=pjpg&auto=webp',
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: 'https://ptskills.co.uk/wp-content/uploads/Th-3-1-1.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: 'https://assets.entrepreneur.com/content/3x2/2000/20190620131326-Example-of-Personal-Trainer-Business-Ideas-Bigstock-4000pxW-X-2670pxH-copy.jpeg',
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const Wellness = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img style={{opacity: "0.5"}} src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
	<>
	<h1>Wellness</h1>
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
	</>
  );
}

export default Wellness;

