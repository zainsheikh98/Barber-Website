import styled from "styled-components";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";

export const NavbarContainer = styled.div`
  position: fixed;
  background-color: white;
  top: 0;
  font-size: 1rem;
  overflow: hidden;
  width: 100vw;
  height: ${(props) => (props.isOpen ? "auto" : "20vh")};
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  transition: all 0.5s ease-in-out;
  flex-wrap: wrap;
  z-index: 1000;

  @media all and (max-width: 990px) {
    height: ${(props) => (props.isOpen ? "auto" : "25vh")};
  }
  @media all and (max-width: 720px) {
    height: ${(props) => (props.isOpen ? "auto" : "15vh")};
  } ;
`;

export const Icon = (props) => {
  const StyledIcon = styled(props.icon)`
    display: inline-flex;
    outline: none;
    color: rgb(200, 30, 17);
    font-size: 1.7rem;
    cursor: pointer;
  `;
  return <StyledIcon />;
};

export const Hamburger = styled(AiOutlineMenu)`
  display: none;
  outline: none;
  color: rgb(200, 30, 17);
  font-size: 2rem;
  margin: 1rem;
  cursor: pointer;

  @media all and (max-width: 760px) {
    display: flex;
    flex-basis: 10%;
  } ;
`;

export const NavbarMenu = styled.div`
  display: flex;
  justify-content: space-between;

  @media all and (max-width: 760px) {
    /* display: ${(props) => (props.isOpen ? "flex" : "none")}; */
    display: flex;
    transition: display 0.5s ease-out 1s;
    flex-direction: column;
    justify-content: flex-end;
    flex-wrap: wrap;
    overflow: hidden;
    transform: ${(props) =>
      props.isOpen ? "translateY(0px)" : "translateY(-200vh)"};
    transition: transform 0.3s ease-in-out;
  } ;
`;

export const NavbarLogo = styled.h1`
  color: black;
  margin: 1rem;
  span {
    color: rgb(200, 30, 17);
  }

  @media all and (max-width: 760px) {
    flex-basis: 60%;
    font-size: 1rem;
  } ;
`;

export const NavbarLink = styled(Link)`
  font-family: sans-serif;
  text-decoration: none;
  color: black;
  margin: 0.5rem;
  text-align: left;
  cursor: pointer;
  &:hover {
    color: rgb(200, 30, 17);
    font-weight: bold;
    transition: all 0.3s ease-out;
  }
  &.active {
    color: rgb(200, 30, 17);
    font-weight: bold;
    transition: all 0.3s ease-out;
  }
`;
