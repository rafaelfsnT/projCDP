import styled from 'styled-components';

export const Title = styled.h1`
    margin: 40px 0; // Espaçamento acima e abaixo do título
    text-align: center; // Centraliza o texto
    font-size: 3rem; // Tamanho da fonte do título
    color: #8fbd31; // Cor do título
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); // Sombra para destaque
    font-family: 'Arial', sans-serif; // Tipo de fonte
    letter-spacing: 2px; // Espaçamento entre letras
`;

export const GaleriaItem = styled.div`
    margin: 20px auto; // Centralizar os cards
    padding: 15px; // Padding para conforto
    background-color: #fff; // Fundo branco para destaque
    border-radius: 8px; // Bordas arredondadas
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); // Sombra suave
    transition: transform 0.3s;
    width: 65%; // Ajustando a largura dos cards para 65%
    
    &:hover {
        transform: translateY(-3px); // Efeito de elevação ao passar o mouse
    }
`;

export const Image = styled.img`
    width: 100%; // Ajusta a largura para 100% do card
    height: auto;
    border-radius: 8px; // Bordas arredondadas
    margin-bottom: 10px; // Espaçamento abaixo da imagem
`;

export const Text = styled.p`
    margin: 10px 0;
    font-size: 1.2rem; // Tamanho da fonte do texto
    color: #333; // Cor do texto
`;

export const Espacamento = styled.div`
    margin-bottom: 40px; // Espaçamento entre os itens da galeria
`;

// Estilizando o fundo da página
export const Background = styled.div`
    background: linear-gradient(135deg, #4caf50, #81c784); // Degradê de verde
    min-height: 100vh; // Para cobrir toda a altura da tela
    padding: 20px; // Padding para dar espaço
`;
