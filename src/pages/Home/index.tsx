import React, { useEffect } from "react";
import InitialContainer from "../../components/InitialContainer";
import { Container } from "./style";
import Footer from "../../components/Footer";
import ArticlePost from "../../components/ArticlePost";
import wolf from "../../assets/Images/guara.png";
import ProfileCard from "../../components/ProfileCard";

//página inicial
export default function Home() {
  useEffect(() => {
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "hidden";
    };
  }, []);

  return (
    <Container>
      <InitialContainer />
      <ProfileCard />
      <ArticlePost
        image="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1440367630i/867247.jpg"
        title="Uma análise do livro Gorin No Sho"
        text="O livro Gorin No Sho trás uma profunda análise sobre a arte e o estilo de Miyamoto Musashi, que foi um notável..."
        datetime="12 jun 2016"
        blogPage={false}
      />
      <ArticlePost
        image="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1535419394i/4069.jpg"
        title="Aprendizados sobre o Lorem Ipsum"
        text="Psychiatrist Viktor Frankl's memoir has riveted generations of readers with its descriptions of life in Nazi death camps and its lessons for spiritual survival."
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
        text="No matter your goals, Atomic Habits offers a proven framework for improving—every day."
        datetime="25 dec 2014"
        blogPage={false}
      />
      <Footer />
    </Container>
  );
}
