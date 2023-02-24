import React, { useEffect } from "react";
import { Container, Date, Image, PostContainer, Text, Title } from "./style";
import imagem from "../../assets/Images/postExemplo.png";

interface IPostContainer {
  id: number;
  title: string;
  text: string;
  image: {
    imagem: string;
  };
  datetime: string;
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
      title: "A incontornável questão da preferência temporal",
      text: `Em 1912, certo economista escreveu, 
      
      "O princípio da moeda forte possui dois aspectos.  Ele é afirmativo ao aprovar a escolha feita pelo mercado de um meio de troca utilizado frequentemente e comumente.  Ele é negativo ao obstruir ao obstruir a propensão do governo em interferir no sistema monetário".
      
      E acrescentou: "É impossível entendermos o significado da ideia de se ter um sistema monetário sólido sem antes compreendermos que tal sistema foi concebido como um instrumento para se proteger as liberdades civis contra as usurpações despóticas perpetradas pelos governos.  Em termos ideológicos, uma moeda sólida pertence à mesma classe das constituições políticas e das declarações de direitos."
      
      Os regimes monetários de hoje não possuem qualquer semelhança com o princípio misesiano da moeda forte.  A quantidade e a qualidade da moeda há muito deixaram de ser um fenômeno determinado pelo livre mercado; hoje, ambas são determinadas pelos bancos centrais controlados pelos governos.
      
      Para evitar que os governos fizessem mau uso de seu poder coercivo nas questões monetárias, dois "arranjos institucionais" foram criados.
      
      Primeiro, os bancos centrais se tornaram politicamente independentes para impedir que os políticos caíssem na tentação de fazer aquela inevitável permuta eleitoral: colher os benefícios resultantes de um crescimento econômico artificial de curto prazo induzido pela inflação monetária e, em troca, gerar os inevitáveis efeitos prejudiciais de médio e longo prazo resultantes dessa depreciação da moeda.`,
      image: { imagem },
      datetime: "12 jun 2016",
    },
  ];

  return (
    <Container>
      {postStandard.map((post) => {
        return (
          <PostContainer key={post.id}>
            <Title>{post.title}</Title>
            <Image src={imagem} />
            <Date>{post.datetime}</Date>
            <Text>{post.text}</Text>
          </PostContainer>
        );
      })}
    </Container>
  );
}
