/* eslint-disable react/prop-types */
import styled from "styled-components";

const Label = styled.label`
  width: 45%;
`;

function Genre(props) {
  const { genre, isSelected, handleChange } = props;

  return (
    <Label>
      <input
        type="checkbox"
        name="genres"
        value={genre}
        checked={isSelected}
        onChange={handleChange}
      />{" "}
      {genre}
    </Label>
  );
}

export default Genre;
