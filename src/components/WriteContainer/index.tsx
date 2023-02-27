import React, { useEffect, useState } from "react";
import {
  CategoryLabel,
  CategorySelect,
  CategoriesWrapper,
  PostButton,
  Write,
  WriteWrapper,
  CategoryWrapper,
} from "./style";
import { Container, Description, ImgUpload, Title, Wrapper } from "./style";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function WriteContainer() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleTitle = (title: any) => {
    setTitle(title);
    console.log(Title + "\n");
    console.log(title);
  };

  return (
    <Container className={isLoaded ? "enter" : "loading"}>
      <Title>Criar Post</Title>
      <Wrapper>
        <Description>Título</Description>
        <Write onChange={(a) => handleTitle(a)}></Write>
        <Description>Categoria</Description>

        <CategoriesWrapper>
          <CategoryWrapper>
            <CategorySelect type="radio" name="category" value="EE" id="EE" />
            <CategoryLabel htmlFor="EE">EE</CategoryLabel>
          </CategoryWrapper>

          <CategoryWrapper>
            <CategorySelect
              type="radio"
              name="category"
              value="Filosofia"
              id="Filosofia"
            />
            <CategoryLabel htmlFor="Filosofia">Filosofia</CategoryLabel>
          </CategoryWrapper>

          <CategoryWrapper>
            <CategorySelect
              type="radio"
              name="category"
              value="Artes"
              id="Artes"
            />
            <CategoryLabel htmlFor="Artes">Artes</CategoryLabel>
          </CategoryWrapper>

          <CategoryWrapper>
            <CategorySelect
              type="radio"
              name="category"
              value="Romance"
              id="Romance"
            />
            <CategoryLabel htmlFor="Romance">Romance</CategoryLabel>
          </CategoryWrapper>
        </CategoriesWrapper>
        <Description>Imagem para o banner</Description>
        <ImgUpload type="file" />
        <Description>Insira o texto</Description>
        <WriteWrapper>
          <ReactQuill
            className="editor"
            theme="snow"
            value={text}
            onChange={setText}
          />
        </WriteWrapper>
      </Wrapper>
      <PostButton>Publicar</PostButton>
    </Container>
  );
}
