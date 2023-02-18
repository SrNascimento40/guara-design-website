import styled from "styled-components";

interface ICloudProps {
  left?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-top: 15vh;
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
  height: 100vh;
  overflow: hidden;
`;

export const Image = styled.img<ICloudProps>`
  width: 70vw;
  position: absolute;
  ${(props) =>
    props.left
      ? "left: 0; margin-left: -200px;"
      : "right: 0; margin-right: -200px;"};

  opacity: 0;
  transform: ${(props) =>
    props.left ? "translateX(-150px)" : "translateX(150px)"};
  overflow: hidden;

  &.enter {
    opacity: 1;
    transform: translateX(0);

    transition: opacity 3s ease-in-out, transform 5.5s ease-in-out;
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  color: transparent;
  font-family: "Matchadal";

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
`;

export const Title2 = styled.h2`
  font-weight: 500;
  color: transparent;
  font-family: "Matchadal";

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
`;

export const Title3 = styled.h2`
  font-weight: 500;
  color: transparent;
  font-family: "Matchadal";

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
`;

export const Title4 = styled.h2`
  font-weight: 700;
  color: rgba(255, 255, 255, 0.4);
  font-family: "Matchadal";

  font-size: 8rem;
  line-height: 8.5rem;

  opacity: 0;
  transform: translateY(50px);

  &.enter {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 1.75s ease-in-out, transform 1.5s ease-in-out;
  }
`;

export const Title5 = styled.h2`
  font-weight: 900;
  color: rgba(255, 255, 255, 0.54);
  font-family: "Matchadal";

  font-size: 8rem;
  line-height: 8.5rem;

  opacity: 0;
  transform: translateY(50px);

  &.enter {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 2s ease-in-out, transform 1.5s ease-in-out;
  }
`;
