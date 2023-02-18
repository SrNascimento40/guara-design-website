import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 auto 2rem;
  padding-bottom: 5rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  border-right: 2px solid rgba(0, 0, 0, 0.2);

  background: rgba(210, 198, 236, 0.5);

  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    background: rgba(210, 198, 236, 0.74);
    box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.4),
      0px 0px 0px 3px rgba(255, 255, 255, 0.2),
      0px 0px 0px 6px rgba(255, 255, 255, 0.05);
  }
`;

export const Image = styled.img`
  width: 70%;
  object-fit: contain;
  margin-bottom: 5rem;
`;

export const Desc = styled.p`
  font-weight: 500;
  font-size: 2rem;
`;
