import React from "react";
import { Container } from "./style";
import Card from "../../components/Card";
import wolf from "../../assets/wolf-img.png";

export default function Portfolio() {
  return (
    <Container>
      <Card
        size="portfolio"
        title="Limpeza de chão"
        text="Com profissionais qualificados, garantimos um chão brilhante."
        image={wolf}
      />
      <Card
        size="portfolio"
        title="Limpeza de chão"
        text="Com profissionais qualificados, garantimos um chão brilhante."
        image={wolf}
      />
      <Card
        size="portfolio"
        title="Limpeza de chão"
        text="Com profissionais qualificados, garantimos um chão brilhante."
        image={wolf}
      />
      <Card
        size="portfolio"
        title="Limpeza de chão"
        text="Com profissionais qualificados, garantimos um chão brilhante."
        image={wolf}
      />
    </Container>
  );
}
