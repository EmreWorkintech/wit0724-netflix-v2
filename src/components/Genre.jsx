/* eslint-disable react/prop-types */
import styled from "styled-components";

const Label = styled.label`
  width: 45%;
`;

function Genre(props) {
  const { genre } = props;

  return (
    <Label>
      <input type="checkbox" name="genre" value={genre} /> {genre}
    </Label>
  );
}

export default Genre;
