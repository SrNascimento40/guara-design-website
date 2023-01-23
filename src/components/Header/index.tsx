import React from "react";
import GenericButton from "../GenericButton";
import { Container, HeaderList, Logo, MenuItem, MenuItems } from "./style";

export default function Header() {
  return (
    <Container>
      <Logo
        src="https://yt3.ggpht.com/MCCb1zitF9CkShPKTkyz_j6abGKQDwYlTr1Iw9F5_gFwVCc7SS0h-zNp1hW870Cs-rUuXNLLaNU=s48-c-k-c0x00ffffff-no-rj"
        alt="Logo"
      />
      <HeaderList>
        <MenuItems>
          <MenuItem href="#">Dj 
          Dudah
        </MenuItem>
        </MenuItems>
        <MenuItems>
          <MenuItem href="#">
            Romário
          </MenuItem>
        </MenuItems>
        <GenericButton />
      </HeaderList>
    </Container>
  );
}
