import React, { useEffect, useState } from "react";
import { AboutText, Container, Title } from "./style";

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Container>
      <Title className={isLoaded ? "enter" : "loading"}>Sobre nós</Title>
      <AboutText className={isLoaded ? "enter" : "loading"}>
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
