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
import { FormMessage } from "../IconsContainer/style";

export default function ContactContainer() {
  const [isEmail, setIsEmail] = useState(true);
  const [message, setMessage] = useState("");

  const handleSubmitWhatsApp = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=5512992125236&text=${message}`
    );
  };

  const handleSubmitEmail = () => {
    window.open(`https://email.com/send?phone=5512992125236&text=${message}`);
  };

  return (
    <Container>
      <Title>Nos mande uma mensagem</Title>
      <MailWhatsDiv>
        <a onClick={() => setIsEmail(false)}>
          <Image src={whatsApp}></Image>
        </a>
        <a onClick={() => setIsEmail(true)}>
          <Image src={mail}></Image>
        </a>
      </MailWhatsDiv>
      {isEmail ? (
        <FormMessage>
          <Input placeholder="Nome"></Input>
          <Input placeholder="Email" type={"email"}></Input>
          <Input placeholder="Assunto"></Input>
          <Input placeholder="mensagem"></Input>
          <SendButton onClick={handleSubmitEmail} type="submit">
            Enviar
          </SendButton>
        </FormMessage>
      ) : (
        <FormMessage>
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="mensagem"
          ></Input>
          <SendButton onClick={handleSubmitWhatsApp} type="submit">
            Enviar
          </SendButton>
        </FormMessage>
      )}
    </Container>
  );
}
