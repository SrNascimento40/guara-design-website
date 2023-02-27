import React, { useEffect, useState } from "react";
import WriteContainer from "../../components/WriteContainer";
import { Container } from "./style";

//página de edição de posts
export default function CreatePost() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "auto";
    setIsLoaded(true);
    return () => {
      document.body.style.overflow = "hidden";
    };
  }, []);

  return (
    <Container>
      <WriteContainer />
    </Container>
  );
}
