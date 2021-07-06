import React from "react";
import {
  ServicesContainer,
  Heading,
  Paragraph,
  CardSection,
  Card,
  ImageSection,
  CardImage,
  CardHeading,
  CardDetails,
} from "../Services/ServicesElements";

import b1 from "../../static/assets/barber_01.jpg";
import b2 from "../../static/assets/barber_02.jpg";
import b3 from "../../static/assets/barber_03.jpg";
import b4 from "../../static/assets/barber_04.jpg";
import b5 from "../../static/assets/barber_05.jpg";
import b6 from "../../static/assets/barber_06.jpg";
const OurBarbers = () => {
  return (
    <ServicesContainer id="ourBarbers">
      <Heading>
        <span>Meet. </span>Our Barbers
      </Heading>
      <Paragraph>
        Est consectetur ad duis fugiat ad ullamco minim nostrud et magna
        excepteur non ea.
      </Paragraph>
      <CardSection>
        <Card>
          <ImageSection>
            <CardImage src={b1} alt="service1" />
          </ImageSection>
          <CardHeading>John Wick</CardHeading>
          <CardDetails>
            Est consectetur ad duis fugiat ad ullamco minim nostrud et magna
            excepteur non ea.
          </CardDetails>
        </Card>
        <Card>
          <ImageSection>
            <CardImage src={b2} alt="service2" />
          </ImageSection>
          <CardHeading>Bruce Wayne</CardHeading>
          <CardDetails>
            Est consectetur ad duis fugiat ad ullamco minim nostrud et magna
            excepteur non ea.
          </CardDetails>
        </Card>
        <Card>
          <ImageSection>
            <CardImage src={b3} alt="service3" />
          </ImageSection>
          <CardHeading>Clark Kent</CardHeading>
          <CardDetails>
            Est consectetur ad duis fugiat ad ullamco minim nostrud et magna
            excepteur non ea.
          </CardDetails>
        </Card>
        <Card>
          <ImageSection>
            <CardImage src={b4} alt="service4" />
          </ImageSection>
          <CardHeading>Thomas Anderson</CardHeading>
          <CardDetails>
            Est consectetur ad duis fugiat ad ullamco minim nostrud et magna
            excepteur non ea.
          </CardDetails>
        </Card>
        <Card>
          <ImageSection>
            <CardImage src={b5} alt="service5" />
          </ImageSection>
          <CardHeading>Jimmie Dawson</CardHeading>
          <CardDetails>
            Est consectetur ad duis fugiat ad ullamco minim nostrud et magna
            excepteur non ea.
          </CardDetails>
        </Card>
        <Card>
          <ImageSection>
            <CardImage src={b6} alt="service6" />
          </ImageSection>
          <CardHeading>Henry Duck</CardHeading>
          <CardDetails>
            Est consectetur ad duis fugiat ad ullamco minim nostrud et magna
            excepteur non ea.
          </CardDetails>
        </Card>
      </CardSection>
    </ServicesContainer>
  );
};

export default OurBarbers;
