import React from "react";
import { Container } from "./style";
import Card from "../../components/Card";
import wolf from "../../assets/wolf-img.png";
import guara from "../../assets/guara.png";
import wolves from "../../assets/wolves.png";

export default function Services() {
  return (
    <Container>
      <Card
        title="Limpeza de chão"
        text="Com profissionais qualificados, garantimos um chão brilhante."
        image={wolf}
      />
      <Card
        title="Sujeira de chão"
        text="Com profissionais qualificados, garantimos um chão podre."
        image={guara}
      />
      <Card
        title="Ignoramento de chão"
        text="Com profissionais qualificados, garantimos que vamos ignorar seu chão."
        image={wolves}
      />
    </Container>
  );
}
