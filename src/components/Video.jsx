import styled from "styled-components";
import video from "../assets/movies/1104.mp4";

const VideoContainer = styled.video`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

function Video() {
  return (
    <VideoContainer loop autoPlay muted>
      <source src={video} type="video/mp4" />
    </VideoContainer>
  );
}

export default Video;
