import React from 'react'
import { Button } from './style';

interface IGenericButtonProps {
  width?: string;
  fontSize?: string;
  padding?: string;
}


export default function GenericButton(props : IGenericButtonProps) {
  return (
    <Button width={props.width} fontSize={props.fontSize} padding={props.padding}>
        Nos Contrate!
    </Button>
  )
}
