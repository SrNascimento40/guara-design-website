import React, { useEffect } from "react";
import ArticlePost from "../../components/ArticlePost";
import { Container } from "./style";

const posts = [
  {
    id: 1,
    title: "Uma análise do livro Gorin No Sho",
    desc: "O livro Gorin No Sho trás uma profunda análise sobre a arte e o estilo de Miyamoto Musashi, que foi um notável...",
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1440367630i/867247.jpg",
    datetime: "12 jun 2016",
  },
  {
    id: 2,
    title: "Aprendizados sobre o Lorem Ipsum",
    desc: "Psychiatrist Viktor Frankl's memoir has riveted generations of readers with its descriptions of life in Nazi death camps and its lessons for spiritual survival.",
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1535419394i/4069.jpg",
    datetime: "17 fev 2023",
  },
  {
    id: 3,
    title:
      "Awe: The New Science of Everyday Wonder and How It Can Transform Your Life",
    desc: "Awe is mysterious. How do we begin to quantify the goose bumps we feel when we see the Grand Canyon, or the utter amazement when we watch a child walk for the first time? How do you put...",
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1662831157i/62352297.jpg",
    datetime: "25 dec 2014",
  },
  {
    id: 4,
    title: "Sobre Atomic Habits",
    desc: "No matter your goals, Atomic Habits offers a proven framework for improving—every day.",
    img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg",
    datetime: "12 may 2022",
  },
];

//página de edição de posts
export default function Edit() {


  useEffect(() => {
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "hidden";
    };
  }, []);

  return (
    <Container>
      {posts.map((post) => (
        <ArticlePost
          image={post.img}
          title={post.title}
          text={post.desc}
          datetime={post.datetime}
          blogPage={false}
          id={post.id}
          admin={true}
        />
      ))}
    </Container>
  );
}
