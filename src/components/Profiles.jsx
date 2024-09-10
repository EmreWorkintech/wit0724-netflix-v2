/* eslint-disable react/prop-types */
import styled from "styled-components";
import { profiles } from "../data";
import Profile from "./Profile";
import { useEffect, useState } from "react";

const ProfilesSection = styled.section`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

function Profiles(props) {
  const [profileList, setProfileList] = useState([]);
  const { setActiveProfile } = props;

  useEffect(() => {
    //axios.get profiles
    setProfileList(profiles);
  }, []);

  return (
    <ProfilesSection>
      {profileList.map((item, index) => (
        <Profile
          profile={item}
          key={index}
          setActiveProfile={setActiveProfile}
        />
      ))}
    </ProfilesSection>
  );
}

export default Profiles;
