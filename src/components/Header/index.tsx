import React from "react";
import GenericButton from "../GenericButton";
import { Container, HeaderList, Logo, MenuItem, MenuItems } from "./style";
import Icon from "../../assets/guara.png";
import { Link } from "react-router-dom";

const menuItems = [
  { label: "Home", link: "/" },
  { label: "Sobre nós", link: "/about" },
  { label: "Serviços", link: "/services" },
  { label: "Portfólio", link: "/portfolio" },
  { label: "Redes sociais", link: "/social-media" },
];

export default function Header() {
  return (
    <Container>
      <Link to={"/"}>
        <Logo src={Icon} alt="Logo" />
      </Link>
      <HeaderList>
        {menuItems.map((item, index) => (
          <MenuItems key={index}>
            <MenuItem to={item.link}>{item.label}</MenuItem>
          </MenuItems>
        ))}

        <Link to={"/contact"}>
          <GenericButton text="Faça um orçamento" />
        </Link>
      </HeaderList>
    </Container>
  );
}
