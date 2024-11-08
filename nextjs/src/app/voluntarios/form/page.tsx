"use client";
import { NavBar } from "@/app/components/NavBar";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
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
  const router = useRouter();
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cidade, setCidade] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [voluntariado, setVoluntariado] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (message === "Dados salvos com sucesso!") {
      router.push("/"); // Redireciona para a home ou outra página após sucesso
    }
  }, [message, router]);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário

    const formData = {
      nome,
      endereco,
      cidade,
      email,
      telefone,
      voluntariado,
    };

    try {
      const response = await fetch("http://localhost:8000/api/saveFormData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);  // Adicionando console.log para verificar o que a API retorna

      if (response.ok) {
        setMessage("Dados salvos com sucesso!");
      } else {
        setMessage("Erro ao salvar os dados.");
      }
    } catch (error) {
      setMessage("Erro ao enviar os dados.");
    }
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
        </FormContainer>
      </BackgroundContainer>
    </>
  );
}
