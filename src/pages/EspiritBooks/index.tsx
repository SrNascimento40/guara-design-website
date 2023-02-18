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
      <Title className={isLoaded ? "enter" : "loading"}>EE</Title>
      <AboutText className={isLoaded ? "enter" : "loading"}>
        Livros com a temática EE
      </AboutText>
    </Container>
  );
}
