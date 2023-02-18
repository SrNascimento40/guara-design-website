import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: end;
`;

export const ImageContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 450px;
`;

export const StarImg = styled.img`
  width: 4vw;
  position: absolute;

  top: 2rem;
  left: 2rem;
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
`;

export const Image = styled.img`
  width: 25vw;
  height: 20vw;
  margin-right: 3rem;
  background: radial-gradient(
    circle,
    rgba(201, 33, 55, 1) 0%,
    rgba(1, 33, 55, 0) 70%
  );
  object-fit: contain;
`;

export const TitlePost = styled.h3`
  color: #fff;
  font-family: "Matchadal", sans-serif;
  font-size: 2.25rem;
  font-weight: 500;
  line-height: 3rem;
  align-self: center;
`;

export const TextPost = styled.p`
  font-family: "Matchadal", sans-serif;
  color: #fff;
  font-size: 1rem;
  font-weight: 300;
  max-width: 40vw;
  line-height: 1.75rem;
  text-align: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
