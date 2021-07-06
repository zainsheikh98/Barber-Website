import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  height: auto;
  width: 100vw;
`;

export const Heading = styled.h1`
  margin: 3rem 0 1rem 3rem;
  color: rgb(200, 30, 17);
  align-self: flex-start;
  font-family: sans-serif;

  span {
    color: black;
    text-decoration: underline;
    text-decoration-color: rgb(200, 30, 17);
  }
`;

export const Paragraph = styled.p`
  margin: 0 3rem;
  width: 80%;
  align-self: flex-start;
`;

export const CardSection = styled.section`
  display: flex;
  width: 100vw;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: stretch;
  align-items: stretch;
  overflow-x: hidden;
`;

export const Card = styled.div`
  margin-top: 1rem;
  border: 1px solid rgba(6, 206, 106, 0.1);
  width: 300px;
  height: auto;
`;

export const ImageSection = styled.div`
  display: flex;
  height: 200px;
  width: 200px;
  padding: 0px 15%;
`;

export const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  opacity: 0.8;
  transition: all 0.5s ease-in-out;
  &:hover {
    border-radius: 50%;
    padding: 1rem;
    opacity: 1;
  }
`;

export const CardHeading = styled.h3`
  text-align: center;
`;

export const CardDetails = styled.h6`
  text-align: center;
  color: rgb(0, 0, 0, 0.3);
`;
