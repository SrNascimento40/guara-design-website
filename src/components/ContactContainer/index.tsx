import React from "react";
import { Container, Input, Title } from "./style";

export default function ContactContainer() {
  return (
    <Container>
      <Title>Nos mande uma mensagem</Title>
      <Input placeholder="email" type={"email"}></Input>
      <Input placeholder="message"></Input>
      <p>
        seria legal aqui tem um toggle button onde a pessoa pode alternar entre
        enviar um email ou uma mensagem no whatas app
      </p>
    </Container>
  );
}
