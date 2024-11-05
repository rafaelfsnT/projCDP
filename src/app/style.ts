"use client";
import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  flex-direction: row;
`;

// Container para a imagem
export const ImageContainer = styled.div`
  margin-left: 40px;
  display: flex;
  justify-content: center;
  width: 40%;
  align-items: center;
`;

// Para a imagem em si
export const Image = styled.img`
  width: 400px;
  height: 400px;
  max-width: 400px;
  object-fit: cover;
`;

// Container do texto (incluindo título e parágrafos)
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: -30px; /* Ajuste o título para cima */
  padding: 20px;
  text-align: left;
  width: 55%;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #2c3e50; /* Cor para o título */
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #34495e; /* Cor do texto */
    margin-bottom: 30px;
  }
`;

// Container para os botões
export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

// Estilo do botão
export const Button = styled.a`
  padding: 15px 25px;
  background-color: #27ae60;
  color: white;
  font-size: 1.2rem;
  border-radius: 5px;

  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #2ecc71;
  }
`;
