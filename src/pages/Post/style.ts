import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  width: 100%;

  align-items: center;
  justify-content: center;
  padding: 15vh 0;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  width: 90vw;
  padding: 2.5rem 6rem;
  border-radius: 15px;
  border: 2px solid rgba(210, 198, 236, 1);

  align-items: center;
  justify-content: center;

  background: rgba(210, 198, 236, 0.75);
`;

export const Title = styled.h1`
  color: #434a69;
  font-size: 3.5rem;
  line-height: 3.75rem;
  margin-bottom: 15px;
  text-transform: uppercase;
  font-family: "Yanone Kaffeesatz", sans-serif;
  word-break: break-word;
  white-space: pre-wrap;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 982px;
  margin: 2.5rem auto 1.25rem;
`;

export const Date = styled.p`
  color: rgba(67, 74, 105, 0.5);
  text-align: start;
  width: 100%;
  margin-bottom: 2.5rem;
`;

export const Text = styled.p`
  font-size: 1.125rem;
  line-height: 2rem;
  color: #434a69;
  word-break: break-word;
  white-space: pre-wrap;
`;
