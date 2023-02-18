import React, { useEffect, useState } from "react";
import { Container, PartnerWrapper, Title } from "./style";
import PartnerCard from "../../components/PartnerCard";

//página com as parcerias
export default function Partnership() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "hidden";
    };
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Container>
      <Title>Parceiros:</Title>
      <PartnerWrapper>
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
      </PartnerWrapper>
    </Container>
  );
}
