import React from "react";
import styled from "styled-components"
import logo from "../../assets/header.png";
import { Link } from "react-router-dom"
//import { colorPrimario } from "../UI/variables";

const StyledHeader = styled.nav`
  background-color: #000;
  display: flex;
  justify-content: space-between;
  padding: 0 2vw;
  height: 10vh;
  align-items: center;
`

const Logo = styled.img`
  height: 30px;
`

const BtnHeader = styled.a`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "white" : "transparent"};
  color: ${props => props.$primary ? "white" : "white"};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid white;
  border-radius: 3px;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <Logo src={logo} alt="logo" />
      </Link>
      <div>
        <BtnHeader><StyledLink to="/nuevosvideos">Nuevos Videos</StyledLink></BtnHeader>
      </div>
    </StyledHeader>
  );
};

export default Header;