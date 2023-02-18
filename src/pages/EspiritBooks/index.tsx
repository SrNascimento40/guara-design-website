import React, { useEffect, useState } from "react";
import { AboutText, Container, Title } from "./style";

//página comas postagens cristãs
export default function EspiritBooks() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "hidden";
    };
  }, []);

  return (
    <Container>
      <Title className={isLoaded ? "enter" : "loading"}>Sobre</Title>
      <Title className={isLoaded ? "enter" : "loading"}>Sobre</Title>
      <Title className={isLoaded ? "enter" : "loading"}>Sobre</Title>
      <Title className={isLoaded ? "enter" : "loading"}>Sobre</Title>
      <Title className={isLoaded ? "enter" : "loading"}>Sobre</Title>
      <Title className={isLoaded ? "enter" : "loading"}>Sobre</Title>
      <Title className={isLoaded ? "enter" : "loading"}>Sobre</Title>
      <Title className={isLoaded ? "enter" : "loading"}>Sobre</Title>
      <Title className={isLoaded ? "enter" : "loading"}>Sobre</Title>
      <Title className={isLoaded ? "enter" : "loading"}>Sobre</Title>
      <Title className={isLoaded ? "enter" : "loading"}>Sobre</Title>
      <AboutText className={isLoaded ? "enter" : "loading"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cumque,
        quos reprehenderit voluptas, atque assumenda quis, repellendus nemo
        nulla numquam labore. Inventore, laboriosam esse. Voluptates ea eveniet
        dolor quam officiis?
      </AboutText>
    </Container>
  );
}
