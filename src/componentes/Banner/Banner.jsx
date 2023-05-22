import styled from "styled-components"
import banner from "../../assets/banner.png";

const StyledBanner = styled.img`
  width: 100%;
`
const BtnBanner = styled.a`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "blue" : "transparent"};
  color: ${props => props.$primary ? "grey" : "white"};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid white;
  border-radius: 3px;
`;

const Banner = () => {
    return (
      <div>
        <StyledBanner src={banner} alt="banner" />
        
      </div>
    );
}
//<BtnBanner $primary>Frontend</BtnBanner>

export default Banner