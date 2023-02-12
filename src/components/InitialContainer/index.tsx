import React, { useEffect, useState } from "react";
import { Container, Image, Text, Title, Wrapper } from "./style";
import wolfImg from "../../assets/wolves.png";

export default function InitialContainer() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Container>
      <Wrapper>
        <Title className={isLoaded ? "enter" : "loading"}>Guará Design</Title>
        <Text className={isLoaded ? "enter" : "loading"}>
          Transformando ideias em resultados
        </Text>
      </Wrapper>
      <Image src={wolfImg} className={isLoaded ? "enter" : "loading"}></Image>
    </Container>
  );
}
