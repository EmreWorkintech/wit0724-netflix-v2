import PromotedVideo from "../components/PromotedVideo";

/* eslint-disable react/prop-types */
function Browse(props) {
  const { activeProfile } = props;
  return (
    <>
      <PromotedVideo activeProfile={activeProfile} />
    </>
  );
}

export default Browse;
