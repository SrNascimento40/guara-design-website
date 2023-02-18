import React, { useEffect, useState } from "react";
import { Container, Desc, Image } from "./style";
import { Link } from "react-router-dom";
import imagem from "../../assets/Images/guara.png";

export default function PartnerCard() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <Container className={isLoaded ? "enter" : "loading"}>
      <Image src={imagem} />
      <Desc>Lorem Ipsum</Desc>
    </Container>
  );
}
