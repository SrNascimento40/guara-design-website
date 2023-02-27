import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;

  color: #434a69;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 5rem 5rem 1.5rem;

  @media (max-width: 768px) {
  padding: 5rem 0rem 1rem;
  }
`;
