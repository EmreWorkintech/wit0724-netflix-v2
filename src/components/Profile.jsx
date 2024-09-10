/* eslint-disable react/prop-types */
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const Card = styled.div`
  width: 150px;
  padding: 0.5rem;
  cursor: pointer;
  &:hover img {
    border: 3px solid white;
  }
`;

const Avatar = styled.img`
  display: block;
  border-radius: 0.3rem;
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.h2`
  text-align: center;
  color: gray;
  font-size: 1.1rem;
  font-weight: normal;
`;

function Profile(props) {
  //hook
  const { profile, setActiveProfile } = props;
  const history = useHistory();

  //helper fn
  function handleClick() {
    setActiveProfile(profile);
    history.push("/browse");
  }

  //template
  return (
    <Card onClick={handleClick}>
      <Avatar src={profile.avatar} />
      <Title>{profile.name}</Title>
    </Card>
  );
}

export default Profile;
