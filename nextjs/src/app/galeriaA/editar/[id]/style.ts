import styled from 'styled-components';
export const Title = styled.h1`
  text-align: center;
  color: #8fbd31;  // Cor do título
  margin-bottom: 40px;
  font-size: 2.5rem;
  font-weight: bold;
`;

// Container para o formulário, agora centralizado
export const FormContainer = styled.div`
  max-width: 800px;
  margin: 50px auto;  // Centraliza o formulário na tela com espaçamento superior
  padding: 20px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.1);
`;

// Espacamento entre os campos
export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

// Estilo para os campos de texto
export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #8fbd31;
    outline: none;
  }
`;

// Estilo para os campos de texto maiores (textarea)
export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #8fbd31;
    outline: none;
  }
`;

// Estilo para o botão de envio
export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 1.1rem;
  color: white;
  background-color: #8fbd31;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #7aa72a;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
`;

