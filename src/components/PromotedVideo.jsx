/* eslint-disable react/prop-types */
import styled from "styled-components";
import Video from "./Video";
import Header from "../layouts/Header";

const Hero = styled.main`
  height: 90vh;
  position: relative;
  z-index: -1;
`;

const FixedHeader = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

function PromotedVideo(props) {
  const { activeProfile } = props;
  return (
    <Hero>
      <Video />
      <FixedHeader>
        <Header activeProfile={activeProfile} />
      </FixedHeader>
    </Hero>
  );
}

export default PromotedVideo;
