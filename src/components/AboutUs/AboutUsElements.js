import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: no-wrap;
  justify-content: center;
  min-height: 100vh;
  height: auto;
  width: 100vw;
  @media all and (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 100%;
  width: 100%;
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
  color: rgb(200, 30, 17);
  width: 80%;
  align-self: flex-start;
`;

export const ImageSection = styled.div`
  display: flex;
  height: 80%;
  width: 80%;
  padding-right: 5%;
`;

export const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;
