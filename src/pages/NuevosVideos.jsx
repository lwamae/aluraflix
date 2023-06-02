import styled from "styled-components"
import { Link } from "react-router-dom"

const H1 = styled.h1`
    color: #fff;
    text-align: center;
    margin-top: 40px;
`

const StyledForm = styled.form`
  display: flex;    
  flex-direction: column;
  gap: 40px;
  margin: 35px;

  ::placeholder {
    color: #fff;
  }

  label {
    margin-bottom: 10px;
  }

  input {
    padding: 5px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: grey;
  }

  textarea{
    background-color: grey;
  }

  .button-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start; /* Ajusta la alineación horizontal de los botones */
    margin-top: 10px;
    align-items: center;
  }

  .button-container button {
    margin-right: 35px; /* Espacio entre los botones */
  }

  button {
    padding: 10px;
    background-color: grey;
    color: #000;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 125px;
  }
`

const BtnCateg = styled.a`
  /* Adapt the colors based on primary prop */
  background-color: #2A7AE4;
  padding: 0.52em 1em;
  border-radius: 3px;
  width: 160px;
`;

const StyledLink = styled(Link)`
  color: #fff;
  background-color: transparent;

  &:hover {
    color: #fff;
  }
`;

const NuevosVideos = () => {
  return (
    <main>
        <div>
            <H1>Nuevo Video</H1>
        </div>
        <StyledForm>
            <input type="text" placeholder="Titulo" />
            <input type="text" placeholder="Link del video" />
            <input type="text" placeholder="Thumbnail" />
            <input type="text" placeholder="Escoja una categoria" />
            <textarea data-desc rows="8" cols="40" placeholder="Descripcion"></textarea>
            <input type="text" placeholder="Codigo de seguridad" />
            <div className="button-container">
              <button type="submit">Guardar</button>
              <button>Limpiar</button>
              <BtnCateg><StyledLink to="/nuevacateg">Nueva Categoria</StyledLink></BtnCateg>
            </div>
        </StyledForm>
    </main>
  )
}

export default NuevosVideos