import React from "react";
import { Container, Image, ImageWrapper, Text, Title } from "./style";

interface IGenericButtonProps {
  size: string;
  text: string;
  image: string;
  title: string;
}

export default function Card(props: IGenericButtonProps) {
  return (
    <Container
      width={props.size == "portfolio" ? "100%" : "300px"}
      height={props.size == "portfolio" ? "425px" : "400px"}
    >
      <Title>{props.title}</Title>
      <ImageWrapper>
        <Image src={props.image} />
      </ImageWrapper>
      <Text>{props.text}</Text>
    </Container>
  );
}
