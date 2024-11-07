"use client";

import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #f0f0f0; /* Fundo cinza claro */
`;

export const ImageContainer = styled.div`
  max-width: 500px;
  margin: 10px 0;
`;

export const ImageContainer2 = styled.div`
   display: flex; /* Habilita o flexbox */
  justify-content: center; /* Centraliza o conteúdo horizontalmente */
  margin: 20px 0; /* Adiciona margem acima e abaixo */

`;

export const Image = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const Image2 = styled.img`
   width: 100%; /* Define a largura da imagem como 100% do contêiner */
  max-width: 600px; /* Limita a largura máxima da imagem */
  height: auto; /* Mantém a proporção da imagem */
  border-radius: 10px; /* Adiciona bordas arredondadas, se desejado */
`;

export const TextContainer = styled.div`
  max-width: 800px;
  text-align: center;
  margin: 20px;
`;

export const Title = styled.h1`
  color: #8fbd31; /* Cor dos títulos */
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

export const Title2 = styled.h2`
text-align: center;
  color: #8fbd31; /* Outra cor para o segundo título */
  font-size: 2.5rem;
  margin: 40px 0 20px;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 20px;
`;

export const Description2 = styled(Description)`
   padding: 20px; /* Adiciona espaço nas bordas */
  text-align: justify; /* Justifica o texto para melhor legibilidade */
  font-size: 1.2rem; /* Ajusta o tamanho da fonte se necessário */
  color: #333; /* Ajuste a cor do texto conforme desejado */
`;

export const Button = styled.button`
  background-color: #8fbd31;
  color: white;
  border: none;
  padding: 16px 20px;
  border-radius: 15px;
  font-size: 1.4rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;
  margin-top: 20px; 
  &:hover {
    background-color: #7f9d25;
    transform: scale(1.05);
  }
`;
