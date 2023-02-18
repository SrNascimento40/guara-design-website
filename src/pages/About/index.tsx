import React, { useEffect, useState } from "react";
import { AboutText, Container, Image, Title } from "./style";
import emojis from "../../assets/Images/emojis.png";

//página sobre a autora do blog
export default function About() {
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
      <Image src={emojis} className={isLoaded ? "enter" : "loading"} />
    </Container>
  );
}
