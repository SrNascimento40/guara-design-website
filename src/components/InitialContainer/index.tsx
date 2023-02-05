import React, { useEffect, useState } from "react";
import { Container, Image, Text, Title, Wrapper } from "./style";
import wolfImg from "../../assets/wolves.png";
import GenericButton from "../GenericButton";
import { Link } from "react-router-dom";

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
      <Image src={wolfImg} className={isLoaded ? "enter" : "loading"}></Image>
    </Container>
  );
}
