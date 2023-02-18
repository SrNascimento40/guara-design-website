import React, { useState } from "react";
import {
  Button,
  LoginContainer,
  Container,
  InputLogin,
  InputPassword,
} from "./style";
import { useNavigate } from "react-router-dom";

//página de autenticação
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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
        <InputLogin
          type="text"
          placeholder="Usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputPassword
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Entrar</Button>
      </LoginContainer>
    </Container>
  );
}
