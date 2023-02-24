import React, { useEffect, useState } from "react";
import {
  Container,
  Image,
  Image2,
  Image5,
  Image6,
  ImageWrapper,
  Title,
  Title2,
  Title3,
  Title4,
  Title5,
  Wrapper,
} from "./style";
import cloud2 from "../../assets/Images/cloud.png";
import cloud1 from "../../assets/Images/cloud2.png";
import { Image3, Image4 } from './style';

export default function InitialContainer() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Container>
      <Wrapper>
        <Title className={isLoaded ? "enter" : "loading"}>
          Noite Literária
        </Title>
        <Title2 className={isLoaded ? "enter" : "loading"}>
          Noite Literária
        </Title2>
        <Title3 className={isLoaded ? "enter" : "loading"}>
          Noite Literária
        </Title3>
        <Title4 className={isLoaded ? "enter" : "loading"}>
          Noite Literária
        </Title4>
        <Title5 className={isLoaded ? "enter" : "loading"}>
          Noite Literária
        </Title5>
      </Wrapper>
      <ImageWrapper>
        <Image
          src={cloud1}
        ></Image>
        <Image2
          src={cloud2}
        ></Image2>
        <Image3
          src={cloud1}
        ></Image3>
        <Image4
          src={cloud2}
        ></Image4>
        <Image5
          src={cloud1}
        ></Image5>
        <Image6
          src={cloud1}
        ></Image6>
      </ImageWrapper>
    </Container>
  );
}
