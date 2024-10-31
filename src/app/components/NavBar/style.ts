import styled from 'styled-components';

export const CustomNavbar = styled.header`
  height: 100px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.253);
  background-color: #F8F8F8;
  color: #8fbd31;
`;

export const Logo = styled.div`
  img {
    max-width: 50%;
    height: auto;
  }
`;

export const SearchInput = styled.div`
  display: flex;
  align-items: center;

  input {
    border-radius: 20px 0 0 20px;
    border: 1px solid #ced4da;
    padding: 10px 15px;
    transition: border-color 0.3s ease;
    height: 38px; 
  }

  button {
    border-radius: 0 20px 20px 0;
    background-color: #8fbd31;
    border: 1px solid #ced4da;
    color: white;
    height: 38px; 
    display: flex;
    align-items: center; 
    justify-content: center; 
    padding: 0 10px; 

    &:hover {
      background-color: #7cae29;
    }
  }
`;

export const HighlightButton = styled.button`
  background-color: #8fbd31; /* Cor de fundo */
  color: white; /* Cor do texto */
  border: none; /* Sem borda */
  border-radius: 5px; /* Bordas arredondadas */
  padding: 0.5rem 1rem; /* Espaçamento */
  font-weight: bold; /* Negrito */
  cursor: pointer; /* Muda o cursor para mãozinha */
  text-decoration: none; /* Remove sublinhado */
  transition: background-color 0.3s, transform 0.3s; /* Animação ao passar o mouse */
  
  /* Ajuste para elevar o botão */
  margin-top: -4px; /* Margem negativa para levantar o botão */
  
  &:hover {
    background-color: #7aa72a; /* Cor ao passar o mouse */
    transform: scale(1.05); /* Leve aumento de tamanho ao passar o mouse */
  }
`;




