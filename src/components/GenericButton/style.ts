import styled from "styled-components";

interface IButtonProps {
  width?: string;
  fontSize?: string;
  padding?: string;
  textColor?: string;
  textHoverColor?: string;
}

export const Button = styled.button<IButtonProps>`
  padding: ${(props) => props.padding || "0.6rem 2rem"};
  border: none;
  outline: none;
  color: ${(props) => props.textColor || "#d9ad77"};
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  font-size: ${(props) => props.fontSize || "1rem"};
  font-weight: 600;
  width: ${(props) => props.width || "auto"};

  opacity: 0;
  transform: translateX(-25px);

  &.enter {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.75s ease-in-out, transform 0.5s ease-in-out;
  }

  &:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ffbc00,
      #ff7400,
      #8b5e33,
      #663300,
      #ffbc00
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing-button-85 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  @keyframes glowing-button-85 {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #262626;
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  &:hover {
    color: ${(props) => props.textHoverColor || "#FFDDB2"};
    background: linear-gradient(
      45deg,
      rgba(255, 188, 0, 0.09),
      rgba(255, 116, 0, 0.3),
      rgba(139, 94, 51, 0.09),
      rgba(102, 51, 0, 0.09),
      rgba(255, 188, 0, 0.19)
    );
  }
`;
