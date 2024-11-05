'use client';
import styled from "styled-components";

export const FormContainer = styled.div`
background-color: rgba(255, 255, 255, 0.8); /* Fundo branco com transparência */
border-radius: 10px;
padding: 40px;
max-width: 600px;
margin: 50px auto; /* Centraliza o contêiner */
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
position: relative;
z-index: 2; /* Garante que o formulário fique acima da imagem de fundo */
`;

export const FormField = styled.div`
margin-bottom: 20px;
`;

export const Label = styled.label`
font-size: 1.2rem;
color: #8fbd31; /* Cor dos títulos */
`;

export const Input = styled.input`
width: 100%;
padding: 15px;
border: 1px solid #ccc;
border-radius: 10px;
font-size: 1rem;
`;

export const ButtonContainer = styled.div`
display: flex;
justify-content: center;
`;

export const SubmitButton = styled.button`
background-color: #8fbd31;
color: white;
border: none;
padding: 12px 20px;
border-radius: 5px;
font-size: 1.1rem;
cursor: pointer;
transition: background-color 0.3s, transform 0.3s;

&:hover {
  background-color: #7fae2c;
  transform: scale(1.05);
}
`;
export const BackgroundContainer = styled.div`
  background-image: url('/background2.jpg'); /* Caminho para a imagem de fundo */
  background-size: cover; /* Faz com que a imagem cubra todo o contêiner */
  background-position: center;
  min-height: 100vh; /* Garante que a altura mínima seja 100% da altura da tela */
  display: flex;
  align-items: center; /* Centraliza verticalmente */
  justify-content: center; /* Centraliza horizontalmente */
`;
export const Select = styled.select`
  width: 100%;
  padding: 10px;
  color: #8fbd31;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;
