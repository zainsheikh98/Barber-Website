import styled from "styled-components";
import bg from "../../static/assets/footer.jpg";

export const FooterContainer = styled.footer`
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow-x: hidden;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)),
    url(${bg});
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  height: auto;
  width: 100vw;
  overflow: hidden;
  p {
    color: white;
  }
`;

export const Heading = styled.h1`
  margin-top: 40vh;
  color: white;
  text-align: center;
`;
export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;
