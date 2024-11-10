"use client";
import { NavBar } from "@/app/components/NavBar";
import { useState, useEffect } from "react";
import axios from 'axios';
import {
  FormContainer,
  FormField,
  Label,
  Input,
  Select,
  SubmitButton,
  ButtonContainer,
  BackgroundContainer,
} from "./style";

export default function Form() {
  const getCsrfToken = async () => {
    await axios.get("http://localhost:8000/sanctum/csrf-cookie", { withCredentials: true });
  };
  
  const [status, setStatus] = useState<string>("");
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [voluntariado, setVoluntariado] = useState("");
  const [formData, setFormData] = useState<any>(null); // Estado para armazenar os dados do formulário
  const [submitted, setSubmitted] = useState(false); // Estado para indicar se o formulário foi enviado
  useEffect(() => {
    if (submitted && formData) {
      const submitForm = async () => {
        try {

          await getCsrfToken();
          const response = await axios.post("http://localhost:8000/form", formData, {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            withCredentials: true, // Importante para que o token CSRF seja enviado
          });

          // Exibir mensagem de sucesso
          setStatus("Formulário enviado com sucesso!");

          // Limpar os campos após envio
          setNome("");
          setEndereco("");
          setCidade("");
          setEmail("");
          setTelefone("");
          setVoluntariado("");
          setFormData(null);
        } catch (error) {
          // Exibir mensagem de erro caso ocorra algum problema
          setStatus("Erro ao enviar formulário");
          console.error(error);
        } finally {
          setSubmitted(false); // Reseta o estado após o envio
        }
      };

      submitForm();
    }
  }, [submitted, formData]); // O useEffect será chamado quando o estado `submitted` for alterado

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Preparando os dados do formulário
    const data = {
      nome,
      endereco,
      cidade,
      email,
      telefone,
      voluntariado,
    };

    // Atualizando o estado com os dados do formulário e marcando que o formulário foi enviado
    setFormData(data);
    setSubmitted(true);
  };
  return (
    <>
      <NavBar />
      <BackgroundContainer>
        <FormContainer>
          <form onSubmit={handleSubmit}>
            <FormField>
              <Label htmlFor="nome">Nome</Label>
              <Input
                type="text"
                id="nome"
                name="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </FormField>

            <FormField>
              <Label htmlFor="endereco">Endereço</Label>
              <Input
                type="text"
                id="endereco"
                name="endereco"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                required
              />
            </FormField>

            <FormField>
              <Label htmlFor="cidade">Cidade</Label>
              <Input
                type="text"
                id="cidade"
                name="cidade"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                required
              />
            </FormField>

            <FormField>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormField>

            <FormField>
              <Label htmlFor="telefone">Telefone</Label>
              <Input
                type="tel"
                id="telefone"
                name="telefone"
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                required
              />
            </FormField>

            <FormField>
              <Label htmlFor="voluntariado">
                Como você gostaria de ser voluntário?
              </Label>
              <Select
                id="voluntariado"
                name="voluntariado"
                value={voluntariado}
                onChange={(e) => setVoluntariado(e.target.value)}
                required
              >
                <option value="">Selecione uma opção</option>
                <option value="tutoria">Tutoria</option>
                <option value="eventos">Organização de Eventos</option>
                <option value="assistencia">Assistência a Crianças</option>
                <option value="coleta">Coleta de Alimentos</option>
                <option value="outro">Outro</option>
              </Select>
            </FormField>

            <ButtonContainer>
              <SubmitButton type="submit">Enviar</SubmitButton>
            </ButtonContainer>
          </form>
          {status && <p>{status}</p>}
        </FormContainer>
      </BackgroundContainer>
    </>
  );
}
