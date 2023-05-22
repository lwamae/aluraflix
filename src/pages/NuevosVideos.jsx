import styled from "styled-components"

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
    
    hover: #53585D;
`

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
            <button type="submit">Guardar</button>
            <button>Limpiar</button>
        </StyledForm>
    </main>
  )
}

export default NuevosVideos