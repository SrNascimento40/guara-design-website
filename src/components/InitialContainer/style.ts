import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-top: 11vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  overflow: hidden;
`;

const move = keyframes`
  0% {
    transform: translateX(-250px);
  }
  50% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(250px);
  }
`;

const fade = keyframes`
  0% {
    opacity: 0.0;
  }
  25% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 0.0;
  }
`;

export const Image = styled.img`
  width: 70vw;
  display: block;
  object-fit: contain;

  animation: ${move} 55s infinite linear, ${fade} 55s infinite ease-in-out;
`;

const move2 = keyframes`
  0% {
    transform: translateX(250px);
  }
  50% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-250px);
  }
`;

const fade2 = keyframes`
  0% {
    opacity: 0.0;
  }
  25% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 0.0;
  }
`;

export const Image2 = styled.img`
  width: 80vw;
  display: block;
  object-fit: contain;
  margin-right: -200px;
  margin-top: 40px;

  animation: ${move2} 55s infinite linear, ${fade2} 55s infinite ease-in-out;
`;

export const Image3 = styled.img`
  width: 55vw;
  position: absolute;
  left: -100px;
  top: 0;
  object-fit: contain;
  margin-right: -35px;
  margin-top: 25px;

  animation: ${move} 92s infinite linear, ${fade} 92s infinite ease-in-out;
`;

export const Image4 = styled.img`
  width: 50vw;
  position: absolute;
  right: -100px;
  top: 25px;
  object-fit: contain;
  margin-right: -200px;
  margin-top: 40px;

  animation: ${move2} 95s infinite linear, ${fade2} 95s infinite ease-in-out;
`;

export const Image5 = styled.img`
  width: 60vw;
  position: absolute;
  left: -400px;
  top: 0;

  animation: ${move} 185s infinite linear, ${fade} 185s infinite ease-in-out;
`;

export const Image6 = styled.img`
  width: 60vw;
  position: absolute;
  right: -210px;
  top: 0;
  object-fit: contain;
  margin-right: -200px;
  margin-top: 40px;

  animation: ${move2} 185s infinite linear, ${fade2} 185s infinite ease-in-out;
`;

export const Title = styled.h2`
  font-weight: 500;
  color: transparent;
  font-family: "Matchadal";

  cursor: default;

  font-size: 8rem;
  line-height: 8.5rem;
  letter-spacing: -5%;
  text-stroke: 1px solid rgba(255, 255, 255, 0.42);
  text-stroke-linejoin: round;
  text-stroke-width: 1px;
  -webkit-text-stroke-width: 1px;
  text-stroke-color: rgba(255, 255, 255, 0.42);
  -webkit-text-stroke-color: rgba(255, 255, 255, 0.42);

  opacity: 0;
  transform: translateY(50px);

  &.enter {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 1s ease-in-out, transform 1.5s ease-in-out;
  }

  @media (max-width: 1024px) {
    font-size: 7rem;
    line-height: 7.5rem;
  }
  @media (max-width: 768px) {
    font-size: 5rem;
    line-height: 6rem;
  }
  @media (max-width: 555px) {
    font-size: 4.25rem;
    line-height: 5.25rem;
  }
  @media (max-width: 480px) {
    font-size: 3rem;
    line-height: 3.75rem;
  }
  @media (max-width: 360px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
`;

export const Title2 = styled.h2`
  font-weight: 500;
  color: transparent;
  font-family: "Matchadal";

  cursor: default;

  font-size: 8rem;
  line-height: 8.5rem;
  letter-spacing: -5%;
  text-stroke: 2px solid rgba(255, 255, 255, 0.54);
  text-stroke-linejoin: round;
  text-stroke-width: 2px;
  -webkit-text-stroke-width: 2px;
  text-stroke-color: rgba(255, 255, 255, 0.54);
  -webkit-text-stroke-color: rgba(255, 255, 255, 0.54);

  opacity: 0;
  transform: translateY(50px);

  &.enter {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 1.25s ease-in-out, transform 1.5s ease-in-out;
  }

  @media (max-width: 1024px) {
    font-size: 7rem;
    line-height: 7.5rem;
  }
  @media (max-width: 768px) {
    font-size: 5rem;
    line-height: 6rem;
  }
  @media (max-width: 555px) {
    font-size: 4.25rem;
    line-height: 5.25rem;
  }
  @media (max-width: 480px) {
    font-size: 3rem;
    line-height: 3.75rem;
  }
  @media (max-width: 360px) {
    font-size: 2.5rem;
    line-height: 2.75rem;
  }
`;

export const Title3 = styled.h2`
  font-weight: 500;
  color: transparent;
  font-family: "Matchadal";

  cursor: default;

  font-size: 8rem;
  line-height: 8.5rem;
  letter-spacing: -5%;
  text-stroke: 4px solid rgba(255, 255, 255, 0.42);
  text-stroke-linejoin: round;
  text-stroke-width: 4px;
  -webkit-text-stroke-width: 4px;
  text-stroke-color: rgba(255, 255, 255, 0.42);
  -webkit-text-stroke-color: rgba(255, 255, 255, 0.42);

  opacity: 0;
  transform: translateY(50px);

  &.enter {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 1.5s ease-in-out, transform 1.5s ease-in-out;
  }

  @media (max-width: 1024px) {
    font-size: 7rem;
    line-height: 7.5rem;
  }
  @media (max-width: 768px) {
    font-size: 5rem;
    line-height: 6rem;
  }
  @media (max-width: 555px) {
    font-size: 4.25rem;
    line-height: 5.25rem;
  }
  @media (max-width: 480px) {
    font-size: 3rem;
    line-height: 3.75rem;
  }
  @media (max-width: 360px) {
    font-size: 2.5rem;
    line-height: 2.75rem;
  }
`;

export const Title4 = styled.h2`
  font-weight: 700;
  color: rgba(255, 255, 255, 0.4);
  font-family: "Matchadal";

  cursor: default;

  font-size: 8rem;
  line-height: 8.5rem;

  opacity: 0;
  transform: translateY(50px);

  &.enter {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 1.75s ease-in-out, transform 1.5s ease-in-out;
  }

  @media (max-width: 1024px) {
    font-size: 7rem;
    line-height: 7.5rem;
  }
  @media (max-width: 768px) {
    font-size: 5rem;
    line-height: 6rem;
  }
  @media (max-width: 555px) {
    font-size: 4.25rem;
    line-height: 5.25rem;
  }
  @media (max-width: 480px) {
    font-size: 3rem;
    line-height: 3.75rem;
  }
  @media (max-width: 360px) {
    font-size: 2.5rem;
    line-height: 2.75rem;
  }
`;

export const Title5 = styled.h2`
  font-weight: 900;
  color: rgba(255, 255, 255, 0.54);
  font-family: "Matchadal";
  cursor: default;

  font-size: 8rem;
  line-height: 8.5rem;

  opacity: 0;
  transform: translateY(50px);

  &.enter {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 2s ease-in-out, transform 1.5s ease-in-out;
  }

  @media (max-width: 1024px) {
    font-size: 7rem;
    line-height: 7.5rem;
  }
  @media (max-width: 768px) {
    font-size: 5rem;
    line-height: 6rem;
  }
  @media (max-width: 555px) {
    font-size: 4.25rem;
    line-height: 5.25rem;
  }
  @media (max-width: 480px) {
    font-size: 3rem;
    line-height: 3.75rem;
  }
  @media (max-width: 360px) {
    font-size: 2.5rem;
    line-height: 2.75rem;
  }
`;
