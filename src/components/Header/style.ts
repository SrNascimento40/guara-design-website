import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  list-style: none;

  padding: 0.75rem 5rem;
  gap: 2.5rem;
  border-radius: 0 0 15px 15px;

  background: #68436987;
`;

export const MenuItems = styled.li`
  align-self: center;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  transition: 0.5s ease-in-out;

  &:hover {
    border-bottom: 3px solid #1d021d;

    a {
      color: #1d021d;
    }
  }
`;

export const MenuItem = styled(Link)`
  color: #fff;
  font-size: 1.5rem;
  text-shadow: 0px 4px 2px rgba(0, 0, 0, 0.25);

  font-weight: 400;
  transition: color 0.3s ease-in-out;
  font-family: "Matchadal";
`;
