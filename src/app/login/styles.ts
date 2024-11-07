'use client';
import styled from 'styled-components';

// Estilo para a área principal
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
 
`;

// Estilo para a borda
export const Border = styled.div`
  border: 2px solid #ccc;
  padding: 20px;
  width: 100%;
  max-width: 400px; 
  border-radius: 8px; 
  
`;

// Estilo para os campos de input
export const Input = styled.input`
  width: 100%;
  padding: 12px; 
  font-size: 1.1rem;
  margin-bottom: 10px; 
  border-radius: 4px; 
  border: 1px solid #ccc; 
  &:focus {
    border-color: #8fbd31;
    outline: none; 
  }
`;
export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #8fbd31; 
  color: white;
  font-size: 1.1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;


`;