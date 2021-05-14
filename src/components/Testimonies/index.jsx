import React, { Fragment } from 'react';
import Carousel from '../Carousel';
import {
  MainDiv,
  Title,
  Testimonie,
  ImageCircle,
  Name,
  Company,
  StyledCarousel,
  StyledSlider,
  StyledSlide,
  StyledDotGroup,
} from './style';

const testimonies = [
  {
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    name: 'Lorena Martinez',
    company: 'Lograf - Lead Designer & CO-FOUNDER',
    imgURL: '',
  },
  {
    text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    name: 'Jesús Aguiar',
    company: 'Lograf -  CTO & CO-FOUNDER',
    imgURL: '',
  },
];

const renderTestimonies = () => {
  return testimonies.map(testimonie => {
    return (
      <Fragment key={testimonie.company}>
        <Testimonie>{testimonie.text}</Testimonie>
        <ImageCircle imageURL={testimonie.imageURL} />
        <Name>{testimonie.name}</Name>
        <Company>{testimonie.company}</Company>
      </Fragment>
    );
  });
};

const Testimonies = () => (
  <MainDiv>
    <Carousel
      totalSlides={testimonies.length}
      StyledCarousel={StyledCarousel}
      StyledSlider={StyledSlider}
      StyledSlide={StyledSlide}
      StyledDotGroup={StyledDotGroup}
    >
      {renderTestimonies()}
    </Carousel>
  </MainDiv>
);

export default Testimonies;
