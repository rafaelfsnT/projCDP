'use client';
import { NavBar } from "./components/NavBar";
import Link from "next/link";
import Image from "next/image";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Container,
  ImageContainer,
  TextContainer,
  ButtonsContainer,
  Button
} from "./style";

export default function Home() {
  const router = useRouter();

    useEffect(() => {
        // Verificar se o token está no localStorage
        const token = localStorage.getItem('user_token');
        if (!token) {
            router.push('/login'); // Redireciona para login se não houver token
        }
    }, [router])
  return (
    <>
      <NavBar />

      <Container>
        <ImageContainer style={{ marginTop: "70px" }}>
          <Image
            src="/background_casadapaz.jpg" // Coloque o caminho correto da imagem que você deseja usar
            alt="Imagem de exemplo"
            width={400} // Largura da imagem
            height={400} // Altura da imagem
          />
        </ImageContainer>

        {/* Coluna do Texto à direita */}
        <TextContainer>
        <h1>Bem-vindo à Casa da Paz!</h1>
        <p>
          A Casa da Paz é uma associação dedicada a transformar a vida de crianças e adolescentes em situação de vulnerabilidade social. 
          Oferecemos um ambiente seguro e acolhedor, com atividades educativas, culturais e esportivas para o desenvolvimento saudável das crianças.
        </p>

        {/* Botões */}
        <ButtonsContainer>
          <Link href="/voluntarios" passHref>
            <Button>Quero ser Voluntário</Button>
          </Link>
          <Link href="/doacao" passHref>
            <Button>Fazer uma Doação</Button>
          </Link>
        </ButtonsContainer>
      </TextContainer>
    </Container>
    </>
  );
}
