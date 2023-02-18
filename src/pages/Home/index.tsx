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
        image={wolf}
        title="Blablabla hehehe"
        text="blablabla hehehe lorem ipsum e tals"
        datetime="12 jun 2016"
        blogPage={false}
      />
      <ArticlePost
        image={wolf}
        title="Blablabla hehehe"
        text="blablabla hehehe lorem ipsum e tals. blablabla hehehe lorem ipsum e tals. blablabla hehehe lorem ipsum e tals. blablabla hehehe lorem ipsum e tals"
        datetime="12 jun 2016"
        blogPage={false}
      />
      <ArticlePost
        image={wolf}
        title="Blablabla hehehe"
        text="blablabla hehehe lorem ipsum e tals"
        datetime="12 jun 2016"
        blogPage={false}
      />
      <ArticlePost
        image={wolf}
        title="Blablabla hehehe"
        text="blablabla hehehe lorem ipsum e tals"
        datetime="12 jun 2016"
        blogPage={false}
      />
      <Footer />
    </Container>
  );
}
