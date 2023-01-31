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
`;

export const Title = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  color: #f2f2f2;
  margin-bottom: 1.25rem;
`;

export const Text = styled.em`
  font-size: 1rem;
  font-weight: 400;
  font-family: "Poppins", sans-serif;

  text-align: justify;
  margin-bottom: 1.5rem;
  max-width: 500px;

  color: #f2f2f2;
`;
