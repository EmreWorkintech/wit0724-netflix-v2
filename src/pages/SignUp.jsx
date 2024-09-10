import SignInForm from "../components/SignInForm";
import Footer from "../layouts/Footer";
import Header from "../layouts/Header";
import styled from "styled-components";

const PageBackground = styled.div`
  background: white;
  height: 100vh;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

function SignUp() {
  return (
    <PageBackground>
      <Header />
      <SignInForm />
      <Footer />
    </PageBackground>
  );
}

export default SignUp;
