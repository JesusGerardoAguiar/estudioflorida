import React from 'react';
import PropTypes from 'prop-types';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Carousel = ({
  children,
  totalSlides,
  StyledCarousel,
  StyledSlider,
  StyledSlide,
}) => (
  <StyledCarousel
    naturalSlideWidth={10}
    naturalSlideHeight={4.95}
    totalSlides={totalSlides}
    touchEnabled={false}
    dragEnabled={false}
    interval={4500}
    isPlaying
  >
    <StyledSlider>
      {React.Children.map(children, (child, index) => {
        const idx = index;
        return <StyledSlide key={idx}>{child}</StyledSlide>;
      })}
    </StyledSlider>
  </StyledCarousel>
);

Carousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  totalSlides: PropTypes.number.isRequired,
  StyledCarousel: PropTypes.objectOf(PropTypes.any).isRequired,
  StyledSlider: PropTypes.objectOf(PropTypes.any).isRequired,
  StyledSlide: PropTypes.objectOf(PropTypes.any).isRequired,
  StyledDotGroup: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Carousel;
