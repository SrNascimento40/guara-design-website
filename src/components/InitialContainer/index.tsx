import React from "react";
import { Container, Image, Text, Title, Wrapper } from "./style";
import wolfImg from "../../assets/wolf-img.png";
import GenericButton from "../GenericButton";

export default function InitialContainer() {
  return (
    <Container>
      <Wrapper>
        <Title>Guará Design</Title>
        <Text>
          Transformando ideias em resultados
        </Text>
        <GenericButton width="70%" textColor="#BA8A0B" textHoverColor="#EBAC02" fontSize="1.5rem" padding="1.5rem 2rem" />
      </Wrapper>
      <Image src={wolfImg}></Image>
    </Container>
  );
}
