import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.9); /* Fundo com leve transparência */
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1; /* Para estar acima do background */
`;

export const Title = styled.h1`
    font-size: 3rem; 
    font-weight: bold; 
    color: #8fbd31; 
    text-align: center; 
    margin: 2rem 0; 
    text-transform: uppercase; 
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    
    span {
        display: inline-block;
        background: linear-gradient(90deg, rgba(143, 189, 49, 0.7), rgba(179, 230, 160, 0.7));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 3.5rem; /* Um pouco maior para "Pessoas" e "nossa história" */
    }
`;

export const Biografia = styled.div`
  img {
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1; /* Garante que a imagem seja quadrada */
    border-radius: 20px; /* Bordas mais suaves */
    border: 4px solid #8fbd31; /* Borda verde */
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3); /* Sombra mais forte */
    transition: transform 0.3s, box-shadow 0.3s;
    
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5); /* Aumenta a sombra no hover */
    }
  }
`;

export const Biografia1 = styled(Biografia)``; // Pode herdar as mesmas propriedades

export const Text = styled.p`
  font-size: 1.125rem; /* Aumentado para melhor legibilidade */
  color: #34495e; /* Cor de texto moderna */
  line-height: 1.6; /* Espaçamento entre linhas */
`;

export const Espacamento = styled.div`
  margin-bottom: 3rem; /* Mais espaço entre as biografias */
  padding: 1rem;
  border-radius: 12px; /* Bordas arredondadas */
  background-color: rgba(255, 255, 255, 0.8); /* Fundo com leve transparência */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra suave */
`;

export const HistoricosBackground = styled.div`
  background: 
    linear-gradient(135deg, rgba(143, 189, 49, 0.7), rgba(179, 230, 160, 0.7)), /* Gradiente */
    url('/pergaminho.jpg') no-repeat center center fixed; /* Imagem de fundo */
  background-size: cover; 
  position: fixed; 
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1; 
  opacity: 0.9; 
`;
