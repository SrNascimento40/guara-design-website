import React from "react";
import { Container, Image, Text, Title, Wrapper } from "./style";
import wolfImg from "../../assets/wolf-img.png";
import GenericButton from "../GenericButton";
import { Link } from "react-router-dom";

export default function InitialContainer() {
  return (
    <Container>
      <Wrapper>
        <Title>Guará Design</Title>
        <Text>Transformando ideias em resultados</Text>
        <Link to={"/contact"}>
          <GenericButton
            width="70%"
            textColor="#BA8A0B"
            textHoverColor="#EBAC02"
            fontSize="1.25rem"
            padding="0.75rem"
            text="Agende uma reunião"
          />
        </Link>
      </Wrapper>
      <Image src={wolfImg}></Image>
    </Container>
  );
}
