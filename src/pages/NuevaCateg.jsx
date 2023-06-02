import styled from "styled-components"

const H2 = styled.h2`
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

const BtnGuardar = styled.a`
  /* Adapt the colors based on primary prop */
  background-color: #2A7AE4;
  padding: 0.56em 1em;
  color: #fff;
  border-radius: 3px;
  margin-right: 35px;
  font-size: 15px;
`;

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  color: white;
`;

const StyledTableHeader = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
`;

const StyledTableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const StyledTableData = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const NuevaCateg = () => {
  return (
    <main>
        <div>
            <H2>Nueva Categoria</H2>
        </div>
        <StyledForm>
            <input type="text" placeholder="Nombre" />
            <textarea data-desc rows="8" cols="40" placeholder="Todos los video de la área de Front End colocar en esta categoría para organizar los estudios que vengo haciendo actualmente"></textarea>
            <input type="text" placeholder="Color" />
            <input type="text" placeholder="Codigo de seguridad" />
            <div className="button-container">
                <BtnGuardar type="submit">Guardar</BtnGuardar>
                <button>Limpiar</button>
            </div>
        </StyledForm>

        <StyledTable>
            <thead>
                <tr>
                <StyledTableHeader>Nombre</StyledTableHeader>
                <StyledTableHeader>Descripcion</StyledTableHeader>
                <StyledTableHeader>Editar</StyledTableHeader>
                <StyledTableHeader>Remover</StyledTableHeader>
                </tr>
            </thead>
            <tbody>
                <StyledTableRow>
                <StyledTableData>Dato 1</StyledTableData>
                <StyledTableData>Dato 2</StyledTableData>
                <StyledTableData>Dato 3</StyledTableData>
                <StyledTableData>Dato 4</StyledTableData>
                </StyledTableRow>
                <StyledTableRow>
                <StyledTableData>Dato 4</StyledTableData>
                <StyledTableData>Dato 5</StyledTableData>
                <StyledTableData>Dato 6</StyledTableData>
                <StyledTableData>Dato 7</StyledTableData>
                </StyledTableRow>
                <StyledTableRow>
                <StyledTableData>Dato 4</StyledTableData>
                <StyledTableData>Dato 5</StyledTableData>
                <StyledTableData>Dato 6</StyledTableData>
                <StyledTableData>Dato 7</StyledTableData>
                </StyledTableRow>
                <StyledTableRow>
                <StyledTableData>Dato 4</StyledTableData>
                <StyledTableData>Dato 5</StyledTableData>
                <StyledTableData>Dato 6</StyledTableData>
                <StyledTableData>Dato 7</StyledTableData>
                </StyledTableRow>
                <StyledTableRow>
                <StyledTableData>Dato 4</StyledTableData>
                <StyledTableData>Dato 5</StyledTableData>
                <StyledTableData>Dato 6</StyledTableData>
                <StyledTableData>Dato 7</StyledTableData>
                </StyledTableRow>
            </tbody>
        </StyledTable>
    </main>
  )
}

export default NuevaCateg