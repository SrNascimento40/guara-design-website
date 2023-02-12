import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: -webkit-fill-available;
  position: absolute;
  justify-content: flex-start;

  padding: 0.75rem 5rem;
  gap: 2.5rem;

  background-color: #cca1f4;
  list-style: none;
`;

export const MenuItems = styled.li`
  align-self: center;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: 0.3s ease-in-out;

  &:hover {
    border-bottom: 2px solid #1d021d;

    a {
      color: #1d021d;
    }
  }
`;

export const MenuItem = styled(Link)`
  color: #400a41;
  font-size: 1.5rem;
  font-weight: 400;
  transition: color 0.3s ease-in-out;
`;
