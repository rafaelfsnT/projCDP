import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: 3rem auto;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.9); /* Fundo branco com leve transparência */
  border-radius: 12px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
  line-height: 1.6;
  font-family: 'Arial', sans-serif;
  position: relative; /* Para o fundo */
  z-index: 1; /* Para estar acima do background */
`;

export const Background = styled.div`
  background: 
    linear-gradient(135deg, rgba(143, 189, 49, 0.7), rgba(179, 230, 160, 0.7)), /* Gradiente */
    url('/foto1.jpg') no-repeat center center fixed; /* Substitua pelo caminho da sua imagem */
  background-size: cover; /* Cobre todo o fundo */
  position: fixed; /* Fixo em relação à janela */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1; /* Fica atrás do Container */
  opacity: 0.9; /* Leve transparência para melhor legibilidade */
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #8fbd31;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Section = styled.section`
  margin-bottom: 2rem;
  padding: 1rem;
  border-left: 4px solid #8fbd31;
  background-color: #f9f9f9;
  border-radius: 8px;
`;

export const Paragraph = styled.p`
  font-size: 1.125rem;
  line-height: 1.6;
  color: #333;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #eaeaea;
  }

  ul {
    list-style-type: disc;
    padding-left: 20px;
  }

  li {
    margin: 0.5rem 0;
  }
`;

export const Highlight = styled.span`
  font-weight: bold;
  color: #8fbd31;
`;

export const Button = styled.button`
  background-color: #8fbd31; /* Fundo verde */
  color: white; /* Texto branco */
  border: none; /* Sem borda */
  border-radius: 8px; /* Cantos arredondados */
  padding: 0.75rem 1.5rem; /* Espaçamento interno */
  cursor: pointer; /* Cursor de mão ao passar o mouse */
  font-size: 1rem; /* Tamanho da fonte */
  font-weight: bold; /* Negrito */
  transition: background-color 0.3s, transform 0.3s; /* Transições suaves */

  &:hover {
    background-color: #7ca326; /* Verde mais escuro ao passar o mouse */
    transform: scale(1.05); /* Efeito de zoom ao passar o mouse */
  }
`;
export const FloatingButton = styled.div`
  position: fixed;
  bottom: 20px; /* Distância do fundo */
  right: 20px; /* Distância da direita */
  z-index: 1000; /* Certifique-se de que fique acima de outros elementos */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CenteredButton = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  margin: 2rem 0; /* Margem para separar do conteúdo acima e abaixo */
`;