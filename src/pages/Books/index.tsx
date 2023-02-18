import React, { useEffect, useState } from "react";
import { Container, Title } from "./style";
import ArticlePost from "../../components/ArticlePost";

//página comas postagens
export default function Books() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "hidden";
    };
  }, []);

  return (
    <Container>
      <Title className={isLoaded ? "enter" : "loading"}>Posts</Title>

      <ArticlePost
        image="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1440367630i/867247.jpg"
        title="Uma análise do livro Gorin No Sho"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quisquam at, expedita voluptatum provident..."
        datetime="12 jun 2016"
        blogPage={false}
      />
      <ArticlePost
        image="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1535419394i/4069.jpg"
        title="Aprendizados sobre o Lorem Ipsum"
        text="Psychiatrist Viktor Frankl's memoir has riveted generations of readers with its descriptions of life in Nazi death camps and its lessons for spiritual survival. Based on his own experience and the stories of his patients, Frankl argues..."
        datetime="12 may 2022"
        blogPage={false}
      />
      <ArticlePost
        image="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1662831157i/62352297.jpg"
        title="Awe: The New Science of Everyday Wonder and How It Can Transform Your Life"
        text="Awe is mysterious. How do we begin to quantify the goose bumps we feel when we see the Grand Canyon, or the utter amazement when we watch a child walk for the first time? How do you put..."
        datetime="17 fev 2023"
        blogPage={false}
      />
      <ArticlePost
        image="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1655988385i/40121378.jpg"
        title="Sobre Atomic Habits"
        text="No matter your goals, Atomic Habits offers a proven framework for improving—every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results."
        datetime="25 dec 2014"
        blogPage={false}
      />
    </Container>
  );
}
