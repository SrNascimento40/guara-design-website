import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100vw;

  text-align: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 5rem 15% 1.5rem;

  @media (max-width: 768px) {
    padding: 3rem 0.5rem;
  }
`;

export const Title = styled.h2`
  color: #434a69;
  font-family: "Matchadal", sans-serif;
  font-size: 3rem;
  font-weight: 500;

  margin-bottom: 1.5rem;

  opacity: 0;
  transform: translateY(-50px);

  &.enter {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
    font-size: 2rem;
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    flex-direction: column;
    gap: 2rem;
  }
`;
