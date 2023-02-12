import React from "react";
import { Container, MenuItem, MenuItems } from "./style";
import Icon from "../../assets/guara.png";
import { Link } from "react-router-dom";

const menuItems = [
  { label: "Home", link: "/" },
  { label: "Sobre", link: "/about" },
  { label: "Blog", link: "/Blog" },
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
