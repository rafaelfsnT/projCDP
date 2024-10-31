'use client';
import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 600px; 
  margin: 40px auto;
  padding: 20px; 
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px; 
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); 
`;

export const FormField = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block; 
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Input = styled.input`
width: 100%; 
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px; 
`;

export const Select = styled.select`
  width: 100%; 
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px; 
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px; 
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; 
  margin-top: 20px; 
`;

export const SubmitButton = styled.button`
  padding: 15px 100px;
  font-size: 16px; 
  background-color: #008000;
  color: white; 
  border: none; 
  border-radius: 5px;
  cursor: pointer; 
  transition: background-color 0.3s; 

  &:hover {
    background-color: #005700; 
  }
`;
