import React from "react";
import { Container, Image, ImageWrapper, Text, Title } from "./style";

interface IGenericButtonProps {
  text: string;
  image: string;
  title: string;
}

export default function Card(props: IGenericButtonProps) {
  return (
    <>
      <Container>
        <Title>{props.title}</Title>
        <ImageWrapper>
          <Image src={props.image} />
        </ImageWrapper>
        <Text>{props.text}</Text>
      </Container>
    </>
  );
}
