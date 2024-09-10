import styled from "styled-components";
import GenreContainer from "./GenreContainer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { isValidEmail, isValidPassword } from "../utils/validationRules";

const Form = styled.form`
  width: 50%;
  max-width: 350px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: black;
`;

const Heading = styled.h2`
  margin: 0;
`;

const SubText = styled.p`
  margin: 0;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 100%;
  text-align: center;
  background: red;
  padding: 1rem;
  border-radius: 0.3rem;
  color: white;
  font-size: 1rem;
  border: 0px solid red;
`;

const initialFormData = {
  eposta: "emre@wit.com.tr",
  sifre: "12345678",
  genres: ["action", "crime"],
};

const ErrorMessage = styled.p`
  color: red;
`;

function SignInForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState({
    email: "",
    sifre: "",
    genre: "",
  });
  const [isValid, setIsValid] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (isValidEmail(formData.eposta) && isValidPassword(formData.sifre)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData]);

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", formData)
      .then((response) => {
        console.log(response.data);
        history.push("/welcome");
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setFormData({ ...formData, [name]: value });

    if (name === "eposta") {
      if (isValidEmail(value)) {
        setError({ ...error, [name]: "" });
      } else {
        console.log(isValidEmail(value));
        setError({ ...error, [name]: "Geçerli bir email adresi giriniz." });
      }
    }

    if (name === "sifre") {
      if (isValidPassword(value)) {
        setError({ ...error, [name]: "" });
      } else {
        setError({
          ...error,
          [name]:
            "En az 8 karakter uzunluğunda olmalı ve en az bir sembol, bir büyük harf, bir küçük harf içermeli.",
        });
      }
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Heading>Create a password to start your membership</Heading>
      <SubText>
        Just a few more steps and you&apos;re done!
        <br />
        We hate paperwork, too.
      </SubText>
      <Input
        type="email"
        name="eposta"
        placeholder="Email"
        onChange={handleChange}
        value={formData.eposta}
      />
      {error.eposta && <ErrorMessage>{error.eposta}</ErrorMessage>}
      <Input
        type="password"
        name="sifre"
        placeholder="Add a password"
        onChange={handleChange}
        value={formData.sifre}
      />
      {error.sifre && <ErrorMessage>{error.sifre}</ErrorMessage>}
      <div>
        <p>
          <b>Select your favorite genres</b>
        </p>
        <GenreContainer />
        {error.genre && <ErrorMessage>{error.genre}</ErrorMessage>}
      </div>
      <Button disabled={!isValid}>Sign Up</Button>
    </Form>
  );
}

export default SignInForm;
