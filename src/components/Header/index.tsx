import React from "react";
import GenericButton from "../GenericButton";
import { Container, HeaderList, Logo, MenuItem, MenuItems } from "./style";
import Icon from "../../assets/guara.png";

const menuItems = [
  { label: "Sobre nós", link: "/about" },
  { label: "Serviços", link: "/services" },
  { label: "Trabalhos", link: "/portfolio" },
  { label: "Redes sociais", link: "/social-media" },
];

export default function Header() {
  return (
    <Container>
      <Logo src={Icon} alt="Logo" />
      <HeaderList>
        {menuItems.map((item, index) => (
          <MenuItems key={index}>
            <MenuItem to={item.link}>{item.label}</MenuItem>
          </MenuItems>
        ))}
        <GenericButton text="Faça um orçamento" />
      </HeaderList>
    </Container>
  );
}
