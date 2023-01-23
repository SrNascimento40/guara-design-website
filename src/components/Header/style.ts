import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  align-self: center;
  justify-content: space-between;
  padding: 30px 20px;
`;

export const Logo = styled.img`
  height: 45px;
`;

export const HeaderList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  justify-content: space-between;
  list-style: none;

  gap: 2rem;
`;

export const MenuItems = styled.li`
  align-self: center;
`;

export const MenuItem = styled.a`
  color: #d9ad77;
  font-size: 1rem;

  &:hover {
    color: #FFDDB2;
  }
`;
