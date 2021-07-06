import React from "react";
import tools from "../../static/assets/Tools.jpg";
import {
  Container,
  AboutText,
  Heading,
  Paragraph,
  ImageSection,
  CardImage,
} from "./AboutUsElements";
const AboutUs = () => {
  return (
    <Container id="aboutUs">
      <AboutText>
        <Heading>
          <span>About. </span>Us
        </Heading>
        <Heading>Welcome To Barber's Website</Heading>
        <Paragraph>
          Id cupidatat voluptate consectetur deserunt labore. Aliqua velit
          voluptate est laboris Lorem laborum amet esse. Culpa non deserunt in
          do ullamco esse esse. Deserunt qui do laborum dolore elit dolore
          mollit minim.
        </Paragraph>
      </AboutText>
      <ImageSection>
        <CardImage src={tools} alt="AboutImage" />
      </ImageSection>
    </Container>
  );
};

export default AboutUs;
