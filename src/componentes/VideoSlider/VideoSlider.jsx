import styled from "styled-components"
import "../VideoSlider/videoslide.css"

const StyledIFrame = styled.iframe`
  height: 240px;
  width: 410px;
  margin-right: 15px;
  display: inline-block;
  border: 2px solid aquamarine;
`

const VideoSlider = (props) => {
  const { url } = props;

  return (
    <StyledIFrame src={url} 
      frameborder="0" 
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      allowfullscreen>
    </StyledIFrame>
  );
}

export default VideoSlider