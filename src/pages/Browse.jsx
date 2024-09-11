import { useState } from "react";
import PromotedVideo from "../components/PromotedVideo";
import SuggestionPanel from "../components/suggestion/SuggestionPanel";
import Footer from "../layouts/Footer";

/* eslint-disable react/prop-types */
function Browse(props) {
  const { activeProfile } = props;
  const [suggestions] = useState([0, 1, 2, 3, 4]);

  return (
    <>
      <PromotedVideo activeProfile={activeProfile} />
      {suggestions.map((item, index) => (
        <SuggestionPanel data={item} key={index} />
      ))}
      <Footer />
    </>
  );
}

export default Browse;
