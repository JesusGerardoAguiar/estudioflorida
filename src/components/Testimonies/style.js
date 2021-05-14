import styled from 'styled-components';
import { CarouselProvider, DotGroup, Slide, Slider } from 'pure-react-carousel';

export const MainDiv = styled.div`
  justify-content: flex-start;
  height: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Testimonie = styled.p`
  font-family: DinRegular;
  font-style: normal;
  font-weight: normal;
  line-height: 27px;
  font-size: 18px;
  width: 36rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 13px;
    line-height: 23px;
    text-align: center;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    padding: 0 1rem;
  }
  @media (max-width: 768px) {
    p{
      font-family: RobotoR;
    }
  }
  color: #aa5c3b;
`;

export const ImageCircle = styled.div`
  height: 6rem;
  width: 6rem;
  border-radius: 46px;
  background-image: url(${props => props.backgroundImg});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border: 3px solid #aa5c3b;
  margin-bottom: 2rem;
`;

export const Name = styled.p`
  font-family: DinRegular;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height, or 150% */
  @media (max-width: 768px) {
    p{
      font-family: RobotoR;
    }
  }
  color: #aa5c3b;
  margin-bottom: 0px;

  @media (max-width: 768px) {
    font-size: 19px;
    line-height: 26px;
  }
`;

export const Company = styled.p`
  font-family: DinRegular;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  /* identical to box height, or 131% */
  @media (max-width: 768px) {
    p{
      font-family: RobotoR;
    }
  }
  color: #aa5c3b;

  mix-blend-mode: normal;
  opacity: 0.8;

  @media (max-width: 768px) {
    font-size: 15px;
    line-height: 20px;
  }
`;

export const StyledCarousel = styled(CarouselProvider)`
  width: 36rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .slideInner___2mfX9 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: fit-content;
    height: fit-content;
  }

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const StyledSlider = styled(Slider)`
  height: 25rem;
  width: 36rem;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

export const StyledSlide = styled(Slide)`
  .carousel__slide-focus-ring {
    display: none;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledDotGroup = styled(DotGroup)`
  button {
    width: 12px;
    height: 12px;
    border: 1px solid #eee;
    border-radius: 8px;
    box-shadow: 0px 0px 1px;
    background-color: #fff;
    margin: 0 0.7rem;
    outline: none;
  }

  button:disabled {
    border: 1px solid #fff;
    background: linear-gradient(26.57deg, #ff7214 16.67%, #ff4c14 100%);
  }
`;
