import styled from "styled-components";

export const Button = styled.button`
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: #d9ad77;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  font-size: 1rem;

  &:before {
    content: "";
    background: linear-gradient(
      45deg,
      #d9ad77,
      #ff8c00,
      #89591f,
      #a6845b,
      #ff8c00,
      #735a3c,
      #d9ad77
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
    color: #FFDDB2;
  }
`;
