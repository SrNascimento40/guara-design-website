import React from "react";
import { Container, MenuItem, MenuItems } from "./style";
import { Link } from "react-router-dom";

const menuItems = [
  { label: "Inicio", link: "/" },
  { label: "Livros", link: "/livros" },
  { label: "EE", link: "/ee" },
  { label: "Parceiros", link: "/parceiros" },
  { label: "Sobre", link: "/sobre" },
  { label: "Contato", link: "/contato" },
];

export default function Header() {
  return (
    <Container>
      {menuItems.map((item, index) => (
        <MenuItems key={index}>
          <MenuItem to={item.link}>{item.label}</MenuItem>
        </MenuItems>
      ))}
    </Container>
  );
}
