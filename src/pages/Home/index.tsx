import React from "react";
import InitialContainer from "../../components/InitialContainer";
import { Container } from "./style";
import Footer from "../../components/Footer";
import ArticlePost from "../../components/ArticlePost";
import wolf from "../../assets/Images/guara.png";

export default function Home() {
  return (
    <Container>
      <InitialContainer />
      <ArticlePost
        image={wolf}
        title="Blablabla hehehe"
        text="blablabla hehehe lorem ipsum e tals"
        datetime="12 jun 2016"
      />
      <ArticlePost
        image={wolf}
        title="Blablabla hehehe"
        text="blablabla hehehe lorem ipsum e tals. blablabla hehehe lorem ipsum e tals. blablabla hehehe lorem ipsum e tals. blablabla hehehe lorem ipsum e tals"
        datetime="12 jun 2016"
      />
      <ArticlePost
        image={wolf}
        title="Blablabla hehehe"
        text="blablabla hehehe lorem ipsum e tals"
        datetime="12 jun 2016"
      />
      <ArticlePost
        image={wolf}
        title="Blablabla hehehe"
        text="blablabla hehehe lorem ipsum e tals"
        datetime="12 jun 2016"
      />
      <Footer />
    </Container>
  );
}
