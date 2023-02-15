import React from "react";
import {
  Container,
  Image,
  TitlePost,
  TextPost,
  TextWrapper,
  ImageContainer,
  StarImg,
  CloudImg,
  CloudImg1,
} from "./style";
import profilePic from "../../assets/Images/profilePic.png";
import Vector from "../../assets/Images/Vector.png";
import smallCloud from "../../assets/Images/small-cloud.png";

export default function ProfileCard() {
  return (
    <Container>
      <TextWrapper>
        <TitlePost>Mariana GetNinjas</TitlePost>
        <TextPost>Aqui escrevo sobre livros. Good to have you here!</TextPost>
      </TextWrapper>
      <ImageContainer>
        <StarImg src={Vector} />
        <CloudImg src={smallCloud} />
        <CloudImg1 src={smallCloud} />
        <Image src={profilePic} />
      </ImageContainer>
    </Container>
  );
}
