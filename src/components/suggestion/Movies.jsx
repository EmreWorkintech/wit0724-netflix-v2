/* eslint-disable react/prop-types */
import Movie from "./Movie";
import styled from "styled-components";

const MovieListContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
`;
function Movies(props) {
  const { movieList } = props;

  return (
    <MovieListContainer>
      {movieList.map((item, index) => (
        <Movie movieData={item} key={index} />
      ))}
    </MovieListContainer>
  );
}

export default Movies;
