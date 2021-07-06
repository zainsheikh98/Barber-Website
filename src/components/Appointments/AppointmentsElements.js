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
export const Input = styled.input`
  padding: 1rem;
  width: 80%;
  border: none;
  border-radius: 10px;
  border-bottom: 1px solid rgb(200, 30, 17);
  outline: none;
  margin: 1rem;
  background-color: black;
  color: white;
`;

export const Form = styled.form`
  display: flex;
  width: 100vw;
  flex-direction: column;
  justify-content: space-around;
  align-content: center;
  align-items: center;
`;

export const Button = styled.button`
  font-family: monospace;
  font-weight: 500;
  letter-spacing: 0.1rem;
  font-size: 1rem;
  background-color: rgb(200, 30, 17);
  color: white;
  border: 0.3rem solid white;
  border-radius: 10px;
  padding: 0.5rem;
  cursor: pointer;
  width: auto;
  margin: 1rem;

  :hover {
    color: rgb(200, 30, 17);
    background-color: white;
    border: 1px solid rgb(200, 30, 17);
  }
`;
