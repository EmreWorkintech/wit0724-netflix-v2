/* eslint-disable react/prop-types */
import styled from "styled-components";

const Card = styled.div`
  width: 150px;
  padding: 0.5rem;
`;

const Avatar = styled.img`
  display: block;
  border-radius: 0.3rem;
  width: 100%;
`;

const Title = styled.h2`
  text-align: center;
  color: gray;
  font-size: 1.1rem;
  font-weight: normal;
`;

function Profile(props) {
  const { profile } = props;

  return (
    <Card>
      <Avatar src={profile.avatar} />
      <Title>{profile.name}</Title>
    </Card>
  );
}

export default Profile;
