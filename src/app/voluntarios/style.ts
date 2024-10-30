'use client';

import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px;
`;

export const ImageContainer = styled.div`
    flex: 1;
    height: 300px;
`;

export const Image = styled.img`
padding-top: 10px;
    max-width: 100%;
    height: auto;
    object-fit: cover;
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
    font-size: 2rem;
    margin-bottom: 10px;
    color: #8fbd31;
`;
export const Title2 = styled.h3`
    font-size: 1.5rem; /* Ajuste o tamanho da fonte conforme desejado */
    margin: 15px 0; /* Margem para espaçamento vertical */
`;

export const Description = styled.p`
  font-size: 1.2rem; /* Aumenta o tamanho da fonte */
    line-height: 1.5; /* Aumenta o espaçamento entre as linhas */
    margin-bottom: 20px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    background-color: #008000;
    color: white;
    border: none;
    border-radius: 5px;
    align-self: center;
    transition: opacity 0.3s; /* Adiciona uma transição suave */

&:hover {
    opacity: 0.5; /* Altera a opacidade ao passar o mouse */
}
`;
