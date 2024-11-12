"use client";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column; /* Coluna padrão */
  align-items: center;
  padding: 20px;
  margin-top: 70px;
  width: 100%;
  
  @media (min-width: 768px) {
    flex-direction: row; /* Para telas maiores, exibe em linha */
    justify-content: space-between;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 0;
    max-width: 700px;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  text-align: center;

  h1 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    text-align: left;
    width: 60%;
    padding-left: 20px;

    h1 {
      font-size: 32px;
    }

    p {
      font-size: 18px;
    }
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background-color: #45a049;
  }
`;
