import React, { useEffect, useState } from "react";
import { AboutText, Container, Title } from "./style";

//página com as parcerias
export default function Partnership() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Container>
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
