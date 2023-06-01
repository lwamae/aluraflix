import styled from "styled-components"
import banner from "../../assets/banner.png";

const StyledBanner = styled.img`
  width: 100%;
  display: block;
`

const BtnBanner = styled.button`
  position: absolute;
  top: 40%;
  left: 2%;
  padding: 10px 20px;
  background-color: #6BD1FF;
  color: #ffffff;
  border: none;
  border-radius: 2px;
  font-size: 30px;
`
const DivContainer = styled.div`
  position: relative;
  display: inline-block;
`

const StyledH2 = styled.h2`
  color: #fff;
  position: absolute;
  top: 52%;
  left: 2%;
  background-color: transparent;
`

const StyledP = styled.p`
  position: absolute;
  top: 57%;
  left: 2%;
  color: white;
  background-color: transparent;
`

const StyledIFrame = styled.iframe`
  position: absolute;
  top: 39%;
  left: 50%;
  width: 640px;
  height: 340px;
  margin-right: 15px;
  display: inline-block;
  border: 2px solid aquamarine;
`
const Banner = () => {
    return (
      <DivContainer>
        <StyledBanner src={banner}/>
        <BtnBanner>Front End</BtnBanner>
        <StyledH2>Challenge React</StyledH2>
        <StyledP>
        Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás<br></br>
        comprometerte en la resolución de un problema para poder aplicar todos los<br></br>
        conocimientos adquiridos en la formación React.
        </StyledP>
        <StyledIFrame src="https://www.youtube.com/embed/bFrhU0hbo00"
          frameborder="0" 
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowfullscreen
        />
      </DivContainer>
    );
}
//<BtnBanner $primary>Frontend</BtnBanner>

export default Banner