import React from "react";
import {
  Container,
  Image,
  TitlePost,
  TextPost,
  TextWrapper,
  DateTimePost,
} from "./style";

interface IArticlePostProps {
  image: string;
  title: string;
  text: string;
  datetime: string;
}

export default function ArticlePost(props: IArticlePostProps) {
  return (
    <Container>
      <Image src={props.image} />
      <TextWrapper>
        <DateTimePost>{props.datetime}</DateTimePost>
        <TitlePost>{props.title}</TitlePost>
        <TextPost>{props.text}</TextPost>
      </TextWrapper>
    </Container>
  );
}
