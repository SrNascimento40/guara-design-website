import React, { useEffect, useState } from "react";
import { AboutText, Container, Title } from "./style";

//página comas postagens
export default function Books() {
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
      <Title className={isLoaded ? "enter" : "loading"}>Posts</Title>
      <AboutText className={isLoaded ? "enter" : "loading"}>
        Confira todas as postagens
      </AboutText>
    </Container>
  );
}
