/* eslint-disable react/prop-types */
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import UserPanel from "../components/UserPanel";
import styled from "styled-components";

const HeaderSection = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: ${(props) =>
    props.activeProfile ? "none" : "1px solid gray"};
  width: 100%;
  box-sizing: border-box;
  gap: 2rem;
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

const NavigationMenu = styled.nav`
  display: flex;
  gap: 2rem;
  flex-grow: 1;
`;

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
`;

function Header(props) {
  const { activeProfile } = props;

  return (
    <HeaderSection activeProfile={activeProfile}>
      <Logo>WiTFLiX</Logo>
      {activeProfile ? (
        <>
          <NavigationMenu>
            <NavItem to="/welcome">item 1</NavItem>
            <NavItem to="/welcome">item 1</NavItem>
            <NavItem to="/welcome">item 1</NavItem>
            <NavItem to="/welcome">item 1</NavItem>
            <NavItem to="/welcome">item 1</NavItem>
          </NavigationMenu>
          <UserPanel activeProfile={activeProfile} />
        </>
      ) : (
        <SignInLink to="/welcome">Sign in</SignInLink>
      )}
    </HeaderSection>
  );
}

export default Header;
