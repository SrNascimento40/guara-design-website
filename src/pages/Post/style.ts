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

  opacity: 0;
  transform: translateY(150px);

  &.enter {
    opacity: 1;
    transform: translateY(0);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1.5rem;
  }
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

  @media (max-width: 768px) {
    text-align: center;
    font-size: 2.5rem;
    line-height: 2.75rem;
    margin: 2rem 0 0;
  }

  @media (max-width: 410px) {
    font-size: 2rem;
    line-height: 2.25rem;
    margin: 15px 0;
  }

  @media (max-width: 340px) {
    font-size: 1.5rem;
    line-height: 1.75rem;
    margin-bottom: 10px 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 982px;
  margin: 2.5rem auto 1.25rem;

  @media (max-width: 410px) {
    margin: 0 auto 1.25rem;
  }
`;

export const Date = styled.p`
  color: rgba(67, 74, 105, 0.5);
  text-align: start;
  width: 100%;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const Text = styled.p`
  font-size: 1.125rem;
  line-height: 2rem;
  color: #434a69;
  white-space: pre-wrap;

  @media (max-width: 768px) {
    text-align: start;
  }
`;

export const ShareIconsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: end;
  justify-content: end;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;

    a {
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin: 5rem 0 1rem;
      padding: 0 2rem;
    }
  }
`;

export const ShareIcon = styled.a`
  text-decoration: none;
  font-size: 1rem;
  margin-right: 0.5rem;
  margin-top: 5rem;
  cursor: pointer;
  margin-right: 1rem;

  svg {
    color: #333;
  }
`;
