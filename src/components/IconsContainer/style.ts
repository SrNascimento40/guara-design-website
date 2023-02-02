import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 8rem 10% 1rem;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
`;

export const Image = styled.img`
  height: 148px;
  margin: 0 2.5rem;
`;

export const FormMessage = styled.form`
  display: flex;
  flex-direction: column;
`;
