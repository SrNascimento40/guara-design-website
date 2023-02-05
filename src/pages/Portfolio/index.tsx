import React from "react";
import { Container } from "./style";
import Card from "../../components/Card";
import PetPlan from "../../assets/Works/PetPlan.png";
import Invertido from "../../assets/Works/Invertido.png";
import PortfolioImage from "../../assets/Works/Portfolio.png";
import RunningApp from "../../assets/Works/RunningApp.png";

export default function Portfolio() {
  return (
    <Container>
      <a href="#">
        <Card
          size="portfolio"
          title="PetPlan"
          text="Site FullStack criado em equipe como projeto de conclusão do bootcamp de desenvolvimento FullStack da Gama Academy. Utilizado React, Javascript e Tailwind."
          image={PetPlan}
        />
      </a>
      <a href="#">
        <Card
          size="portfolio"
          title="Invertido"
          text="Projeto criado como parte do bootcamp de CSS e estilização realizado pela empresa Digital Innovation One. Utilizado apenas HTML, Javascript e CSS."
          image={Invertido}
        />
      </a>
      <a href="#">
        <Card
          size="portfolio"
          title="Portfolio"
          text="Projeto criado com o propósito de exibir outros trabalhos anteriores. Criado com ReactJs, NextJs, Styled-Components e Javascript."
          image={PortfolioImage}
        />
      </a>
      <a href="#">
        <Card
          size="portfolio"
          title="RunningApp"
          text="Aplicativo funcional que capta a distância e o tempo do usuário durante uma corrida. Criado com Expo, Typescript, React Native e Styled-components."
          image={RunningApp}
        />
      </a>
    </Container>
  );
}
