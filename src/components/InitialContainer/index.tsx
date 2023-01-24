import React from 'react'
import { Container, Image, Title } from './style';
import wolfImg from "../../assets/wolf-img.png";


export default function InitialContainer() {
  return (
    <Container>
      <Title>
        TOCOU ROMARINHO!!!!!!!!!!!!!
      </Title>
      <Image src={ wolfImg }></Image>
    </Container>
  )
}
