import React from "react";
import { Container, Image, Text, Title, Wrapper } from "./style";
import wolfImg from "../../assets/wolf-img.png";
import GenericButton from "../GenericButton";

export default function InitialContainer() {
  return (
    <Container>
      <Wrapper>
        <Title>TOCOU ROMARINHO!!!</Title>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure odio,
          quam perspiciatis, dolor repellat ducimus. Maiores qui veniam culpa
          vel?
        </Text>
        <GenericButton width="70%" fontSize="1.5rem" padding='1.5rem 2rem'/>
      </Wrapper>
      <Image src={wolfImg}></Image>
    </Container>
  );
}
