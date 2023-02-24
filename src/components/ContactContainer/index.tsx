import React, { useEffect, useState } from "react";
import { Container, LinkContact, Title, Wrapper } from "./style";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function ContactContainer() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Container className={isLoaded ? "enter" : "loading"}>
      <Title>Nos mande uma mensagem</Title>
      <Wrapper>
        <LinkContact href={`https://api.whatsapp.com/send?phone=11991919191`} target="_blank">
          <FaWhatsapp /> +55 11 99191-9191
        </LinkContact>
        <LinkContact href={`mailto:email@email.com`} target="_blank">
          <FaEnvelope /> email@email.com
        </LinkContact>
      </Wrapper>
    </Container>
  );
}
