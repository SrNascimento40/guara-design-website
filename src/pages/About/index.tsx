import React from "react";
import { AboutText, Container, Title } from "./style";

export default function About() {
  return (
    <Container>
      <Title>Sobre nós</Title>
      <AboutText>
        A Guara Design é uma empresa inovadora que surgiu em 2023 com a missão
        de levar as pequenas empresas para o mundo digital.
        <br />
        Com uma equipe especializada em desenvolvimento de sites, design e
        marketing digital, a Guara oferece soluções completas para garantir o
        crescimento e sucesso dos seus clientes.
      </AboutText>
    </Container>
  );
}
