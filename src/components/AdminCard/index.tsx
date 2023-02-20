import React, { useEffect, useState } from "react";
import { Container, TitleCard } from "./style";
import { Link } from "react-router-dom";
import imagem from "../../assets/Images/guara.png";

interface IAdminCardProps {
  link: string,
  text: string
}

export default function AdminCard(props: IAdminCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <Link to={props.link}>
      <Container className={isLoaded ? "enter" : "loading"}>
        <TitleCard>{props.text}</TitleCard>
      </Container>
    </Link>
  );
}
