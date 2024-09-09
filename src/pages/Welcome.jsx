import styled from "styled-components";
import Profiles from "../components/Profiles";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const WelcomePage = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: normal;
  font-size: 2.5rem;
`;

const Button = styled(Link)`
  border: 1px solid gray;
  color: gray;
  padding: 0.5rem 2rem;
  text-decoration: none;
  margin-top: 2rem;
`;

function Welcome() {
  return (
    <WelcomePage>
      <Title>Who's Watching</Title>
      <Profiles />
      <Button>Manage Profiles</Button>
    </WelcomePage>
  );
}

export default Welcome;
