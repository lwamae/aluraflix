import styled from "styled-components"
import logo from "../../assets/header.png";

const StyledFooter = styled.footer`
  background-color: #000;
  display: flex;
  justify-content: center;
  padding: 0 3vw;
  height: 10vh;
  align-items: center;
`

const Logo = styled.img`
  width: 15%;
`
const Footer = () => {
    return (
      <div>
        <StyledFooter>
            <Logo src={logo} alt="logo" />
        </StyledFooter>
      </div>
    );
}

export default Footer