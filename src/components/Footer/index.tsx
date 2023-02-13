import React from "react";
import { Container, Image } from "./style";
import GuaraLogo from "../../assets/Images/guara.png";

export default function Footer() {
  return (
    <Container>
      <a href="#">
        <Image src={GuaraLogo} />
      </a>
    </Container>
  );
}
