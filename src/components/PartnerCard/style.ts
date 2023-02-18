import styled from "styled-components";

export const Container = styled.div`
  max-width: 90vw;
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 0 auto 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);

  background: rgba(210, 198, 236, 0.5);
`;

export const Image = styled.img`
  width: 25vw;
  height: 45vw;
  margin-right: 3rem;
  object-fit: contain;
`;
