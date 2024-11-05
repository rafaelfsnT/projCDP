"use client";
import Link from "next/link";
import { NavBar } from "../components/NavBar";
import {
  Container,
  ImageContainer,
  ImageContainer2,
  Image,
  Image2,
  TextContainer,
  Title,
  Description,
  Description2,
  Button,
  Title2,
} from "./style";

export default function Voluntarios() {
  return (
    <>
      <NavBar />
      <Container>
        <ImageContainer>
          <Image src="/voluntario.jpg" alt="Voluntários" />
        </ImageContainer>
        <TextContainer>
          <Title>Seja um(a) Voluntário(a) !</Title>
          <Description>
            Na Casa da Paz, acreditamos que cada criança merece um futuro
            brilhante e cheio de oportunidades. Nossa missão é oferecer um
            espaço acolhedor e seguro, onde crianças possam brincar, aprender e
            crescer com dignidade. Além de ajudar a construir um futuro melhor
            para nossas crianças, você terá a oportunidade de desenvolver novas
            habilidades, fazer novas amizades e vivenciar momentos
            transformadores que ficarão para sempre em sua memória.
            <br /> Junte-se a nós! Se você tem paixão por ajudar os outros e
            deseja se envolver em um projeto significativo, venha ser um
            voluntário na Casa da Paz. Sua contribuição é essencial para
            transformar vidas e construir uma comunidade mais forte e unida.
          </Description>
          <Link href="/voluntarios/form" passHref>
            <Button>Quero ser um Voluntário</Button>
          </Link>
        </TextContainer>
      </Container>

      <Title2>Porque ser um Voluntário ?</Title2>
      <Description2>
        Ser voluntário na Casa da Paz é uma forma de fazer a diferença na vida
        de muitas pessoas e contribuir para uma comunidade mais solidária. Aqui
        estão algumas razões para se juntar a nós: Impacto Positivo: Transforme
        vidas oferecendo apoio a quem precisa. Crescimento Pessoal: Aprenda
        novas habilidades e ganhe confiança. Novas Conexões: Conheça pessoas que
        compartilham valores semelhantes e forme amizades duradouras. Promoção
        da Empatia: Entenda realidades diferentes e cultive a compaixão.
        Flexibilidade: Escolha como e quando deseja contribuir. Junte-se a nós e
        faça parte de uma missão que transforma vidas e fortalece nossa
        comunidade!
      </Description2>
      <ImageContainer2>
        <Image2 src="/image2.jpg"></Image2>
      </ImageContainer2>
    </>
  );
}
