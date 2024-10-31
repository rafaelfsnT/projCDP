"use client";

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px;
`;

export const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  padding-top: 10px;
  width: 60%;
  height: auto;
  object-fit: cover;
`;

export const ImageContainer2 = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  height: 100vh; /* Altura total da viewport */
  overflow: hidden; /* Para evitar que a imagem transborde */
`;

export const Image2 = styled.img`
  max-width: 100%; /* Limita a largura da imagem ao tamanho do contêiner */
  max-height: 100%; /* Limita a altura da imagem ao tamanho do contêiner */
  object-fit: contain; /* Mantém a proporção da imagem */
`;

export const TextContainer = styled.div`
  flex: 1;
  padding: 30px;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 10px;
  color: #8fbd31;
`;
export const Title2 = styled.h3`
  font-size: 3rem;
  padding-top: 50px;
  text-align: center;
  color: #8fbd31;
`;

export const Description = styled.p`
  font-size: 1.3rem;
  line-height: 1.5;
  margin-bottom: 20px;
  text-align: justify;
`;
export const Description2 = styled.p`
  font-size: 1.3rem;
  line-height: 1.5;
  padding: 30px; 
  margin: 0; 
  text-align: justify;
`;

export const Button = styled.button`
  padding: 15px 50px;
  background-color: #8fbd31;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  align-self: center;
  transition: opacity 0.3s;
  font-weight: bold;
  transition: opacity 0.3s, transform 0.3s;

  &:hover {
    opacity: 0.7;
    transform: scale(1.05);
  }
`;
