import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  align-items: flex-end;
  justify-content: space-between;
  padding: 0px 3.5rem;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;

  padding-top: 30vh;
`;

export const Image = styled.img`
  height: 300px;
`;

export const Title = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  color: #f2f2f2;
  margin-bottom: 1.5rem;
`;

export const Text = styled.em`
  font-size: 1.125rem;
  font-weight: 400;
  font-family: "Poppins", sans-serif;

  text-align: justify;
  margin-bottom: 1.25rem;
  max-width: 500px;

  color: #f2f2f2;
`;
