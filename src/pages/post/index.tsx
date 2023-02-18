import React, { useEffect } from "react";
import { Container, Image, PostContainer, Text, Title } from "./style";
import imagem from "../../assets/Images/emojis.png";

interface IPostContainer {
  id: number;
  title: string;
  text: string;
  image: {
    imagem: string;
  };
}

//página do post
export default function Post() {
  useEffect(() => {
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "hidden";
    };
  }, []);

  const postStandard = [
    {
      id: 1,
      title: "titulo padrão pra ocupar espaço",
      text: "lorem ipsum dolor sit amet, consectetur adipisicing elit. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet, consectetur adipisicing elit. lorem ipsum dolor sit amet.",
      image: { imagem },
    },
    {
      id: 2,
      title: "segundo titulo padrão",
      text: "lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quidem, asperiores voluptatibus deserunt tempora fugiat corporis nobis eligendi, impedit quam dicta vitae cum recusandae similique consequatur, eum soluta numquam perspiciatis!",
      image: { imagem },
    },
    {
      id: 3,
      title: "O Útimo titulo padrão",
      text: "lorem ipsum dolor sit amet, consectetur adipisicing elit. lorem ipsum dolor sit amet. lorem ipsum dolor sit amet, consectetur adipisicing elit. lorem ipsum dolor sit amet.",
      image: { imagem },
    },
  ];

  return (
    <Container>
      {postStandard.map((post) => {
        return (
          <PostContainer key={post.id}>
            <Title>{post.title}</Title>
            <Image src={imagem} />
            <Text>{post.text}</Text>
          </PostContainer>
        );
      })}
    </Container>
  );
}
