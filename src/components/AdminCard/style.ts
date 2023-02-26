import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 2rem;
  padding-bottom: 5rem;
  padding-top: 1rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  border-right: 2px solid rgba(0, 0, 0, 0.2);

  background: rgba(210, 198, 236, 0.5);

  &:hover {
    transition: 0.3s ease-in-out;
    transform: scale(1.05) !important;
    background: rgba(210, 198, 236, 0.74);
    box-shadow: 0px 0px 0px 1px rgba(255, 255, 255, 0.4),
      0px 0px 0px 3px rgba(255, 255, 255, 0.2),
      0px 0px 0px 6px rgba(255, 255, 255, 0.05);
  }

  opacity: 0;
  transform: translateX(50px);

  &.enter {
    opacity: 1;
    transform: translateX(0);
    transition: 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    padding: 2rem;
    height: 70vw;
    width: 80vw;
  }
`;

export const TitleCard = styled.p`
  color: #434a69;
  font-family: "Matchadal", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
`;
