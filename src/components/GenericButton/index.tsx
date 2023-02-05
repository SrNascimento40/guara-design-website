import React, { useEffect, useState } from "react";
import { Button } from "./style";

interface IGenericButtonProps {
  width?: string;
  fontSize?: string;
  padding?: string;
  textColor?: string;
  textHoverColor?: string;
  text?: string;
}

export default function GenericButton(props: IGenericButtonProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Button
      className={isLoaded ? "enter" : "loading"}
      width={props.width}
      textColor={props.textColor}
      textHoverColor={props.textHoverColor}
      fontSize={props.fontSize}
      padding={props.padding}
    >
      {props.text}
    </Button>
  );
}
