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
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  justify-content: center;
  height: 100vh;
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
  height: 40vw;
  position: absolute;
  ${(props) =>
    props.left
      ? "left: 0; margin-left: -50px;"
      : "right: 0; margin-right: -50px;"};

  opacity: 0;
  transform: translateX(50px);
  overflow: hidden;

  &.enter {
    opacity: 1;
    transform: translateX(0);
    ${(props) =>
      props.left
        ? "left: 0; margin-left: -5px;"
        : "right: 0; margin-right: -5px;"};

    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }
`;

export const Title = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1.25rem;

  opacity: 0;
  transform: translateX(-50px);

  &.enter {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }
`;

export const Text = styled.em`
  font-size: 1rem;
  font-weight: 400;
  font-family: "Poppins", sans-serif;

  text-align: justify;
  margin-bottom: 1.5rem;
  max-width: 500px;

  color: #fff;

  opacity: 0;
  transform: translateX(-50px);

  &.enter {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }
`;
