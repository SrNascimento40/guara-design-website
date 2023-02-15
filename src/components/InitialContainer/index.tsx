import React, { useEffect, useState } from "react";
import {
  Container,
  Image,
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
import smallCloud from "../../assets/Images/small-cloud.png";

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
          left={true}
          className={isLoaded ? "enter" : "loading"}
        ></Image>
        <Image
          src={cloud2}
          left={false}
          className={isLoaded ? "enter" : "loading"}
        ></Image>
      </ImageWrapper>
    </Container>
  );
}
