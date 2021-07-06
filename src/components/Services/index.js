import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
} from "./ServicesElements";

import s1 from "../../static/assets/barber_service_01.jpg";
import s2 from "../../static/assets/barber_service_02.jpg";
import s3 from "../../static/assets/barber_service_03.jpg";
import s4 from "../../static/assets/barber_service_04.jpg";
import s5 from "../../static/assets/barber_service_05.jpg";
import s6 from "../../static/assets/barber_service_06.jpg";

const Services = () => {
  return (
    <ServicesContainer id="ourServices">
      <Heading>
        <span>Our. </span>Services
      </Heading>
      <Paragraph>
        Est consectetur ad duis fugiat ad ullamco minim nostrud et magna
        excepteur non ea.
      </Paragraph>
      <CardSection>
        <Card>
          <ImageSection>
            <CardImage src={s1} alt="service1" />
          </ImageSection>
          <CardHeading>Beard, Mustache Care</CardHeading>
          <CardDetails>
            Est consectetur ad duis fugiat ad ullamco minim nostrud et magna
            excepteur non ea.
          </CardDetails>
        </Card>
        <Card>
          <ImageSection>
            <CardImage src={s2} alt="service2" />
          </ImageSection>
          <CardHeading>Studio Shots</CardHeading>
          <CardDetails>
            Est consectetur ad duis fugiat ad ullamco minim nostrud et magna
            excepteur non ea.
          </CardDetails>
        </Card>
        <Card>
          <ImageSection>
            <CardImage src={s3} alt="service3" />
          </ImageSection>
          <CardHeading>Detail Feather Cleaning</CardHeading>
          <CardDetails>
            Est consectetur ad duis fugiat ad ullamco minim nostrud et magna
            excepteur non ea.
          </CardDetails>
        </Card>
        <Card>
          <ImageSection>
            <CardImage src={s4} alt="service4" />
          </ImageSection>
          <CardHeading>Forming The Beard</CardHeading>
          <CardDetails>
            Est consectetur ad duis fugiat ad ullamco minim nostrud et magna
            excepteur non ea.
          </CardDetails>
        </Card>
        <Card>
          <ImageSection>
            <CardImage src={s5} alt="service5" />
          </ImageSection>
          <CardHeading>Facial And Skin Care</CardHeading>
          <CardDetails>
            Est consectetur ad duis fugiat ad ullamco minim nostrud et magna
            excepteur non ea.
          </CardDetails>
        </Card>
        <Card>
          <ImageSection>
            <CardImage src={s6} alt="service6" />
          </ImageSection>
          <CardHeading>Hair Wash</CardHeading>
          <CardDetails>
            Est consectetur ad duis fugiat ad ullamco minim nostrud et magna
            excepteur non ea.
          </CardDetails>
        </Card>
      </CardSection>
    </ServicesContainer>
  );
};

export default Services;
