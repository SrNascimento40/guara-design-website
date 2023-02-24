import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding: 0 30%;

  color: #434a69;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  @media (max-width: 768px) {
    padding: 0 5%;
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
`;

export const AboutText = styled.p`
  color: #434a69;
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

export const Image = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 50vh;
  z-index: -1;

  opacity: 0;
  transform: translateY(50px);

  &.enter {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
