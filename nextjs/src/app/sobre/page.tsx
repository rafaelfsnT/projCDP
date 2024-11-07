'use client';
import React from 'react';
import Link from 'next/link'; // Importando o Link do Next.js
import { NavBar } from '../components/NavBar';
import { Container, Title, Paragraph, Section, Button, Highlight, Background, CenteredButton } from './style';

const Sobre = () => {
  return (
    <>
      <NavBar />
      <Background />
      <Container>
        <Title>Sobre a Casa da Paz</Title>
        <Paragraph>
          A <Highlight>Casa da Paz</Highlight> é mais do que uma instituição; somos um lar acolhedor para crianças em situação de vulnerabilidade. Desde nossa fundação em 2005, temos a missão de transformar vidas, proporcionando um ambiente seguro e amoroso, onde cada criança pode se sentir valorizada e ter a oportunidade de sonhar e se desenvolver plenamente.
        </Paragraph>

        <Paragraph>
          Nossos programas incluem aulas de reforço escolar, atividades artísticas, oficinas esportivas e atendimentos psicológicos, todos voltados para o desenvolvimento integral das crianças. Com o apoio de voluntários e doadores, impactamos a vida de mais de mil crianças, ajudando-as a superar desafios e a alcançar seus objetivos.
        </Paragraph>

        <Paragraph>
          Estamos comprometidos em oferecer um espaço onde cada criança se sinta amada e protegida. Acreditamos que, juntos, podemos criar um futuro brilhante para cada uma delas. Convidamos você a se juntar a nós nesta missão, seja através de doações, voluntariado ou compartilhando nossa história.
        </Paragraph>

        <Section>
          <Title>Missão</Title>
          <Paragraph>
            Nossa missão é <Highlight>promover o bem-estar</Highlight> e o desenvolvimento integral das crianças, oferecendo apoio emocional, educacional e recreativo.
          </Paragraph>
        </Section>

        <Section>
          <Title>Visão</Title>
          <Paragraph>
            Nossa visão é ser uma referência nacional na proteção e no desenvolvimento infantil, <Highlight>inspirando mudanças sociais</Highlight> que garantam oportunidades iguais para todas as crianças.
          </Paragraph>
        </Section>

        <Section>
          <Title>Valores</Title>
          <Paragraph>
            Somos guiados por princípios fundamentais: 
            <ul>
              <li>Empatia: entender e cuidar das necessidades das crianças.</li>
              <li>Respeito: valorizar cada criança como única e especial.</li>
              <li>Inclusão: garantir que todos tenham voz e oportunidades.</li>
              <li>Compromisso: trabalhar incessantemente por um futuro melhor.</li>
            </ul>
          </Paragraph>
        </Section>

        <Section>
          <Title>Atividades e Programas</Title>
          <Paragraph>
            Nossos programas incluem:
            <ul>
              <li>Aulas de reforço escolar.</li>
              <li>Atividades artísticas e culturais.</li>
              <li>Oficinas esportivas.</li>
              <li>Atendimentos psicológicos.</li>
            </ul>
          </Paragraph>
        </Section>

        <Section>
          <Title>Como Ajudar</Title>
          <Paragraph>
            Sua contribuição é fundamental! Existem várias maneiras de fazer a diferença:
            <ul>
              <li>Faça uma doação.</li>
              <li>Seja um voluntário.</li>
              <li>Compartilhe nossa missão.</li>
            </ul>
            <Paragraph>
              Junte-se a nós nessa jornada de transformação.
            </Paragraph>
          </Paragraph>
        </Section>

        {/* Botão "Doe Agora" centralizado */}
        <CenteredButton>
          <Link href="/doacao">
            <Button>Doe Agora</Button>
          </Link>
        </CenteredButton>
      </Container>
    </>
  );
};

export default Sobre;
