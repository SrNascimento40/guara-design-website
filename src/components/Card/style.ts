import styled from "styled-components";

interface IContainerProps {
  width: string;
  height: string;
  hoverSize: string;
}

export const Container = styled.div<IContainerProps>`
  background-color: rgba(0, 0, 0, 0.1);
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 1.25rem 1.25rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: background-color 0.3s ease-in-out;

  opacity: 0;
  transform: translateY(50px);

  &.enter {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    div {
      img {
        height: ${(props) => props.hoverSize};
      }
    }
  }
`;

export const Image = styled.img`
  height: 100%;
  transition: height 0.3s ease-in-out;
`;

export const ImageWrapper = styled.div`
  width: 280px;
  height: 30%;
  margin-bottom: 3.5rem;
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
