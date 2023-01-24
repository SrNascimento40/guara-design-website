import React from "react";
import GenericButton from "../GenericButton";
import { Container, HeaderList, Logo, MenuItem, MenuItems } from "./style";
import Icon from "../../assets/guara.png";

const menuItems = [
  { label: "Sobre nós", href: "#" },
  { label: "Serviços", href: "#" },
  { label: "Trabalhos", href: "#" },
  { label: "Redes sociais", href: "#" },
];

export default function Header() {
  return (
    <Container>
      <Logo src={Icon} alt="Logo" />
      <HeaderList>
        {menuItems.map((item, index) => (
          <MenuItems key={index}>
            <MenuItem href={item.href}>{item.label}</MenuItem>
          </MenuItems>
        ))}
        <GenericButton />
      </HeaderList>
    </Container>
  );
}
