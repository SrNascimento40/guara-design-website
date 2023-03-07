import React, { useEffect, useState } from "react";
import {
  Button,
  LoginContainer,
  Container,
  Input,
  Title,
  InputWrapper,
} from "./style";
import { useNavigate } from "react-router-dom";

//página de autenticação
export default function Login() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {}, []);

  useEffect(() => {
    setIsLoaded(true);
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "hidden";
    };
  }, []);

  // lógica de autenticação
  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      console.log("Login bem-sucedido");
      navigate("/admin"); // redireciona para a página de administração
    } else {
      alert("Credenciais inválidas");
    }
  };

  return (
    <Container>
      <LoginContainer>
        <Title className={isLoaded ? "enter" : "loading"}>Login</Title>
        <InputWrapper>
          <Input
            required
            type="text"
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            required
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputWrapper>
        <Button onClick={handleLogin}>Entrar</Button>
      </LoginContainer>
    </Container>
  );
}
