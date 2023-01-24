import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  align-self: center;
  justify-content: space-between;
  padding: 30px 34px;
`;

export const Logo = styled.img`
  align-self: center;
  height: 45px;
  cursor: pointer;
`;

export const HeaderList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  justify-content: space-between;
  list-style: none;

  gap: 2.5rem;
`;

export const MenuItems = styled.li`
  align-self: center;
  padding: 0.5rem 0;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  transition: 0.3s ease-in-out;

  &:hover {
    border-bottom: 3px solid #FFDDB2;

    a {
      color: #FFDDB2;
    }
  }
`;

export const MenuItem = styled.a`
  color: #D9AD77;
  font-size: 1rem;
  font-weight: 600;
  transition: color 0.3s ease-in-out;
`;
