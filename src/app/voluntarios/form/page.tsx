"use client";
import { NavBar } from "@/app/components/NavBar";
import Link from 'next/link';
import React from "react";
import {
  FormContainer,
  FormField,
  Label,
  Input,
  Select,
  Textarea,
  SubmitButton,
  ButtonContainer,
} from "./style";

export default function Form() {
  return (
    <>
      <NavBar />
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
            <Textarea id="voluntariado" name="voluntariado" required />
          </FormField>

          <ButtonContainer>
          <Link href="/" passHref>
            <SubmitButton type="submit">Enviar</SubmitButton>
          </Link>
          </ButtonContainer>
        </form>
      </FormContainer>
    </>
  );
}
