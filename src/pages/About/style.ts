import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #262626;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 30%;
`;

export const Title = styled.h2`
  color: #f2f2f2;
  font-size: 4rem;
  font-weight: 800;

  margin-bottom: 1.5rem;

  opacity: 0;
  transform: translateY(-50px);

  &.enter {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }
`;

export const AboutText = styled.p`
  color: #e9e9e9;
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.75rem;

  opacity: 0;
  transform: translateY(50px);

  &.enter {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }
`;
