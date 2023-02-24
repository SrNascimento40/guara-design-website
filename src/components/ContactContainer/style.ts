import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  width: 50%;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 15px;
  opacity: 0;
  transform: translateY(50px);
  &.enter {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }

  @media (max-width: 768px) {
  width: 90%;
  padding: 1.25rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: start;
`;

export const Title = styled.h2`
  color: #434a69;
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
`;

export const LinkContact = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;

  color: #434a69;
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;

  svg {
    margin-right: 1rem;
  }
  @media (max-width: 768px) {
  font-size: 1.25rem;
  }
`;
