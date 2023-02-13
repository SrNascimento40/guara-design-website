import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #fde7fe;
  color: #400a41;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 30%;
`;

export const Title = styled.h2`
  color: #400a41;
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
`;

export const AboutText = styled.p`
  color: #400a41;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.75rem;

  opacity: 0;
  transform: translateY(50px);

  &.enter {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }
`;
