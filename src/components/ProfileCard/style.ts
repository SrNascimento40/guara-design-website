import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: end;

  margin-bottom: 3.5rem;
  @media (max-width: 768px) {
    max-width: 100vw;
    flex-direction: column-reverse;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 450px;
  @media (max-width: 768px) {
    justify-content: center;
    width: 50vw;
  }
`;

export const StarImg = styled.img`
  width: 4vw;
  position: absolute;

  top: 2rem;
  left: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CloudImg = styled.img`
  width: 8vw;
  position: absolute;

  bottom: -1rem;
  right: 10rem;

  animation: move-clouds 13.5s ease-in-out infinite;

  @keyframes move-clouds {
    0% {
      transform: translateX(-10px);
    }
    50% {
      transform: translateX(57px);
    }
    100% {
      transform: translateX(-10px);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CloudImg1 = styled.img`
  width: 6vw;
  position: absolute;

  bottom: -1.5rem;
  right: 15rem;

  animation: move-clouds 12.5s ease-in-out infinite;

  @keyframes move-clouds {
    0% {
      transform: translateX(-25px);
    }
    50% {
      transform: translateX(65px);
    }
    100% {
      transform: translateX(-25px);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 25vw;
  height: 20vw;
  margin-right: 3rem;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(201, 33, 55, 1) 0%,
    rgba(1, 33, 55, 0) 70%
  );
  object-fit: contain;

  @media (max-width: 768px) {
    margin-right: 0rem;
    width: 45vw;
    height: 100%;
  }
`;

export const TitlePost = styled.h3`
  color: #fff;
  font-family: "Matchadal", sans-serif;
  font-size: 2.25rem;
  font-weight: 500;
  line-height: 3rem;
  align-self: center;

  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

export const TextPost = styled.p`
  font-family: "Matchadal", sans-serif;
  color: #fff;
  font-size: 1rem;
  font-weight: 300;
  max-width: 40vw;
  line-height: 1.75rem;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 1rem;
    font-size: 0.825rem;
    font-weight: 100;
    max-width: fit-content;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    align-items: center;
  }
`;
