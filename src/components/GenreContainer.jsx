import styled from "styled-components";
import { genres } from "../data";
import Genre from "./Genre";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

function GenreContainer() {
  return (
    <Container>
      {genres.map((item, index) => (
        <Genre genre={item} key={index} />
      ))}
    </Container>
  );
}

export default GenreContainer;
