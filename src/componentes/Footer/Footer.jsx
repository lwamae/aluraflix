import styled from "styled-components"
import logo from "../../assets/header.png";

const StyledFooter = styled.footer`
  background-color: #000;
  display: flex;
  justify-content: center;
  padding: 0 3vw;
  height: 10vh;
  align-items: center;
  border-top: 2px solid #2A7AE4;
  margin-top: 68px;
`

const Logo = styled.img`
  width: 15%;
  margin-top: 8px;
`

const DivContainer = styled.div`
  padding-bottom: 32px;
  background: #000;
`

const Footer = () => {
    return (
      <DivContainer >
        <StyledFooter>
            <Logo src={logo} alt="logo" />
        </StyledFooter>
      </DivContainer>
    );
}

export default Footer