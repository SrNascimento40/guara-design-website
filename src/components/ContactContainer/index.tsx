import React, { useState } from "react";
import {
  Container,
  Image,
  Input,
  MailWhatsDiv,
  SendButton,
  Title,
} from "./style";
import whatsApp from "../../assets/whatsapp-icon.svg";
import mail from "../../assets/mail-icon.svg";

export default function ContactContainer() {
  const [isEmail, setIsEmail] = useState(true);

  return (
    <>
      <Container>
        <Title>Nos mande uma mensagem</Title>
        <MailWhatsDiv>
          <a>
            <Image src={whatsApp}></Image>
          </a>
          <a>
            <Image src={mail}></Image>
          </a>
        </MailWhatsDiv>
        <Input placeholder="Nome"></Input>
        <Input placeholder="Email" type={"email"}></Input>
        <Input placeholder="Assunto"></Input>
        <Input placeholder="mensagem"></Input>
        <SendButton>Enviar</SendButton>
      </Container>
    </>
  );
}
