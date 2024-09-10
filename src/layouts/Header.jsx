import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

const HeaderSection = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid gray;
  width: 100%;
  box-sizing: border-box;
`;

const Logo = styled.h1`
  color: red;
  margin: 0;
`;

const SignInLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: black;
`;

function Header() {
  return (
    <HeaderSection>
      <Logo>WiTFLiX</Logo>
      <SignInLink to="/welcome">Sign in</SignInLink>
    </HeaderSection>
  );
}

export default Header;
