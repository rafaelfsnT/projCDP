"use client";
import { NavBar } from "../components/NavBar";
import {
  Container,
  ImageContainer,
  Image,
  TextContainer,
  Title,
  Description,
  Button,
} from "./style";

export default function Voluntarios() {
  
  return (
    <>
      <NavBar />
      <Container>
        <ImageContainer>
          <Image src="/image.jpg" alt="Voluntários" />
        </ImageContainer>
        <TextContainer>
          <Title>Seja um(a) Voluntário(a) !</Title>
          <Description>
    Na Casa da Paz, acreditamos que cada criança merece um futuro
    brilhante e cheio de oportunidades. Nossa missão é oferecer um
    espaço acolhedor e seguro, onde crianças possam brincar, aprender e
    crescer com dignidade.
    <br />
  Além de ajudar a construir um futuro melhor para nossas
    crianças, você terá a oportunidade de desenvolver novas habilidades,
    fazer novas amizades e vivenciar momentos transformadores que
    ficarão para sempre em sua memória. O trabalho em equipe e a
    solidariedade são fundamentais para o nosso ambiente, e juntos
    podemos criar um impacto real.
    <br />
    Junte-se a nós! Se você tem paixão
    por ajudar os outros e deseja se envolver em um projeto
    significativo, venha ser um voluntário na Casa da Paz. Sua
    contribuição é essencial para transformar vidas e construir uma
    comunidade mais forte e unida.
</Description>
<Button >Quero ser um Voluntário</Button>
        </TextContainer>
      </Container>
    </>
  );
}
