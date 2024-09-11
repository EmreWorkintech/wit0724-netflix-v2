import styled from "styled-components";

const Card = styled.div`
  width: 15%;
`;

const Poster = styled.img`
  width: 100%;
`;

function Movie(props) {
  const { movieData } = props;
  return (
    <Card>
      <Poster src={movieData.poster_path} />
    </Card>
  );
}

export default Movie;
