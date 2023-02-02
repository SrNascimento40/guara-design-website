import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  width: 300px;
  height: 400px;
  padding: 1.25rem 1.25rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ImageWrapper = styled.div`
  width: 280px;
  height: 30%;
  margin-bottom: 3.5rem;
`;

export const Image = styled.img`
  height: 100%;
`;

export const Title = styled.h2`
  color: #f2f2f2;
  font-size: 1.5rem;
  font-weight: 700;

  margin-bottom: 5rem;
`;

export const Text = styled.p`
  color: #f2f2f2;
  font-size: 1rem;
  font-weight: 400;
`;
