import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;

  color: #434a69;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  padding-top: 5rem;
`;

export const Title = styled.h2`
  color: #fff;
  font-family: "Matchadal", sans-serif;
  font-size: 3rem;
  font-weight: 500;

  margin-bottom: 2.5rem;

  opacity: 0;
  transform: translateY(-50px);

  &.enter {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }
`;

export const PartnerWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
  flex-direction: column;
  }
`;
