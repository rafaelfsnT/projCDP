"use client";
import { NavBar } from "@/app/components/NavBar";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import {
  FormContainer,
  FormField,
  Label,
  Input,
  Select,
  SubmitButton,
  ButtonContainer,
  BackgroundContainer
} from "./style";

export default function Form() {
  const router = useRouter();
  return (
    <>
      <NavBar />
    <BackgroundContainer>
      <FormContainer>
        <form>
          <FormField>
            <Label htmlFor="nome">Nome</Label>
            <Input type="text" id="nome" name="nome" required />
          </FormField>

          <FormField>
            <Label htmlFor="endereco">Endereço</Label>
            <Input type="text" id="endereco" name="endereco" required />
          </FormField>

          <FormField>
            <Label htmlFor="cidade">Cidade</Label>
            <Input type="text" id="cidade" name="cidade" required />
          </FormField>

          <FormField>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" name="email" required />
          </FormField>

          <FormField>
            <Label htmlFor="telefone">Telefone</Label>
            <Input type="tel" id="telefone" name="telefone" required />
          </FormField>

          <FormField>
          <Label htmlFor="voluntariado">
              Como você gostaria de ser voluntário?
            </Label>
            <Select id="voluntariado" name="voluntariado" required>
              <option value="">Selecione uma opção</option>
              <option value="tutoria">Tutoria</option>
              <option value="eventos">Organização de Eventos</option>
              <option value="assistencia">Assistência a Crianças</option>
              <option value="coleta">Coleta de Alimentos</option>
              <option value="outro">Outro</option>
            </Select>
          </FormField>

          <ButtonContainer>
            <SubmitButton
              type="button"
              onClick={() => {
                router.push("/");
              }}
            >
              Enviar
            </SubmitButton>
          </ButtonContainer>
        </form>
      </FormContainer>
    </BackgroundContainer>

    </>
  );
}
