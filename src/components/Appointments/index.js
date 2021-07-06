import React from "react";
import {
  ServicesContainer,
  Heading,
  Paragraph,
  Button,
  Input,
  Form,
} from "./AppointmentsElements";

const Appointments = () => {
  return (
    <ServicesContainer id="appointments">
      <Heading>
        <span>Book. </span>Now
      </Heading>
      <Paragraph>Get An Appointment</Paragraph>
      <Form>
        <Input
          type="text"
          name="firstName"
          required
          autoComplete="off"
          placeholder="Your First Name"
        />
        <Input
          type="text"
          name="lastName"
          required
          autoComplete="off"
          placeholder="Your Last Name"
        />
        <Input
          type="email"
          name="email"
          required
          autoComplete="off"
          placeholder="Your Email Address"
        />
        <Input
          type="phone"
          name="phone"
          required
          autoComplete="off"
          placeholder="Your Phone Number"
        />
        <Button>Get Appointment</Button>
      </Form>
    </ServicesContainer>
  );
};

export default Appointments;
