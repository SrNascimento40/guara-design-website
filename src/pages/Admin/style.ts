import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #434a69;
`;

export const LoginContainer = styled.div`
  height: 70vh;
  width: 60vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: rgba(155, 23, 200, 0.13);
`;

export const InputLogin = styled.input`
  border-radius: 5px;
  height: 2.25rem;
  width: 45vh;
  margin-bottom: 0.5rem;
`;

export const InputPassword = styled.input`
  border-radius: 5px;
  height: 2.25rem;
  width: 45vh;
  margin-bottom: 2rem;
`;

export const Button = styled.button`
  border-radius: 15px;
  padding: 0.5rem;
  font-size: 2rem;

  background: rgba(0, 0, 0, 0.8);
  color: white;
`;
