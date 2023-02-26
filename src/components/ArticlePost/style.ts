import styled from "styled-components";

interface IArticleProps {
  blogPage?: boolean;
  admin?: boolean;
}

export const Container = styled.div<IArticleProps>`
  max-width: 90vw;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  margin: 0 auto 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);

  background: rgba(210, 198, 236, 0);
  background: ${(props) =>
    props.blogPage
      ? "linear-gradient(0deg, rgba(210, 198, 236, 0.92) 0%, rgba(253, 231, 254, 0) 15%)"
      : "rgba(210, 198, 236, 0)"};

  opacity: 0;
  transform: translateX(150px);

  &.enter {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  }

  @media (max-width: 768px) {
    margin-top: 3.5rem;
    max-width: 100vw;
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 25vw;
  height: 15vw;
  margin-right: 3rem;
  background: radial-gradient(
    circle,
    rgba(64, 10, 65, 0.5) 0%,
    rgba(253, 231, 254, 0) 50%
  );
  object-fit: contain;

  @media (max-width: 768px) {
    margin-right: 0;
    width: 30vw;
    height: 100%;
    flex-direction: column;
  }
  @media (max-width: 480px) {
    width: 40vw;
  }
  @media (max-width: 320px) {
    width: 50vw;
  }
`;

export const TitlePost = styled.h3`
  color: #fff;
  font-family: "Matchadal", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 3rem;
  text-align: center;
  @media (min-width: 980px) {
    max-width: 50vw;
  }
`;

export const TextPost = styled.p`
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  max-width: 40vw;
  text-align: center;

  @media (max-width: 768px) {
    max-width: 90vw;
  }
`;

export const DateTimePost = styled.p`
  color: rgba(340, 340, 340, 0.48);
  font-size: 0.75rem;
  font-weight: 300;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const AdminWrapper = styled.div<IArticleProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  display: ${(props) =>
    props.admin
      ? "flex"
      : "none"};
  
  svg {
    margin: 1rem;
    font-size: 1.25rem;
    font-weight: 700;
    cursor: pointer;
  }
`;