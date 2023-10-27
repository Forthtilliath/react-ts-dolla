import { MouseEventHandler, useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavLinks,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

interface Props {
  toggle: MouseEventHandler;
}

const Navbar = ({ toggle }: Props) => {
  const [scrollNav, setScrollNav] = useState(false);
  const root = document.querySelector("#root");

  const changeNav = () => {
    if (root && root?.scrollTop >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    root?.addEventListener("scroll", changeNav);

    return () => root?.removeEventListener("scroll", changeNav);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
    root?.scrollTo(0, 0);
  };

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            dolla
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={0}
                spy={true}
                offset={-80}
                containerId="root"
                activeClass="active"
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="discover"
                smooth={true}
                duration={0}
                spy={true}
                offset={-80}
                containerId="root"
                activeClass="active"
              >
                Discover
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={0}
                spy={true}
                offset={-80}
                containerId="root"
                activeClass="active"
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="signup"
                smooth={true}
                duration={0}
                spy={true}
                offset={-80}
                containerId="root"
                activeClass="active"
              >
                Sign Up
              </NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
