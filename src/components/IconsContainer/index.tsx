import React, { useEffect, useState } from "react";
import { Container, Image } from "./style";
import fbicon from "../../assets/social-medias/facebook-icon.png";
import instagram from "../../assets/social-medias/instagram-icon.png";
import twitter from "../../assets/social-medias/twitter-icon.png";
import whatsapp from "../../assets/social-medias/whatsapp-icon.png";
import linkedin from "../../assets/social-medias/linkedin-icon.png";
import github from "../../assets/social-medias/github-icon.png";
import tiktok from "../../assets/social-medias/tiktok-icon.png";
import youtube from "../../assets/social-medias/youtube-icon.png";

export default function IconsContainer() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Container>
      <a href="https://www.facebook.com/guarawebdesign" target="_blank">
        <Image className={isLoaded ? "enter" : "loading"} src={fbicon} />
      </a>
      <a href="https://www.instagram.com/guarawebdesign" target="_blank">
        <Image className={isLoaded ? "enter" : "loading"} src={instagram} />
      </a>
      <a href="https://www.twitter.com/guarawebdesign" target="_blank">
        <Image className={isLoaded ? "enter" : "loading"} src={twitter} />
      </a>
      <a href="https://www.whatsapp.com/guarawebdesign" target="_blank">
        <Image className={isLoaded ? "enter" : "loading"} src={whatsapp} />
      </a>
      <a href="https://www.linkedin.com/guarawebdesign" target="_blank">
        <Image className={isLoaded ? "enter" : "loading"} src={linkedin} />
      </a>
      <a href="https://www.github.com/guarawebdesign" target="_blank">
        <Image className={isLoaded ? "enter" : "loading"} src={github} />
      </a>
      <a href="https://www.tiktok.com/guarawebdesign" target="_blank">
        <Image className={isLoaded ? "enter" : "loading"} src={tiktok} />
      </a>
      <a href="https://www.youtube.com/guarawebdesign" target="_blank">
        <Image className={isLoaded ? "enter" : "loading"} src={youtube} />
      </a>
    </Container>
  );
}
