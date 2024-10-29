import styled from 'styled-components';

export const Title = styled.h1`
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #fff;
    font-family: 'Roboto', sans-serif;
`;

export const Container = styled.div`
    background: url('/background.jpg') no-repeat center center fixed;
    background-size: cover;
    padding: 50px;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FormWrapper = styled.div`
    background: rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FormGroup = styled.div`
    margin-bottom: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Label = styled.label`
    color: #555;
    margin-bottom: 5px;
    font-weight: 600;
    font-family: 'Roboto', sans-serif;
`;

export const Input = styled.input`
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    transition: border-color 0.3s;

    &:focus {
        border-color: #28a745;
        outline: none;
    }
`;

export const ValueOptions = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    width: 100%; /* Garantindo que ocupe toda a largura disponível */
`;

export const ValueButton = styled.button<{ selected?: boolean; small?: boolean }>`
    background-color: ${({ selected }) => (selected ? '#28a745' : '#f8f9fa')}; 
    color: ${({ selected }) => (selected ? 'white' : '#333')};
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: ${({ small }) => (small ? '5px 10px' : '10px 15px')}; /* Tamanho do botão */
    cursor: pointer;
    font-size: 1.25rem;
    margin: 5px;
    flex: 1;
    transition: background-color 0.3s, box-shadow 0.3s;
    font-family: 'Roboto', sans-serif;

    display: flex; /* Flex para centralizar o conteúdo do botão */
    align-items: center; /* Alinha verticalmente */
    justify-content: center; /* Alinha horizontalmente */
    
    &:hover {
        background-color: #28a745;
        color: white;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    }
`;

export const Button = styled.button`
    background-color: #28a745;
    color: white;
    padding: 15px 20px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.5rem; /* Aumentando o tamanho do texto */
    transition: background-color 0.3s, transform 0.3s;
    font-family: 'Roboto', sans-serif;
    width: 100%; /* Para garantir que o botão ocupe toda a largura disponível */
    max-width: 500px; /* Largura máxima do botão */

    &:hover {
        background-color: #218838;
    }

    &:active {
        transform: scale(0.98);
    }
`;

export const QRCode = styled.div`
    margin-top: 20px;
    text-align: center;
`;

export const Espacamento = styled.div`
    padding-bottom: 20px;
`;
