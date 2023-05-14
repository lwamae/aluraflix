import { styled } from "styled-components"

const BtnHeader = styled.a`
  /* Adapt the colors based on primary prop */
  background: ${props => props.$primary ? "blue" : "transparent"};
  color: ${props => props.$primary ? "grey" : "white"};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 2px solid white;
  border-radius: 3px;
`;

/*
const Boton = (props) => {
    return <button className="boton">{props.children}</button>
}
*/
const Boton = () => {
    return <BtnHeader>Nuevo Video</BtnHeader>
}

export default Boton