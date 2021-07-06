import React, { useState } from "react";
import { GiMustache } from "react-icons/gi";
import {
  NavbarContainer,
  NavbarLogo,
  NavbarMenu,
  NavbarLink,
  Hamburger,
  Icon,
} from "./NavbarElements";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState("false");
  const menuToggler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer isOpen={isOpen}>
      <NavbarLogo>
        <Icon icon={GiMustache} />
        Barber. <span>Shop</span>
      </NavbarLogo>
      <Hamburger isOpen={isOpen} onClick={menuToggler} />
      <NavbarMenu isOpen={isOpen}>
        <NavbarLink
          activeClassName="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-200}
          duration={500}
        >
          Home
        </NavbarLink>
        <NavbarLink
          activeClassName="active"
          to="ourServices"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Our Services
        </NavbarLink>
        <NavbarLink
          activeClassName="active"
          to="aboutUs"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          About Us
        </NavbarLink>
        <NavbarLink
          activeClassName="active"
          to="ourBarbers"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Our Barbers
        </NavbarLink>
        <NavbarLink
          activeClassName="active"
          to="appointments"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Appointment
        </NavbarLink>
      </NavbarMenu>
    </NavbarContainer>
  );
};

export default Navbar;
