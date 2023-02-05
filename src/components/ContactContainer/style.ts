import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  width: 50%;
  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  opacity: 0;
  transform: translateY(50px);

  &.enter {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }
`;

export const Input = styled.input`
  color: #262626;
  width: 400px;
  margin-bottom: 0.5rem;
`;

export const Title = styled.h2`
  color: #f2f2f2;
  font-size: 2rem;
  font-weight: 800;

  margin-bottom: 1.5rem;
`;

export const SendButton = styled.button`
  padding: 0.6rem 2rem;
  color: #d9ad77;
  cursor: pointer;
  border-radius: 10px;

  font-size: 1rem;
  font-weight: 600;
`;

export const MailWhatsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 40px;
  margin: 0 2.5rem 2.5rem;

  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    mix-blend-mode: hard-light;
  }
`;

export const FormMessage = styled.form`
  display: flex;
  flex-direction: column;
`;
