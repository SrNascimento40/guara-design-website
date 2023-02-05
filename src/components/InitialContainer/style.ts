import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 6rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  justify-content: center;
  height: 100vh;
`;

export const Image = styled.img`
  height: 300px;

  opacity: 0;
  transform: translateX(50px);

  &.enter {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }
`;

export const Title = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  color: #f2f2f2;
  margin-bottom: 1.25rem;

  opacity: 0;
  transform: translateX(-50px);

  &.enter {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }
`;

export const Text = styled.em`
  font-size: 1rem;
  font-weight: 400;
  font-family: "Poppins", sans-serif;

  text-align: justify;
  margin-bottom: 1.5rem;
  max-width: 500px;

  color: #f2f2f2;

  opacity: 0;
  transform: translateX(-50px);

  &.enter {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }
`;
