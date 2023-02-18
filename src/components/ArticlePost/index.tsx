import React from "react";
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
}

export default function ArticlePost(props: IArticlePostProps) {
  return (
    <Container blogPage={props.blogPage}>
      <Link to={"/post"}>
        <Image src={props.image} />
      </Link>
      <TextWrapper>
        <DateTimePost>{props.datetime}</DateTimePost>
        <TitlePost>{props.title}</TitlePost>
        <TextPost>{props.text}</TextPost>
      </TextWrapper>
    </Container>
  );
}
