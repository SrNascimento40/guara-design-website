import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  position: absolute;
  justify-content: center;
  left: 50%;
  transform: translate(-50%, 0%);
  list-style: none;

  z-index: 9999;

  padding: 0.75rem 5rem;
  gap: 2.5rem;
  border-radius: 0 0 15px 15px;

  background: #76767687;

  @media (max-width: 1024px) {
    padding: 0.75rem 4rem;
    gap: 2rem;
  }
  @media (max-width: 768px) {
    padding: 0.75rem 3rem;
    gap: 1.5rem;
  }
  @media (max-width: 480px) {
    padding: 0.75rem;
    gap: 0.75rem;
    width: 100vw;
    border-radius: 0;
  }
  @media (max-width: 320px) {
    padding: 0.75rem;
    gap: 0.5rem;
    width: 100vw;
    border-radius: 0;
  }

  /* @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 480px) {
  }
  @media (max-width: 320px) {
  } */
`;

export const MenuItems = styled.li`
  display: flex;
  align-self: center;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  transition: 0.5s ease-in-out;

  &:hover {
    border-bottom: 3px solid #b8cbed;

    a {
      color: #b8cbed;
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

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
