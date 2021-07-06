import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import trim from "../../static/assets/trim.jpg";
import shave from "../../static/assets/shave.jpg";
import s1 from "../../static/assets/slider-img-01.jpg";
import s2 from "../../static/assets/slider-img-02.jpg";
import s3 from "../../static/assets/slider-img-03.jpg";
import {
  HeaderContainer,
  Row,
  ImageWrapper,
  CarouselWrapper,
  ImageText,
  Image,
  Heading,
  Paragraph,
} from "./HeaderElements";

const Header = () => {
  return (
    <HeaderContainer id="home">
      <Row>
        <ImageWrapper>
          <ImageText>Trim</ImageText>
          <Image src={trim} alt="Money" />
        </ImageWrapper>
        <Heading>The Barber Shop</Heading>
        <ImageWrapper>
          <ImageText>Shave</ImageText>
          <Image src={shave} alt="Wallet" />
        </ImageWrapper>
      </Row>
      <Paragraph>
        Ea officia do laborum magna cupidatat ea culpa mollit sint adipisicing
        elit. Excepteur minim anim qui eu et. Reprehenderit voluptate amet
        cillum dolore sit consequat nostrud ipsum excepteur ad reprehenderit
        tempor exercitation ut.
      </Paragraph>
      <CarouselWrapper>
        <Carousel
          autoFocus={true}
          autoPlay={true}
          infiniteLoop={true}
          interval={3000}
        >
          <div>
            <Image src={s1} alt="slider" />
          </div>
          <div>
            <Image src={s2} alt="slider" />
          </div>
          <div>
            <Image src={s3} alt="slider" />
          </div>
        </Carousel>
      </CarouselWrapper>
    </HeaderContainer>
  );
};

export default Header;
