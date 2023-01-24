import React from 'react'
import Header from '../../components/Header';
import InitialContainer from '../../components/InitialContainer';
import { Container } from './style';

export default function Home() {
  return (
    <Container>
      <Header />
      <InitialContainer />
    </Container>
  )
}
