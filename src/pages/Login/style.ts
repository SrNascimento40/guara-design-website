import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #434a69;
`;

export const Title = styled.h2`
  color: #434a69;
  font-family: "Matchadal", sans-serif;
  font-size: 3rem;
  font-weight: 500;

  opacity: 0;
  transform: translateY(-50px);

  &.enter {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }
`;

export const LoginContainer = styled.div`
  height: 70vh;
  width: 60vh;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  border-radius: 5px;
  border: solid 3px rgba(155, 23, 200, 0.1);
  background-color: rgba(155, 23, 200, 0.13);
`;

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
`;

export const Input = styled.input`
  border-radius: 5px;
  background-color: transparent;
  width: 100%;
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  outline: none;
`;

export const Button = styled.button`
  border-radius: 15px;
  padding: 0.75rem;
  font-size: 2rem;
  margin-top: 1.5rem;

  background: rgba(0, 0, 0, 0.8);
  color: white;

  margin: 2rem 0rem;
`;

export const ErrorMessage = styled.p`
  font-size: 1.125rem;
  margin-top: 1.5rem;
  color: red;
`;
