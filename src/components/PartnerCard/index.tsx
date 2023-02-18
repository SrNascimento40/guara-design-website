import React from "react";
import { Container, Desc, Image } from "./style";
import { Link } from "react-router-dom";
import imagem from "../../assets/Images/guara.png";

export default function PartnerCard() {
  return (
    <Container>
      <Image src={imagem} />
      <Desc>Lorem Ipsum</Desc>
    </Container>
  );
}
