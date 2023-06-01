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
    
    hover: #53585D;
`

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
            <button type="submit">Guardar</button>
            <button>Limpiar</button>
        </StyledForm>
    </main>
  )
}

export default NuevaCateg