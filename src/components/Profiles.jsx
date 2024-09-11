/* eslint-disable react/prop-types */
import styled from "styled-components";
import { profiles } from "../data";
import Profile from "./Profile";
import { useEffect, useState } from "react";
import axios from "axios";

const ProfilesSection = styled.section`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

function Profiles(props) {
  const [profileList, setProfileList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setActiveProfile } = props;

  useEffect(() => {
    setIsLoading(true);
    axios
      .post("https://reqres.in/api/user", profiles)
      .then((response) => {
        setProfileList(response.data);
      })
      .catch((error) => {
        console.log(error.messsage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <span className="loader"></span>;
  }

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
