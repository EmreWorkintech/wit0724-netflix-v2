/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import Movies from "./Movies";
import Title from "./Title";
//import axios from "axios";
import { movies } from "../../data";

function SuggestionPanel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    /* axios
      .get("https://moviedatabase8.p.rapidapi.com/Search/Incep", {
        headers: {
          "x-rapidapi-key":
            "2ce04038e2msh104054e193ec289p18cdf9jsnb6a4a44d19e9",
          "x-rapidapi-host": "moviedatabase8.p.rapidapi.com",
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => console.log(err.message));
      */

    setData(movies);
  }, []);

  return (
    <div>
      <Title title={"Suggestion Title"} />
      <Movies
        movieList={data.filter((item) => item.poster_path !== undefined)}
      />
    </div>
  );
}

export default SuggestionPanel;
