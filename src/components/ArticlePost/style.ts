import styled from "styled-components";

interface IArticleProps {
  blogPage: boolean;
}

export const Container = styled.div<IArticleProps>`
  max-width: 90vw;
  display: flex;
  flex-direction: row;

  margin: 0 auto 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);

  background: rgba(210, 198, 236, 0);
  background: ${(props) =>
    props.blogPage
      ? "linear-gradient(0deg, rgba(210, 198, 236, 0.92) 0%, rgba(253, 231, 254, 0) 15%)"
      : "rgba(210, 198, 236, 0)"};
`;

export const Image = styled.img`
  width: 25vw;
  height: 15vw;
  margin-right: 3rem;
  background: radial-gradient(
    circle,
    rgba(64, 10, 65, 0.5) 0%,
    rgba(253, 231, 254, 0.5) 50%
  );
  object-fit: contain;
`;

export const TitlePost = styled.h3`
  color: #400a41;
  font-family: "Matchadal", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 3rem;
`;

export const TextPost = styled.p`
  color: #400a41;
  font-size: 1rem;
  font-weight: 400;
  max-width: 40vw;
`;

export const DateTimePost = styled.p`
  color: rgba(0, 0, 0, 0.48);
  font-size: 0.75rem;
  font-weight: 300;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
