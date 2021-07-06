import styled from "styled-components";
import bg from "../../static/assets/Header-bg.jpg";

export const HeaderContainer = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)),
    url(${bg});
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  overflow: hidden;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

export const CarouselWrapper = styled.div`
  margin-top: 30vh;
  height: 100vh;
  width: 95vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  align-content: center;
`;

export const Row = styled.div`
  margin-top: 30vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  @media all and (max-width: 950px) {
    display: flex;
    flex-direction: column;
  } ;
`;

export const ImageWrapper = styled.div`
  height: 200px;
  width: 200px;
  position: relative;
`;

export const ImageText = styled.p`
  color: white;
  font-family: sans-serif;
  font-weight: bold;
  position: absolute;
  z-index: 1;
  top: 35%;
  left: 35%;
`;

export const Image = styled.img`
  filter: brightness(50%);
  height: 100%;
  width: 100%;
  overflow: hidden;
  border: 3px solid white;
  transition: all 0.2s ease-in-out;

  :hover {
    filter: brightness(100%);
  }
`;

export const Heading = styled.h1`
  text-align: center;
  color: white;
  position: relative;
  font-family: sans-serif;
  font-size: 72px;
  @media all and (max-width: 1050px) {
    width: 100%;
  } ;
`;

export const Paragraph = styled.p`
  text-align: center;
  height: auto;
  margin: 1rem auto;
  width: 80%;
  color: white;
`;

export const Icon = (props) => {
  const StyledIcon = styled(props.icon)`
    display: inline-flex;
    margin-right: 0.1rem;
    outline: none;
    color: ${props.color};
    background: ${props.background};
    font-size: ${props.size};
    padding: ${props.padding};
    border-radius: ${props.borderRadius};
    cursor: pointer;
  `;
  return <StyledIcon />;
};
