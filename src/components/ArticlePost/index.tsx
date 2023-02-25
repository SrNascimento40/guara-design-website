import React, { useEffect, useState } from "react";
import {
  Container,
  Image,
  TitlePost,
  TextPost,
  TextWrapper,
  DateTimePost,
} from "./style";
import { Link } from "react-router-dom";

interface IArticlePostProps {
  image: string;
  title: string;
  text: string;
  datetime: string;
  blogPage: boolean;
  id: number;
}

export default function ArticlePost(props: IArticlePostProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    <Container
      blogPage={props.blogPage}
      className={isLoaded ? "enter" : "loading"}
    >
      <Link to={`/post/${props.id}`}>
        <Image src={props.image} />
      </Link>
      <TextWrapper>
        <DateTimePost>{props.datetime}</DateTimePost>
        <Link to={`/post/${props.id}`}>
          <TitlePost>{props.title}</TitlePost>
        </Link>
        <TextPost>{props.text}</TextPost>
      </TextWrapper>
    </Container>
  );
}
