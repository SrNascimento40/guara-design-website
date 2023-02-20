import React, { useEffect, useState } from "react";
import AdminCard from "../../components/AdminCard";
import { Container, Title, CardWrapper } from "./style";

//página comas postagens
export default function Admin() {
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
      <Title className={isLoaded ? "enter" : "loading"}>Página de administração</Title>
      <CardWrapper>
      <AdminCard link="/createpost" text="Criar post" />
      <AdminCard link="/edit" text="Editar post" />
      </CardWrapper>
    </Container>
  );
}
