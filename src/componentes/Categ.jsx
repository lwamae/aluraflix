import styled from "styled-components"

const BtnBanner = styled.a`
  padding: 6px 20px;
  background-color: #00C86F;
  color: #ffffff;
  border: none;
  border-radius: 2px;
  font-size: 20px;
  margin-right: 14px;
  margin-left: 30px;

`
const StyledP = styled.p`
  color: white;
`

const DivContainer = styled.div`
    display: flex;
    align-items: center;
    height: 10vh;
`

const Categ = () => {
    return (
      <DivContainer>
        <BtnBanner>Back End</BtnBanner>
        <StyledP>Formación Innovación y Gestión de Alura Latam</StyledP>
      </DivContainer>
    );
}

export default Categ